import React from 'react';
import styles from './index.module.scss';

// MUI imp
import Button from '@material-ui/core/Button';

const Register = () => {
  return (
    <div className={styles['login']}>
      <div className={styles['login-wrapper']}>
        <span className={styles['title']}>Register</span>
        <div className={styles['form']}>
          <form>
            <div className={styles['form-group']}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                name="password"
              />
            </div>
            <div className={styles['form-group-btn']}>
              <Button
                className={styles['btn-login']}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
              <Button
                className={styles['btn-register']}
                variant="contained"
                color="secondary"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
