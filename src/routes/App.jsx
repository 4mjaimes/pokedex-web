import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Store from '../store';
import theme from '../theme/pokeTheme';
import NavRoute from './NavRoute';
import Home from '../views/PokemonTrainer';
import Pokedex from '../views/Pokedex';
import Pokemon from '../views/Pokemon';
import Profile from '../views/Profile';

const store = Store();

const App = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <NavRoute exact path="/pokedex" component={Pokedex} />
          <NavRoute exact path="/pokedex/:pokemonId" component={Pokemon} />
          <NavRoute exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
