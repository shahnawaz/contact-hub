// 3rd party modules/packages
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

// Pages
import OutreachCampaigns from "../../pages/OutreachCampaigns";

// Components
import { SideNav } from "./SideNav";
import { TopBar } from "./TopBar";

const drawerWidth = 260;

// Style
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
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className={classes.appLayout}>
            <TopBar
                drawerWidth={drawerWidth}
                isDrawerOpen={isDrawerOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
            <SideNav
                drawerWidth={drawerWidth}
                isDrawerOpen={isDrawerOpen}
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
