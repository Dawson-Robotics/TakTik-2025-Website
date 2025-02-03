import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navBar.css';

export function NavBar({ lang, setLang }) {
    const navigate = useNavigate();
    const location = useLocation();

    // Define pages with their routes and translations
    const pages = {
        EN: [
            { name: 'Home', path: '/' },
            { name: 'Quest', path: '/quest' },
            { name: 'Team', path: '/team' },
            { name: 'Logs', path: '/logs' },
            { name: 'Media', path: '/media' }
        ],
        FR: [
            { name: 'Accueil', path: '/' },
            { name: 'Quête', path: '/quest' },
            { name: 'Équipe', path: '/team' },
            { name: 'Journaux', path: '/logs' },
            { name: 'Médias', path: '/media' }
        ]
    };

    // Find active index based on current path
    const activeIndex = pages[lang].findIndex(
        page => page.path === location.pathname
    );

    const onLangClick = useCallback(() => {
        setLang(lang === 'EN' ? 'FR' : 'EN');
    }, [lang, setLang]);

    const handleClick = (e, path) => {
        if (e.target.tagName.toLowerCase() === 'a') {
            navigate(path);
        }
    };

    return (
        <nav id="desktop-nav">
            <div id="lang-select" onClick={onLangClick}>
                {lang}
            </div>
            <ul>
                {pages[lang].map((item, index) => (
                    <li
                        key={index}
                        className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={(e) => handleClick(e, item.path)}
                    >
                        <a>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}