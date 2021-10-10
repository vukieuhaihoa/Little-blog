import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withTranslation } from 'next-i18next';

// MUI imp
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const DetailPost = () => {
  return (
    <div className={styles['detail-post']}>
      <div className={styles['detail-post-container']}>
        <div className={styles['post-img']}>
          <img src="/static/images/post/main.jpeg" alt="post image" />
        </div>
        <div className={clsx(styles['post-title'], styles.clearfix)}>
          <Typography variant="h1">
            Lorem ipsum dolor
            <div className={styles['interract']}>
              <EditIcon />
              <DeleteIcon />
            </div>
          </Typography>
        </div>
        <div className={clsx(styles['post-infor'], styles.clearfix)}>
          <span>
            Author:{' '}
            <b>
              <Link href="/posts?username=Safak">
                <a>Hoa cute</a>
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <div className={styles['post-content']}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
            eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae,
            adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
            doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
            eum beatae, adipisci voluptas a odit modi eos!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default withTranslation('common')(DetailPost);
