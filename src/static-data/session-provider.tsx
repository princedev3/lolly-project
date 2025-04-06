"use client";

import { useEffect } from "react";
import { Session } from "next-auth";
import { userStore } from "./user-session";

const SessionProvider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) => {
  const setSession = userStore((state) => state.setSession);

  useEffect(() => {
    if (!session) {
      return;
    }
    setSession(session);
  }, [session, setSession]);

  return <>{children}</>;
};

export default SessionProvider;
