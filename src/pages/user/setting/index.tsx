import React from 'react';
import styles from './index.module.scss';
import SideBarHome from '../../../components/pages/home/side-bar';
import clsx from 'clsx';

// MUI imp
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const UserSetting = () => {
  return (
    <div className={styles['user-setting']}>
      <Grid container className={clsx(styles[''], styles.clearfix)}>
        <Grid item xs={12} sm={12} md={9}>
          <div className={styles['user-setting-wrapper']}>
            <div className={styles['title']}>
              <span className={styles['update']}>Update Account</span>
              <span className={styles['delete']}>
                <DeleteIcon />
                Delete Account
              </span>
            </div>
            <div className={styles['form']}>
              <form>
                <div className={styles['form-group']}>
                  <div className={styles['img-group']}>
                    <img src="/static/images/post/main.jpeg" alt="avatar" />
                    <label htmlFor="fileInput">
                      <AccountCircleIcon />
                    </label>
                    <input
                      id="fileInput"
                      type="file"
                      style={{ display: 'none' }}
                      className="settingsPPInput"
                    />
                  </div>
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor="username">Display name</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Safak"
                    name="name"
                  />
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="safak@gmail.com"
                    name="email"
                  />
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className={styles['form-group']}>
                  <Button
                    className={styles['btn-submit']}
                    variant="contained"
                    color="primary"
                  >
                    Update
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <SideBarHome />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserSetting;
