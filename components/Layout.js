import Meta from "./Meta";
import { withRouter } from "next/router";
import Background from "./Background";
import { SidebarNavVisibilityProvider } from "../contexts/SidebarNavVisibilityContext";

const Layout = ({ children, router }) => {
  return (
    <>
      <Meta />
      <div className="relative">
        <Background />
        <SidebarNavVisibilityProvider>{children}</SidebarNavVisibilityProvider>
      </div>
    </>
  );
};

export default withRouter(Layout);
