import type { NextPage } from 'next';
import styles from './index.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withTranslation, useTranslation } from 'next-i18next';
import clsx from 'clsx';
import MainHeader from '../layout/header';
import SideBarHome from '../components/pages/home/side-bar';

// Mui imports
import Grid from '@material-ui/core/Grid';
import ListPostforHome from '../components/pages/home/list-posts-home';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <MainHeader />
      <div className={styles['home-container']}>
        <Grid container className={clsx(styles[''], styles.clearfix)}>
          <Grid item xs={12} sm={12} md={9}>
            <ListPostforHome />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <SideBarHome />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default withTranslation('common')(Home);
