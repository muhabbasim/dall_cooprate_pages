
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store/Store';
import Spinner from './components/spinner/Spinner';
import './utils/i18n';
import './_mockApis';
import './index.css'
import { AuthContextProvider } from './context/authContext';
import ReactQueryProvider from './utils/ReactQeuryProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <AuthContextProvider>
      <ReactQueryProvider>
          <App />
      </ReactQueryProvider>
        </AuthContextProvider>
      </Suspense>
    </Provider>,
  </BrowserRouter>
)
