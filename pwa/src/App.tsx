import React, { useCallback, useState } from "react";
import "./App.css";
import AskForPermissionView from "./AskForPermissionView";

type ViewState = {
  buttonText: string;
  labelText: string;
  labelColour: string;
};

function App() {
  const [microphoneViewState, setMicrophoneViewState] = useState<ViewState>({
    buttonText: "Request microphone permission",
    labelText: "Click the button!",
    labelColour: "white",
  });
  const [clipboardViewState, setClipboardViewState] = useState<ViewState>({
    buttonText: "Request clipboard permission",
    labelText: "Click the button!",
    labelColour: "white",
  });

  const requestMicrophonePermission = useCallback(async () => {
    const viewState = await requestPermission("microphone", async () => {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    });
    setMicrophoneViewState(viewState);
  }, []);

  const requestClipboardPermission = useCallback(async () => {
    const viewState = await requestPermission("clipboard", async () => {
      await navigator.clipboard.read();
    });
    setClipboardViewState(viewState);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <AskForPermissionView
          buttonText={microphoneViewState.buttonText}
          labelText={microphoneViewState.labelText}
          labelColour={microphoneViewState.labelColour}
          onButtonClick={requestMicrophonePermission}
        />
        <AskForPermissionView
          buttonText={clipboardViewState.buttonText}
          labelText={clipboardViewState.labelText}
          labelColour={clipboardViewState.labelColour}
          onButtonClick={requestClipboardPermission}
        />
      </header>
    </div>
  );
}

const requestPermission = async (
  permissionName: string,
  request: () => void
): Promise<ViewState> => {
  try {
    console.log(`Requesting ${permissionName} access...`);
    await request();
    console.log(`${permissionName} access granted`);
    return {
      buttonText: `Request ${permissionName} Permission`,
      labelText: "Permission granted",
      labelColour: "green",
    };
  } catch (error) {
    console.error(`Failed to request ${permissionName} access: `, error);
    return {
      buttonText: `Request ${permissionName} Permission`,
      labelText: `Permission denied: ${error}`,
      labelColour: "red",
    };
  }
};

export default App;
