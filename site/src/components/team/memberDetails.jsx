import { useCallback } from 'react';
import './memberDetails.css';
/* eslint-disable react/prop-types */

export function MemberDetails({ member, clickFunction, lang }) {

    const handleClick = useCallback((e) => {
        const closeButton = e.currentTarget;
        closeButton.classList.add('flashing');

        setTimeout(() => {
            closeButton.classList.remove('flashing');
            clickFunction();
        }, 500);
    }, [clickFunction]);

    return (
        <div id="memberDetailsBackground">
            <div id="memberDetails">
                    <div id="leftPage">
                        <h1 id={`${member.name.length > 15 ? "longName" : ""}`}>{member.name}</h1>
                        <img id="memberImage" src={member.imgUrl} alt={`Image of ${member.name}`} />
                        <div id="memberQuote" className={`${member.name == 'Eden Atlas' ? 'yapper' : member.name == 'Ian' ? 'yapper' : ""}`}>
                            {member.quote}
                        </div>
                    </div>
                    <div id="rightPage">
                        <div className={`traits ${member.name == 'Ian' ? 'yapperTraits' : ""}`}>
                            {
                                Object.keys(member.traits).map(t => (
                                    <div
                                        className={`memberTrait`}
                                        key={t}>
                                        <div>
                                            {t}
                                        </div>
                                        <div className="traitValue">
                                            {member.traits[t]}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div id="bookBottom">
                            <div id="memberTeams" className={`${member.name =='Vlad Bretan' ? 'vladTeams' : member.name == 'Ian' ? 'IanTeams' : ""}`}>
                                {
                                    member.teams.map(team => (
                                        <div
                                            key={team}
                                        >
                                            {team}
                                        </div>
                                    ))
                                }
                            </div>
                            <div
                                className={`closeBook ${member.name == 'Vault Boy' ? 'javiesClose' : member.name =='Vlad Bretan' ? 'vladClose' : ""}`}
                                onClick={handleClick}
                            >
                                <img src={`${lang == 'EN' ? '/images/allDone-cropped.svg' : '/images/terminé-cropped.svg'}`} />
                            </div>
                        </div>
                </div>
            </div>
        </div>

    )
}