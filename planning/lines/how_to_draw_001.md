# Summary

To get the positions of two circles and draw an SVG line between them in React, follow these steps:

# Code

import { useState, useEffect, useRef } from "react";

export default function CirclesWithLine() {
const circle1Ref = useRef(null);
const circle2Ref = useRef(null);
const [linePos, setLinePos] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

useEffect(() => {
const updateLine = () => {
if (circle1Ref.current && circle2Ref.current) {
const rect1 = circle1Ref.current.getBoundingClientRect();
const rect2 = circle2Ref.current.getBoundingClientRect();

        setLinePos({
          x1: rect1.left + rect1.width / 2,
          y1: rect1.top + rect1.height / 2,
          x2: rect2.left + rect2.width / 2,
          y2: rect2.top + rect2.height / 2,
        });
      }
    };

    updateLine();
    window.addEventListener("resize", updateLine);
    return () => window.removeEventListener("resize", updateLine);

}, []);

return (
<div style={{ position: "relative", height: "300px" }}>
{/* SVG Line */}
<svg
style={{
position: "absolute",
top: 0,
left: 0,
width: "100%",
height: "100%",
pointerEvents: "none",
}}
>
<line
x1={linePos.x1}
y1={linePos.y1}
x2={linePos.x2}
y2={linePos.y2}
stroke="red"
strokeWidth="2"
/>
</svg>

      {/* Circle 1 */}
      <div
        ref={circle1Ref}
        style={{
          position: "absolute",
          top: "50px",
          left: "50px",
          width: "50px",
          height: "50px",
          backgroundColor: "blue",
          borderRadius: "50%",
        }}
      ></div>

      {/* Circle 2 */}
      <div
        ref={circle2Ref}
        style={{
          position: "absolute",
          top: "200px",
          left: "250px",
          width: "50px",
          height: "50px",
          backgroundColor: "green",
          borderRadius: "50%",
        }}
      ></div>
    </div>

);
}