import React from 'react';

// Mui imports
import Grid from '@material-ui/core/Grid';
import Post from '../../../post';

const ListPostforHome = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        <Post />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Post />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Post />
      </Grid>
    </Grid>
  );
};

export default ListPostforHome;
