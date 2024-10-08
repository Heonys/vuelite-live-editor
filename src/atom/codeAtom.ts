import { atom, selector } from "recoil";

export type User = {
  username: string;
  avatar_url: string;
};

export const userAtom = atom<User[]>({
  key: "userAtom",
  default: [],
});

export const userAddSelector = selector({
  key: "AddItemAtom",
  get: ({ get }) => get(userAtom),
  set: ({ get, set }, newUsers) => {
    const users = get(userAtom);
    const newUser = (newUsers as User[])[users.length - 1];
    const userExists = users.some((user) => user.username === newUser?.username);

    if (userExists) {
      set(userAtom, users.slice(-5));
    } else {
      set(userAtom, (newUsers as User[]).slice(-5));
    }
  },
});
