import {Button, Typography} from "antd";
import {COLORS} from "../../utils/constants/constants.ts";
import * as React from "react";
import {_getContents} from "./contentInfoGetter.ts";

import {Property as CSSProperty} from 'csstype';
import {useEffect, useRef} from "react";

export interface Content {
    paragraphs: string[]
    image: Image
}

export interface Image {
    url: string
    alt: string
    caption: string
    captionAlignment: string
}


interface _ContentProps {
    content: Content
    paragraphFontSize: string;
    itemsFlexDirection: CSSProperty.FlexDirection;
    index: number;
    imageScale: number;
    imageWrapperScale: number;
    imageMarginTop: string;
}

const ContentComponent: React.FC<_ContentProps> = ({
                                                       index,
                                                       itemsFlexDirection,
                                                       paragraphFontSize,
                                                       content,
                                                       imageScale,
                                                       imageMarginTop,
                                                       imageWrapperScale
                                                   }) => {

    const [showImage, setShowImage] = React.useState(false);
    const textDivRef = useRef<HTMLDivElement | null>(null);

    // when seen a part of text, start to show image
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowImage(entry.isIntersecting);
                }
            },
            {threshold: 0.7},
        );

        const currRef = textDivRef.current;
        if (currRef) {
            observer.observe(currRef);
        }

        return () => {
            if (currRef) {
                observer.unobserve(currRef);
            }
        };
    }, []);

    return <div className="ao-body3-pedigree-car-content" key={index}
                style={{display: "flex", width: "100%", flexDirection: itemsFlexDirection}}>
        <div ref={textDivRef} className="ao-body3-pedigree-car-text-wrapper"
             style={{display: "flex", width: "100%", flexDirection: "column",}}>
            {content.paragraphs.map((paragraph, pIdx) => {
                return <Typography.Paragraph
                    key={`content-${index}-p-${pIdx}`}
                    style={{
                        fontSize: paragraphFontSize,
                        fontWeight: "600",
                        color: COLORS.WALNUT_BROWN,
                    }}
                >
                    {paragraph}
                </Typography.Paragraph>;
            })}
        </div>
        <div className="ao-body3-pedigree-car-image-wrapper"
             style={{
                 marginTop: imageMarginTop,
                 display: "flex",
                 justifyContent: "center",
                 width: "100%",
                 height: "100%",
                 scale: imageWrapperScale,
             }}>
            <div style={{
                display: "flex",
                position: "relative",
                justifyContent: "center",
                width: "max-content"
            }}>
                <img style={{
                    position: "relative",
                    width: showImage ? "100%" : "0%",
                    scale: showImage ? imageScale : 0,
                    transition: showImage ? "scale 4s, width 4s ease-in, height 2s ease-in" : "",
                }} src={content.image.url}
                     alt={content.image.alt}>
                </img>
                <div className="ao-body3-pedigree-car-image-caption-wrapper"
                     style={{
                         display: "flex",
                         scale: showImage ? imageScale : 0,
                         width: showImage ? "100%" : "0%",
                         transition: showImage ? "scale 4s, width 4s ease-in, height 4s ease-in" : "",
                         height: showImage ? "100%" : "0%",
                         position: "absolute",
                         overflow: "hidden",
                         borderRadius: "50%",
                         paddingTop: "10%"
                     }}>
                    <div className="ao-body3-pedigree-car-image-caption-----"
                         style={{
                             display: "flex",
                             width: "65%",
                             marginLeft: "auto",
                             height: "fit-content",
                         }}>
                        <Button shape="round" style={{
                            display: "flex",
                            color: COLORS.PURE_WHITE,
                            background: COLORS.BURNISHED_GOLD,
                            fontSize: "1rem",
                            fontWeight: "600",
                            lineHeight: "2rem",
                            height: "fit-content",
                            justifyContent: "start",
                            width: "100%",
                        }}>
                            {content.image.caption}
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    </div>;
};

interface _ContentsProps {
    contents: ReturnType<typeof _getContents> // FIXME decouple type from resource getter
    shouldReverseContentTextAndImageOnAlternateItems: boolean;
    paragraphFontSize: string
    imageScale: number;
    imageWrapperScale: number;
    itemColumn: boolean; // if content's item display in column
}

const ContentsComponent: React.FC<_ContentsProps> = ({
                                                         contents,
                                                         shouldReverseContentTextAndImageOnAlternateItems,
                                                         paragraphFontSize,
                                                         imageScale,
                                                         itemColumn,
                                                         imageWrapperScale
                                                     }) => {
    const imageMarginTop = itemColumn ? "27px" : "0";


    return <>
        {contents.map((content, index) => {


            const shouldReverse = (shouldReverseContentTextAndImageOnAlternateItems && (index % 2 == 1));
            let itemsFlexDirection: CSSProperty.FlexDirection = "row";
            if (itemColumn) {
                itemsFlexDirection = shouldReverse ? "column-reverse" : "column";
            } else {
                itemsFlexDirection = shouldReverse ? "row-reverse" : "row";
            }
            return <ContentComponent imageWrapperScale={imageWrapperScale} imageMarginTop={imageMarginTop}
                                     imageScale={imageScale} content={content}
                                     paragraphFontSize={paragraphFontSize}
                                     itemsFlexDirection={itemsFlexDirection} index={index}/>
                ;
        })
        }</>;
};

export default ContentsComponent;