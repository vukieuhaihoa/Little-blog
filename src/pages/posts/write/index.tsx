import React from 'react';
import WriteComponent from '../../../components/pages/posts/write';
import styles from './index.module.scss';

const WritePost = () => {
  return (
    <div className={styles['write-post']}>
      <WriteComponent />
    </div>
  );
};

export default WritePost;
