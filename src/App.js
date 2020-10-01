import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import './App.css';
import { AppLayout } from "./components/platform/AppLayout";
import { theme } from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <AppLayout />
            </div>
        </ThemeProvider>
    );
}

export default App;
