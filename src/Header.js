
import React from 'react';
import { AppBar, Toolbar,Typography} from '@material-ui/core';
import DriveEtaRoundedIcon from '@material-ui/icons/DriveEtaRounded';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() =>({
    typographyStyles : {
        flex: 1
    }
    
}));

const Header = () => {
    const classes = useStyles();
    return (
    <AppBar position="static">
       <Toolbar>
           <Typography className={classes.typographyStyles}>
                    Car Shop
           </Typography>
           <DriveEtaRoundedIcon/>
       </Toolbar>
   </AppBar>

    );
};

export default Header;
