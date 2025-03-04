import "./index.css";

import {COLORS, Device, horizontalPaddings} from "../../utils/constants/constants.ts";

import img_car from "../../assets/body5/progress.png";

import {UnbrokenPage} from "../pageSizes.tsx";
import Paragraphs from "./Paragraphs.tsx";

import {useEffect, useRef, useState,} from "react";
import {Typography} from "antd";

const marginTops = {
    [Device.mobile]: "80px",
    [Device.tablet]: "45px",
    [Device.desktop]: "40px",
};

const pageHorizontalPaddingsPx = {
    [Device.mobile]: 70,
    [Device.tablet]: 100,
    [Device.desktop]: 70,
};
const fontSizes = {
    [Device.mobile]: "1.2rem",
    [Device.tablet]: "1rem",
    [Device.desktop]: "2rem",
};
const paragraphLineHeights = {
    [Device.mobile]: "1.8rem",
    [Device.tablet]: "1.4rem",
    [Device.desktop]: "2rem",
};


const textForParagraph1 = ["Are you tired of hearing about how silent EVs are? Do you crave drama and emotion? " +
"Then you must want a car like the SL55, whose powertrain is unashamedly unadulterated.",

    "Thumb the starter button and the twin-turbocharged, 3,982cc V8 comes alive with a deep bark. " +
    "Petrolheads within earshot can immediately tell that an eight-cylinder was just fired up. There's no mistaking this for any other type of engine.",

    "The 4.0-litre unit kicks out 476bhp and 700Nm of torque, the latter figure from just 2,250rpm. " +
    "Power is transferred to both axles through the 4Matic+ system with fully variable torque distribution, making this the first all-wheel drive SL.",

    "The most ideal mode for the SL55 is Individual, so you can customise attributes such as the engine, dampers, traction control, and exhaust. " +
    "Setting the first two to Sport and the other two to Advanced and Powerful is about right. I also left the nine-speed automatic gearbox in manual mode.",

    "Right off the bat, the V8 eagerly shows how tractable and rev-happy it is. " +
    "The engine, along with the exhaust, sounds glorious in second gear as the tachometer needle swings towards 7,000rpm. It gets real addictive real quick.",

    "The SL might be a sleek grand tourer, but it sounds like an American muscle car when driven hard. " +
    "Emission regulations are calling for the internal combustion engine to be phased out, but this V8 is giving them two middle fingers while yelling back, 'Hell no, I won't go!'",

    "Even while idling, the V8's pulsing is palpable. " +
    "Depending how you flex your right foot, the exhaust will blare anything from low and throaty notes to a fullon throat-clearing roar. Conducting this orchestra is fun, and anticipating tunnels and underpasses is even more exciting.",
];


const textForParagraph2 = [
    "Time seems to slow down in the SL55, despite its ability to get from rest to 100km/h in 3.9 seconds. " +
    "The acceleration is great, but losing yourself in the drive is even better. Here, I momentarily forget about the outside world. " +
    "Savouring the car's soul-stirring abilities are more important than meetings and deadlines.",

    "Show the SL a series of corners and it obliges your whims, with the steering wheel unexpectedly feeding back road undulations. " +
    "The car's movements are progressive and natural. The ride, even in Sport, is pliant, yet accords enough body control on twistier paths.",

    "And when it comes to stopping, those dinner plate-size brake rotors give you plenty of confidence. The SL weighs nearly two tonnes, but it doesn't feel like it. " +
    "Only when parking does the car annoy me. Rear-wheel steering is standard, but given the wide turning circle, I swear it doesn't work.",

    "The SL has nine speeds, but I only use four of them, as the motor's vocals at high rpms are addictive. " +
    "Thus, with engine speeds remaining relatively high, a litre of unleaded allows me to cover just over two kilometres. Oops.",

    "After two decades, the SL has reverted to a fabric roof as it is lighter and takes up less boot space when opened. " +
    "It can be opened and closed in 15 seconds while the car is driven at up to 60km/h.",

    "However, 15 seconds is only possible if the virtual toggle switch doesn't slip away from your finger. " +
    "I often found myself having to re-swipe to operate the roof. Mercedes should have kept the metal switch of the previous car, which conveniently has the one-touch windows up/down toggle beside it.",
];

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

    const contentMarginTop = marginTops[device] ?? "80px";

    const pageHorizontalPaddingPx = pageHorizontalPaddingsPx[device] ?? 70;
    const pageHorizontalPadding = `${pageHorizontalPaddingPx}px`;
    const fontSize = fontSizes[device] ?? "30px";
    const paragraphLineHeight = paragraphLineHeights[device] ?? "30px";


    const youtubeEmbedWidth = (device == Device.mobile) ? viewPortWidth : (viewPortWidth - (pageHorizontalPaddingPx * 2));
    const youtubeAspectRatio = device == Device.mobile ? (4 / 3) : (16 / 9);

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
                        paddingLeft: pageHorizontalPadding,
                        paddingRight: pageHorizontalPadding,
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
                             justifyContent: "center"
                         }}>
                        <div className="ao-body5-content-youtube-embed-placeholder"
                             style={{display: "flex", justifyContent: "center", width: "100%", height: "100%"}}>
                            <iframe
                                width={`${youtubeEmbedWidth}px`}
                                height={`${youtubeEmbedWidth / youtubeAspectRatio}px`}
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
                        paddingLeft: pageHorizontalPadding,
                        paddingRight: pageHorizontalPadding,
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
                         style={{display: "flex", height: "50px", color: "white"}}>
                        <img src={img_car} alt={""}></img>
                    </div>
                    <div className="ao-body5-car-fumes"
                         style={{
                             backgroundColor: COLORS.GOLDEN_AMBER,
                             position: "absolute",
                             display: "flex",
                             height: "50px",
                             color: "white",
                             fontSize: "30px",
                             left: "-100%",
                         }}>
                        aaa

                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Body5;