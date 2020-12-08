import React from 'react';
import { AppProps } from 'next/app'
import { wrapper } from '../src/store';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
