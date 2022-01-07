import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                Dio Tech Shopping
            </Typography>
            <Link to="/">
                <Button variant="outlined" color="primary">Home</Button>
            </Link>
            <Link to="/contato">
                <Button variant="outlined" color="primary">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
