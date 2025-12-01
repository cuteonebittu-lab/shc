import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './router';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
