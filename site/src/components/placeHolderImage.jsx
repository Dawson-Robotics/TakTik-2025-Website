import React, { useState } from "react";

export function ImageWithPlaceholder({ src, alt, placeholder, width, height }) {
    const [isLoaded, setIsLoaded] = useState(false);

    // Only show actual image if we have a src
    const shouldShowImage = src != null;

    return (
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            {(!isLoaded || !shouldShowImage) && (
                <div
                    style={{
                        width: width || "100%",
                        height: height || "100%",
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

            {shouldShowImage && (
                <img
                    width={width}
                    height={height}
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    style={isLoaded ? {} : { visibility: "hidden" }}
                />
            )}
        </div>
    );
}