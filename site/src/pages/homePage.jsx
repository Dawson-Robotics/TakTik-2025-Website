import './homePage.css';
import '../main.css';

export function HomePage({ lang, setLang }) {
    const levelText = lang == 'EN' ? 'level' : 'niveaux'
    return (
        <section id="home">
            <section id="home-main">
            </section>
            <footer id="char-info">
                <div id="health-Points">
                    HP 200/200
                </div>
                <div id="level">
                    <div id="level-text">
                        {levelText} 8
                    </div>
                    <div id="xp-bar">
                        <div id="xp-earned"></div>
                    </div>
                </div>
                <div id="action-Points">
                    AP 70/90
                </div>
            </footer>
        </section>
    )
}