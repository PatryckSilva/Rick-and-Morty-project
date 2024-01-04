import { useContext } from "react";

import { CurrentUserContext } from "../context/CurrentUserContext";

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);

  return context;
};
