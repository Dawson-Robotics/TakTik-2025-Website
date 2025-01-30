import { ImageWithPlaceholder } from "../placeHolderImage";
import { useEffect, useRef, useState } from "react";
/* eslint-disable react/prop-types */
export function Member({
    member,
    clickFunction
}) {
    const [showCard, setShowCard] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setShowCard(true);
                observer.disconnect();
            }

        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);


    return (

        <div
            ref={ref}
            className="member"
            onClick={() => clickFunction(member)}
        >
            <h2 className="memberName">{member.name}</h2>
            <h3>{member.subtitle}</h3>

            <div className="memberPhoto">
                <ImageWithPlaceholder
                    src={showCard ? member.imgUrl : null}
                    alt={`image of ${member.name}`}
                    placeholder={<div>Loading...</div>}
                    width="90px"
                />
            </div>
        </div>

    )
}