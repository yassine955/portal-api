import { Fragment } from "react";
import { ButtonAppBar } from "./AppBar";

export const Layout = ({ children }: { children: any }) => {
  return (
    <Fragment>
      <ButtonAppBar />

      {children}
    </Fragment>
  );
};
