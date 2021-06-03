import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAppContext } from '@/contexts/index';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Skeleton from '@material-ui/lab/Skeleton';
import Dropdown from '@/components/dropdown';
import MuiLink from '@/components/link';
import theme from '@/lib/theme';

const buttonStyles = makeStyles({
  root: {
    borderRadius: 0,
    textTransform: 'none',
    transition: `color ${theme.speed}`,
    '&:hover, &:focus': {
      background: 'none',
      color: theme.palette.primary.main,
    },
  },
});

const avatarStyles = makeStyles({
  root: {
    height: 34,
    width: 34,
  },
});

const UserBubble = () => {
  const buttonClasses = buttonStyles();
  const avatarClasses = avatarStyles();
  const { currentUser } = useAppContext();
  const [siteActionsAnchor, setSiteActionsAnchor] = useState(null);

  const handleSiteActionsOpen = (event) => {
    setSiteActionsAnchor(event.currentTarget);
  };

  const handleSiteActionsClose = () => {
    setSiteActionsAnchor(null);
  };

  return (
    <>
      <Button
        className={buttonClasses.root}
        onClick={handleSiteActionsOpen}
      >
        <Box mr={1}>
          <Avatar
            alt=""
            className={avatarClasses.root}
            src={currentUser ? currentUser.picture : ''}
          />
        </Box>
        <Box mr={1}>
          {currentUser ? (
            <Typography variant="body2">
              {currentUser && `${currentUser.name}`}
            </Typography>
          ) : (
            <Skeleton height={27} width={116} />
          )}
        </Box>
        <KeyboardArrowDownIcon />
      </Button>
      <Dropdown
        anchorEl={siteActionsAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        id="siteActionsMenu"
        open={Boolean(siteActionsAnchor)}
        onClose={handleSiteActionsClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MuiLink href="/api/logout">
          <Typography variant="body2">Log out</Typography>
        </MuiLink>
      </Dropdown>
    </>
  );
};

export default UserBubble;
