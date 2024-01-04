import { rede } from "../utils/rede";
import { AuthProvider, AuthContext } from "./authContext";
import { myChainMain, myChainTest, wax, anchor } from "./config";

const myChain = rede === "mainet" ? myChainMain : myChainTest;

export { AuthProvider, AuthContext, myChain, wax, anchor };
