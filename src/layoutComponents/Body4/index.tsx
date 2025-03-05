import "./index.css";

import img_parallax_interior1 from "../../assets/body4/parallax_interior1_trim_transparent.png";
import img_parallax_interior2 from "../../assets/body4/parallax_interior2.png";

import {Device} from "../../utils/constants/constants.ts";

import Content from "./ContentComponent.tsx";
import BodyHeader from "../../components/BodyHeader.tsx";

import {useIntersectingRef} from "../../hooks/useIntersectingRef.tsx";


const headerClipPaths = {
    [Device.mobile]: "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)",
    [Device.tablet]: "polygon(0% 0%, 100% 0%, 100% 100%, 6% 100%)",
    [Device.desktop]: "polygon(0% 0%, 100% 0%, 100% 100%, 4% 100%)",
};

const headerHeights = {
    [Device.mobile]: "166px",
    [Device.tablet]: "110px",
    [Device.desktop]: "210px",
};

const headerLineHeights = {
    [Device.mobile]: "1.4rem",
    [Device.tablet]: "1.2rem",
    [Device.desktop]: "2.6rem",
};
const headerFontSizes = {
    [Device.mobile]: "1.2rem",
    [Device.tablet]: "1.2rem",
    [Device.desktop]: "2.4rem",
};

const headerWidths = {
    [Device.mobile]: "100%",
    [Device.tablet]: "87%",
    [Device.desktop]: "72%",
};

const headerTextPaddings = {
    [Device.mobile]: "5% 15% 0% 15%",
    [Device.tablet]: "4% 1% 0% 10%",
    [Device.desktop]: "2% 0% 0% 10%",
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
    [Device.desktop]: "63%",
};
const contentTextBoxPaddingTops = {
    [Device.mobile]: "85px",
    [Device.tablet]: "45px",
    [Device.desktop]: "150px",
};
const contentTextBoxPaddingBottoms = {
    [Device.mobile]: "85px",
    [Device.tablet]: "45px",
    [Device.desktop]: "150px",
};

const paragraphLineHeights = {
    [Device.mobile]: "1.4rem",
    [Device.tablet]: "1.2rem",
    [Device.desktop]: "2.3rem",
};

const paragraphFontSizes = {
    [Device.mobile]: "1.2rem",
    [Device.tablet]: "1rem",
    [Device.desktop]: "2rem",
};

const paragraphFontWeights = {
    [Device.mobile]: "",
    [Device.tablet]: "500",
    [Device.desktop]: "",
};


const endMarkerHeights = {
    [Device.mobile]: ["400px", "400px"],
    [Device.tablet]: ["280px", "390px"],
    [Device.desktop]: ["800px", "390px"],
};

