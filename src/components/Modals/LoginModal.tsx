import { Dispatch, SetStateAction } from "react";
import { BsInfoCircle } from "react-icons/bs";

import { useAuth } from "../../hooks/useAuth";
import {
  AnchorLoginButton,
  WaxLoginbutton,
  WombatLoginButton,
} from "../Buttons/LoginButtons";

interface LoginModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const LoginModal = ({ setIsOpen }: LoginModalProps) => {
  const { handleAnchorSignIn, handleWaxSignIn, handleWombatSignIn } = useAuth();
  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 text-white`}
    >
      <div className={`flex flex-col items-center gap-2 text-center`}>
        <span className={`text-2xl font-bold md:text-3xl`}>
          Welcome to <span className={`gold-text`}>WAX Template.</span>
        </span>
        <span className={`text-lg font-medium md:text-xl`}>
          Login to your WAX Blockchain account.
        </span>
      </div>
      <div className={`flex w-full flex-col items-center gap-5`}>
        <div className={`flex w-full items-center justify-center gap-6`}>
          <WaxLoginbutton click={handleWaxSignIn} setIsOpen={setIsOpen} />

          <div className={`tooltip`}>
            <span className="button !-right-[75px] !bottom-8">
              Click to learn more about this wallet!
            </span>
            <BsInfoCircle
              size={20}
              color="#8549b6"
              onClick={() => open("https://www.mycloudwallet.com/")}
              className={`cursor-pointer`}
            />
          </div>
        </div>
        <div className={`flex w-full items-center justify-center gap-6`}>
          <AnchorLoginButton click={handleAnchorSignIn} setIsOpen={setIsOpen} />
          <div className={`tooltip`}>
            <span className="button !-right-[75px] !bottom-8">
              Click to learn more about this wallet!
            </span>
            <BsInfoCircle
              size={20}
              color="#415dbb"
              onClick={() => open("https://www.greymass.com/anchor")}
              className={`cursor-pointer`}
            />
          </div>
        </div>
        <div className={`flex w-full items-center justify-center gap-6`}>
          <WombatLoginButton click={handleWombatSignIn} setIsOpen={setIsOpen} />
          <div className={`tooltip`}>
            <span className="button !-right-[75px] !bottom-8">
              Click to learn more about this wallet!
            </span>
            <BsInfoCircle
              size={20}
              color="#FF5025"
              onClick={() => open("https://www.greymass.com/anchor")}
              className={`cursor-pointer`}
            />
          </div>
        </div>
      </div>
      <div className={`flex flex-col items-center gap-1`}>
        <span>
          Don&apos;t have a wallet yet?{" "}
          <span
            className={`cursor-pointer underline hover:text-yellow-500`}
            onClick={() =>
              open("https://www.mycloudwallet.com/signin#create-account")
            }
          >
            Create one!
          </span>
        </span>
        <span>
          Need help?{" "}
          <span
            className={`cursor-pointer underline hover:text-yellow-500`}
            onClick={() => open("https://discord.gg/8K6q6YTCSQ")}
          >
            Join our Discord.
          </span>
        </span>
      </div>
    </div>
  );
};
