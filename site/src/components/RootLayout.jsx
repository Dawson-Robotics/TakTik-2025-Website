import { Outlet } from 'react-router-dom';
import { NavBar } from './navbar/navBar';
import { MobileNav } from './navbar/mobileNavBar';
export function RootLayout({ lang, setLang }) {
  return (
    <>
      <NavBar lang={lang} setLang={setLang} />
      <MobileNav lang={lang} setLang={setLang} />
      <Outlet />
    </>
  );
}