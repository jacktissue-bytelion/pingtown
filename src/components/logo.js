import React from 'react';
import NextLink from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Brand from '@/icons/brand.svg';

const svgIconStyles = makeStyles({
  root: {
    width: 40,
    height: 40,
    display: 'block',
  },
});

const CustomLogo = () => {
  const svgIconClasses = svgIconStyles();
  const link = '/';

  return (
    <NextLink href={link}>
      <MuiLink href={link}>
        <SvgIcon
          className={svgIconClasses.root}
          component={Brand}
          viewBox="0 0 60 60"
        />
      </MuiLink>
    </NextLink>
  );
};

export default CustomLogo;
