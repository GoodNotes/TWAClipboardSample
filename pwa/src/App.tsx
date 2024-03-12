import React, { useState } from "react";
import "./App.css";

function App() {
  const [permissionStatus, setPermissionStatus] = useState("");
  const [textColour, setTextColour] = useState("black");

  const requestClipboardPermission = async () => {
    try {
      console.log("Requesting clipboard read permission...");
      // This request clipboard read permission.
      // This promise never returns if site data has just been cleared.
      await navigator.clipboard.read();
      console.log("Clipboard read permission granted");
      setSuccessState();
    } catch (error) {
      console.error("Failed to request clipboard read permission: ", error);
      setFailureState(error);
    }
  };

  const setSuccessState = () => {
    setPermissionStatus("Permission granted");
    setTextColour("green");
  };

  const setFailureState = (error: unknown) => {
    setPermissionStatus("Permission denied:" + error);
    setTextColour("red");
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestClipboardPermission}>
          Request Clipboard Permission
        </button>
        <p style={{ color: textColour }}>{permissionStatus}</p>
      </header>
    </div>
  );
}

export default App;
