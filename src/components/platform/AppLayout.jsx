import React from 'react';
import { SideNav } from "./SideNav";
import { TopBar } from "./TopBar";
import OutreachCampaigns from "../../pages/OutreachCampaigns";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 260;

const useStyles = () => {
    return makeStyles((theme) => ({
        appLayout: {
            display: 'flex',
        },
        toolbar: theme.mixins.toolbar,
        main: {
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
            },
        },
        content: {
            padding: theme.spacing(2, 2),
            [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(4, 9)
            },
        }
    }))();
};

export const AppLayout = (props) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.appLayout}>
            <TopBar
                drawerWidth={drawerWidth}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
            <SideNav
                drawerWidth={drawerWidth}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
            <main className={classes.main}>
                <div className={classes.toolbar} />
                <div className={classes.content}>
                    <OutreachCampaigns />
                </div>
            </main>
        </div>
    );
};
