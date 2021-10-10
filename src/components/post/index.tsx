import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

const Post = () => {
  return (
    <div className={styles['post']}>
      <div className={styles['img-main']}>
        <img src="/static/images/post/main.jpeg" alt="post image" />
      </div>
      <div className={styles['post-infor']}>
        <div className={styles['post-cats']}>
          <span className={styles['post-cat']}>
            <Link href="#">
              <a>Music</a>
            </Link>
          </span>
          <span className={styles['post-cat']}>
            <Link href="#">
              <a>Coding</a>
            </Link>
          </span>
        </div>
        <span className={styles['post-title']}>
          <Link href="#">
            <a>Lorem ipsum dolor sit amet</a>
          </Link>
        </span>
        <hr />
        <span className={styles['post-date']}>1 hour ago</span>
      </div>
      <p className={styles['post-desc']}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default Post;
