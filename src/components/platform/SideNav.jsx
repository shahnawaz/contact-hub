// 3rd party modules/packages
import React from 'react';
import {
    Divider,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    SvgIcon,
    Box
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

// Others
import { DashboardIcon, ContactsIcon, InboxIcon, ProductsIcon } from "../../assets/icons";
import {routes, routesMap} from "../../router";

// Style
const useStyles = (config) => {
    const { drawerWidth } = config;
    return makeStyles((theme) => ({
        cSideNav: {
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

export const SideNav = ({ drawerWidth, isDrawerOpen, handleDrawerToggle }) => {
    const classes = useStyles({ drawerWidth });
    const theme = useTheme();

    const container = window !== undefined ? () => window.document.body : undefined;

    const history = useHistory();
    const [activeRoutePath, setActiveRoutePath] = React.useState(history.location.pathname);
    const routeTo = (path) => {
        setActiveRoutePath(path);
        history.push(path);
    };

    const navItems = [
        {
            displayName: 'Dashboard',
            icon: DashboardIcon,
            isSelected: activeRoutePath === routes[routesMap.dashboard].path,
            path: routes[routesMap.dashboard].path
        },
        {
            displayName: 'Outreach Campaigns',
            icon: InboxIcon,
            isSelected: activeRoutePath === routes[routesMap.outreachCampaign].path,
            path: routes[routesMap.outreachCampaign].path
        },
        {
            displayName: 'Prospecting Campaigns',
            icon: ProductsIcon,
            isSelected: activeRoutePath === routes[routesMap.prosCampaign].path,
            path: routes[routesMap.prosCampaign].path
        },
        {
            displayName: 'Contacts',
            icon: ContactsIcon,
            isSelected: activeRoutePath === routes[routesMap.contacts].path,
            path: routes[routesMap.contacts].path
        }
    ];
    const renderNavListItems = () => (
        <List>
            {navItems.map((item, index) => (
                <ListItem
                    button
                    selected={item.isSelected}
                    key={index}
                    onClick={() => routeTo(item.path)}
                >
                    <ListItemIcon>
                        <SvgIcon
                            component={item.icon}
                            viewBox="0 0 24 24"
                        />
                    </ListItemIcon>
                    <ListItemText primary={item.displayName} />
                </ListItem>
            ))}
        </List>
    );

    const renderDrawer = () => (
        <div>
            <Box className={classes.logoBox} display="flex" alignItems="center">
                <Box textAlign="left" fontSize="h6.fontSize">
                    Contact Hub
                </Box>
            </Box>
            <Divider />
            { renderNavListItems() }
        </div>
    );

    return (
        <nav className={classes.cSideNav}>
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={isDrawerOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    { renderDrawer() }
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
                    { renderDrawer() }
                </Drawer>
            </Hidden>
        </nav>
    );
};
