import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as uuid from 'uuid';

import Routing from 'pages';

import './index.scss';
import { useStorage, useTheme } from '../shared/hooks';

const queryClient = new QueryClient();

function App() {
    const storage = useStorage();
    useTheme();

    useEffect(() => {
        if (!storage.cookiesGet('device_id')) {
            storage.cookiesSet('device_id', uuid.v4());
        }
    }, []);

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routing />
                <ReactQueryDevtools position="bottom-left" />
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