const imageTransforms = {
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

const smallBubbleWidths = {
    [Device.mobile]: "20px",
    [Device.tablet]: "20px",
    [Device.desktop]: "40px",
};

const smallBubbleLefts: { [device in Device]: string[] } = {
    [Device.mobile]: ["260px", "260px"],
    [Device.tablet]: ["410px", "310px"],
    [Device.desktop]: ["1513px", "1600px"],
};
const smallBubbleTops: { [device in Device]: string[] } = {
    [Device.mobile]: ["100px", "100px"],
    [Device.tablet]: ["100px", "240px"],
    [Device.desktop]: ["291px", "650px"],
};

const bigBubbleLengths = {
    [Device.mobile]: "300px",
    [Device.tablet]: "275px",
    [Device.desktop]: "500px",
};

const bigBubbleFontSizes = {
    [Device.mobile]: "1rem",
    [Device.tablet]: "1rem",
    [Device.desktop]: "1.8rem",
};
const bigBubbleTextLineHeights = {
    [Device.mobile]: "1.2rem",
    [Device.tablet]: "1.2rem",
    [Device.desktop]: "2rem",
};


const bigBubbleTops = {
    [Device.mobile]: ["50%", "50%"],
    [Device.tablet]: ["200px", "0"],
    [Device.desktop]: ["523px", "235px"],
};

const bigBubbleLefts = {
    [Device.mobile]: ["100px", "100px"],
    [Device.tablet]: ["480px", "480px"],
    [Device.desktop]: ["1519px", "1858px"],
};


const contentParagraphs = [
    ["Yes, there are still screens. But instead of the usual MBUX (Mercedes-Benz User Experience) setup, the 12.3-inch instrument panel is housed under a cowl, reflecting the SL's sporty roots.",
        "Dominating the dashboard is the tablet-like 11.9-inch infotainment display, whose tilt angle can be adjusted from 12 degrees to 32 degrees at a touch of a button. It helps minimise screen glare when driving with the top down."],
    ["For the first time in the SL's history, the car has rear seats. They can supposedly accommodate occupants up to 1.5m tall, but the backrests are so upright they seem like they are canted forward.",
        "Also, strangely absent on the test unit are soft-close doors and 'pushers' that bring the seat belts closer to the front passengers."]
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
    const {intersects: showHeader, ref: bodyEntryDiv} = useIntersectingRef(true, 1);

    const showFirstOnly = device == Device.mobile;

    const headerClipPath = headerClipPaths[device] ?? "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)";
    const headerWidth = headerWidths[device] ?? "100%";
    const headerTextPadding = headerTextPaddings[device] ?? "5% 15% 0% 15%";
    const headerHeight = headerHeights[device] ?? "166px";
    const headerLineHeight = headerLineHeights[device] ?? "1.4rem";
    const headerFontSize = headerFontSizes[device] ?? "1.2rem";

    const imageWidth = imageWidths[device] ?? "295%";
    const imageTransform = imageTransforms[device] ?? "translateX(-12px) translateY(-12px)";
    const imageMarginTop = imageMarginTops[device] ?? "-8%";
    const imageMarginLeft = imageMarginLefts[device] ?? "-8%";
    const imageHeight = imageHeights[device] ?? "1000px";

    const contentWidth = contentWidths[device] ?? "100%";
    const contentTextBoxPaddingTop = contentTextBoxPaddingTops[device] ?? "85px";
    const contentTextBoxPaddingBottom = contentTextBoxPaddingBottoms[device] ?? "85px";

    const paragraphLineHeight = paragraphLineHeights[device] ?? "1.4rem";
    const paragraphFontSize = paragraphFontSizes[device] ?? "1.2rem";
    const paragraphFontWeight = paragraphFontWeights[device] ?? "500";

    const endMarkerHeight = endMarkerHeights[device] ?? "400px";
    const smallBubbleWidth = smallBubbleWidths[device] ?? "260px";
    const smallBubbleLeft = smallBubbleLefts[device] ?? "260px";
    const smallBubbleTop = smallBubbleTops[device] ?? "260px";

    const bigBubbleLength = bigBubbleLengths[device] ?? "300px";
    const bigBubbleFontSize = bigBubbleFontSizes[device] ?? "1.2rem";
    const bigBubbleTextLineHeight = bigBubbleTextLineHeights[device] ?? "1.2rem";
    const bigBubbleTop = bigBubbleTops[device] ?? "50%";
    const bigBubbleLeft = bigBubbleLefts[device] ?? "300px";
    return <div className="ao-body4"
                style={{
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    width: "100%",
                    overflow: "hidden"
                }}>
        <div ref={bodyEntryDiv}/>
        <BodyHeader className={"ao-body4-header"} showHeader={showHeader} headerHeight={headerHeight}
                    headerWidth={headerWidth}
                    headerClipPath={headerClipPath} headerTextPadding={headerTextPadding}
                    headerLineHeight={headerLineHeight} headerFontSize={headerFontSize}
                    text={"Modern Mercedes models have interiors designed to elicit wows from the moment you lay eyes on the cockpit, but the SL is going with a 'hyperanalogue' approach."}/>

        <Content
                 imageWidth={imageWidth}
                 imageUrl={img_parallax_interior1}
                 imageAlt={"A sports car's cockpit features mood lighting and tablet like infotainment screen"}
                 imageTransform={imageTransform}
                 imageMarginTop={imageMarginTop}
                 imageMarginLeft={imageMarginLeft}
                 imageHeight={imageHeight}
                 contentWidth={contentWidth}
                 contentTextBoxPaddingTop={contentTextBoxPaddingTop}
                 contentTextBoxPaddingBottom={contentTextBoxPaddingBottom}
                 paragraphLineHeight={paragraphLineHeight}
                 paragraphFontSize={paragraphFontSize}
                 paragraphFontWeight={paragraphFontWeight}
                 bubbleTexts={contentTexts[0].bubbleTexts}
                 paragraphs={contentParagraphs[0]}
                 endMarkerHeight={endMarkerHeight[0]}
                 smallBubbleLeft={smallBubbleLeft[0]}
                 smallBubbleWidth={smallBubbleWidth}
                 smallBubbleTop={smallBubbleTop[0]}
                 bigBubbleLength={bigBubbleLength}
                 bigBubbleTop={bigBubbleTop[0]}
                 bigBubbleTextLineHeight={bigBubbleTextLineHeight}
                 bigBubbleFontSize={bigBubbleFontSize}
                 bigBubbleLeft={bigBubbleLeft[0]}
        />
        {!showFirstOnly &&
            <Content
                imageMarginTop={imageMarginTop}
                imageMarginLeft={imageMarginLeft}
                imageTransform={imageTransform}
                imageHeight={imageHeight}
                imageUrl={img_parallax_interior2}
                imageAlt={"Backseat of a modern sports car"}
                imageWidth={imageWidth}

                paragraphFontSize={paragraphFontSize}
                paragraphFontWeight={paragraphFontWeight}
                paragraphLineHeight={paragraphLineHeight}
                paragraphs={contentParagraphs[1]} bubbleTexts={contentTexts[1].bubbleTexts}
                contentWidth={contentWidth}
                contentTextBoxPaddingBottom={contentTextBoxPaddingBottom}
                contentTextBoxPaddingTop={contentTextBoxPaddingTop}

                bigBubbleTop={bigBubbleTop[1]}
                bigBubbleLeft={bigBubbleLeft[1]}
                bigBubbleLength={bigBubbleLength}
                bigBubbleFontSize={bigBubbleFontSize}
                bigBubbleTextLineHeight={bigBubbleTextLineHeight}

                smallBubbleWidth={smallBubbleWidth}
                smallBubbleTop={smallBubbleTop[1]}
                smallBubbleLeft={smallBubbleLeft[1]}
                endMarkerHeight={endMarkerHeight[1]}
            />}
    </div>;
};

export default Body4;