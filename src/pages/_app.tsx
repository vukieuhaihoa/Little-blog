import '../../styles/globals.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../styles/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import MainLayout from '../layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Hoa with Blog</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </ThemeProvider>
  );
}
export default appWithTranslation(App);
