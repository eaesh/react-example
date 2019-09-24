import React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { Theme, withStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
    root: {
        color: theme.palette.primary,
        flexGrow: 1,
    },
    title: {
        color: theme.palette.primary.contrastText,
        fontFamily: theme.typography.fontFamily,
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
            <AppBar position='static' className={classes.root}>
                <Toolbar>
                    <Typography variant='h4' className={classes.title} color='inherit'>Artistic Kreations</Typography> 
                </Toolbar>
            </AppBar>
        )
    }
}

// @ts-ignore: CSS 
export default withStyles(styles)(Navigation);