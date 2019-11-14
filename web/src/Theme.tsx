import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {green, purple} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
});

export default theme