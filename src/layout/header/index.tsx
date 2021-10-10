import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

// MUI imports
import Typography from '@material-ui/core/Typography';

const MainHeader = () => {
  return (
    <div className={styles['main-header']}>
      <div className={styles['header-title']}>
        <div className={styles['header-title__sm']}>
          <Typography variant="h3">NextJS & NestJs</Typography>
        </div>
        <div className={styles['header-title__lg']}>
          <Typography variant="h1">Little Blog</Typography>
        </div>
      </div>
      <div className={styles['img-big']}>
        <Image
          className={styles['img']}
          layout="fill"
          src="/static/images/header/pexels-photo-1167355.jpeg"
          alt="main"
        />
      </div>
    </div>
  );
};

export default MainHeader;
