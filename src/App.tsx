import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@radix-ui/themes";
import "./index.css"; // or './styles/tailwind.css'
import { useState } from "react";
import "./App.css";
import DialogDemo from "./dialog-demo/dialog-demo";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
        <Button
        size="4"
        className="mt-3 primary-button"
        style={{ backgroundColor: "#6abf16", width: 150 }}
        onClick={() => setShowDialog(true)}
      >
        <FontAwesomeIcon icon={faPlus} />
        Create
      </Button>
      {showDialog && (
        <DialogDemo
          title={`Mark Delivery Complete`}
          description={`Are you sure you want to mark this delivery as completed?`}
          confirmText="Yes"
          onConfirm={() => {
            console.log("onConfirm fired!");
          }}
          onCancel={() => {
            console.log("onCancel fired!");
          }}
        ></DialogDemo>
      )}
    </>
  );
}

export default App;
