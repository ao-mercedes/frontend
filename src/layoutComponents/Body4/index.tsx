import {COLORS, Device} from "../../utils/constants/constants.ts";

import img_parallax_interior1 from "../../assets/Body4/parallax_interior1_trim_transparent.png";
import img_parallax_interior2 from "../../assets/Body4/parallax_interior2.png";

import {Typography} from "antd";
import {useEffect, useRef, useState} from "react";

interface ContentProps {
    imgUrl: string;
    transform: string;
    imgWidth: string;
    paragraphs: string[];
}

const Content: React.FC<ContentProps> = ({
                                             imgUrl,
                                             imgWidth,
                                             transform,
                                             paragraphs
                                         }) => {
    return <div className={"ao-body4-content"}
                style={{
                    display: "flex",
                    overflow: "hidden",
                    flexDirection: "column",
                    width: "100%",
                    height: "min-content",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
        <div className={"ao-body4-content-image-wrapper"}
             style={{display: "flex", overflow: "hidden", flexDirection: "column", width: "100%", height: "1000px"}}>
            <img src={imgUrl} alt={""}
                 style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     width: imgWidth,
                     height: "100%",
                     alignSelf: "center",
                     transform: transform,
                 }}/>
        </div>
        <div className={"ao-body4-content-text"} style={{
            display: "flex",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            height: "60%",
            overflow: "hidden",
            flexDirection: "column",
            backgroundColor: COLORS.PURE_WHITE,
            opacity: 0.7,
            padding: "0% 15% 0% 15%",
        }}>
            <div className={"ao-body4-content-text-paragraphs"}
                 style={{display: "flex", flexDirection: "column", rowGap: "20px"}}>
                {paragraphs.map((paragraph, index) => {
                    return <Typography.Text key={index} style={{
                        color: COLORS.WALNUT_BROWN,
                        lineHeight: "1.4rem",
                        fontSize: "1.2rem",
                        fontWeight: "700",
                    }}>
                        {paragraph}
                    </Typography.Text>;
                })}
            </div>
        </div>
    </div>;
};


const headerClipPaths = {
    [Device.mobile]: "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)",
    [Device.tablet]: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    [Device.desktop]: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
};
const headerHeights = {
    [Device.mobile]: "166px",
    [Device.tablet]: "100px",
    [Device.desktop]: "100px",
};
const imgWidths = {
    [Device.mobile]: "295%",
    [Device.tablet]: "100%",
    [Device.desktop]: "100%",
};

const imgTransforms = {
    [Device.mobile]: "translateX(-12px) translateY(-20px)",
    [Device.tablet]: "",
    [Device.desktop]: "",
};


const contentParagraphs = [
    ["Yes, there are still screens. But instead of the usual MBUX (Mercedes-Benz User Experience) setup, the 12.3-inch instrument panel is housed under a cowl, reflecting the SL's sporty roots.", "Dominating the dashboard is the\n" +
    "tablet-like 11.9-inch display, whose tilt angle can adjusted from 12 degrees to degrees at a touch of a button. helps minimise screen glare driving with the top down."],
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

    const headerHeight = headerHeights[device] ?? "200px";
    const imgWidth = imgWidths[device] ?? "295%";
    const imgTransform = imgTransforms[device] ?? "translateX(-12px) translateY(-12px)";
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
                width: "100%",
                clipPath: headerClipPath,

            }}>
                <Typography.Text style={{
                    color: COLORS.WALNUT_BROWN,
                    padding: "5% 15% 0% 15%",
                    lineHeight: "1.4rem",
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

        <Content paragraphs={contentParagraphs[0]} imgWidth={imgWidth} imgUrl={img_parallax_interior1}
                 transform={imgTransform}/>
        {!showFirstOnly &&
            <Content paragraphs={contentParagraphs[1]} imgWidth={imgWidth} imgUrl={img_parallax_interior2}
                     transform=""/>}
    </div>;
};

export default Body4;