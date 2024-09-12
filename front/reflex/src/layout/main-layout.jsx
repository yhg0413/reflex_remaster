import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import { useEffect } from "react";
import Footer from "../components/footer";
export function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Header />
      <div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
