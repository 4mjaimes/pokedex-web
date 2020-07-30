/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Info from './Info';
import Loading from '../../components/Loading';

import { getPokemon } from '../../actions/pokemon.action';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  container: {
    padding: 0,
    margin: 0,
  },
}));
const Pokemon = () => {
  const classes = useStyles();
  const { pokemonId } = useParams();
  const dispatch = useDispatch();
  const pokemons = useSelector(({ pokemon }) => pokemon.list);
  const pokemon = pokemons[pokemonId];

  useEffect(() => {
    dispatch(getPokemon(pokemonId));
  }, [dispatch, pokemonId]);

  if (pokemon === undefined) return <Loading />;
  if (pokemon === false) return <div>Pokemon not found </div>;
  return (
    <>
      <Grid container spacing={0} className={classes.container}>
        <Grid item xs={false} sm={4} />
        <Grid item xs={12} sm={4}>
          <Grid container spacing={0}>
            <Info key={pokemon.id} pokemon={pokemon} />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={4} />
      </Grid>
    </>
  );
};

export default Pokemon;
