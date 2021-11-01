import React from 'react';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';

import { store } from '../lib/store';
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
    return (
		<React.StrictMode>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</React.StrictMode>
    );
}

export default App;
