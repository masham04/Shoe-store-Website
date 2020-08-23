import React from 'react'
import Shoes from '../shoes.json'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export const Product = () => {
    const classes = useStyles();

    console.log(Object.values(Shoes));

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>

         {Object.keys(Shoes).map(keyname => {
             const shoe = Shoes[keyname];
              return(<Grid item xs={12} md={4} sm={4} id='item'>
              <Paper className={classes.paper} elevation={5}>
                <Link key={keyname} className='link' to={`/product/${keyname}`}>
                  <img src={shoe.img} height={400} width={300}></img>
                  <h2>{shoe.name}</h2>
                  </Link>
              </Paper>

            </Grid>)
         })}
          
        </Grid>
      </div>
    )
}
