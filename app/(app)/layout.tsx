import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <div>{children}</div>
    </ClerkProvider>
  );
}

export default AppLayout;
