import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import "../main.css";
import "./logsPage.css";
import {websiteLogs} from '../components/logTexts/websiteLogs'
// import {robotLogs} from '../components/logTexts/robotLogs'

export default function LogsPage({lang}) {
    const [currentLog, setCurrentLog] = useState(websiteLogs)
    const logs ={
        EN : [
            { name: "website", component: websiteLogs},
            {name: "general"}
        ],
        FR : [
            {name: "site web", component: websiteLogs}
        ]
    }
    return (
        <div id="logsPage">
            <div id="logsMenu">
            <ul>
                {
                    logs[lang].map(log => 
                        {
                            return(
                            <li
                            key={log.name}
                            >
                                {
                                    log.name
                                }
                            </li>
                            )
                        }
                    )
                }
                {/* <li>Presenting CRC</li>
                <li>Theme Pitches</li>
                <li>Theme Announcement + Brainstorm</li>
                <li>Viewing Of Fallout</li>
                <li>Getting Things Rolled Off Before Kickoff</li>
                <li>Where Did Writer A. Go?</li> */}
            </ul>
        </div>
        <div id="logsText">
            <h2>Getting Things Rolled Off Before Kickoff</h2>
            <h2>October 25th, 2024</h2>
            <p>
                With the CRC publishing the preliminary rulebook last Tuesday and Kickoff taking place in a couple of days,
                everyone is eager to find out what the official game rules are going to be.
                We’ve been analyzing the Top Secret Tuesdays for the past month, trying to figure out the hints given.
                Speaking of, whatever was that…pixely image? Was it a screwdriver? Everyone thought it was a screwdriver.
                I’m at kickoff and I still can’t tell if that was a screwdriver. One of our members tried to reconstruct
                the warped image of the playing field found in the prelim rulebook, but to no avail. Some robot members 
                think that the game pieces are going to be Xs and Os like in Tic-Tac-Toe (I am writing this during kickoff:
                they are NOT Xs and Os).
                    
                This continues ....
            </p>
            <p>
                (Written oct 29 2024 at 10:58pm)
            </p>
        </div>
        </div>
    );
}