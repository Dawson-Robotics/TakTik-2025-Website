import { Outlet } from 'react-router-dom';
import { NavBar } from './navbar/navBar';

export function RootLayout({ lang, setLang }) {
  return (
    <>
      <NavBar lang={lang} setLang={setLang} />
      <Outlet />
    </>
  );
}