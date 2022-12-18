import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { Link } from "react-router-dom";
const NAVLIST_DATA = [
  { id: 1, link: "/", name: "Dashboard", icon: <DashboardIcon /> },
  { id: 2, link: "/udharis", name: "Udharis", icon: <CurrencyRupeeIcon /> },
  { id: 3, link: "/customers", name: "Customers", icon: <PeopleAltIcon /> },
  { id: 3, link: "/products", name: "Products", icon: <Inventory2Icon /> },
];

const NavList = ({ open }) => {
  return (
    <List>
      {NAVLIST_DATA.map(({ name, id, icon, link }, index) => (
        <ListItem key={index} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            component={Link}
            to={link}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "0px",
                justifyContent: "center",
                transition: "0.4s",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={name}
              sx={{ transition: "0.4s", opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
