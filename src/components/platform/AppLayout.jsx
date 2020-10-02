// 3rd party modules/packages
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Components
import { SideNav } from "./SideNav";
import { TopBar } from "./TopBar";

// Others
import { routes } from "../../router";

const drawerWidth = 260;

// Style
const useStyles = () => {
    return makeStyles((theme) => ({
        cAppLayout: {
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
        <Router>
            <div className={classes.cAppLayout}>

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
                        <Switch>
                            {routes.map((route, i) => (
                                <Route
                                    key={i}
                                    exact={route.exact}
                                    path={route.path}
                                    render={props => <route.component {...props} />}
                                />
                            ))}
                        </Switch>
                    </div>
                </main>

            </div>
        </Router>
    );
};
