import {COLORS} from "../../utils/constants/constants.ts";

import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useEffect, useRef, useState} from "react";
import {Typography} from "antd";


interface ContentProps {
    imageUrl: string;
    transform: string;
    imageWidth: string;
    paragraphs: string[];
    imageMarginTop: string;
    imageMarginLeft: string;
    bubbleTexts: {
        upper: string,
        lower: string,
    };
    contentWidth: string;
    imageHeight: string;
}


interface ContentEndMarkerProps {
    handleOnIntersect: (isIntersecting: boolean) => void;
    threshold: number;
}

const ContentEndMarker: React.FC<ContentEndMarkerProps> = ({handleOnIntersect, threshold}) => {
    const endOfTextMarker = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                handleOnIntersect(entry.isIntersecting);
            },
            {threshold: threshold},
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
    }, [handleOnIntersect, threshold]);

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
    imageUrl: string, imageHeight: string, imageWidth: string, transform: string,
    imageMarginTop: string,
    imageMarginLeft: string, showBubble: boolean, bubbleTexts: {
        upper: string,
        lower: string,
    }
}> = ({
          imageUrl,
          imageWidth,
          imageHeight,
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
            <img src={imageUrl} alt={""}
                 style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     width: imageWidth,
                     height: imageHeight,
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


export const Content: React.FC<ContentProps> = ({
                                                    imageUrl,
                                                    imageWidth,
                                                    imageHeight,
                                                    transform,
                                                    paragraphs,
                                                    imageMarginTop,
                                                    imageMarginLeft,
                                                    bubbleTexts,
                                                    contentWidth
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
        <ContentImage bubbleTexts={bubbleTexts} showBubble={showBubble} imageUrl={imageUrl} imageWidth={imageWidth}
                      imageHeight={imageHeight}
                      transform={transform}
                      imageMarginTop={imageMarginTop}
                      imageMarginLeft={imageMarginLeft}
        ></ContentImage>
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
                }} threshold={1}/>
            </ParallaxLayer>
        </Parallax>
    </div>;
};

export default Content;