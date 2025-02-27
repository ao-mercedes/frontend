import "./index.css";

import img_mastheadback from '../../assets/Body1/masthead_back_img.jpg';
import img_mastheadbackmobile from '../../assets/Body1/mobile_masthead_back_img.jpg';
import img_mastheadring from '../../assets/Body1/masthead_ring.svg';
import img_mastheadfront from '../../assets/Body1/masthead_fore_img.png';
import img_mastheadfrontmobile from '../../assets/Body1/mobile_masthead_fore_img.png';
import img_mastheadringrotate from '../../assets/Body1/masthead_ring_rotate.svg';
import img_arrowdown from '../../assets/Body1/main-arrow-down.svg';

import {COLORS, Device} from "../../utils/constants/constants.ts";

import {Typography} from "antd";
import {useEffect, useState} from "react";

// TODO
// [ ] alts for images sources
export const Body1: React.FC<{ props: { device: Device }, children: React.ReactNode }> = ({props,}) => {
    const {device} = props;

    const [showScrollGuide, setShouldScrollGuide] = useState(false);
    const ringStyle = device == Device.mobile ? {
        zIndex: 0,
        transform: "scale(1.4) translateX(-10%) translateY(10%)",
        width: '80%',
        height: '100%'
    } : {
        zIndex: 0,
        transform: "scale(1.4) translateY(-10%)",
        width: 'auto',
        height: '100%'
    };

    const ringFullComponent = <img
        style={{...ringStyle, position: "absolute"}}
        src={img_mastheadring} alt={""}></img>;

    const ringRotateComponent = <img
        id={device == Device.mobile ? "ring-rotate-mobile" : "ring-rotate-default"}
        className="rotate"
        style={{...ringStyle, position: "absolute"}}
        src={img_mastheadringrotate} alt={""}></img>;

    let titleTransformOffset = "";
    if (device == Device.mobile) {
        titleTransformOffset = "translateY(3%)";
    } else if (device == Device.tablet) {
        titleTransformOffset = "translateY(30%)";
    } else if (device == Device.desktop) {
        titleTransformOffset = "translateY(70%)";
    }
    let titleFontSize = "";
    if (device == Device.mobile) {
        titleFontSize = "3.1rem";
    } else if (device == Device.tablet) {
        titleFontSize = "2.5rem";
    } else if (device == Device.desktop) {
        titleFontSize = "7rem";
    }

    let imgWidthAndHeight = {};
    if (device == Device.mobile) {
        imgWidthAndHeight = {width: '100vw', height: '100vh'};
    } else if (device == Device.tablet) {
        imgWidthAndHeight = {width: '100vw', height: '100vh'};
    } else if (device == Device.desktop) {
        imgWidthAndHeight = {width: '100vw', height: '100vh'};
    }

    let scrollGuideWidthAndHeight = {};
    if (device == Device.mobile) {
        scrollGuideWidthAndHeight = {
            width: '320px',
            height: '320px',
            transform: "translateY(65%)"
        };
    } else if (device == Device.tablet) {
        scrollGuideWidthAndHeight = {
            width: '400px',
            height: '400px',
            transform: "translateY(65%)"
        };
    } else if (device == Device.desktop) {
        scrollGuideWidthAndHeight = {
            width: '900px',
            height: '900px',
            transform: "translateY(45%)"
        };
    }

    const enableScrollGuide = () => {
        console.log("scroll");
        setShouldScrollGuide(true);
    };
    useEffect(() => {
        console.log(`showScrollGuide ${showScrollGuide}`);
        if (!showScrollGuide) {
            window.addEventListener('scroll', enableScrollGuide);
        }
        return () => {
            window.removeEventListener('scroll', enableScrollGuide);
        };
    }, [showScrollGuide]);
    return <div
        id="ao-body1-container"
        style={{
            position: 'relative',
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            width: '100vw',
            height: '100%',
        }}
    >

        {showScrollGuide &&
            <div id="ao-scroll-guide"
                 style={{
                     zIndex: 1000,
                     opacity: 0.8,
                     backgroundColor: COLORS.CHARCOAL_SLATE,
                     display: "flex",
                     position: "absolute",
                     borderRadius: "50%",
                     ...scrollGuideWidthAndHeight,
                     justifyContent: "center",
                     alignItems: "center",

                 }}>
                <div style={{
                    width: "80%",
                    height: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Typography.Title level={3} style={{
                        textAlign: "center",
                        fontSize: "5.5rem",
                        display: 'flex',
                        color: COLORS.PURE_WHITE
                    }}>
                        A luxurious upgrade that packs plenty of firepower
                    </Typography.Title>
                </div>
                <img
                    style={{
                        zIndex: 0, position: "absolute", bottom: 80,
                        width: "140px",  /* Set desired width */
                        height: "auto"  /* Maintain aspect ratio */
                    }}
                    src={img_arrowdown} alt={""}></img>
            </div>}
        {/*underlying background*/}
        <img style={{...imgWidthAndHeight}}
             src={device == Device.mobile ? img_mastheadbackmobile : img_mastheadback} alt={""}></img>
        {/*rings*/}
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            position: "absolute",
            width: '100%',
            height: '100%'
        }}>
            {ringFullComponent}
            {ringRotateComponent}
        </div>
        {/*overlapping background*/}
        <img
            style={{zIndex: 0, position: "absolute", ...imgWidthAndHeight}}
            src={device == Device.mobile ? img_mastheadfrontmobile : img_mastheadfront} alt={""}></img>
        <div className="ao-title"
             style={{
                 position: "absolute",
                 paddingTop: "60px",
                 flexDirection: "column",
                 display: "flex",
                 width: "100%",
                 transform: titleTransformOffset,
             }}>
            <Typography.Title level={1}
                              style={{
                                  fontSize: titleFontSize,
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  padding: "0 0 0 0",
                                  margin: 0,
                                  width: "100%",
                                  wordBreak: "break-word",
                                  color: COLORS.CHARCOAL_SLATE
                              }}>{"Mercedes-Benz\u200B SL55 AMG"}</Typography.Title>
        </div>
    </div>;
};


export default Body1;


