import {Button, Typography} from "antd";
import {COLORS} from "../../utils/constants/constants.ts";
import * as React from "react";
import {_getContents} from "./contentInfoGetter.ts";

interface _ContentsProps {
    contents: ReturnType<typeof _getContents>
    shouldReverseContentTextAndImage: boolean;
    paragraphFontSize: string
}

const _Contents: React.FC<_ContentsProps> = ({contents, shouldReverseContentTextAndImage, paragraphFontSize}) => {
    return <>
        {contents.map((content, index) => {
            const itemsFlexDirection = (shouldReverseContentTextAndImage && (index % 2 == 1)) ? "column-reverse" : "column";
            return <div className="ao-body3-pedigree-car-content" key={index}
                        style={{display: "flex", width: "100%", flexDirection: itemsFlexDirection}}>
                <div className="ao-body3-pedigree-car-text"
                     style={{display: "flex", width: "100%", flexDirection: "column"}}>
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
                         marginTop: "27px",
                         display: "flex",
                         justifyContent: "center",
                         width: "100%",
                     }}>
                    <div style={{
                        display: "flex",
                        position: "relative",
                        justifyContent: "center",
                        width: "max-content"
                    }}>
                        <img style={{position: "relative"}} src={content.image.url}
                             alt={content.image.alt}>

                        </img>

                        <div className="ao-body3-pedigree-car-image-caption-wrapper"
                             style={{
                                 display: "flex",
                                 width: "100%",
                                 height: "100%",
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

            </div>
                ;
        })
        }</>;
};

export default _Contents;