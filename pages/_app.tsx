/* ./pages/_app.tsx */

import React from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Provider } from 'react-redux';

import { store } from '../lib/store';
import '../styles/globals.css'


function App({ Component, pageProps }: AppProps) {
    return (
		<React.StrictMode>
			<Provider store={store}>
				<Head>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1, shrink-to-fit=no'
					/>
					<title>Yieldfolio - Demo Inc.</title>
				</Head>

				<Component {...pageProps} />
			</Provider>
		</React.StrictMode>
    );
}

export default App;
