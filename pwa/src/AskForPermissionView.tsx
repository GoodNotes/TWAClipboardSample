import React from "react";

interface AskForPermissionViewProps {
  buttonText: string;
  labelText: string;
  onButtonClick: () => void;
  labelColour: string;
}

const AskForPermissionView: React.FC<AskForPermissionViewProps> = ({
  buttonText,
  labelText,
  onButtonClick,
  labelColour,
}) => {
  return (
    <div style={{ border: "1px solid white", padding: "10px", margin: "10px" }}>
      <button onClick={onButtonClick}>{buttonText}</button>
      <p style={{ color: labelColour }}>{labelText}</p>
    </div>
  );
};

export default AskForPermissionView;
