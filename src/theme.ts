import { createMuiTheme } from '@material-ui/core';
import { amber, blue } from '@material-ui/core/colors';

// @ts-ignore: ThemeOptions type does match
const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: amber
    },
    typography: {
        fontFamily: [
            'Petit Formal'
        ].join(','),
    }
});

export default theme;