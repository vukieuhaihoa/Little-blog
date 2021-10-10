import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
// MUI imports
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const MainFooter = () => {
  return (
    <div className={styles['main-footer']}>
      <Grid container spacing={5} className={styles['main-footer-top']}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          className={clsx(styles['main-footer-top__about-us'], styles.clearfix)}
        >
          <div className={styles.top}>
            <div className={styles['title']}>
              <Typography variant="h5">about us</Typography>
            </div>
            <div className={styles['content']}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                ratione nemo molestiae ipsam odio sed dignissimos cumque at
                dolore itaque, magnam eos esse aut dolorum ducimus similique
                quam ad excepturi, officiis laudantium aspernatur.
                Reprehenderit, eum. Tempora placeat quasi molestias error nemo
                inventore vitae blanditiis. Repudiandae possimus quidem voluptas
                repellendus adipisci.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Labore, fugiat maxime. Iusto at similique, omnis sapiente
                voluptates ipsa dicta consequuntur!
              </p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles['title']}>
              <Typography variant="h5">about me</Typography>
            </div>
            <div className={styles['content']}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
                dolorum?
              </p>
            </div>
            <div className={styles['content']}></div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          className={styles['main-footer-top__latest-post']}
        >
          <div className={styles['title']}>
            <Typography variant="h5">posts latest</Typography>
          </div>
          <Grid
            container
            className={clsx(styles['posts-box'], styles.clearfix)}
          >
            <Grid item xs={12} sm={12} md={12} className={styles['post']}>
              <div className={styles['post-sumary']}>
                <div className={styles['post-img']}>
                  <Link href="#">
                    <a>
                      <Image
                        width={768}
                        height={506}
                        objectFit="cover"
                        src="/static/images/footer/post-img.webp"
                        alt="img"
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles['post-detail']}>
                  <Typography variant="h3" className={styles['title-post']}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facere.
                  </Typography>
                  <ul>
                    <li>
                      <QueryBuilderIcon />
                      September 10, 2021
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={styles['post']}>
              <div className={styles['post-sumary']}>
                <div className={styles['post-img']}>
                  <Link href="#">
                    <a>
                      <Image
                        width={768}
                        height={506}
                        objectFit="cover"
                        src="/static/images/footer/post-img.webp"
                        alt="img"
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles['post-detail']}>
                  <Typography variant="h3" className={styles['title-post']}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facere.
                  </Typography>
                  <ul>
                    <li>
                      <QueryBuilderIcon />
                      September 10, 2021
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={styles['post']}>
              <div className={styles['post-sumary']}>
                <div className={styles['post-img']}>
                  <Link href="#">
                    <a>
                      <Image
                        width={768}
                        height={506}
                        objectFit="cover"
                        src="/static/images/footer/post-img.webp"
                        alt="img"
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles['post-detail']}>
                  <Typography variant="h3" className={styles['title-post']}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facere.
                  </Typography>
                  <ul>
                    <li>
                      <QueryBuilderIcon />
                      September 10, 2021
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={styles['post']}>
              <div className={styles['post-sumary']}>
                <div className={styles['post-img']}>
                  <Link href="#">
                    <a>
                      <Image
                        width={768}
                        height={506}
                        objectFit="cover"
                        src="/static/images/footer/post-img.webp"
                        alt="img"
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles['post-detail']}>
                  <Typography variant="h3" className={styles['title-post']}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facere.
                  </Typography>
                  <ul>
                    <li>
                      <QueryBuilderIcon />
                      September 10, 2021
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          className={styles['main-footer-top__contact-us']}
        >
          <div className={styles['title']}>
            <Typography variant="h5">Follow us facebook</Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={6} className={styles['main-footer-bottom']}>
        <Grid item xs={12} sm={6} md={6} className={styles['logo-wrapper']}>
          <Link href="/">
            <Typography variant="h1">Little Blog.</Typography>
          </Link>
          <p className={styles['copy-right']}>Created by HoaNguCi. © 2021</p>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={styles['nav']}>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default MainFooter;
