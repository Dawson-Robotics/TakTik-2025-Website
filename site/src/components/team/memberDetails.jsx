import './memberDetails.css';
/* eslint-disable react/prop-types */

export function MemberDetails({ member }) {
    return (
        <div id="memberDetailsBackground">
            <div id="memberDetails">
                <img id="backgroundBook" src="/images/ur_special.jpg" />
                <div id="overlay"></div>
                <div id="page">
                    <div id="leftPage">
                        <h1>{member.name}</h1>
                        <img id="memberImage" src={member.imgUrl} />
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
                    </div>
                    <div id="rightPage">
                        <div id="traits">
                            {
                                Object.keys(member.traits).map(t => (
                                    <div
                                        className="memberTrait"
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
                            <div id="memberQuote">
                                {member.quote}
                            </div>
                            <div id="closeBook">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}