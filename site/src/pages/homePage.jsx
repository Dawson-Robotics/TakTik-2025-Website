import './homePage.css';
import '../main.css';

export function HomePage({ lang }) {
    const levelText = lang == 'EN' ? 'level' : 'niveaux'
    return (
        <section id="home">
            <section id="home-main">
                <div className="gridCell"/>
                <div id="grid-A" className="gridCell">
                    <pre>
    /\<br/>
   /  \<br/>
  / /\ \<br/>
 / ____ \<br/>
/_/    \_\<br/>
                    </pre>
                </div>
                <div className="gridCell"/>
                <div id="grid-D" className="gridCell">
                    <pre>
                    _____  <br/>
                    |  __ \ <br/>
                    | |  | |<br/>
                    | |  | |<br/>
                    | |__| |<br/>
                    |_____/ <br/>
                    </pre>
                </div>
                <img src="/images/Website image.png"/>
                <div className="gridCell">
                    <pre>
                    __          __<br/>
                    \ \        / /<br/>
                    &nbsp;\ \  /\  / /<br/> 
                    &nbsp;&nbsp;\ \/  \/ /<br/>  
                    &nbsp;&nbsp;&nbsp;\  /\  /<br/>   
                    &nbsp;&nbsp;&nbsp;&nbsp;\/  \/<br/>    
                    </pre>
                </div>
                <div id="grid-T" className="gridCell">
                    <pre>
                           _______&nbsp;<br/> 
                          |__   __|<br/>
                             | |&nbsp;&nbsp;&nbsp;<br/>   
                             | |&nbsp;&nbsp;&nbsp;<br/>   
                             | |&nbsp;&nbsp;&nbsp;<br/>   
                             |_|&nbsp;&nbsp;&nbsp;<br/>   
                    </pre>
                    </div>
                <div className="gridCell">
                    <pre>
                    &nbsp;_____<br/> 
                    / ____|<br/>
                    | |<br/>     
                    | |<br/>     
                    | |___<br/> 
                    \_____|<br/>
                    </pre>
                </div>
                <div className="gridCell"/>
                <div id="grid-E" className="gridCell">
                &nbsp;_______<br/> 
                &nbsp;|&nbsp;&nbsp;____|<br/>
                | |__&nbsp;&nbsp;<br/>   
                &nbsp;| &nbsp;__|&nbsp;&nbsp;<br/>  
                | |____<br/> 
                &nbsp;|______|<br/>
                </div>
                <div className="gridCell"/>
                <div className="gridCell"/>
                <h1>Vault Boy</h1>
                <div className="gridCell"/>
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