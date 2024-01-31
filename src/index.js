import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { store } from './app/store';
import './components/style.css';

// ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
</React.StrictMode>
);