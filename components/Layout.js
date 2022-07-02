import Meta from "./Meta";
import { withRouter } from "next/router";
import Background from "./Background";

const Layout = ({ children, router }) => {
  return (
    <>
      <Meta />
      <div className="relative">
        <Background />
        {children}
      </div>
    </>
  );
};

export default withRouter(Layout);
