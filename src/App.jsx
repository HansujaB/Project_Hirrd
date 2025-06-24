import './App.css'
import AppLayout from "./layouts/app-layout"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Onboarding from './pages/Onboarding';
import JobListing from './pages/JobListing';
import LandingPage from './pages/LandingPage';
import MyJobs from './pages/MyJobs';
import Job from './pages/Job';
import SavedJobs from './pages/SavedJobs';
import PostJob from './pages/PostJob';
import { ThemeProvider } from './components/theme-provider';

const router=createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPage />
      },
      {
        path:'/onboarding',
        element:<Onboarding />
      },
      {
        path:'/joblisting',
        element:<JobListing />
      },
      {
        path:'/myJobs',
        element:<MyJobs />
      },
      {
        path:'/job',
        element:<Job />
      },
      {
        path:'/savedjobs',
        element:<SavedJobs />
      },
      {
        path:'/postjob',
        element:<PostJob />
      },
      {
        path:'/job/:id',
        element:<Job />
      }

    ]
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'> 
        <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
