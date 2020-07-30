import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { capitalize } from '../utils/textUtils';

import TypeArray from './TypeArray';

const useStyles = makeStyles(() => ({
  pokemonImage: {
    margin: 'auto',
    width: 130,
    height: 130,
  },
  content: {
    textAlign: 'center',
  },
}));

const PokemonCard = ({ pokemon }) => {
  const classes = useStyles();
  const history = useHistory();
  const {
    id, name, sprite, types,
  } = pokemon;
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardActionArea onClick={() => history.push(`/pokedex/${id}`)}>
          <CardMedia
            className={classes.pokemonImage}
            image={sprite}
          />
          <CardContent className={classes.content}>
            <Typography>{capitalize(name)}</Typography>
            <TypeArray types={types} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
