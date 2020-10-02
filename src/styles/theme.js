import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const palette = {
    primary: {
        main: '#43425D',
        light: '#A5A4BF'
    },
    secondary: {
        main: '#A3A0FB',
    },
    others: {
        sharpBlue: '#3B86FF',
        sharperBlue: '#1062E5',
        smoothRed: '#FF6565',
        textGray: '#4D4F5C',
        secondaryExtraLight: '#838296',
        lightPurple: '#F0F0F7'
    },
};

export const theme = createMuiTheme({
    palette: palette,
    mixins: {
        toolbar: {
            minHeight: 70
        }
    },
    typography: {
        fontFamily: "'Source Sans Pro'", // loaded in public/index.html
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    color: palette.others.textGray,
                    backgroundColor: palette.others.lightPurple
                },
                '.MuiSvgIcon-root': {
                    color: palette.primary.light
                },
                '.Mui-selected': {
                    '& .MuiSvgIcon-root': {
                        color: palette.secondary.main
                    }
                },
                '.MuiButtonBase-root': {
                    '&.f-sharper-blue': {
                        backgroundColor: palette.others.sharperBlue,
                        color: defaultTheme.palette.common.white,
                        '& .MuiSvgIcon-root': {
                            color: defaultTheme.palette.common.white
                        },
                        '&:hover': {
                            backgroundColor: palette.others.sharpBlue,
                        }
                    }
                }
            },
        },
        MuiToolbar: {
            gutters: {
                [defaultTheme.breakpoints.up('sm')]: {
                    paddingLeft: '16px',
                    paddingRight: '16px',
                },
            },
        }
    },
});