import "./index.css";
import {COLORS, Device} from "../../utils/constants/constants.ts";

import img_parallax_interior1 from "../../assets/Body4/parallax_interior1_trim_transparent.png";
import img_parallax_interior2 from "../../assets/Body4/parallax_interior2.png";

import {Typography} from "antd";
import {useEffect, useRef, useState} from "react";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import styles from './index.module.css';
import * as React from "react";


const alignCenter = {display: 'flex', alignItems: 'center'};

interface ContentEndMarkerProps {
    handleOnIntersect: (isIntersecting: boolean) => void;
    treshold: number;
}

const ContentEndMarker: React.FC<ContentEndMarkerProps> = ({handleOnIntersect, treshold}) => {
    const endOfTextMarker = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                handleOnIntersect(entry.isIntersecting);
            },
            {threshold: treshold},
        );

        const currRef = endOfTextMarker.current;
        if (currRef) {
            observer.observe(currRef);
        }

        return () => {
            if (currRef) {
                observer.unobserve(currRef);
            }
        };
    }, [handleOnIntersect, treshold]);

    return <div className={"ao-body4-content-end-marker"}
                style={{
                    display: "flex",
                    position: "relative",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "90%",
                    height: "100%",
                    flexGrow: 1,
                    overflow: "hidden",
                    flexDirection: "column",
                }}>
        <div className={"ao-body4-content-end-marker-bg"} style={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            flexDirection: "column",
            opacity: 0.5,
            zIndex: 0,
        }}>
        </div>
        <div ref={endOfTextMarker} className={"ao-body4-end-bg-marker"} style={{display: "flex", width: "100%"}}></div>
    </div>;
};

const ContentImage: React.FC<{
    imgUrl: string, imgWidth: string, transform: string,
    imageMarginTop: string,
    imageMarginLeft: string, showBubble: boolean, bubbleTexts: {
        upper: string,
        lower: string,
    }
}> = ({
          imgUrl,
          imgWidth,
          transform,
          imageMarginTop,
          imageMarginLeft, showBubble, bubbleTexts
      }) => {
    const endOfBackgroundMarkerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(`content image endOfTextMarker ${entry.isIntersecting}`);
                if (entry.isIntersecting) {
                    console.log(`intersecting content image`);
                }
            },
            {threshold: 1},
        );

        const currRef = endOfBackgroundMarkerRef.current;
        if (currRef) {
            observer.observe(currRef);
        }

        return () => {
            if (currRef) {
                observer.unobserve(currRef);
            }
        };
    }, []);


    const outerBubbleFontSize = "1rem";
    const outerBubbleTextLineHeight = "1.2rem";
    return <>
        <div className={"ao-body4-content-image-wrapper"}
            // ref={wrapperRef}
             style={{
                 display: "flex",
                 overflow: "hidden",
                 flexDirection: "column",
                 width: "100%",
                 height: "max-content",
                 alignItems: "center",
                 justifyContent: "center",
             }}>
            <img src={imgUrl} alt={""}
                 style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     width: imgWidth,
                     height: "100%",
                     alignSelf: "center",
                     transform: transform,
                     marginTop: imageMarginTop,
                     marginLeft: imageMarginLeft,
                 }}/>
            <div ref={endOfBackgroundMarkerRef} className={"ao-body4-end-bg-marker"}
                 style={{display: "flex", width: "100%"}}></div>
            {showBubble &&
                <div className={"ao-body4-bubbles-wrapper"} style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    position: "absolute",
                    height: "500px",
                    top: "40%",
                    // background: "white",
                }}>
                    <div className={"ao-body4-small-bubble-wrapper ao-body4-bubble-animate"} style={{
                        backgroundColor: "red",
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        left: "260px",
                        top: "100px",
                        borderRadius: "50%",
                        background: COLORS.PURE_WHITE,
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                        }}>
                        </div>
                    </div>

                    <div className={"ao-body4-big-bubble-wrapper ao-body4-bubble-animate"} style={{
                        backgroundColor: "red",
                        width: "300px",
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        borderRadius: "50%",
                        background: COLORS.STEEL_BLUE,
                        top: "50%",
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                        }}>

                            <div
                                className="carousel-outer-bubble-textuals"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "70%",
                                    height: "70%",
                                }}
                            >
                                <Typography.Text
                                    style={{
                                        fontSize: outerBubbleFontSize,
                                        lineHeight: outerBubbleTextLineHeight,
                                        display: "flex",
                                        textAlign: "center",
                                        color: COLORS.PURE_WHITE,
                                    }}
                                >
                                    {bubbleTexts.upper}

                                </Typography.Text>
                                <Typography.Text
                                    style={{
                                        marginTop: "35px",
                                        fontSize: outerBubbleFontSize,
                                        lineHeight: outerBubbleTextLineHeight,
                                        textAlign: "center",
                                        display: "flex",
                                        color: COLORS.PURE_WHITE,
                                    }}
                                >

                                    {bubbleTexts.lower}
                                </Typography.Text>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>

    </>;
};

