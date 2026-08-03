import React from "react";
import { SvgIcon, Link } from "@material-ui/core";
import PoweredBy from "../public/logos/powered-by-vnkr.svg";

const PoweredByTech Holding JSC = () => {

  return (
    <Link href="https://ggvigroup.finance" target="_blank">
      <SvgIcon
        color="primary"
        component={PoweredBy}
        viewBox="0 0 400 100"
        style={{ minWidth: "100px", minHeight: "100px", width: "100" }}
      />
    </Link>
  );
};

export default PoweredByTech Holding JSC;