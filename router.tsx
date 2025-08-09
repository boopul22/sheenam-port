import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ProposalPage from './components/ProposalPage';

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/proposal",
    element: <ProposalPage />,
  },
]);

// Router component that provides the routing context
const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
