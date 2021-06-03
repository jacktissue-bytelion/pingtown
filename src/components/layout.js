import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Ribbon from '@/components/ribbon';
import Menu from '@/components/menu';
import theme from '@/lib/theme';

const pageGridStyles = makeStyles({
  root: {
    height: '100%',
    paddingTop: 57,
    [theme.breakpoints.up('lg')]: {
      paddingTop: 63,
    },
  },
});

const asidePaperStyles = makeStyles({
  root: {
    height: '100%',
    borderRadius: 0,
    borderRight: `1px solid ${theme.palette.grays.light}`,
  },
});

const mainBoxStyles = makeStyles({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
});

const Layout = ({ children, title }) => {
  const pageGridClasses = pageGridStyles();
  const asidePaperClasses = asidePaperStyles();
  const mainBoxClasses = mainBoxStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Ribbon />
      <Grid
        alignItems="stretch"
        container
        className={pageGridClasses.root}
        direction="row"
      >
        <Grid item>
          <Hidden mdDown>
            <Paper
              className={asidePaperClasses.root}
              elevation={0}
            >
              <Menu />
            </Paper>
          </Hidden>
        </Grid>
        <Grid item xs>
          <Container disableGutters maxWidth="xl">
            <Box className={mainBoxClasses.root}>
              {children}
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
