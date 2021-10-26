import { createTheme, Paper, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopNavbar from './components/TopNavbar';
import { HomeScreen, SearchScreen, FavouritesScreen, SplashScreen } from './screens';
import ColorModeContext from './utils/colorModeContext';


function App() {

  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const [isLoading, setIsLoading] = useState(true);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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
          {isLoading ?
            <SplashScreen />
            :
            <Router>
              <TopNavbar />
              <Switch>
                <Route exact path="/search" component={SearchScreen} />
                <Route exact path="/favourites" component={FavouritesScreen} />
                <Route path="/" component={HomeScreen} />
              </Switch>
            </Router>}
        </Paper>
      </ThemeProvider >
    </ColorModeContext.Provider>
  );
}

export default App;
