import { Dialog } from "@headlessui/react";
import { SetStateAction, Dispatch, ReactElement } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>> | ((arg0: boolean) => void);
  children?: ReactElement;
  isLogin?: boolean;
}

const Modal = ({
  isOpen = false,
  setIsOpen,
  children,
  isLogin,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div
        className="fixed inset-0 z-[350] bg-[#0f0f0f] opacity-80 blur-3xl"
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
        <Dialog.Panel className="fixed z-[201] md:min-w-[500px]">
          <div className="relative mt-8 flex h-full w-[350px] flex-col justify-center rounded-[20px] border-[2px] border-basket_orange-400 bg-basket_blue-950 p-5 md:w-[100%] md:p-8 ">
            {!isLogin && (
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-2 top-2 text-3xl "
              >
                <AiOutlineClose color="#fff" />
              </button>
            )}
            {children}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
