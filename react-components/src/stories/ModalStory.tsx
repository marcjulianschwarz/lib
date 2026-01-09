import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function ModalStory() {
  const [isModal, setIsModal] = useState(false);
  const [actionMessage, setActionMessage] = useState("");

  const handleMainAction = () => {
    setIsModal(false);
    setActionMessage("Confirmed! Changes have been saved.");
    setTimeout(() => setActionMessage(""), 3000);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <Button onClick={() => setIsModal(true)} className="w-fit">
          Open Confirmation Modal
        </Button>
        {actionMessage && (
          <p className="text-green-600 font-medium">{actionMessage}</p>
        )}
      </div>
      {isModal && (
        <Modal
          title="Confirm Your Changes"
          onClose={() => {
            setIsModal(false);
          }}
          onMainAction={handleMainAction}
        >
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              You are about to update your profile settings. This will change
              how your information is displayed to other users.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                What will change:
              </h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li>Display name will be updated</li>
                <li>Email notifications will be enabled</li>
                <li>Profile visibility set to public</li>
              </ul>
            </div>
            <p className="text-sm text-slate-500">
              Press <kbd className="px-2 py-0.5 bg-slate-200 rounded">Enter</kbd> to
              confirm or{" "}
              <kbd className="px-2 py-0.5 bg-slate-200 rounded">Escape</kbd> to
              cancel.
            </p>
            <div className="flex gap-3 pt-2">
              <Button
                onClick={() => setIsModal(false)}
                className="w-fit bg-slate-200 text-slate-700 hover:bg-slate-300"
              >
                Cancel
              </Button>
              <Button onClick={handleMainAction} className="w-fit">
                Confirm Changes
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
