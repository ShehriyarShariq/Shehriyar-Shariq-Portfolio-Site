import Meta from "./Meta";
import { withRouter } from "next/router";

const Layout = ({ children, router }) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default withRouter(Layout);
