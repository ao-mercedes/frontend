import {COLORS} from "../../utils/constants/constants.ts";

import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useEffect, useRef, useState} from "react";
import {Typography} from "antd";


interface ContentEndMarkerProps {
    handleOnIntersect: (isIntersecting: boolean) => void;
    threshold: number;
    endMarkerHeight: string;
}

const ContentEndMarker: React.FC<ContentEndMarkerProps> = ({handleOnIntersect, threshold, endMarkerHeight}) => {
    const endOfBackGroundMarker = useRef<HTMLDivElement | null>(null);

    // [Issue-0010] TODO refactor and test if can use useIntersectingRef
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                handleOnIntersect(entry.isIntersecting);
            },
            {threshold: threshold},
        );

        const currRef = endOfBackGroundMarker.current;
        if (currRef) {
            observer.observe(currRef);
        }

        return () => {
            if (currRef) {
                observer.unobserve(currRef);
            }
        };
    }, [handleOnIntersect, threshold]);

    return <div className={"ao-body4-content-end-marker"}
                style={{
                    display: "flex",
                    position: "relative",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                    height: endMarkerHeight,
                    overflow: "hidden",
                    flexDirection: "column",
                    // debug
                    // backgroundColor: COLORS.PURE_WHITE,
                    // opacity: 0.5,
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
        <div ref={endOfBackGroundMarker} className={"ao-body4-end-bg-marker"}
             style={{display: "flex", width: "100%"}}></div>
    </div>;
};


const ContentImage: React.FC<{
    imageUrl: string,
    imageHeight: string,
    imageWidth: string,
    imageTransform: string,
    imageMarginTop: string,
    imageMarginLeft: string,
    imageAlt: string,
    showBubble: boolean, bubbleTexts: {
        upper: string,
        lower: string,
    },
    smallBubbleLeft: string,
    bigBubbleLength: string,
    bigBubbleTop: string,
    bigBubbleLeft: string,
    smallBubbleWidth: string,
    smallBubbleTop: string,
    bigBubbleFontSize: string,
    bigBubbleTextLineHeight: string,
}> = ({
          imageUrl, imageWidth,
          imageHeight, imageTransform, imageMarginTop,
          imageMarginLeft, imageAlt,
          showBubble, bubbleTexts,
          smallBubbleLeft, smallBubbleWidth,
          smallBubbleTop,
          bigBubbleLength, bigBubbleTop,
          bigBubbleFontSize, bigBubbleTextLineHeight,
          bigBubbleLeft
      }) => {
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
            <img src={imageUrl} alt={imageAlt}
                 style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     width: imageWidth,
                     height: imageHeight,
                     alignSelf: "center",
                     transform: imageTransform,
                     marginTop: imageMarginTop,
                     marginLeft: imageMarginLeft,
                 }}/>
            <div className={"ao-body4-end-bg-marker"}
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
                        width: smallBubbleWidth,
                        height: smallBubbleWidth,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        left: smallBubbleLeft,
                        top: smallBubbleTop,
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
                        width: bigBubbleLength,
                        height: bigBubbleLength,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        borderRadius: "50%",
                        background: COLORS.STEEL_BLUE,
                        top: bigBubbleTop,
                        left: bigBubbleLeft,
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
                                        fontSize: bigBubbleFontSize,
                                        lineHeight: bigBubbleTextLineHeight,
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
                                        fontSize: bigBubbleFontSize,
                                        lineHeight: bigBubbleTextLineHeight,
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
    imageUrl: string;
    imageTransform: string;
    imageWidth: string;
    paragraphs: string[];
    imageMarginTop: string;
    imageMarginLeft: string;
    imageHeight: string;
    imageAlt: string;

    contentWidth: string;
    contentTextBoxPaddingTop: string;
    contentTextBoxPaddingBottom: string;
    paragraphLineHeight: string;
    paragraphFontSize: string;
    paragraphFontWeight: string;

    bubbleTexts: {
        upper: string,
        lower: string,
    };
    endMarkerHeight: string;
    smallBubbleLeft: string;
    smallBubbleTop: string;
    smallBubbleWidth: string;
    bigBubbleTextLineHeight: string;
    bigBubbleLength: string;
    bigBubbleTop: string;
    bigBubbleLeft: string;
    bigBubbleFontSize: string;
}

export const Content: React.FC<ContentProps> = ({
                                                    imageUrl,
                                                    imageWidth,
                                                    imageHeight,
                                                    imageTransform, imageAlt,
                                                    imageMarginTop,
                                                    imageMarginLeft,
                                                    contentWidth,
                                                    contentTextBoxPaddingTop,
                                                    contentTextBoxPaddingBottom,
                                                    bubbleTexts,
                                                    smallBubbleLeft,
                                                    smallBubbleWidth,
                                                    smallBubbleTop,
                                                    bigBubbleLength, bigBubbleTop,
                                                    bigBubbleLeft, bigBubbleFontSize, bigBubbleTextLineHeight,
                                                    paragraphs,
                                                    paragraphLineHeight,
                                                    paragraphFontSize, paragraphFontWeight,
                                                    endMarkerHeight
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
        <ContentImage showBubble={showBubble}
                      bubbleTexts={bubbleTexts}
                      imageUrl={imageUrl}
                      imageWidth={imageWidth}
                      imageHeight={imageHeight}
                      imageAlt={imageAlt}
                      imageTransform={imageTransform}
                      imageMarginTop={imageMarginTop}
                      imageMarginLeft={imageMarginLeft}
                      smallBubbleLeft={smallBubbleLeft}
                      smallBubbleWidth={smallBubbleWidth}
                      smallBubbleTop={smallBubbleTop}
                      bigBubbleLength={bigBubbleLength}
                      bigBubbleTop={bigBubbleTop}
                      bigBubbleLeft={bigBubbleLeft}
                      bigBubbleTextLineHeight={bigBubbleTextLineHeight}
                      bigBubbleFontSize={bigBubbleFontSize}></ContentImage>
        <Parallax className={"ao-body4-parallax"} pages={1.5}
                  style={{
                      display: "flex",
                      position: "absolute",
                      justifyContent: "center",
                      alignItems: "center",
                      width: contentWidth,
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
                        width: "100%",
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
                            opacity: 0.7,
                            zIndex: 0,
                        }}>

                        </div>
                        <div className={"ao-body4-content-text-paragraphs"}
                             style={{
                                 height: "100%",
                                 display: "flex", flexDirection: "column", rowGap: "20px",
                                 zIndex: 1,
                                 paddingTop: contentTextBoxPaddingTop,
                                 paddingBottom: contentTextBoxPaddingBottom,
                             }}>
                            {paragraphs.map((paragraph, index) => {
                                return <Typography.Text key={index} style={{
                                    color: COLORS.PURE_WHITE,
                                    lineHeight: paragraphLineHeight,
                                    fontSize: paragraphFontSize,
                                    fontWeight: paragraphFontWeight,
                                }}>
                                    {paragraph}
                                </Typography.Text>;
                            })}
                        </div>
                    </div>
                </div>
                <ContentEndMarker handleOnIntersect={(isIntersecting) => {
                    setShowBubble(isIntersecting);
                }}
                                  threshold={1}
                                  endMarkerHeight={endMarkerHeight}
                />
            </ParallaxLayer>
        </Parallax>
    </div>;
};

export default Content;