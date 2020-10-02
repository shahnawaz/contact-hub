// 3rd party modules/packages
import React from 'react';
import {
    AppBar,
    IconButton,
    Divider,
    Avatar,
    Typography,
    Toolbar,
    InputBase,
    MenuItem,
    Menu,
    SvgIcon
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Others
import { SettingsIcon, NotificationsIcon } from "../../assets/icons";

// Style
const useStyles = (config) => {
    const { drawerWidth } = config;
    return makeStyles((theme) => ({
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
            backgroundColor: theme.palette.common.white
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        grow: {
            flexGrow: 1,
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.05),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            padding: theme.spacing(0, 1),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: 'auto',
            },
        },
        searchIcon: {
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        vDivider: {
            margin: theme.spacing(2, 1)
        },
        avatar: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        }
    }))();
};

export const TopBar = ({ drawerWidth, isDrawerOpen, handleDrawerToggle }) => {
    const classes = useStyles({ drawerWidth });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = () => (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const renderSvgActionIcon = ({ svgComponent, title = '' }) => (
        <>
            <IconButton>
                <SvgIcon
                    component={svgComponent}
                    viewBox="0 0 16 16"
                    fontSize="small"
                />
            </IconButton>
            { title && <p>{title}</p> }
        </>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = () => (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                { renderSvgActionIcon({ svgComponent: SettingsIcon, title: 'Settings' }) }
            </MenuItem>
            <MenuItem>
                { renderSvgActionIcon({ svgComponent: NotificationsIcon, title: 'Notifications' }) }
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton>
                    <AccountCircleIcon/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>

                {/* Side Nav Drawer Toggle Icon */}
                <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>

                {/* Search Input and Icon */}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search campaign"
                        classes={{
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>

                <div className={classes.grow} />

                {/* Action Icons */}
                <div className={classes.sectionDesktop}>
                    { renderSvgActionIcon({ svgComponent: SettingsIcon }) }
                    { renderSvgActionIcon({ svgComponent: NotificationsIcon }) }
                    <Divider className={classes.vDivider} orientation="vertical" light flexItem />
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                    >
                        <Typography>Jon Doe</Typography>
                        <ExpandMoreIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                    >
                        <Avatar className={classes.avatar}>H</Avatar>
                    </IconButton>
                </div>

                {/* Mobile Menu Open Icon */}
                <div className={classes.sectionMobile}>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                    >
                        <MoreIcon />
                    </IconButton>
                </div>

            </Toolbar>

            { renderMobileMenu() }
            { renderMenu() }
        </AppBar>
    );
};
