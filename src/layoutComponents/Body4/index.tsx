import "./index.css";
import {COLORS, Device} from "../../utils/constants/constants.ts";

import img_parallax_interior1 from "../../assets/Body4/parallax_interior1_trim_transparent.png";
import img_parallax_interior2 from "../../assets/Body4/parallax_interior2.png";

import Content from "./ContentComponent.tsx";

import {Typography} from "antd";
import {useEffect, useRef, useState} from "react";


const headerClipPaths = {
    [Device.mobile]: "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)",
    [Device.tablet]: "polygon(0% 0%, 100% 0%, 100% 100%, 6% 100%)",
    [Device.desktop]: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
};

const headerHeights = {
    [Device.mobile]: "166px",
    [Device.tablet]: "110px",
    [Device.desktop]: "100px",
};
const headerLineHeights = {
    [Device.mobile]: "1.4rem",
    [Device.tablet]: "1.2rem",
    [Device.desktop]: "100px",
};

const headerWidths = {
    [Device.mobile]: "100%",
    [Device.tablet]: "87%",
    [Device.desktop]: "",
};

const headerTextPaddings = {
    [Device.mobile]: "5% 15% 0% 15%",
    [Device.tablet]: "4% 1% 0% 10%",
    [Device.desktop]: "",
};


const imageWidths = {
    [Device.mobile]: "295%",
    [Device.tablet]: "min-content",
    [Device.desktop]: "100%",
};

const imageHeights = {
    [Device.mobile]: "1000px",
    [Device.tablet]: "850px",
    [Device.desktop]: "2000px",
};

const contentWidths = {
    [Device.mobile]: "90%",
    [Device.tablet]: "73%",
    [Device.desktop]: "2000px",
};
const contentTextBoxPaddingTops = {
    [Device.mobile]: "85px",
    [Device.tablet]: "45px",
    [Device.desktop]: "50px",
};
const contentTextBoxPaddingBottoms = {
    [Device.mobile]: "85px",
    [Device.tablet]: "45px",
    [Device.desktop]: "50px",
};

const paragraphLineHeights = {
    [Device.mobile]: "1.4rem",
    [Device.tablet]: "1.2rem",
    [Device.desktop]: "1rem",
};

const paragraphFontSizes = {
    [Device.mobile]: "1.2rem",
    [Device.tablet]: "1rem",
    [Device.desktop]: "1rem",
};

const paragraphFontWeights = {
    [Device.mobile]: "",
    [Device.tablet]: "500",
    [Device.desktop]: "",
};

const imgTransforms = {
    [Device.mobile]: "",
    [Device.tablet]: "",
    [Device.desktop]: "",
};

const imageMarginTops = {
    [Device.mobile]: "-8%",
    [Device.tablet]: "",
    [Device.desktop]: "",
};

const imageMarginLefts = {
    [Device.mobile]: "-8%",
    [Device.tablet]: "",
    [Device.desktop]: "",
};


const contentParagraphs = [
    ["Yes, there are still screens. But instead of the usual MBUX (Mercedes-Benz User Experience) setup, the 12.3-inch instrument panel is housed under a cowl, reflecting the SL's sporty roots.", "Dominating the dashboard is the\n" +
    "tablet-like 11.9-inch display, whose tilt angle can adjusted from 12 degrees to degrees at a touch of a button. It helps minimise screen glare driving with the top down."],
    ["For the first time in the SL's history, the car has rear seats. They can supposedly accommodate occupants up to 1.5m tall, but the backrests are so upright they seem like they are canted forward.", "Also, strangely absent on the test unit are soft-close doors and 'pushers' that bring the seat belts closer to the front passengers."]
];

const contentTexts = [
    {
        paragraphs: contentParagraphs[0],
        bubbleTexts: {
            upper: "Snazzy cockpit features mood lighting and tablet like infotainment screen, but the heat from the engine can make occupants uncomfortable.",
            lower: "PHOTO: sgCarMart"
        }
    }, {
        paragraphs: contentParagraphs[1],
        bubbleTexts: {
            upper: "It looks uncomfortable from this angle, but Mercedes says the backseats can accommodate passengers up to 1.5m tall..",
            lower: "PHOTO: sgCarMart"
        }
    }
];

