import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/HighlightOff';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import { capitalize } from '../../utils/textUtils';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  title: {
    fontWeight: 700,
  },
  dialogTitle: {
    paddingBottom: 0,
  },
  dialogContent: {
    paddingTop: 0,
  },
}));

const formatMove = (move) => (
  capitalize(move.replace('-', ' '))
);

const ModalMoves = (props) => {
  const { isOpen, onClose, moves } = props;
  const classes = useStyles();

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={isOpen}
      >
        <DialogTitle>
          <Typography className={classes.title} color="primary">Abilities</Typography>
          <IconButton className={classes.closeButton} onClick={onClose}>
            <CloseIcon color="primary" />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <List>
            {moves.map(({ move }) => (
              <ListItem key={move.name}>
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={formatMove(move.name)} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalMoves;
