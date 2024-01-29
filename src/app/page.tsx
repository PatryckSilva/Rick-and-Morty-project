import { ListHomeFrame } from "@/components/Frames/ListHomeFrame";
import PresentationFrame from "@/components/Frames/PresentationFrame";

import { NextPage } from "next";

const Home: NextPage = async () => {
  return (
    <>
      <PresentationFrame />
      <ListHomeFrame />
    </>
  );
};
export default Home;
