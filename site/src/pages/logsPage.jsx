import { useState, useRef, useEffect } from 'react';
import { websiteLogs } from '../components/logTexts/websiteLogs';
import { throttle } from 'lodash';
import './logsPage.css';

export function LogsPage({ lang }) {
    const [currentTeam, setCurrentTeam] = useState('general');
    const [selectedIndex, setSelectedIndex] = useState(0); 

    
    const teamLogs = {
        website: websiteLogs,
        // Add other team logs here as they become available
    };

    // Team names for the top menu
    const teams = {
        EN: [
            { id: 'general', name: 'GENERAL' },
            { id: 'robot', name: 'ROBOT' },
            { id: 'kiosk', name: 'KIOSK' },
            { id: 'website', name: 'WEBSITE' },
            { id: 'video', name: 'VIDEO' },
        ],
        FR: [
            { id: 'general', name: 'GÉNÉRAL' },
            { id: 'robot', name: 'ROBOT' },
            { id: 'kiosk', name: 'KIOSQUE' },
            { id: 'website', name: 'SITE WEB' },
            { id: 'video', name: 'VIDÉO' },
        ]
    };

    // Get current team index
    const currentIndex = teams[lang].findIndex(team => team.id === currentTeam);

    // Get the current team's logs in the selected language
    const currentTeamLogs = teamLogs[currentTeam]?.[lang] || [];

    // Get the current entry based on the selected index
    const currentEntry = currentTeamLogs[selectedIndex] 
        ? Object.keys(currentTeamLogs[selectedIndex])[0]
        : null;

    // Find the current entry's content
    const currentEntryContent = currentEntry 
        ? currentTeamLogs[selectedIndex][currentEntry]
        : null;

    return (
        <div id="logsPage">
            {/* Top Navigation Bar */}
            <div id="logTeamsList">
                {teams[lang].map((team, index) => {
                    // Calculate distance from current item
                    const distance = Math.abs(index - currentIndex);

                    return (
                        <p
                            key={team.id}
                            onClick={() => {
                                setCurrentTeam(team.id);
                                setSelectedIndex(0); 
                            }}
                            className={`logTeamNames ${distance === 0 ? 'selectedTeam' : distance === 1 ? 'adjacentTeam' : distance === 2 ? 'distantTeam' : 'veryDistantTeam'}`}>
                            {team.name}
                        </p>
                    );
                })}
            </div>

            <div id="logsBody">
                {/* Log Entries Sidebar */}
                <ul id="logDateList">
                    {currentTeamLogs.map((entry, index) => {
                        const entryKey = Object.keys(entry)[0];
                        return (
                            <li
                                key={entryKey}
                                onClick={() => setSelectedIndex(index)}
                                className={`logDate ${selectedIndex === index ? 'selectedDate' : ''}`}
                            >
                                LOG: {entryKey}
                            </li>
                        );
                    })}
                </ul>

                {/* Log Content */}
                <div id="logContentBody">
                    {currentEntryContent ? (
                        <div>
                            <h2 className="logTitle">{currentEntry}</h2>
                            <div className="logContent">
                                {currentEntryContent}
                            </div>
                        </div>
                    ) : (
                        <p className="logContent">
                            {lang === 'EN'
                                ? 'SELECT AN ENTRY TO VIEW ITS CONTENT'
                                : 'SÉLECTIONNEZ UNE ENTRÉE POUR VOIR SON CONTENU'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}