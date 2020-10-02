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

// Others
import { DashboardIcon, ContactsIcon, InboxIcon, ProductsIcon } from "../../assets/icons";

// Style
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

export const SideNav = ({ drawerWidth, isDrawerOpen, handleDrawerToggle }) => {
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

    const renderDrawer = () => (
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
