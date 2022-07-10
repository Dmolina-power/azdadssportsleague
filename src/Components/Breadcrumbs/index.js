import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Container from '@mui/material/Container';

function Tabs() {
  return (

      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/schedule">
          Schedule
        </Link>
        <Link underline="hover" color="inherit" href="/scores">
          Scores
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Standings
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Stats
        </Link>
      </Breadcrumbs>
    
  );
}

export default Tabs;
