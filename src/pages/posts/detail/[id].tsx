import React from 'react';
import styles from './index.module.scss';
import SideBarHome from '../../../components/pages/home/side-bar';

// Mui imports
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import DetailPost from '../../../components/pages/posts/detail';

const PostById = () => {
  return (
    <div className={styles['detail-post']}>
      <Grid container className={clsx(styles[''], styles.clearfix)}>
        <Grid item xs={12} sm={12} md={9}>
          <DetailPost />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <SideBarHome />
        </Grid>
      </Grid>
    </div>
  );
};

export default PostById;
