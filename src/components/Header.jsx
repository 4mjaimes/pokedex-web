/* eslint-disable no-nested-ternary */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import logo from '../assets/img/logo.svg';

import { getLettersAvatar, capitalize } from '../utils/textUtils';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    margin: 0,
    padding: 0,
  },
  box: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    paddingRight: 10,
    paddingLeft: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    maxWidth: 100,
    marginRight: 15,
  },
  divider: {
    margin: 5,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  name: {
    textTransform: 'capitalize',
    marginRight: 5,
    fontWeight: 400,
  },
}));

const Header = (props) => {
  const { history, location: { pathname } } = props;
  const { pokemonId } = useParams();
  const userInfo = useSelector(({ user }) => user.userInfo);
  const pokemons = useSelector(({ pokemon }) => pokemon.list);
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={10} className={classes.content}>
            <Box className={classes.box}>
              <Link to="/pokedex">
                <img src={logo} alt="logo" className={classes.logo} />
              </Link>
              { (pathname !== '/pokedex') && (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link to="/pokedex">Pokemons</Link>
                  <Typography color="inherit">
                    {
                    pokemonId
                      ? (Object.keys(pokemons).length ? capitalize(pokemons[pokemonId].name) : null)
                      : capitalize(pathname.slice(1))
                    }
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
            {
              userInfo ? (
                <Box display="flex" alignItems="center">
                  <Hidden smDown>
                    <Typography color="secondary" className={classes.name}>{`${userInfo.name} ${userInfo.lastName}`}</Typography>
                    <Divider orientation="vertical" flexItem className={classes.divider} />
                  </Hidden>
                  <IconButton onClick={() => history.push('/profile')}>
                    <Avatar className={classes.avatar}>{getLettersAvatar(userInfo)}</Avatar>
                  </IconButton>
                </Box>
              ) : (
                <Box display="flex" alignItems="center">
                  <Hidden smDown>
                    <Button onClick={() => history.push('/')} variant="outlined" color="secondary">
                      Register
                    </Button>
                  </Hidden>
                </Box>
              )
            }
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
