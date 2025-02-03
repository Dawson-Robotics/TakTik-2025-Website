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
    /\<br/><br/>
   /  \<br/><br/>
  / /\ \<br/><br/>
 / ____ \<br/><br/>
/_/    \_\<br/><br/>
                    </pre>
                </div>
                <div className="gridCell"/>
                <div id="grid-D" className="gridCell">
                    <pre>
                    _____  <br/><br/>
                    |  __ \ <br/><br/>
                    | |  | |<br/><br/>
                    | |  | |<br/><br/>
                    | |__| |<br/><br/>
                    |_____/ <br/><br/>
                    </pre>
                </div>
                <img src="/images/Website image.png"/>
                <div className="gridCell">
                    <pre>
                    __          __<br/><br/>
                    \ \        / /<br/><br/>
                    &nbsp;\ \  /\  / /<br/><br/> 
                    &nbsp;&nbsp;\ \/  \/ /<br/><br/>  
                    &nbsp;&nbsp;&nbsp;\  /\  /<br/><br/>   
                    &nbsp;&nbsp;&nbsp;&nbsp;\/  \/<br/><br/>    
                    </pre>
                </div>
                <div id="grid-T" className="gridCell">
                    <pre>
                           _______&nbsp;<br/><br/> 
                          |__   __|<br/><br/>
                             | |&nbsp;&nbsp;&nbsp;<br/><br/>   
                             | |&nbsp;&nbsp;&nbsp;<br/><br/>   
                             | |&nbsp;&nbsp;&nbsp;<br/><br/>   
                             |_|&nbsp;&nbsp;&nbsp;<br/><br/>   
                    </pre>
                    </div>
                <div className="gridCell">
                    <pre>
                    &nbsp;_____<br/><br/> 
                    / ____|<br/><br/>
                    | |<br/><br/>     
                    | |<br/><br/>     
                    | |___<br/><br/> 
                    \_____|<br/><br/>
                    </pre>
                </div>
                <div className="gridCell"/>
                <div id="grid-E" className="gridCell">
                &nbsp;_______<br/><br/> 
                &nbsp;|&nbsp;&nbsp;____|<br/><br/>
                | |__&nbsp;&nbsp;<br/><br/>   
                &nbsp;| &nbsp;__|&nbsp;&nbsp;<br/><br/>  
                | |____<br/><br/> 
                &nbsp;|______|<br/><br/>
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