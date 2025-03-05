import * as React from "react";
import {useEffect, useState} from "react";
import {useIntersectingRef} from "../../hooks/useIntersectingRef.tsx";
import {COLORS} from "../../utils/constants/constants.ts";
import icon_cross from "../../assets/body6/cross_icon.png";
import {Typography} from "antd";
import {Property as CSSProperty} from 'csstype';

type TextAlign = CSSProperty.TextAlign;


interface ContentData {
    imageUrl: string,
    credit: string,
    text: string
}


const ImageContent: React.FC<{
    shouldReverse: boolean,
    imageScale: number,
    contentId: number,
    text: string,
    imageUrl: string,
    credit: string
}> = ({
          shouldReverse,
          contentId,
          imageUrl, text,
          credit
      }) => {
    const [isHovered, setIsHovered] = useState(false);
    const {intersects: hasIntersected, ref: contentRef} = useIntersectingRef(false, 0.5);
    const [firstTransitionStopped, setFirstTransitionStopped] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const textStyle: {
        display: string,
        justifyContent: string,
        alignItems: string,
        fontSize: string,
        color: string,
        textAlign: TextAlign,
        lineHeight: string,
    } = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.4rem",
        color: COLORS.PURE_WHITE,
        textAlign: "center",
        lineHeight: "1.8rem",
    };

    const modalTextStyle: {
        display: string,
        alignItems: string,
        fontSize: string,
        color: string,
        lineHeight: string,
    } = {
        display: "flex",
        alignItems: "center",
        fontSize: "1.2rem",
        color: COLORS.PURE_WHITE,
        lineHeight: "1.8rem",
    };
    const firstTransitionDuration = 2;

    useEffect(() => {
        if (hasIntersected) {
            setTimeout(() => {
                setFirstTransitionStopped(true);
            }, firstTransitionDuration * 1000);
        } else {
            setFirstTransitionStopped(false);
        }
    }, [hasIntersected]);

    const imageTranslateX = (shouldReverse ? 1 : -1) * 233; // move away from screen

    const modalOrientation = shouldReverse ? {right: "100%"} : {left: "100%"};
    return <div
        className={"ao-body6-bubbles-grid-item"}
        key={`${contentId}${contentId}`}
        style={{
            // backgroundColor: "blue",
            display: "flex",
            flexDirection: shouldReverse ? "row-reverse" : "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            height: "700px",
            position: "relative",
        }}
        ref={contentRef}

    >
        {showModal && <div className={"ao-body6-content-modal"}
                           style={{
                               zIndex: 9999,
                               position: "absolute",
                               background: COLORS.CHARCOAL_SLATE,
                               ...modalOrientation,
                               top: "20%",
                               height: "max-content",
                               width: "400px",
                               display: "flex",
                               flexDirection: "column",
                               justifyContent: "flex-start",
                               alignItems: "center",
                               paddingBottom: "100px",
                           }}>

            <div className={"ao-body6-content-modal-cross"} style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "relative",
                alignItems: "flex-end",
                width: "100%", height: "100px",}}
                 onClick={() => setShowModal(false)}>
                <img src={icon_cross} alt={""}/>
            </div>
            <div className={"ao-body6-content-modal-content"} style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                flexDirection: "column",
                width: "80%", height: "min-content",
            }}>
                <img style={{scale: 1}} src={imageUrl} alt={""}/>
                <Typography.Text style={{...modalTextStyle, marginTop: "30px"}}>
                    {text}
                </Typography.Text>
                <Typography.Text style={{...modalTextStyle, marginTop: "30px", color: COLORS.GOLDEN_AMBER}}>
                    {`${credit}`}
                </Typography.Text>
            </div>
        </div>}
        <div
            className={"ao-body6-gray-bubble"} style={{
            scale: firstTransitionStopped ? 1 : 0,
            transition: "scale 3s",
            display: "flex",
            height: "min-content",
            alignSelf: "flex-start",
            justifyContent: shouldReverse ? "flex-start" : "flex-end",
        }}>
            <div style={{
                display: "flex",
                height: "400px",
                backgroundColor: COLORS.STEEL_BLUE,
                width: "400px",
                borderRadius: "50%",
                position: "relative",
                justifyContent: "center",
            }}>
                <div className={"ao-body6-gray-bubble-text"}
                     style={{
                         display: "flex",
                         width: "62%",
                         flexDirection: "column",
                         justifyContent: "center",
                         alignItems: "center",
                     }}>
                    <Typography.Text style={{...textStyle}}>
                        {text}
                    </Typography.Text>
                    <Typography.Text style={{...textStyle, marginTop: "30px"}}>
                        {`PHOTO: ${credit}`}
                    </Typography.Text>
                </div>
            </div>
        </div>
        <div className={"ao-body6-inner-gap"} style={{
            display: "flex",
            width: "100px",
        }}/>
        <div className={"ao-body6-image-bubble"} style={{
            display: "flex",
            flex: 5,
            justifyContent: "center",
            height: "600px",
            width: "600px",
            position: "relative",
            transform: hasIntersected ? "" : `translateX(${imageTranslateX}%)`,
            transition: `transform ${firstTransitionDuration}s ease-in-out`,
        }}>
            {isHovered && <>
                {/*FIXME: [Issue-0011]*/}
                {/*<div className={"ao-body6-image-border-1"} style={{*/}
                {/*    display: "flex",*/}
                {/*    width: "100%",*/}
                {/*    position: "absolute",*/}
                {/*    justifyContent: "center",*/}
                {/*    background: `linear-gradient(to bottom, ${COLORS.BURNISHED_GOLD}, ${COLORS.WALNUT_BROWN})`,*/}
                {/*    // justifyContent: shouldReverse ? "flex-start" : "flex-end",*/}
                {/*    // backgroundColor: "green",*/}
                {/*    height: "100%",*/}
                {/*    borderRadius: "50%",*/}
                {/*    pointerEvents: "none",*/}
                {/*}}>*/}
                {/*</div>*/}
                <div className={"ao-body6-image-border-2"} style={{
                    scale: 1.1,
                    zIndex: 5,
                    display: "flex",
                    width: "100%",
                    position: "absolute",
                    justifyContent: "center",
                    height: "100%",
                    borderRadius: "50%",
                    opacity: 0.9,
                    pointerEvents: "none",
                    border: `60px solid ${COLORS.BURNISHED_GOLD}`,
                }}>
                </div>
            </>}
            <img style={{
                zIndex: 1,
            }} src={imageUrl} alt={""}
                 onMouseEnter={() => {
                     setIsHovered(true);
                 }}
                 onMouseLeave={() => setIsHovered(false)}
                 onClick={() => {
                     setShowModal((is => !is));
                 }}
            />
        </div>
        <div className={"ao-body6-outer-gap"} style={{
            display: "flex",
            width: "30px",
        }}/>
    </div>;
};

interface ImageContentsDesktopProps {
    contentDatas: ContentData[]
}

const ImageContents: React.FC<{ contentDatas: ContentData[] }> = ({contentDatas}) => {
    return <div
        className={"ao-body6-bubbles-grid"}
        style={{
            display: "grid",
            position: "relative",
            width: "min-content",
            gridTemplateColumns: "repeat(2, 1fr)",
            rowGap: "20px",
        }}>

        {contentDatas.map((content, i) => {
            const shouldReverse = i % 2 == 1;
            const imageScale = 0.9;
            return <ImageContent key={i} imageUrl={content.imageUrl} credit={content.credit} text={content.text}
                                 shouldReverse={shouldReverse} imageScale={imageScale} contentId={i}/>;
        })}
    </div>;
};


export const ImageContentsGrid = ({contentDatas}: ImageContentsDesktopProps) => {
    return <div className={"ao-body6-bubbles"} style={{
        display: "flex",
        position: "relative",
        width: "80%",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        marginTop: "150px",
    }}>
        <ImageContents contentDatas={contentDatas}/>
    </div>;
};

export default ImageContentsGrid;