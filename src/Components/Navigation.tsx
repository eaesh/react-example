import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { Theme, withStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    }
});

interface IProps {
    classes: any
}
class Navigation extends React.Component<IProps> {
    render() {
        const { classes } = this.props;

        return (
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>Fudge</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Navigation);