import { createTheme, Paper, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopNavbar from './components/TopNavbar';
import { HomeScreen, SearchScreen, FavouritesScreen } from './screens';
import ColorModeContext from './utils/colorModeContext';


function App() {

  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          secondary: {
            main: "#fafafa"
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Paper>
          <Router>
            <TopNavbar />
            <Switch>
              <Route exact path="/search" component={SearchScreen} />
              <Route exact path="/favourites" component={FavouritesScreen} />
              <Route path="/" component={HomeScreen} />
            </Switch>
          </Router>
        </Paper>
      </ThemeProvider >
    </ColorModeContext.Provider>
  );
}

export default App;
