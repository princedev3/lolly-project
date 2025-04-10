"use client";
import { useEffect } from "react";
import { userStore } from "./user-session";
import { useSession } from "next-auth/react";

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const setSession = userStore((state) => state.setSession);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session) {
      return;
    }
    setSession(session);
  }, [session]);

  return <>{children}</>;
};

export default SessionProvider;
