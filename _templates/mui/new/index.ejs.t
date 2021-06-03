---
to: src/components/<%=name%>/main.js
---
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import <%=mui%> from '@material-ui/core/<%=mui%>';
import theme from '@/components/theme';

const styles = makeStyles({
  root: {}
});

const Custom<%=Name%> = ({ children, ...rest }) => {
  const classes = styles();

  return (
    <<%=mui%>
      className={classes.root}
      {...props}
    >
      {children}
    </<%=mui%>>
  );
};

export default Custom<%=Name%>;
