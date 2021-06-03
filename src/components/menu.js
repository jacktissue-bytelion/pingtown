import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Nav from '@/components/nav';
import theme from '@/lib/theme';

const menuStyles = makeStyles({
  root: {
    height: '100%',
    width: 300,
    padding: theme.spacing(2, 0),
  },
});

const Menu = () => {
  const menuClasses = menuStyles();

  return (
    <Grid
      className={menuClasses.root}
      container
      direction="column"
      justify="space-between"
      py={2}
    >
      <Nav
        items={[
          {
            href: '/',
            primary: 'Home',
          },
        ]}
      />
      <Box px={2}>
        <Typography variant="caption">
          {`© ${new Date().getFullYear()} Bytelion. Copyright.`}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Menu;
