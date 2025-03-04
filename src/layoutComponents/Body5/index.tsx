import "./index.css";
import {COLORS, Device} from "../../utils/constants/constants.ts";

// import img_parallax_interior1 from "../../assets/body5/parallax_interior1_trim_transparent.png";
// import img_parallax_interior2 from "../../assets/body5/parallax_interior2.png";
//
// import Content from "./ContentComponent.tsx";
//
// import {Typography} from "antd";
// import {useEffect, useRef, useState} from "react";
import {useEffect, useRef,} from "react";
import {Typography} from "antd";
import {UnbrokenPage} from "../pageSizes.tsx";
//
//
// const footerMarginTops = {
//     [Device.mobile]: "70px",
//     [Device.tablet]: "70px",
//     [Device.desktop]: "140px",
// };
//
// const footerTextPaddingLefts = {
//     [Device.mobile]: "15%",
//     [Device.tablet]: "8%",
//     [Device.desktop]: "10%",
// };
//
//
// const footerPaddingBottoms = {
//     [Device.mobile]: "25px",
//     [Device.tablet]: "25px",
//     [Device.desktop]: "25px",
// };
// const footerWidths = {
//     [Device.mobile]: "95%",
//     [Device.tablet]: "95%",
//     [Device.desktop]: "75%",
// };
// const footerClipPaths = {
//     [Device.mobile]: "polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)",
//     [Device.tablet]: "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)",
//     [Device.desktop]: "polygon(0% 0%, 97% 0%, 100% 100%, 0% 100%)",
// };
// const footerPaddingTops = {
//     [Device.mobile]: "25px",
//     [Device.tablet]: "25px",
//     [Device.desktop]: "25px",
// };
// const footerLineHeights = {
//     [Device.mobile]: "2.5rem",
//     [Device.tablet]: "2.5rem",
//     [Device.desktop]: "5rem",
// };
// const footerFontSizes = {
//     [Device.mobile]: "2.3rem",
//     [Device.tablet]: "2.3rem",
//     [Device.desktop]: "5rem",
// };
//
// const rightFooterHeights = {
//     [Device.mobile]: "30%",
//     [Device.tablet]: "40%",
//     [Device.desktop]: "40%",
// };

const marginTops = {
    [Device.mobile]: "80px",
    [Device.tablet]: "40px",
    [Device.desktop]: "40px",
};

const pagePaddings = {
    [Device.mobile]: "0px 70px 0px 70px",
    [Device.tablet]: "0px 70px 0px 70px",
    [Device.desktop]: "0px 70px 0px 70px",
};
const fontSizes = {
    [Device.mobile]: "1.2rem",
    [Device.tablet]: "2rem",
    [Device.desktop]: "2rem",
};
const paragraphLineHeights = {
    [Device.mobile]: "1.8rem",
    [Device.tablet]: "2rem",
    [Device.desktop]: "2rem",
};


// const contentParagraphs = [
//     ["Yes, there are still screens. But instead of the usual MBUX (Mercedes-Benz User Experience) setup, the 12.3-inch instrument panel is housed under a cowl, reflecting the SL's sporty roots.",
//         "Dominating the dashboard is the tablet-like 11.9-inch infotainment display, whose tilt angle can be adjusted from 12 degrees to 32 degrees at a touch of a button. It helps minimise screen glare when driving with the top down."],
//     ["For the first time in the SL's history, the car has rear seats. They can supposedly accommodate occupants up to 1.5m tall, but the backrests are so upright they seem like they are canted forward.",
//         "Also, strangely absent on the test unit are soft-close doors and 'pushers' that bring the seat belts closer to the front passengers."]
// ];
//
// const contentTexts = [
//     {
//         paragraphs: contentParagraphs[0],
//         bubbleTexts: {
//             upper: "Snazzy cockpit features mood lighting and tablet like infotainment screen, but the heat from the engine can make occupants uncomfortable.",
//             lower: "PHOTO: sgCarMart"
//         }
//     }, {
//         paragraphs: contentParagraphs[1],
//         bubbleTexts: {
//             upper: "It looks uncomfortable from this angle, but Mercedes says the backseats can accommodate passengers up to 1.5m tall..",
//             lower: "PHOTO: sgCarMart"
//         }
//     }
// ];

const Paragraph: React.FC<{ paragraphLineHeight: string, text: string, fontSize: string }> = ({
                                                                                                  text,
                                                                                                  fontSize,
                                                                                                  paragraphLineHeight
                                                                                              }) => {
    return <div className="ao-body5-content-paragraph"
                style={{
                    display: "flex",
                    height: "max-content",
                    color: "white",
                }}>
        <Typography.Text style={{color: COLORS.PURE_WHITE, fontSize: fontSize, lineHeight: paragraphLineHeight}}>
            {text}
        </Typography.Text>
    </div>;
};

