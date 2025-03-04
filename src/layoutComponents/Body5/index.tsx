import "./index.css";

import {COLORS, Device} from "../../utils/constants/constants.ts";

import img_car from "../../assets/body5/progress.png";

import {useEffect, useRef, useState,} from "react";
import {Typography} from "antd";
import {UnbrokenPage} from "../pageSizes.tsx";

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

const textForParagraph1 = ["Are you tired of hearing about how silent EVs are? Do you crave drama and emotion? " +
"Then you must want a car like the SL55, whose powertrain is unashamedly unadulterated.", "Thumb the starter button and the twin-turbocharged, 3,982cc V8 comes alive with a deep bark. " +
"Petrolheads within earshot can immediately tell that an eight-cylinder was just fired up. There's no mistaking this for any other type of engine.", "The 4.0-litre unit kicks out 476bhp and 700Nm of torque, the latter figure from just 2,250rpm. " +
"Power is transferred to both axles through the 4Matic+ system with fully variable torque distribution, making this the first all-wheel drive SL."];

const textForParagraph2 = [
    "Time seems to slow down in the SL55, despite its ability to get from rest to 100km/h in 3.9 seconds. " +
    "The acceleration is great, but losing yourself in the drive is even better. Here, I momentarily forget about the outside world. " +
    "Savouring the car's soul-stirring abilities are more important than meetings and deadlines.",
    "Show the SL a series of corners and it obliges your whims, with the steering wheel unexpectedly feeding back road undulations. " +
    "The car's movements are progressive and natural. The ride, even in Sport, is pliant, yet accords enough body control on twistier paths.",];


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

const Paragraphs: React.FC<{ fontSize: string, paragraphLineHeight: string, texts: string[] }> = ({
                                                                                                      fontSize,
                                                                                                      paragraphLineHeight,
                                                                                                      texts
                                                                                                  }) => {
    return <div className="ao-body5-content-paragraphs" style={{
        display: "flex",
        height: "max-content",
        fontSize: "30px",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "20px",
        rowGap: "20px",
    }}>
        {texts.map((text, index) => {
            return <div key={index}>
                <Paragraph
                    fontSize={fontSize}
                    paragraphLineHeight={paragraphLineHeight}
                    text={text}></Paragraph>
            </div>;
        })}
    </div>;
};

export const Body5: React.FC<{ device: Device, viewPortWidth: number }> = ({device, viewPortWidth}) => {
    const paragraph1Ref = useRef<HTMLDivElement | null>(null);
    const bodyRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && bodyRef.current) {
                    bodyRef.current.scrollIntoView({behavior: "smooth", block: "start"});
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

    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current) return;

            const {scrollTop, scrollHeight, clientHeight} = contentRef.current;
            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

            console.log(`handleScroll: scrolled=${scrolled}`);
            setProgress(scrolled);
        };

        const contentDiv = contentRef.current;
        contentDiv?.addEventListener("scroll", handleScroll);
        return () => contentDiv?.removeEventListener("scroll", handleScroll);
    }, []);

    const contentMarginTop = marginTops[device] ?? "100px";
    const pagePadding = pagePaddings[device] ?? "0px 70px 0px 70px";
    const fontSize = fontSizes[device] ?? "30px";
    const paragraphLineHeight = paragraphLineHeights[device] ?? "30px";


    return <>
        <div className="ao-body5"
             ref={bodyRef}
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
                     ref={contentRef}
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
                    }}>
                        <div className="ao-body5-content-header"
                             style={{display: "flex", color: "white"}}>
                            <Typography.Text style={{color: COLORS.GOLDEN_AMBER, fontSize: "34px"}}>
                                {"TIME TO DANCE"}
                            </Typography.Text>
                        </div>
                        <div ref={paragraph1Ref}></div>
                        <Paragraphs fontSize={fontSize} paragraphLineHeight={paragraphLineHeight}
                                    texts={textForParagraph1}/>
                    </UnbrokenPage>
                    <div className="ao-body5-content-youtube-embed"
                         style={{
                             marginTop: "40px",
                             marginBottom: "20px",
                             display: "flex",
                             width: "100%",
                             height: "100%",
                             backgroundColor: "orange",
                             justifyContent: "center"
                         }}>
                        <div className="ao-body5-content-youtube-embed-placeholder"
                             style={{display: "flex", justifyContent: "center", width: "100%", height: "100%"}}>
                            <iframe
                                width={`${viewPortWidth}px`}
                                height={`${viewPortWidth / 4 * 3}px`}
                                src={`https://www.youtube.com/embed/I8CygBDUIBs?autoplay=0&showinfo=0&controls=0&modestbranding=1&rel=0`}
                                title="YouTube Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <UnbrokenPage style={{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        width: "100%",
                        padding: pagePadding,
                        marginTop: "0px",
                    }}>
                        <Paragraphs fontSize={fontSize} paragraphLineHeight={paragraphLineHeight}
                                    texts={textForParagraph2}/>
                    </UnbrokenPage>
                </div>
                <div className="ao-body5-car"
                     style={{
                         display: "flex",
                         position: "relative",
                         height: "max-content",
                         justifyContent: "center",
                         marginLeft: `${progress}%`,
                     }}>
                    <div className="ao-body5-car-image"
                         style={{display: "flex", height: "50px", color: "white", fontSize: "30px"}}>
                        <img src={img_car} alt={""}></img>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Body5;