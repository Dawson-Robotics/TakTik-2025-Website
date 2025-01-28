import React, { useState } from "react";

export function ImageWithPlaceholder({ src, alt, placeholder }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div style={{ position: "relative", display: "flex", justifyContent:"Center" }}>
            {!isLoaded && (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#e0e0e0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                >
                    {placeholder || "Loading..."}
                </div>
            )}

            {/* Image */}
            <img
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)} // Set state to true when image loads
                style={isLoaded ? {} : { visibility: "hidden" }} // Hide image until loaded
            />
        </div>
    );
}