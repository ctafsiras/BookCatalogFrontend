import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div>
      <Nav />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
