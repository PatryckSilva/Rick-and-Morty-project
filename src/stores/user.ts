import { create } from "zustand";

type UserType = {
  name: string;
  email: string;
};

const useUserStore = create(set => ({
  users: [],
  addUser: (user: UserType) => {
    set(state => ({ users: [...state.users, user] }));
  },
  removeAllUsers: (userToRemove: UserType) => {
    set(state => ({
      users: state.users.filter(user => user.name !== userToRemove.name),
    }));
  },
}));

export default useUserStore;
