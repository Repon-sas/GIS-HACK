import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#61d8c5'
        },
        secondary: {
            main: '#EA5858'
        },
        success: {
            main: '#61d8c5'
        },
        info: {
            main: '#fff'
        }
    },
});

export const mainTheme = {
    fontFamily: {
        DmSans: '"DM Sans", sans-serif',
        Roboto: '"Roboto", sans-serif',
    },
    textSizes: {
        extraLarge: 64,
        large: 48,
        middle: 36,
        small: 20,
        regular: 18,
        extraSmall: 14
    },
    colors: {
        red: '#EA5858',
        green: '#61d8c5',
        grey: '#575a7b',
        darkBlue: '#1b1642',
        lightPurple: '#575a7b',
    },
}

