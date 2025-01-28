/* eslint-disable react/prop-types */
export function Member({
    member
}){
    return(
        <div className="member">
            <p className="memberName">{member.name}</p>
            <img className="memberPhoto" src={member.imgUrl}/>
        </div>
    )
}