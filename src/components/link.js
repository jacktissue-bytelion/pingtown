import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import theme from '@/lib/theme';

const linkStyles = makeStyles({
  root: {
    color: 'inherit',
    textDecoration: 'underline',
    textDecorationColor: 'transparent',
    transition: `
      color ${theme.speed},
      text-decoration-color ${theme.speed}
    `,
    '&:hover, &:focus': {
      color: theme.palette.primary.main,
      textDecorationColor: 'inherit',
    },
  },
});

const CustomLink = forwardRef(({ children, href }, ref) => {
  const linkClasses = linkStyles();

  return (
    <Link
      className={linkClasses.root}
      href={href}
      ref={ref}
    >
      {children}
    </Link>
  );
});

export default CustomLink;
