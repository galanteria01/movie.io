import { Box, createTheme, IconButton, Paper, useTheme, ThemeProvider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopNavbar from './components/TopNavbar';
import { HomeScreen, SearchScreen, FavouritesScreen } from './screens';
import ColorModeContext from './utils/colorModeContext';



function MyApp() {
  const theme = useTheme();
  console.log(theme.palette.mode)
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode}
      </IconButton>
    </Box>
  );
}

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
              <Route path="/" component={HomeScreen}></Route>
            </Switch>
          </Router>
        </Paper>
      </ThemeProvider >
    </ColorModeContext.Provider>
  );
}

export default App;
