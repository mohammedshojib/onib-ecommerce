import {
  AppBar,
  Container,
  createMuiTheme,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import NextLink from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import useStyles from '../utils/style';

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>
          {' '}
          {title ? `${title} - shojib commerce` : 'Shojib commerce'}
        </title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography>amazona</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Log In</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>All right reserved by shojib</footer>
      </ThemeProvider>
    </div>
  );
}
