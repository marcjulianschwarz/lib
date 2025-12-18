import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function ModalStory() {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModal(true)} className="w-fit">
        Open Modal
      </Button>
      {isModal && (
        <Modal
          title="Test"
          onClose={() => {
            setIsModal(false);
          }}
        >
          <p>TEST</p>
        </Modal>
      )}
    </>
  );
}
