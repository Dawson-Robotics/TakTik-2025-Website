import { Suspense } from "react";
import { ImageWithPlaceholder } from "../placeHolderImage";

/* eslint-disable react/prop-types */
export function Member({
    member
}) {
    return (
        <div className="member">
            <h2 className="memberName">{member.name}</h2>
            <h3>{member.subtitle}</h3>

            <div className="memberPhoto">
                <ImageWithPlaceholder
                    src={member.imgUrl}
                    alt={`image of ${member.name}`}
                    placeholder={<div>Loading...</div>}
                />
            </div>
        </div>
    )
}