import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const password = "hangster10";
const func = functions.region("asia-northeast1");
const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;

exports.signin = func.https.onCall(async (req) => {
  const pass = req.password;
  if (pass !== password) {
    throw new functions.https.HttpsError("invalid-argument",
        "Password is invalid.");
  }

  const writeResult = await db.collection("sessions").
      add({createdAt: FieldValue.serverTimestamp()});

  return {id: writeResult.id};
});

exports.getSession = func.https.onCall(async (req) => {
  const id = req.id;
  if (!id) {
    throw new functions.https.HttpsError("invalid-argument",
        "Session id is empty.");
  }

  const docRef = db.collection("sessions").doc(id);
  const docSnap = await docRef.get();

  if (docSnap.exists) {
    return {status: "ok"};
  } else {
    throw new functions.https.HttpsError("not-found", "");
  }
});
