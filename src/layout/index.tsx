import React, { ReactNode } from 'react';
import MainFooter from './footer';
import styles from './index.module.scss';
import TopBar from './top-bar';

interface PropsType {
  children: ReactNode;
}

const MainLayout = (props: PropsType) => {
  const { children } = props;
  return (
    <div className={styles['main-layout']}>
      <TopBar />
      {children}
      <MainFooter />
    </div>
  );
};

export default MainLayout;
