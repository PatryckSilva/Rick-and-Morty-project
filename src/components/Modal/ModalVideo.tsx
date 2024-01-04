import { Dialog } from "@headlessui/react";
import { SetStateAction, Dispatch, ReactElement } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsVolumeMuteFill, BsVolumeUpFill } from "react-icons/bs";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactElement;
}

const ModalVideo = ({ isOpen = false, setIsOpen, children }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div
        className="absolute inset-0 z-50 bg-[#0f0f0f] opacity-80 blur-3xl"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Dialog.Panel className="fixed z-[999] max-w-[350px] md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1200px] ">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ModalVideo;
