import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

interface LoginModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  click: any;
}

export const AnchorLoginButton = ({ click, setIsOpen }: LoginModalProps) => {
  const router = useRouter();

  const routerPush = () => {
    // if (router.asPath === "/events") {
    //   return router.push("/events");
    // }
    // if (router.asPath === "/leaderboard") {
    //   return router.push("/leaderboard");
    // }
    // return router.push("/tournaments");
  };
  return (
    <div
      className={`flex h-[54px] w-[235px] cursor-pointer items-center`}
      onClick={() => {
        click();
        setIsOpen(false);
        routerPush();
      }}
    >
      <div className={`h-full rounded-l-xl bg-[#2E448A] p-2`}>
        <div className={`relative h-[38px] w-[37px]`}>
          <Image
            src={"/image/icons/anchorIcon.png"}
            objectFit={"contain"}
            layout={"fill"}
          />
        </div>
      </div>
      <div
        className={`flex h-full w-full items-center justify-center rounded-r-xl bg-[#3650A2]`}
      >
        <span className={`font-roboto font-semibold`}>Anchor</span>
      </div>
    </div>
  );
};

// export const WaxOldLoginButton = ({ click }: any) => {
//   return (
//     <div
//       className={`flex h-[54px] w-[235px] cursor-pointer items-center`}
//       onClick={() => click()}
//     >
//       <div className={`h-full rounded-l-xl bg-[#171717] p-2`}>
//         <div className={`relative h-[38px] w-[37px]`}>
//           <Image
//             src={"/images/icons/wcw.png"}
//             objectFit={"contain"}
//             layout={"fill"}
//           />
//         </div>
//       </div>
//       <div
//         className={`flex h-full w-full items-center justify-center rounded-r-xl bg-[#272727]`}
//       >
//         <span className={`font-roboto font-semibold`}>Cloud Wallet (old)</span>
//       </div>
//     </div>
//   );
// };

export const WaxLoginbutton = ({ click, setIsOpen }: LoginModalProps) => {
  const router = useRouter();

  const routerPush = () => {
    // if (router.asPath === "/events") {
    //   return router.push("/events");
    // }
    // if (router.asPath === "/leaderboard") {
    //   return router.push("/leaderboard");
    // }
    // return router.push("/tournaments");
  };
  return (
    <div
      className={`flex h-[54px] w-[235px] cursor-pointer items-center`}
      onClick={() => {
        click();
        setIsOpen(false);
        routerPush();
      }}
    >
      <div className={`h-full rounded-l-xl bg-[#67358f] px-3 py-3`}>
        <div className={`relative h-[31px] w-[30px]`}>
          <Image
            src={"/image/icons/cloudwallet.png"}
            objectFit={"contain"}
            layout={"fill"}
          />
        </div>
      </div>
      <div
        className={`flex h-full w-full items-center justify-center rounded-r-xl bg-[#8549b6]`}
      >
        <span className={`font-roboto font-semibold`}>Cloud Wallet</span>
      </div>
    </div>
  );
};

export const WombatLoginButton = ({ click, setIsOpen }: any) => {
  const router = useRouter();
  const routerPush = () => {
    // if (router.asPath === "/events") {
    //   return router.push("/events");
    // }
    // if (router.asPath === "/leaderboard") {
    //   return router.push("/leaderboard");
    // }
    // return router.push("/tournaments");
  };
  return (
    <div
      className={`flex h-[54px] w-[235px] cursor-pointer items-center`}
      onClick={() => {
        click();
        if (setIsOpen) setIsOpen(false);
        routerPush();
      }}
    >
      <div className={`h-full rounded-l-xl bg-[#83321b] p-2`}>
        <div className={`relative h-[38px] w-[37px]`}>
          <Image
            src={"/image/icons/wombat.png"}
            objectFit={"contain"}
            layout={"fill"}
          />
        </div>
      </div>
      <div
        className={`flex h-full w-full items-center justify-center rounded-r-xl bg-[#FF5025]`}
      >
        <span className={`font-roboto font-semibold text-white`}>
          Wombat Wallet
        </span>
      </div>
    </div>
  );
};
