import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
// MUI imports
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const SideBarHome = () => {
  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar-item']}>
        <span className={styles['title']}>About me</span>
        <div className={styles['img-me']}>
          <img src="/static/images/sidebar/aboutme.jpg" alt="about me img" />
        </div>
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className={styles['sidebar-item']}>
        <span className={styles['title']}>Categories</span>
        <ul className={styles['sidebar-list']}>
          <li>
            <Link href="#">
              <a>Life</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Music</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Coding</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Travel</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Tech</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Ciname</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles['sidebar-item']}>
        <span className={styles['title']}>follow us</span>
        <ul className={styles['social-icon']}>
          <li>
            <Link href="#">
              <a>
                <FacebookIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <InstagramIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <YouTubeIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <TwitterIcon />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarHome;
