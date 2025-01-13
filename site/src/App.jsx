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
        },
        {
          path: '/team',
          element: <HomePage lang={lang} setLang={setLang} />
        },
        {
          path: '/divisions',
          element: <HomePage lang={lang} setLang={setLang} />
        },
        {
          path: '/logs',
          element: <HomePage lang={lang} setLang={setLang} />
        },
        {
          path: '/media',
          element: <HomePage lang={lang} setLang={setLang} />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;