export const Body4: React.FC<{ device: Device }> = ({device}) => {
    const [showHeader, setShowHeader] = useState(false);
    const bodyEntryDiv = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowHeader(entry.isIntersecting);
                }
            },
            {threshold: 1},
        );

        const currRef = bodyEntryDiv.current;
        if (currRef) {
            observer.observe(currRef);
        }

        return () => {
            if (currRef) {
                observer.unobserve(currRef);
            }
        };
    }, []);

    const showFirstOnly = device == Device.mobile;

    const headerClipPath = headerClipPaths[device] ?? "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)";
    const headerWidth = headerWidths[device] ?? "100%";
    const headerTextPadding = headerTextPaddings[device] ?? "5% 15% 0% 15%";
    const headerHeight = headerHeights[device] ?? "166px";
    const headerLineHeight = headerLineHeights[device] ?? "1.4rem";

    const imageWidth = imageWidths[device] ?? "295%";
    const imgTransform = imgTransforms[device] ?? "translateX(-12px) translateY(-12px)";
    const imageMarginTop = imageMarginTops[device] ?? "-8%";
    const imageMarginLeft = imageMarginLefts[device] ?? "-8%";
    const imageHeight = imageHeights[device] ?? "1000px";

    const contentWidth = contentWidths[device] ?? "100%";
    const contentTextBoxPaddingTop = contentTextBoxPaddingTops[device] ?? "85px";
    const contentTextBoxPaddingBottom = contentTextBoxPaddingBottoms[device] ?? "85px";
    const paragraphLineHeight = paragraphLineHeights[device] ?? "1.4rem";
    const paragraphFontSize = paragraphFontSizes[device] ?? "1.2rem";
    const paragraphFontWeight = paragraphFontWeights[device] ?? "500";
    return <div className="ao-body4"
                style={{
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    width: "100%",
                    overflow: "hidden"
                }}>
        <div ref={bodyEntryDiv}/>
        <div className={"ao-body4-header"} style={{
            display: "flex",
            position: "absolute",
            height: headerHeight,
            zIndex: 1000,
            width: "100%",
            justifyContent: "end",
            transform: showHeader ? "translateX(0)" : "translateX(100%)",
            transition: "transform 3s ease-in-out, opacity 1s ease-in-out",
        }}>
            <div className={"ao-body4-header-text"} style={{
                display: "flex",
                backgroundColor: COLORS.DEEP_OLIVE,
                width: headerWidth,
                clipPath: headerClipPath,

            }}>
                <Typography.Text style={{
                    color: COLORS.WALNUT_BROWN,
                    padding: headerTextPadding,
                    lineHeight: headerLineHeight,
                    fontSize: "1.2rem",
                    fontWeight: "700",
                }}>
                    Modern Mercedes models have
                    interiors designed to elicit wows from
                    the moment you lay eyes on the
                    cockpit, but the SL is going with a
                    'hyperanalogue' approach.
                </Typography.Text>
            </div>
        </div>

        <Content paragraphs={contentParagraphs[0]} bubbleTexts={contentTexts[0].bubbleTexts} imageWidth={imageWidth}
                 imageUrl={img_parallax_interior1}
                 transform={imgTransform}
                 imageMarginTop={imageMarginTop}
                 imageMarginLeft={imageMarginLeft}
                 imageHeight={imageHeight}
                 contentWidth={contentWidth}
                 contentTextBoxPaddingTop={contentTextBoxPaddingTop}
                 paragraphLineHeight={paragraphLineHeight}
                 contentTextBoxPaddingBottom={contentTextBoxPaddingBottom}
                 paragraphFontSize={paragraphFontSize}
                 paragraphFontWeight={paragraphFontWeight}
        />
        {!showFirstOnly &&
            <Content
                paragraphFontWeight={paragraphFontWeight}
                paragraphFontSize={paragraphFontSize}
                paragraphLineHeight={paragraphLineHeight}
                imageHeight={imageHeight}
                contentWidth={contentWidth}
                imageMarginTop={imageMarginTop}
                imageMarginLeft={imageMarginLeft}
                contentTextBoxPaddingTop={contentTextBoxPaddingTop}
                contentTextBoxPaddingBottom={contentTextBoxPaddingBottom}
                paragraphs={contentParagraphs[1]} bubbleTexts={contentTexts[1].bubbleTexts} imageWidth={imageWidth}
                imageUrl={img_parallax_interior2}
                transform=""/>}
    </div>;
};

export default Body4;