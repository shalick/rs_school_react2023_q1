import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'

import { setupStore } from './store/store'
import { hydrateRoot } from 'react-dom/client'

const store = setupStore()

hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
