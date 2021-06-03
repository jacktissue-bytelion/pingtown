import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import theme from '@/lib/theme';

const listItemStyles = makeStyles({
  root: {},
  active: {
    background: theme.palette.primary.main,
    color: 'white',
    pointerEvents: 'none',
  },
});

const listItemTextStyles = makeStyles({
  root: {
    margin: theme.spacing(0, 2),
  },
});

const CustomNav = ({ id, items }) => {
  const listItemClasses = listItemStyles();
  const listItemTextClasses = listItemTextStyles();
  const router = useRouter();

  return (
    <List
      aria-labelledby={id}
      component="nav"
      disablePadding
    >
      {items.map((item) => {
        const active = router.pathname === item.href;

        return (
          <Link href={item.href} key={item.primary}>
            <ListItem
              className={clsx(listItemClasses.root, {
                [listItemClasses.active]: active,
              })}
              component="a"
              disableGutters
              href={item.href}
            >
              <ListItemText
                className={listItemTextClasses.root}
                primary={item.primary}
                primaryTypographyProps={{
                  variant: 'body2',
                }}
              />
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default CustomNav;
