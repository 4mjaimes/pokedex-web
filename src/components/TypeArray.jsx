import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const TypeArray = ({ types }) => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {types.map((typeInfo) => {
        const { type: { name } } = typeInfo;
        return (
          <li key={name}>
            <Chip
              label={name.toUpperCase()}
              className={classes.chip}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TypeArray;
