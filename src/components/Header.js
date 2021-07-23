import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    color: "#26d284",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    color: "#26d284",
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },

  navItems: {
    display: "inline-flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  navItem: {
    color: "#26d284",
    padding: "2px 14px !important",
  },

  navItemHome: {
    marginRight: 40,
  },
}));

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log("is Mobile", isMobile);

  const toggleDrawer = (open) => {
    setIsOpen(open);
  };
  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          CHINGU TRIVIA
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(!isOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={isOpen}
              anchor="right"
              onClose={() => toggleDrawer(!isOpen)}
            >
              <List component="nav" aria-label="navigationtabs">
                <ListItem button className={classes.navItem}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button className={classes.navItem}>
                  <ListItemText primary="Questions" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <div className={classes.navItems}>
            <Button className={`${classes.navItem} ${classes.navItemHome}`}>
              Home
            </Button>
            <Button color="inherit" className={classes.navItem}>
              Questions
            </Button>
          </div>
        )}
      </Toolbar>
    </div>
  );
};

export default Header;
