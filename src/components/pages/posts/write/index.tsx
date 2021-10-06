import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

// MUI imp
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const WriteComponent = () => {
  return (
    <div className={styles['write-post-container']}>
      <div className={styles['upload-img']}>
        <img src="/static/images/post/main.jpeg" alt="post image" />
      </div>

      <form className={styles['post-form']}>
        <div className={styles['post-form-group']}>
          <label htmlFor="fileInput">
            <AddIcon />
          </label>
          <input id="fileInput" type="file" style={{ display: 'none' }} />
          <input
            className={styles['write-input']}
            placeholder="Title...."
            type="text"
            autoFocus={true}
          />
        </div>
        <div className={styles['post-form-group']}>
          <textarea
            className={clsx(styles['write-input'], styles['write-text'])}
            placeholder="Tell your story..."
            autoFocus={true}
          />
        </div>
        <div className={styles['post-form-group']}>
          <Button className={styles['btn-submit']} variant="contained" color="primary">
            Publish
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WriteComponent;
