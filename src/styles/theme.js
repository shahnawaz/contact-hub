import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#43425D',
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
    }
});