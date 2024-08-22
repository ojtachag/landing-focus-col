import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';

const rootElement = ReactDOM.createRoot(document.getElementById('root')!);
rootElement.render(
    <Provider store={store}>
        <App/>
    </Provider>,
);
