import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SubjectIcon from "@mui/icons-material/Subject";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { List } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import React, { useContext } from "react";
import LogoLego from "./LogoLego";
import { blue } from "@material-ui/core/colors";
import UserBar from "./UserBar";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      marginLeft: 240,
    },
    root: {
      display: "flex",
      background: "#f4f4f4",
    },
    drawer: {
      width: drawerWidth
    },
    active: {
      background: "#f4f4f4",
    },
    toolbar:{ 
      padding: 20,
      background: "#4287f5"}
  };
});

function Layout({ children }) {
  const { logout } = useContext(AuthContext);

  const location = useLocation();
  const classes = useStyles();
  const navigate = useNavigate();
  const menuItems = [
    {
      text: "Cadastrar",
      icon: <SubjectIcon color="primary" />,
      path: "/addlego",
    },
    {
      text: "Buscar",
      icon: <SearchIcon color="primary" />,
      path: "/searchlego",
    },
    {
      text: "Logout",
      icon: <LogoutIcon color="primary" />,
      path: "/logout",
    },
  ];

  return (
    <div>
      <Drawer className={classes.drawer} variant="permanent" anchor="left">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <a href="#">
            <LogoLego locationFile={"/logobrick.png"} />
          </a>
        </div>
        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => {
                if (item.path === "/logout") {
                  logout();
                } else {
                  navigate(item.path);
                }
              }}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <UserBar></UserBar>
      <div className={classes.page}>

        {children}
      </div>
    </div>
  );
}

export default Layout;
