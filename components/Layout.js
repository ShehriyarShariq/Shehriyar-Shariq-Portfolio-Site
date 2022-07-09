import Meta from "./Meta";
import { withRouter } from "next/router";
import Background from "./Background";
import { SidebarNavVisibilityProvider } from "../contexts/SidebarNavVisibilityContext";

const Providers = ({ children }) => {
  return (
    <SidebarNavVisibilityProvider>{children}</SidebarNavVisibilityProvider>
  );
};

const Layout = ({ children, router }) => {
  return (
    <>
      <Meta />
      <div className="relative">
        <Background />
        <Providers>{children}</Providers>
      </div>
    </>
  );
};

export default withRouter(Layout);
