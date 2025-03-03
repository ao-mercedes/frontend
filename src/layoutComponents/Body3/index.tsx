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
    [Device.desktop]: "90px",
};

const headerFontSizes = {
    [Device.mobile]: "48px",
    [Device.tablet]: "42px",
    [Device.desktop]: "80px",
};

const headerFontWeights = {
    [Device.mobile]: "700",
    [Device.tablet]: "600",
    [Device.desktop]: "700",
};


const paragraphMarginTops = {
    [Device.mobile]: "35px",
    [Device.tablet]: "35px",
    [Device.desktop]: "35px",
};

const imageCaptionTextWidthsByDevice: {
    [device in Device]: { [caption: string]: string };
} = {
    [Device.mobile]: {"Mercedes-Benz SL": "65%", "Porsche 911": "65%"},
    [Device.tablet]: {"Mercedes-Benz SL": "78%", "Porsche 911": "65%"},
    [Device.desktop]: {"Mercedes-Benz SL": "65%", "Porsche 911": "65%"},
};

const paragraphFontSizes: { [device in Device]: string } = {
    [Device.mobile]: "20px",
    [Device.tablet]: "18px",
    [Device.desktop]: "32px",
};

const paragraphFontWeights: { [device in Device]: string } = {
    [Device.mobile]: "600",
    [Device.tablet]: "500",
    [Device.desktop]: "32px",
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

const imageWrapperWidths = {
    [Device.mobile]: "100%",
    [Device.tablet]: "40%",
    [Device.desktop]: "88%",
};

const imageCaptionFontSizes = {
    [Device.mobile]: "1rem",
    [Device.tablet]: "0.8rem",
    [Device.desktop]: "1rem",
};

const imageCaptionLineHeights = {
    [Device.mobile]: "2rem",
    [Device.tablet]: "1.3rem",
    [Device.desktop]: "2rem",
};


const imageWrapperPaddingLefts = {
    [Device.mobile]: "0px",
    [Device.tablet]: "30px",
    [Device.desktop]: "30px",
};


const footerTextPaddingLefts = {
    [Device.mobile]: "15%",
    [Device.tablet]: "8%",
    [Device.desktop]: "10%",
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
    const paragraphFontWeight = paragraphFontWeights[device] ?? "600";
    const paragraphMarginTop = paragraphMarginTops[device] ?? "35px";
    const imageScale = imageScales[device] ?? 1;
    const shouldReverseContentTextAndImage = device == Device.desktop || device == Device.tablet;
    const contentItemColumn = device == Device.mobile;
    const imageCaptionTextWidths = imageCaptionTextWidthsByDevice[device] ?? "65%";  // <----- 78%


    const shouldGetFirstContentOnly = device == Device.mobile;
    const contents = _getContents(shouldGetFirstContentOnly);

    const imageWrapperWidth = imageWrapperWidths[device] ?? 1;

    const captionLineHeight = imageCaptionLineHeights[device] ?? "1.5rem";
    const captionFontSize = imageCaptionFontSizes[device] ?? "0.8rem";
    const imageWrapperPaddingLeft = imageWrapperPaddingLefts[device] ?? "0px";
    const footerTextPaddingLeft = footerTextPaddingLefts[device] ?? "15%";


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
                        <ContentsComponent imageWrapperWidth={imageWrapperWidth} itemColumn={contentItemColumn}
                                           contents={contents} imageScale={imageScale}
                                           shouldReverseContentTextAndImageOnAlternateItems={shouldReverseContentTextAndImage}
                                           paragraphFontSize={paragraphFontSize}
                                           paragraphFontWeight={paragraphFontWeight}
                                           imageWrapperPaddingLeft={imageWrapperPaddingLeft}
                                           captionLineHeight={captionLineHeight}
                                           captionFontSize={captionFontSize}
                                           imageCaptionTextWidths={imageCaptionTextWidths}></ContentsComponent>


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
                        paddingLeft: footerTextPaddingLeft,
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
