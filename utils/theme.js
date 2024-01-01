import { Roboto } from '@next/font/google';

// mui
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';


export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
})


const base = createTheme({
    palette: {
        primary: {
            main: red[600],
        },
        secondary: {
            main: grey[900],
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

const theme = responsiveFontSizes(base)

export default theme;