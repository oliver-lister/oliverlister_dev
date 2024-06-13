"use client";

import { useUser } from "@/libs/store/user";
import LoginButton from "./LoginButton";
import Profile from "./Profile/Profile";

const AuthState = () => {
  const user = useUser((state) => state.user);

  return <>{user ? <Profile user={user} /> : <LoginButton />}</>;
};

export default AuthState;
