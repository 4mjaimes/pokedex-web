import React, { useEffect, useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { getPokemons } from '../../actions/pokemon.action';

import PokemonCard from '../../components/PokemonCard';
import Loading from '../../components/Loading';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  container: {
    padding: '20px',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  paper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const useSearch = (lstPokemons) => {
  const result = {};
  const [query, setQuery] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState(lstPokemons);
  useMemo(() => {
    const arrayResult = Object.values(lstPokemons).filter((pkm) => `${pkm.name}`
      .toLowerCase().includes(query.toLowerCase()));
    arrayResult.forEach((r) => {
      result[r.id] = { ...r };
    });
    setFilteredPokemons(result);
  }, [lstPokemons, query]);
  return { query, setQuery, filteredPokemons };
};

const Pokedex = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pokemons = useSelector(({ pokemon }) => pokemon.list);

  const { query, setQuery, filteredPokemons } = useSearch(pokemons || []);
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  if (!Object.keys(pokemons).length) return <Loading />;

  return (
    <>
      <Box className={classes.box}>
        <Paper component="form" className={classes.paper}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search pokemons' }}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Grid container spacing={0} className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Grid container spacing={2}>
            {
              Object.keys(filteredPokemons).map(
                (pkmn) => <PokemonCard key={pkmn} pokemon={pokemons[pkmn]} />,
              )
            }
          </Grid>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
    </>
  );
};

export default Pokedex;