interface ContentProps {
    imgUrl: string;
    transform: string;
    imgWidth: string;
    paragraphs: string[];
    imageMarginTop: string;
    imageMarginLeft: string;
    bubbleTexts: {
        upper: string,
        lower: string,
    }
}

const Content: React.FC<ContentProps> = ({
                                             imgUrl,
                                             imgWidth,
                                             transform,
                                             paragraphs,
                                             imageMarginTop,
                                             imageMarginLeft,
                                             bubbleTexts
                                         }) => {

    const [showBubble, setShowBubble] = useState(false);

    return <div className={"ao-body4-content"}
                style={{
                    display: "flex",
                    overflow: "hidden",
                    flexDirection: "column",
                    width: "100%",
                    height: "min-content",
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
        <ContentImage bubbleTexts={bubbleTexts} showBubble={showBubble} imgUrl={imgUrl} imgWidth={imgWidth}
                      transform={transform}
                      imageMarginTop={imageMarginTop}
                      imageMarginLeft={imageMarginLeft}
        ></ContentImage>
        <Parallax className={"parallax"} pages={1.5}
                  style={{
                      display: "flex",
                      position: "absolute",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "90%",
                      // opacity: 0.5,
                      flexDirection: "column",
                      padding: "0% 10% 0% 10%",
                  }}>

            <ParallaxLayer offset={0.25} speed={1.5}
                           style={{
                               display: "flex",
                               width: "100%",
                               top: "29%",
                               justifyContent: "center",
                               position: "absolute",
                               flexDirection: "column",
                               alignItems: "center",
                           }}>
                <div className={"ao-body4-content-parallax-layer"}
                     style={{
                         display: "flex",

                         flexDirection: "column",
                         width: "100%",
                         height: "auto",
                         justifyContent: "center", alignItems: "center",
                         position: "relative",
                     }}>
                    <div className={"ao-body4-content-text-wrapper"} style={{
                        display: "flex",
                        position: "relative",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "90%",
                        height: "max-content",
                        // top: "29%",
                        overflow: "hidden",
                        flexDirection: "column",
                        padding: "0% 10% 0% 10%",
                    }}>
                        <div className={"ao-body4-content-text-bg"} style={{
                            display: "flex",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            flexDirection: "column",
                            backgroundColor: COLORS.TRUE_BLACK,
                            opacity: 0.5,
                            zIndex: 0,
                        }}>

                        </div>
                        <div className={"ao-body4-content-text-paragraphs"}
                             style={{
                                 height: "100%",
                                 display: "flex", flexDirection: "column", rowGap: "20px",
                                 zIndex: 1,
                                 paddingBottom: "85px",
                                 paddingTop: "85px",
                             }}>
                            {paragraphs.map((paragraph, index) => {
                                return <Typography.Text key={index} style={{
                                    color: COLORS.PURE_WHITE,
                                    lineHeight: "1.6rem",
                                    fontSize: "1.2rem",
                                }}>
                                    {paragraph}
                                </Typography.Text>;
                            })}
                        </div>
                    </div>
                </div>
                <ContentEndMarker handleOnIntersect={(isIntersecting) => {
                    setShowBubble(isIntersecting);
                }} treshold={1}/>
            </ParallaxLayer>
        </Parallax>

        {/*<ParallaxLayer className={"stickkkie"} sticky={{start: 0, end: 1.5}}*/}
        {/*               style={{display: "100%", width: "100%",}}>*/}

        {/*</ParallaxLayer>*/}

    </div>;
    return <div className={"ao-body4-content"}
                style={{
                    display: "flex",
                    overflow: "hidden",
                    flexDirection: "column",
                    width: "100%",
                    height: "min-content",
                    position: "relative",
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
        <div className={"ao-body4-content-text-wrapper"} style={{
            display: "flex",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: "56%",
            top: "29%",
            overflow: "hidden",
            flexDirection: "column",
            padding: "0% 10% 0% 10%",
        }}>
            <div className={"ao-body4-content-text-bg"} style={{
                display: "flex",
                position: "absolute",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                flexDirection: "column",
                backgroundColor: COLORS.TRUE_BLACK,
                opacity: 0.5,
                zIndex: 0,
            }}>

            </div>
            <div className={"ao-body4-content-text-paragraphs"}
                 style={{
                     height: "100%",
                     display: "flex", flexDirection: "column", rowGap: "20px",
                     zIndex: 1,
                     paddingTop: "85px",
                 }}>
                {paragraphs.map((paragraph, index) => {
                    return <Typography.Text key={index} style={{
                        color: COLORS.PURE_WHITE,
                        lineHeight: "1.6rem",
                        fontSize: "1.2rem",

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
    [Device.tablet]: "polygon(0% 0%, 100% 0%, 100% 100%, 6% 100%)",
    [Device.desktop]: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
};
const headerHeights = {
    [Device.mobile]: "166px",
    [Device.tablet]: "76px",
    [Device.desktop]: "100px",
};
const imgWidths = {
    [Device.mobile]: "295%",
    [Device.tablet]: "100%",
    [Device.desktop]: "100%",
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

const headerWidths = {
    [Device.mobile]: "100%",
    [Device.tablet]: "87",
    [Device.desktop]: "",
};

const headerTextPaddings = {
    [Device.mobile]: "5% 15% 0% 15%",
    [Device.tablet]: "2% 1% 0% 10%",
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
    const imgWidth = imgWidths[device] ?? "295%";
    const imgTransform = imgTransforms[device] ?? "translateX(-12px) translateY(-12px)";
    const imageMarginTop = imageMarginTops[device] ?? "-8%";
    const imageMarginLeft = imageMarginLefts[device] ?? "-8%";

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

        <Content paragraphs={contentParagraphs[0]} bubbleTexts={contentTexts[0].bubbleTexts} imgWidth={imgWidth}
                 imgUrl={img_parallax_interior1}
                 transform={imgTransform}
                 imageMarginTop={imageMarginTop}
                 imageMarginLeft={imageMarginLeft}

        />
        {!showFirstOnly &&
            <Content
                imageMarginTop={imageMarginTop}
                imageMarginLeft={imageMarginLeft}
                paragraphs={contentParagraphs[1]} bubbleTexts={contentTexts[1].bubbleTexts} imgWidth={imgWidth}
                imgUrl={img_parallax_interior2}
                transform=""/>}
    </div>;

    return <div className="ao-body4"
                style={{
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    width: "100%",
                    overflow: "hidden",
                    height: "min-content",
                }}>
        <Parallax pages={3} style={{height: "100px"}}>
            <ParallaxLayer sticky={{start: 0, end: 2}}
                           style={{...alignCenter, backgroundColor: "black", justifyContent: 'flex-start'}}>
                <div className={`${styles.card} ${styles.sticky}`}>
                    <p>I'm a sticky layer</p>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={1.5} style={{...alignCenter, justifyContent: 'flex-end'}}>
                <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
                    <p>I'm not</p>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2.5} speed={1.5} style={{...alignCenter, justifyContent: 'flex-end'}}>
                <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                    <p>Neither am I</p>
                </div>
            </ParallaxLayer>
        </Parallax>
    </div>;
};

export default Body4;