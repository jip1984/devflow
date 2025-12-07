import NavBar from "@/components/ui/navigation/navbar";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

export default RootLayout;
