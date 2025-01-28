import { Member } from "../components/team/member";
import ENMembersInfo from "../components/team/members/english"
import FRMembersInfo from "../components/team/members/french"
import './teamPage.css'
export function TeamPage({ lang }) {

    const priorityList = [
        "Jacob Rodrigo",
        "Anné-Marie Andrei",
        "Vlad Bretan",
        "Callahan Lowe",
        "Eden Atlas",
        "Nathan Bokobza",
        "Adam Clarke",
        "Adam Winter",
        "Safin Haque",
        "Tinh Ramdani"
    ]
    const members = {
        EN: ENMembersInfo,
        FR: FRMembersInfo
    }

    // Sort the ENMembersInfo array based on the priorityList
    members[lang].sort((a, b) => {
        const indexA = priorityList.indexOf(a.name);
        const indexB = priorityList.indexOf(b.name);

        
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }
        
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;

        
        return 0;
    });

    return (
        <section id="teamPage">
            <h2>Team Members</h2>
            <section id="teamMembersGrid">
                {
                    members[lang].map( member =>(
                        <Member 
                            key={member.name}
                            member={member}
                        />
                    ))
                }
            </section>
        </section>
    )
}