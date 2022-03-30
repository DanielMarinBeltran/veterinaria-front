import React from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header>
      <AppBar sx={{ background: "#29b9a1" }}>
        <Toolbar>
          <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
             Veterinaria
          </Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                value={0}
              >
                <Link className="link-header" to='/'>
                  <Tab label="Mascotas" />
                </Link>
                <Link className="link-header" to='/'>
                  <Tab label="Sobre Nosotros" />
                </Link>
                <Link className="link-header" to='/'>
                  <Tab label="Contacto" />
                </Link>
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;