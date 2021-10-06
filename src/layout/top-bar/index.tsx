import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

// MUI import
import AppBar from '@material-ui/core/AppBar';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';

const TopBar = () => {
  return (
    <AppBar position="sticky" className={styles['custom-appbar']}>
      <div className={styles['custom-appbar-left']}>
        <Link href="#">
          <a>
            <FacebookIcon />
          </a>
        </Link>
        <Link href="#">
          <a>
            <InstagramIcon />
          </a>
        </Link>
        <Link href="#">
          <a>
            <YouTubeIcon />
          </a>
        </Link>
        <Link href="#">
          <a>
            <TwitterIcon />
          </a>
        </Link>
      </div>
      <div className={styles['custom-appbar-center']}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
        </ul>
      </div>
      <div className={styles['custom-appbar-right']}>
        <div className={styles['avt']}>
          <Avatar>H</Avatar>
        </div>
        <SearchIcon />
      </div>
    </AppBar>
  );
};

export default TopBar;
