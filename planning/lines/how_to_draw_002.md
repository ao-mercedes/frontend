# Summary

If you want to draw lines between circles using offsets from the parent boundary, you can modify the approach by:

Getting circle positions relative to the parent container.
Using the parent’s offset as a reference for the SVG coordinates.
Ensuring the <svg> stays within the parent, not the whole window.

# Code

import { useState, useEffect, useRef } from "react";

export default function CirclesWithLine() {
const parentRef = useRef<HTMLDivElement>(null);
const circle1Ref = useRef<HTMLDivElement>(null);
const circle2Ref = useRef<HTMLDivElement>(null);
const [linePos, setLinePos] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

useEffect(() => {
const updateLine = () => {
if (
parentRef.current &&
circle1Ref.current &&
circle2Ref.current
) {
const parentRect = parentRef.current.getBoundingClientRect();
const rect1 = circle1Ref.current.getBoundingClientRect();
const rect2 = circle2Ref.current.getBoundingClientRect();

        setLinePos({
          x1: rect1.left + rect1.width / 2 - parentRect.left,
          y1: rect1.top + rect1.height / 2 - parentRect.top,
          x2: rect2.left + rect2.width / 2 - parentRect.left,
          y2: rect2.top + rect2.height / 2 - parentRect.top,
        });
      }
    };

    updateLine();
    window.addEventListener("resize", updateLine);
    return () => window.removeEventListener("resize", updateLine);

}, []);

return (
<div
ref={parentRef}
style={{
position: "relative",
width: "400px",
height: "300px",
border: "2px solid black",
}}
>
{/* SVG Line inside the Parent */}
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
