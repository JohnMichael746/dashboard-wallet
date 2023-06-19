import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// Tailwind css
import '../src/tailwind.css';

// i18n (needs to be bundled)
import '../src/i18n';

// Router
import { RouterProvider } from 'react-router-dom';
import router from '../src/router/index';

// Redux
import { Provider } from 'react-redux';
import store from '../src/store/index';

export default () => {
  return (
    <Suspense>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  );
};
