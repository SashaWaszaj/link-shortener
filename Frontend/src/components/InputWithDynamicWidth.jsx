import React, { useRef, useEffect } from "react";
import "../styles/Home.css";

const InputWithDynamicWidth = ({ value, onChange, placeholder, maxWidth }) => {
    const inputRef = useRef(null);

    const adjustInputWidth = () => {
        const input = inputRef.current;
        if (input) {
            const tempSpan = document.createElement("span");
            tempSpan.style.visibility = "hidden";
            tempSpan.style.position = "absolute";
            tempSpan.style.whiteSpace = "nowrap";
            tempSpan.style.font = window.getComputedStyle(input).font;
            tempSpan.textContent = value || placeholder;
            document.body.appendChild(tempSpan);
            const calculatedWidth = tempSpan.offsetWidth + 10;
            const maxWidthPx = window.innerWidth * maxWidth;
            input.style.width = `${Math.min(calculatedWidth, maxWidthPx)}px`;
            document.body.removeChild(tempSpan);
        }
    };

    useEffect(() => {
        adjustInputWidth();
    }, [value]);

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="input"
            style={{
                transition: "width 0.2s ease-in-out",
                maxWidth: `${maxWidth * 100}%`,
                boxSizing: "border-box",
            }}
        />
    );
};

export default InputWithDynamicWidth;
