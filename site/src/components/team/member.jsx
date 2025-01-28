/* eslint-disable react/prop-types */
export function Member({
    member
}){
    return(
        <div className="member">
            <h2 className="memberName">{member.name}</h2>
            <h3>{member.subtitle}</h3>
            <img className="memberPhoto" src={member.imgUrl}/>
        </div>
    )
}