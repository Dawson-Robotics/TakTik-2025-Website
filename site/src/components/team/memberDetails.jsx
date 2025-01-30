import './memberDetails.css';
/* eslint-disable react/prop-types */

export function MemberDetails({ member, clickFunction }) {
    return (
        <div id="memberDetailsBackground">
            <div id="memberDetails">
                {/* <img id="backgroundBook" src="/images/ur_special.jpg" /> */}
                <div id="page">
                    <div id="leftPage">
                        <h1 id={`${member.name.length > 18 ? "longName" : ""}`}>{member.name}</h1>
                        <img id="memberImage" src={member.imgUrl} alt={`Image of ${member.name}`} />
                        <div id="memberQuote">
                            {member.quote}
                        </div>
                    </div>
                    <div id="rightPage">
                        <div className={`traits ${member.name == 'Iria' ? 'yapperTraits' : ""}`}>
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
                            <div id="memberTeams">
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
                                className={`closeBook ${member.name == 'Vault Boy' ? 'javiesClose' : ""}`}
                                onClick={clickFunction}
                            >
                                <img src="/images/allDone-cropped.svg" />
                                {/* <div>X</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}