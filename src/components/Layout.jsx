import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ArticleIcon from '@mui/icons-material/Article';
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
import AddBoxIcon from '@mui/icons-material/AddBox';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const drawerWidth = 300;

const useStyles = makeStyles(() => {
  return {
    page: {
      marginLeft: 240,
    },
    root: {
      display: "flex",
      background: "#dceefa",
    },
    paper: {
      width: drawerWidth,
      background: "blue"
    },
    active: {
      background: "#dceefa",
  }};
});

function Layout({ children }) {
  const { logout } = useContext(AuthContext);

  const location = useLocation();
  const classes = useStyles();
  const navigate = useNavigate();
  const menuItems = [
    {
      text: "Cadastrar",
      icon: <AddBoxIcon color="primary" />,
      path: "/addlego",
    },
    {
      text: "Buscar",
      icon: <ManageSearchIcon color="primary" />,
      path: "/searchlego",
    },
    {
      text: "Relatório",
      icon: <ArticleIcon color="primary" />,
      path: "/resume",
    },
    {
      text: "Logout",
      icon: <LogoutIcon color="primary" />,
      path: "/logout",
    },
  ];

  return (
    <div>
      <Drawer className={classes.paper} variant="permanent" anchor="left">
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
