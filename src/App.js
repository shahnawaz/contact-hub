// 3rd party modules/packages
import React from 'react';
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';

// Components
import { AppLayout } from "./components/platform/AppLayout";

// Others
import { theme } from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="contact-hub-app">
                <AppLayout />
            </div>
        </ThemeProvider>
    );
}

export default App;
