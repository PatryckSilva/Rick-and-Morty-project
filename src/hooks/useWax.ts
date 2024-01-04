import toast from "react-hot-toast";

import { mutateApiData } from "../services/swr";
import { config } from "../utils/constants";
import { rede } from "../utils/rede";
import { useApi } from "./useApi";
import { useAuth } from "./useAuth";
import { useEndpoint } from "./useEndPoint";

export interface IMutateOptions {
  key: any;
  currentData: any;
  fetcher: (url: string) => Promise<any>;
  property: string;
}
const useWax = () => {
  const { api } = useApi();
  const { activeUserData, ActionService } = useAuth();

  const { endpoint } = useEndpoint();

  const auth = [
    {
      actor: activeUserData?.accountName,
      permission: activeUserData?.requestPermission,
    },
  ];
  const { accountName, wallet } = activeUserData ? (activeUserData as any) : "";

  const contract =
    rede === "mainet"
      ? config.contractAccountMainet
      : config.contractAccountTestnet;

  const contractTransferTokenAction = (mutateOptions: IMutateOptions[]) => {
    const action = {
      account: "eosio.token",
      name: "transfer",
      authorization: auth,
      data: {
        from: accountName,
        to: contract,
        quantity: "0.00000001 WAX",
        memo: "deposit",
      },
    };
    const success = async () => {
      toast.success("Deposit success");

      for (const option of mutateOptions) {
        await mutateApiData(
          option.key,
          option.currentData,
          option.fetcher,
          option.property,
        );
      }
    };

    ActionService({
      type: activeUserData?.wallet as "wax" | "anchor",
      actions: [action],
      successFunction: success,
    });
  };
  return { contractTransferTokenAction };
};

export default useWax;
