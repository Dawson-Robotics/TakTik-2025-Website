import { useState, useCallback } from 'react';
import './navBar.css';
import '../main.css';

export function NavBar({lang, setLang}) {
    
    const pages = {
        EN: ['Home', 'Team', 'Divisions', 'Logs', 'Media'],
        FR: ['Accueil', 'Équipe', 'Divisions', 'Journaux', 'Médias']
    };
    
    const [activeIndex, setActiveIndex] = useState(0);
    
    const onLangClick = useCallback(() => {
        setLang(lang === 'EN' ? 'FR' : 'EN');
    }, [lang, setLang]);
    
    const handleClick = (e) => {
        if (e.target.tagName.toLowerCase() === 'a') {
            
            const clickedText = e.target.textContent;
            const newIndex = pages[lang].findIndex(item => item === clickedText);
            if (newIndex !== -1) {
                setActiveIndex(newIndex);
            }
        }
    };
    
    return (
        <nav>
            <div id="lang-select" onClick={onLangClick}>
                {lang}
            </div>
            <ul onClick={handleClick}>
                {pages[lang].map((item, index) => (
                    <li
                        key={index}
                        className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                    >
                        <a>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}