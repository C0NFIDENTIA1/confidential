import React from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import CS_info from "../images/CS_info.png"

const CsInfo = () => (
  <Lightbox image={CS_info} title="Image Title" onClose="" />
)

export default CsInfo