import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ProposalPage from './components/ProposalPage';

// Create the router configuration with future flags
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/proposal",
    element: <ProposalPage />,
  },
  // Catch-all route for 404s - redirect to home
  {
    path: "*",
    element: <App />,
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

// Router component that provides the routing context
const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
