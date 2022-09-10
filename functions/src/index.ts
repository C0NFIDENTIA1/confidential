import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const password = "hangster10";
const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;

exports.signin = functions.https.onRequest(async (req, res) => {
  const query = req.query.password;
  if (query !== password) {
    res.json({err: "invalid password"});
  }

  const writeResult = await db.collection("sessions").
      add({createdAt: FieldValue.serverTimestamp()});

  res.json({id: writeResult.id});
});

exports.getSession = functions.https.onRequest(async (req, res) => {
  const query = req.query.id;
  const docRef = db.collection("sessions").doc(String(query));
  const docSnap = await docRef.get();

  if (docSnap.exists) {
    res.send("ok");
  } else {
    res.json({err: "not found"});
  }
});
