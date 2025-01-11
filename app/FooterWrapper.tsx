"use client";

import { usePathname } from "next/navigation";
import Footer from "./components/Footer/Footer";

const FooterWrapper = () => {
  const pathname = usePathname();
  const hideFooterPaths = ["/dashboard/admin/requests"];
  const user = ["/dashboard/admin/users"];

  if (hideFooterPaths.includes(pathname)) {
    return null;
  }
  if (user.includes(pathname)) {
    return null;
  }

  return <Footer />;
};

export default FooterWrapper;
