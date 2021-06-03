import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import theme from '@/lib/theme';

const menuStyles = makeStyles({
  paper: {
    border: `1px solid ${theme.palette.grays.default}`,
    borderRadius: 0,
  },
  list: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
});

const CustomMenu = ({
  children,
  ...rest
}) => {
  const menuClasses = menuStyles();

  return (
    <Menu
      classes={{
        paper: menuClasses.paper,
        list: menuClasses.list,
      }}
      elevation={0}
      getContentAnchorEl={null}
      keepMounted
      {...rest}
    >
      {children}
    </Menu>
  );
};

export default CustomMenu;
