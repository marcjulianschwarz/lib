import Button from "@/components/Button/Button";
import Modal, { type ModalActionButton } from "@/components/Modal/Modal";
import { useState } from "react";

export default function ModalStory() {
  const [isModal1, setIsModal1] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const [isModal3, setIsModal3] = useState(false);
  const [actionMessage, setActionMessage] = useState("");

  const handleMainAction = () => {
    setIsModal1(false);
    setActionMessage("Confirmed! Changes have been saved.");
    setTimeout(() => setActionMessage(""), 3000);
  };

  const handleSave = () => {
    setIsModal2(false);
    setActionMessage("Settings saved successfully!");
    setTimeout(() => setActionMessage(""), 3000);
  };

  const handleDelete = () => {
    setIsModal3(false);
    setActionMessage("Item deleted!");
    setTimeout(() => setActionMessage(""), 3000);
  };

  const modal2ActionButtons: ModalActionButton[] = [
    {
      label: "Cancel",
      onClick: () => setIsModal2(false),
      variant: "secondary",
    },
    {
      label: "Save Changes",
      onClick: handleSave,
      variant: "primary",
    },
  ];

  const modal3ActionButtons: ModalActionButton[] = [
    {
      label: "Cancel",
      onClick: () => setIsModal3(false),
      variant: "secondary",
    },
    {
      label: "Delete",
      onClick: handleDelete,
      variant: "danger",
    },
  ];

  const modal3OtherButton: ModalActionButton = {
    label: "Learn More",
    onClick: () => alert("Opening help documentation..."),
    variant: "secondary",
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            Legacy modal (with inline buttons)
          </h3>
          <Button onClick={() => setIsModal1(true)} className="w-fit">
            Open Legacy Modal
          </Button>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            Modal with action bar (Cancel + OK)
          </h3>
          <Button onClick={() => setIsModal2(true)} className="w-fit">
            Open Settings Modal
          </Button>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            Modal with action bar + other button (left side)
          </h3>
          <Button onClick={() => setIsModal3(true)} className="w-fit">
            Open Delete Modal
          </Button>
        </div>

        {actionMessage && (
          <p className="text-green-600 font-medium">{actionMessage}</p>
        )}
      </div>

      {isModal1 && (
        <Modal
          title="Confirm Your Changes"
          onClose={() => setIsModal1(false)}
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
              Press <kbd className="px-2 py-0.5 bg-slate-200 rounded">Enter</kbd>{" "}
              to confirm or{" "}
              <kbd className="px-2 py-0.5 bg-slate-200 rounded">Escape</kbd> to
              cancel.
            </p>
            <div className="flex gap-3 pt-2">
              <Button
                onClick={() => setIsModal1(false)}
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

      {isModal2 && (
        <Modal
          title="Edit Settings"
          onClose={() => setIsModal2(false)}
          onMainAction={handleSave}
          actionButtons={modal2ActionButtons}
        >
          <div className="space-y-4">
            <p className="text-slate-700">
              Configure your application settings below.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium">Email Notifications</span>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium">Dark Mode</span>
                <input type="checkbox" className="rounded" />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium">Auto-save</span>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Press <kbd className="px-2 py-0.5 bg-slate-200 rounded">Enter</kbd>{" "}
              to save or{" "}
              <kbd className="px-2 py-0.5 bg-slate-200 rounded">Escape</kbd> to
              cancel.
            </p>
          </div>
        </Modal>
      )}

      {isModal3 && (
        <Modal
          title="Delete Item"
          onClose={() => setIsModal3(false)}
          actionButtons={modal3ActionButtons}
          otherButton={modal3OtherButton}
        >
          <div className="space-y-4">
            <p className="text-slate-700">
              Are you sure you want to delete this item? This action cannot be
              undone.
            </p>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Warning</h3>
              <p className="text-sm text-red-700">
                Deleting this item will permanently remove it from your account
                and all associated data will be lost.
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
