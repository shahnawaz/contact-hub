import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import SvgIcon from "@material-ui/core/SvgIcon";
import { DashboardIcon, ContactsIcon, InboxIcon, ProductsIcon } from "../../assets/icons";
import Box from "@material-ui/core/Box";

const useStyles = (config) => {
    const { drawerWidth } = config;
    return makeStyles((theme) => ({
        sideNav: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        logoBox: {
            ...theme.mixins.toolbar,
            paddingLeft: 16,
            paddingRight: 16,
            fontWeight: 'bold',
            letterSpacing: 2
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            '& .MuiListItem-root': {
                height: 54,
                '& .MuiListItemIcon-root': {
                    paddingRight: 12,
                    paddingLeft: 6,
                    minWidth: 0
                },
                '&.Mui-selected': {
                    borderLeftWidth: 5,
                    borderLeftColor: theme.palette.secondary.main,
                    borderLeftStyle: 'solid',
                    '& .MuiListItemIcon-root': {
                        paddingLeft: 1
                    },
                },
            },
        }
    }))();
};

export const SideNav = ({ drawerWidth, mobileOpen, handleDrawerToggle }) => {
    const classes = useStyles({ drawerWidth });
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const container = window !== undefined ? () => window.document.body : undefined;

    const navItems = [
        { displayName: 'Dashboard', icon: DashboardIcon, isSelected: selectedIndex === 0 },
        { displayName: 'Outreach Campaigns', icon: InboxIcon, isSelected: selectedIndex === 1 },
        { displayName: 'Prospecting Campaigns', icon: ProductsIcon, isSelected: selectedIndex === 2 },
        { displayName: 'Contacts', icon: ContactsIcon, isSelected: selectedIndex === 3 }
    ];

    const drawer = (
        <div>
            <Box className={classes.logoBox} display="flex" alignItems="center">
                <Box textAlign="left" fontSize="h6.fontSize">
                    Contact Hub
                </Box>
            </Box>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem
                        button
                        selected={item.isSelected}
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <ListItemIcon>
                            <SvgIcon
                                component={item.icon}
                                viewBox="0 0 24 24"
                                style={{ color: item.isSelected ? theme.palette.secondary.main : theme.palette.primary.light}}
                            />
                        </ListItemIcon>
                        <ListItemText primary={item.displayName} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

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
