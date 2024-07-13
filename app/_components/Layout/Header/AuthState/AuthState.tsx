"use client";

import { useUser } from "@/libs/store/user";
import LoginButton from "./LoginButton";
import Profile from "./Profile/Profile";

const AuthState = () => {
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  return (
    <>{user ? <Profile user={user} setUser={setUser} /> : <LoginButton />}</>
  );
};

export default AuthState;
