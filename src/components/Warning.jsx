import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Warning() {
  const [show, setShow] = useState(true);
  const alertStyle = {
    width: "50%",
    height: "10vh",
    marginLeft: "25%",
    textAlign: "center",
  };
  if (show) {
    return (
      <Alert
        variant="danger"
        style={alertStyle}
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Input can't be empty!</Alert.Heading>
      </Alert>
    );
  }
  return null;
}
