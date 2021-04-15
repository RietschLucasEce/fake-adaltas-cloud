import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function CenteredGrid({children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid item xs={3}>
          {children}
        </Grid>
    </div>
  );
}
