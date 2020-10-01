import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#43425D',
            light: '#A5A4BF',
            contrastText: '#4D4F5C',
        },
        secondary: {
            main: '#A3A0FB',
        },
    },
    mixins: {
        toolbar: {
            minHeight: 70
        }
    },
    typography: {
        fontFamily: "'Source Sans Pro'", // loaded in public/index.html
    },
    overrides: {
        MuiToolbar: {
            gutters: {
                [defaultTheme.breakpoints.up('sm')]: {
                    paddingLeft: '16px',
                    paddingRight: '16px',
                },
            },
        },
    },
});