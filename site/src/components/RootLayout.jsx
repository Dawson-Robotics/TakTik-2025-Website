import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export function RootLayout({ lang, setLang }) {
  return (
    <>
      <NavBar lang={lang} setLang={setLang} />
      <Outlet />
    </>
  );
}