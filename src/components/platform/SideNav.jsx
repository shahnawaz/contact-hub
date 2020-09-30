import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = (config) => {
    const { drawerWidth } = config;
    return makeStyles((theme) => ({
        sideNav: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        }
    }))();
};

export const SideNav = ({ drawerWidth, mobileOpen, handleDrawerToggle }) => {
    const classes = useStyles({ drawerWidth });
    const theme = useTheme();

    const navItems = [
        { displayName: 'Dashboard', icon: '' },
        { displayName: 'Outreach Campaigns', icon: '' },
        { displayName: 'Prospecting Campaigns', icon: '' },
        { displayName: 'Contacts', icon: '' }
    ];

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={item.displayName} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <nav className={classes.sideNav}>
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
};
