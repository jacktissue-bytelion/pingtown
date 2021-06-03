import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '@/components/logo';
import Menu from '@/components/menu';
import UserBubble from '@/components/user-bubble';
import theme from '@/lib/theme';

const ribbonStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: theme.zIndex.appBar,
    background: 'white',
    borderBottom: `1px solid ${theme.palette.grays.default}`,
    padding: theme.spacing(1, 2),
  },
});

const Ribbon = () => {
  const ribbonClasses = ribbonStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (state) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(state);
  };

  return (
    <Box className={ribbonClasses.root}>
      <Grid
        alignItems="center"
        container
        direction="row"
        justify="space-between"
      >
        <Logo />
        <Box>
          <Grid
            alignItems="center"
            container
            direction="row"
          >
            <Hidden mdDown>
              <UserBubble />
            </Hidden>
            <Hidden lgUp>
              <Button
                color="primary"
                endIcon={<MenuIcon />}
                onClick={toggleDrawer(true)}
                variant="outlined"
              >
                <Typography component="span" variant="body2">Menu</Typography>
              </Button>
            </Hidden>
          </Grid>
        </Box>
      </Grid>
      <Hidden lgUp>
        <Drawer
          anchor="right"
          onClose={toggleDrawer(false)}
          open={drawerOpen}
        >
          <Menu />
        </Drawer>
      </Hidden>
    </Box>
  );
};

export default Ribbon;
