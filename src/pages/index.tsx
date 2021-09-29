import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withTranslation, useTranslation } from 'next-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <h1>{t('header.title')}</h1>
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

export default withTranslation('common')(Home);
