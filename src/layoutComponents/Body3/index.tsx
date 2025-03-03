import "./index.css";

import {COLORS, Device, horizontalPaddings} from "../../utils/constants/constants.ts";

import {_getContents} from "./contentInfoGetter.ts";

import {UnbrokenPage} from "../pageSizes.tsx";

import {Typography} from "antd";
import * as React from "react";
import ContentsComponent from "./contentsComponent.tsx";
import {useEffect, useRef} from "react";


const marginTops = {
    [Device.mobile]: "75px",
    [Device.tablet]: "35px",
    [Device.desktop]: "55px",
};

const headerFontSizes = {
    [Device.mobile]: "48px",
    [Device.tablet]: "44px",
    [Device.desktop]: "20px",
};

const headerFontWeights = {
    [Device.mobile]: "700",
    [Device.tablet]: "600",
    [Device.desktop]: "700",
};


const paragraphFontSizes: { [device in Device]: string } = {
    [Device.mobile]: "20px",
    [Device.tablet]: "18px",
    [Device.desktop]: "32px",
};


const paragraphMarginTops = {
    [Device.mobile]: "35px",
    [Device.tablet]: "35px",
    [Device.desktop]: "35px",
};


const headerColors = {
    [Device.mobile]: COLORS.MOSSY_OLIVE,
    [Device.tablet]: COLORS.CHARCOAL_SLATE,
    [Device.desktop]: COLORS.CHARCOAL_SLATE,
};


const imageScales = {
    [Device.mobile]: 1,
    [Device.tablet]: 1,
    [Device.desktop]: 2,
};

const imageWrapperScales = {
    [Device.mobile]: 1,
    [Device.tablet]: 0.8,
    [Device.desktop]: 0.8,
};


export const Body3: React.FC<{ device: Device }> = ({device}) => {
    const [showBottomGuide, setShowBottomGuide] = React.useState(false);
    const contentsDivRef = useRef<HTMLDivElement | null>(null);

    // when seen a part of text, start to show image
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowBottomGuide(entry.isIntersecting);
                }
            },
            {threshold: 1},
        );

        const currRef = contentsDivRef.current;
        if (currRef) {
            observer.observe(currRef);
        }

        return () => {
            if (currRef) {
                observer.unobserve(currRef);
            }
        };
    }, []);


    const marginTop = marginTops[device] ?? "55px";
    const headerColor = headerColors[device] ?? COLORS.CHARCOAL_SLATE;
    const headerFontSize = headerFontSizes[device] ?? "48px";
    const headerFontWeight = headerFontWeights[device] ?? "700";
    const paragraphFontSize = paragraphFontSizes[device] ?? "20px";
    const paragraphMarginTop = paragraphMarginTops[device] ?? "35px";
    const imageScale = imageScales[device] ?? 1;
    const shouldReverseContentTextAndImage = device == Device.desktop || device == Device.tablet;
    const contentItemColumn = device == Device.mobile;


    const shouldGetFirstContentOnly = device == Device.mobile;
    const contents = _getContents(shouldGetFirstContentOnly);

    const imageWrapperScale = imageWrapperScales[device] ?? 1;

    return (
        <div
            className="ao-body3-container"
            style={{backgroundColor: COLORS.GRAY}}
        >
            <UnbrokenPage style={{
                paddingLeft: horizontalPaddings[device],
                paddingRight: horizontalPaddings[device],
            }}>
                <div
                    style={{
                        marginTop: marginTop,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <div
                        className="ao-body3-header"
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography.Text
                            style={{
                                color: headerColor,
                                fontSize: headerFontSize,
                                fontWeight: headerFontWeight,
                            }}
                        >
                            {"PEDIGREE"}
                        </Typography.Text>
                    </div>
                    <div
                        className="ao-body3-content-paragraphs-container"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: paragraphMarginTop,
                            width: "100%",
                        }}
                    >
                    </div>
                    <div ref={contentsDivRef}>
                        <ContentsComponent imageWrapperScale={imageWrapperScale} itemColumn={contentItemColumn}
                                           contents={contents} imageScale={imageScale}
                                           shouldReverseContentTextAndImageOnAlternateItems={shouldReverseContentTextAndImage}
                                           paragraphFontSize={paragraphFontSize}></ContentsComponent>


                    </div>
                </div>
            </UnbrokenPage>
            <div ref={contentsDivRef}/>

            <div className={"ao-body3-footer"} style={{
                display: "flex",
                position: "relative",
                height: "max-content",
                marginTop: "70px"
            }}>
                <div style={{
                    display: "flex",
                    width: "95%",
                    justifyContent: "center",
                    overflow: "hidden",
                    transition: "transform 3s ease-in-out, opacity 1s ease-in-out",
                    transform: showBottomGuide ? "translateX(0)" : "translateX(-100%)",
                    clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)",
                    alignItems: "center",
                    height: "fit-content",
                    zIndex: 1000,
                    backgroundColor: COLORS.HIGH_ORANGE,
                    paddingTop: "25px",
                    paddingBottom: "25px",
                }}>
                    <div style={{
                        paddingLeft: "15%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Typography.Text style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            color: COLORS.PURE_WHITE,
                            fontSize: "2.3rem",
                            fontWeight: "500",
                            lineHeight: "2.5rem",
                            wordBreak: "break-word",
                        }}>
                            Different interior approach
                        </Typography.Text>
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    backgroundColor: COLORS.GOLDEN_AMBER,
                    position: "absolute",
                    bottom: "0",
                    width: "100%",
                    height: "30%",
                    justifyContent: "center"
                }}>
                </div>
            </div>
        </div>
    );
};

export default Body3;
