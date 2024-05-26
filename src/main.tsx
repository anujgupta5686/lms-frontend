import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Toaster } from "react-hot-toast";
import { thunk } from 'redux-thunk';
import rootReducer from './reducer';

const queryClient = new QueryClient();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(thunk),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
