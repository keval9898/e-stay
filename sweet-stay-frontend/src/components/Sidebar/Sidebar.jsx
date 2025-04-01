import React from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import BusinessIcon from "@mui/icons-material/Business";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <div className="sidebar-header">
        <h3 style={{ color: "#fff" }}>Sweet Stay Residency</h3>
      </div>
      <List>
        <ListItemStyle button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" style={{ color: "#fff" }} />
        </ListItemStyle>
        <ListItemStyle button component={Link} to="/residents">
          <ListItemIcon>
            <GroupIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Residents" style={{ color: "#fff" }} />
        </ListItemStyle>
        <ListItemStyle button component={Link} to="/events">
          <ListItemIcon>
            <EventIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Events" style={{ color: "#fff" }} />
        </ListItemStyle>
        <ListItemStyle button component={Link} to="/facilities">
          <ListItemIcon>
            <BusinessIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Facilities" style={{ color: "#fff" }} />
        </ListItemStyle>
        <ListItemStyle button component={Link} to="/payments">
          <ListItemIcon>
            <CreditCardIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Payments" style={{ color: "#fff" }} />
        </ListItemStyle>
      </List>
    </Drawer>
  );
};

export default Sidebar;

