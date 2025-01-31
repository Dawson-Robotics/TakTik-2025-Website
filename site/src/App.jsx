import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import { RootLayout } from './components/RootLayout';
import { HomePage } from './pages/homePage';
import MediaPage from './pages/mediaPage';
import QuestPage from './pages/questPage';
import { TeamPage } from './pages/teamPage';
import LogsPage from './pages/logsPage';
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
        },
        {
          path: '/team',
          element: <TeamPage lang={lang} />
        },
        {
          path: '/divisions',
          element: <div />
        },
        {
          path: 'logs',
          element: <LogsPage lang={lang}/>
        },
        {
          path: 'media',
          element: <MediaPage lang={lang}/>
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;