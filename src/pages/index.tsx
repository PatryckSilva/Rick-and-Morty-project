import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { LoginModal } from "../components";
import { useAuth } from "../hooks/useAuth";
import { Meta } from "../layout/Meta";

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (
      event: string,
      action: string,
      params: { [key: string]: any },
    ) => void;
  }
}

const Home = () => {
  const router = useRouter();
  const { activeUserData } = useAuth() as any;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Meta title="WAX TEMPLATE - HOME" description="" />
      <div className="flex h-[100vh] items-center justify-center">
        {activeUserData?.accountName ? (
          <h2>Wallet: {activeUserData?.accountName}</h2>
        ) : (
          <LoginModal setIsOpen={setIsModalOpen} />
        )}
      </div>
    </>
  );
};

export default Home;
