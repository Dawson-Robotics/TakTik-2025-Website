import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import { RootLayout } from './components/RootLayout';
import { HomePage } from './pages/homePage';
import QuestPage from './pages/questPage';
// Import other page components...

function App() {
  const [lang, setLang] = useState('EN');

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout lang={lang} setLang={setLang} />,
      children: [
        {
          index: true, // This makes it the index route
          element: <HomePage lang={lang} setLang={setLang} />
        },
        {
          path: '/quest',
          element: <QuestPage lang={lang} setLang={setLang}/>
        }
        // {
        //   path: 'team',
        //   element: <Team />
        // },
        // {
        //   path: 'divisions',
        //   element: <Divisions />
        // },
        // {
        //   path: 'logs',
        //   element: <Logs />
        // },
        // {
        //   path: 'media',
        //   element: <Media />
        // }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;