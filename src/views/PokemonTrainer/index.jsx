import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';

import logo from '../../assets/img/logo.svg';

import { savePokemonTrainer } from '../../actions/user.action';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
  },
  title: {
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PokemonTrainer = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (data) => {
    dispatch(savePokemonTrainer(data, history));
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Paper className={classes.paper}>
        <img src={logo} alt="Logo" />
        <Typography
          component="h1"
          variant="h5"
          color="primary"
          className={classes.title}
        >
          Welcome - Pokedex
        </Typography>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="off"
            id="name"
            label="Name"
            name="name"
            error={Boolean(errors.name)}
            inputRef={register({ required: 'Field required' })}
            FormHelperTextProps={{ style: { margin: '0 0 0 5px', color: 'red' } }}
            helperText={errors.name ? errors.name.message : null}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="off"
            id="lastName"
            label="Lastname"
            name="lastName"
            error={Boolean(errors.lastName)}
            inputRef={register({ required: 'Field required' })}
            FormHelperTextProps={{ style: { margin: '0 0 0 5px', color: 'red' } }}
            helperText={errors.lastName ? errors.lastName.message : null}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="off"
            id="email"
            label="Email"
            name="email"
            error={Boolean(errors.email)}
            inputRef={register({
              required: 'Field required',
              pattern: {
                value: /^(?!.*?\.\.)([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/,
                message: 'Email invalid',
              },
            })}
            FormHelperTextProps={{ style: { margin: '0 0 0 5px', color: 'red' } }}
            helperText={errors.email ? errors.email.message : null}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default PokemonTrainer;