export const Body5: React.FC<{ device: Device }> = ({device}) => {
    const paragraph1Ref = useRef<HTMLDivElement | null>(null);
    const fullContentRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(`body5.pgref.entry: ratio=${JSON.stringify(entry.intersectionRatio)} isIntersect=${JSON.stringify(entry.isIntersecting)}`);
                console.log(`body5.pgref.entry: ratio=${JSON.stringify(entry.intersectionRatio)}  fullContentRef.current=${fullContentRef.current}`);
                if (entry.isIntersecting && fullContentRef.current) {
                    fullContentRef.current.scrollIntoView({behavior: "smooth", block: "start"});
                }
            },
            {threshold: 1},
        );

        const currRef = paragraph1Ref.current;
        if (currRef) {
            observer.observe(currRef);
        }

        return () => {
            if (currRef) {
                observer.unobserve(currRef);
            }
        };
    }, []);


    // const footerMarginTop = footerMarginTops[device] ?? "140px";
    // const footerWidth = footerWidths[device] ?? "75%";
    // const footerClipPath = footerClipPaths[device] ?? "polygon(0% 0%, 97% 0%, 100% 100%, 0% 100%)";
    // const footerPaddingTop = footerPaddingTops[device] ?? "25px";
    // const footerTextPaddingLeft = footerTextPaddingLefts[device] ?? "15%";
    // const footerPaddingBottom = footerPaddingBottoms[device] ?? "25px";
    // const footerLineHeight = footerLineHeights[device] ?? "5rem";
    // const footerFontSize = footerFontSizes[device] ?? "5rem";
    // const rightFooterHeight = rightFooterHeights[device] ?? "30%";

    const contentMarginTop = marginTops[device] ?? "100px";
    const pagePadding = pagePaddings[device] ?? "0px 70px 0px 70px";
    const fontSize = fontSizes[device] ?? "30px";
    const paragraphLineHeight = paragraphLineHeights[device] ?? "30px";
    return <>
        <div className="ao-body5"
             ref={fullContentRef}
             style={{
                 display: "flex",
                 position: "relative",
                 flexDirection: "column",
                 width: "100%",
                 overflow: "auto",
                 height: "100vh",
                 justifyContent: "flex-end",
                 alignItems: "flex-start",
             }}>
            <div className="ao-body5-background" style={{
                display: "flex",
                backgroundColor: COLORS.CHARCOAL_SLATE,
                position: "absolute",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                // backgroundColor: "red",
            }}></div>
            <div className="ao-body5-content-wrapper" style={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "flex-end",
                alignItems: "flex-start",
            }}>
                <div className="ao-body5-content"
                     style={{
                         overflow: "scroll",
                         display: "flex",
                         flex: 1,
                         flexDirection: "column",
                         justifyContent: "flex-start",
                         alignItems: "center",
                         width: "100%",
                         // backgroundColor: "yellow",
                     }}>
                    <UnbrokenPage style={{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        width: "100%",
                        padding: pagePadding,
                        marginTop: contentMarginTop,

                        // backgroundColor: "#4728d0",
                    }}>
                        <div className="ao-body5-content-header"
                             style={{display: "flex", color: "white"}}>
                            <Typography.Text style={{color: COLORS.GOLDEN_AMBER, fontSize: "34px"}}>
                                {"TIME TO DANCE"}
                            </Typography.Text>
                        </div>
                        <div className="ao-body5-content-paragraphs" style={{
                            display: "flex",
                            height: "max-content",
                            fontSize: "30px",
                            flexDirection: "column",
                            justifyContent: "center",
                            paddingTop: "20px",
                            rowGap: "20px",
                        }}>
                            <Paragraph
                                fontSize={fontSize}
                                paragraphLineHeight={paragraphLineHeight}
                                text={"Are you tired of hearing about how silent EVs are? Do you crave drama and emotion? " +
                                    "Then you must want a car like the SL55, whose powertrain is unashamedly unadulterated."}></Paragraph>
                            <div ref={paragraph1Ref}></div>
                            <Paragraph
                                fontSize={fontSize}
                                paragraphLineHeight={paragraphLineHeight}
                                text={"Thumb the starter button and the twin-turbocharged, 3,982cc V8 comes alive with a deep bark. " +
                                    "Petrolheads within earshot can immediately tell that an eight-cylinder was just fired up. There's no mistaking this for any other type of engine."}></Paragraph>
                            <Paragraph
                                fontSize={fontSize}
                                paragraphLineHeight={paragraphLineHeight}
                                text={"The 4.0-litre unit kicks out 476bhp and 700Nm of torque, the latter figure from just 2,250rpm. " +
                                    "Power is transferred to both axles through the 4Matic+ system with fully variable torque distribution, making this the first all-wheel drive SL."}></Paragraph>
                        </div>


                    </UnbrokenPage>

                    <div className="ao-body5-content-youtube-embed"
                         style={{
                             display: "flex",
                             width: "100%",
                             height: "100%",
                             backgroundColor: "orange",
                             justifyContent: "center"
                         }}>
                        <div className="ao-body5-content-youtube-embed-placeholder">
                            Youtube
                        </div>
                    </div>
                    <UnbrokenPage style={{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        backgroundColor: "#4728d0",
                        alignItems: "flex-start",
                        width: "100%",
                        padding: "0px 100px 0px 100px",

                    }}>
                        <div className="ao-body5-content-paragraph"
                             style={{
                                 display: "flex",
                                 height: "max-content",
                                 backgroundColor: "purple",
                                 color: "white",
                                 fontSize: "30px"
                             }}>
                            <Typography.Text style={{color: "black"}}>
                                {"Content.Part2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                            </Typography.Text>
                        </div>
                        <div className="ao-body5-content-paragraph"
                             style={{
                                 display: "flex",
                                 height: "max-content",
                                 backgroundColor: "purple",
                                 color: "white",
                                 fontSize: "30px"
                             }}>
                            <Typography.Text style={{color: "black"}}>
                                {"Content.Part2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                            </Typography.Text>
                        </div>
                        <div className="ao-body5-content-paragraph"
                             style={{
                                 display: "flex",
                                 height: "max-content",
                                 backgroundColor: "purple",
                                 color: "white",
                                 fontSize: "30px"
                             }}>
                            <Typography.Text style={{color: "black"}}>
                                {"Content.Part2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                            </Typography.Text>
                        </div>
                        <div className="ao-body5-content-paragraph"
                             style={{
                                 display: "flex",
                                 height: "max-content",
                                 backgroundColor: "purple",
                                 color: "white",
                                 fontSize: "30px"
                             }}>
                            <Typography.Text style={{color: "black"}}>
                                {"Content.Part2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                            </Typography.Text>
                        </div>

                    </UnbrokenPage>
                    {/*<div className="ao-body5-content-header"*/}
                    {/*     style={{*/}
                    {/*         display: "flex",*/}
                    {/*         justifyContent: "center",*/}
                    {/*         width: "100%",*/}
                    {/*         backgroundColor: "yellow",*/}
                    {/*         opacity: 0.3*/}
                    {/*     }}>*/}
                    {/*</div>*/}
                </div>

                <div className="ao-body5-car"
                     style={{
                         display: "flex",
                         position: "relative",
                         width: "100%",
                         height: "max-content",
                         opacity: 0.3,
                         justifyContent: "center",
                         backgroundColor: "red",
                     }}>
                    <div className="ao-body5-car-image"
                         style={{display: "flex", height: "50px", color: "white", fontSize: "30px"}}>
                        car
                    </div>
                </div>
            </div>

        </div>
        {/*<div ref={endOfMainBody}/
        >*/}
        {/*<div className={"ao-body5-footer"} style={{*/}
        {/*    display: "flex",*/}
        {/*    position: "relative",*/}
        {/*    height: "max-content",*/}
        {/*    marginTop: footerMarginTop,*/}
        {/*}}>*/}
        {/*    <div style={{*/}
        {/*        display: "flex",*/}
        {/*        width: footerWidth,*/}
        {/*        justifyContent: "center",*/}
        {/*        overflow: "hidden",*/}
        {/*        transition: "transform 3s ease-in-out, opacity 1s ease-in-out",*/}
        {/*        // transform: showBottomGuide ? "translateX(0)" : "translateX(-100%)",*/}
        {/*        transform: "translateX(0)",*/}
        {/*        clipPath: footerClipPath,*/}
        {/*        alignItems: "center",*/}
        {/*        height: "fit-content",*/}
        {/*        zIndex: 1000,*/}
        {/*        backgroundColor: COLORS.HIGH_ORANGE,*/}
        {/*        paddingTop: footerPaddingTop,*/}
        {/*        paddingBottom: footerPaddingBottom,*/}
        {/*    }}>*/}
        {/*        <div style={{*/}
        {/*            paddingLeft: footerTextPaddingLeft,*/}
        {/*            display: "flex",*/}
        {/*            flexDirection: "column",*/}
        {/*            alignItems: "center",*/}
        {/*            justifyContent: "center",*/}
        {/*        }}>*/}
        {/*            <Typography.Text style={{*/}
        {/*                display: "flex",*/}
        {/*                flexDirection: "column",*/}
        {/*                alignItems: "center",*/}
        {/*                justifyContent: "center",*/}
        {/*                color: COLORS.PURE_WHITE,*/}
        {/*                fontSize: footerFontSize,*/}
        {/*                fontWeight: "500",*/}
        {/*                lineHeight: footerLineHeight,*/}
        {/*                wordBreak: "break-word",*/}
        {/*            }}>*/}
        {/*                Different interior approach*/}
        {/*            </Typography.Text>*/}
        {/*        </div>*/}
        {/*    </div>*/}


        {/*</div>*/}
        {/*<div className={"ao-body5-end-border"} style={{*/}
        {/*    display: "flex",*/}
        {/*    backgroundColor: COLORS.LIGHT_BROWN,*/}
        {/*    position: "absolute",*/}
        {/*    bottom: "0",*/}
        {/*    width: "100%",*/}
        {/*    height: rightFooterHeight,*/}
        {/*    justifyContent: "center"*/}
        {/*}}>*/}
        {/*</div>*/}
    </>;
};

export default Body5;