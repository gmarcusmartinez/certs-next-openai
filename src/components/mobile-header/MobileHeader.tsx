// import { MobileSidebar } from "@/components/mobile-sidebar";

import { MobileSidebar } from "../mobile-sidebar/MobileSidebar";

export const MobileHeader = () => {
  return (
    <nav className="fixed top-0 z-50 flex h-[64px] w-full items-center border-b bg-green-500 px-6 lg:hidden">
      <MobileSidebar />
    </nav>
  );
};
