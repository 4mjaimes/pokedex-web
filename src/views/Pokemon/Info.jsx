import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { capitalize } from '../../utils/textUtils';

import TypeArray from '../../components/TypeArray';
import ModalMoves from './ModalMoves';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 64px)',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '100%',
  },
  pokemonImage: {
    marginTop: 20,
    marginBottom: 20,
  },
  table: {
    '& td:nth-child(odd)': {
      textAlign: 'left',
    },
    '& td:nth-child(even)': {
      textAlign: 'center',
    },
  },
  heading: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));

const Info = ({ pokemon }) => {
  const [statusModal, setStatusModal] = useState(false);
  const classes = useStyles();
  const {
    name, id, height, weight, types, moves,
  } = pokemon;
  const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  return (
    <>
      <Grid item xs={12} className={classes.root}>
        <Paper className={classes.paper}>
          <Typography color="primary" variant="h1">{`${capitalize(name)}`}</Typography>
          <img
            alt="PokemonImage"
            style={{ width: '300px', height: '300px' }}
            src={fullImageUrl}
            className={classes.pokemonImage}
          />
          <TypeArray types={types} />
          <Typography color="secondary" variant="h4" className={classes.heading}>Profile</Typography>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell><strong>Height</strong></TableCell>
                  <TableCell>{height}</TableCell>
                  <TableCell><strong>Weight</strong></TableCell>
                  <TableCell>{weight}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Moves</strong></TableCell>
                  <TableCell>
                    <IconButton size="small" aria-label="AbilitiesList" onClick={() => setStatusModal(true)}>
                      <VisibilityIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell><strong>ID</strong></TableCell>
                  <TableCell>{id}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>

      <ModalMoves isOpen={statusModal} onClose={() => setStatusModal(false)} moves={moves} />
    </>
  );
};

export default Info;
