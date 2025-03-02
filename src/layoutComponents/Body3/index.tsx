import "./index.css";

import {COLORS, Device, horizontalPaddings} from "../../utils/constants/constants.ts";

import {_getContents} from "./content.tsx";

import {PageA4} from "../pageSizes.tsx";

import {Button, Typography} from "antd";


const paragraphFontSizes: { [device in Device]: string } = {
    [Device.mobile]: "20px",
    [Device.tablet]: "14px",
    [Device.desktop]: "32px",
};

const headerFontSizes = {
    [Device.mobile]: "48px",
    [Device.tablet]: "20px",
    [Device.desktop]: "20px",
};

const paragraphMarginTops = {
    [Device.mobile]: "35px",
    [Device.tablet]: "35px",
    [Device.desktop]: "35px",
};

const headerFontWeights = {
    [Device.mobile]: "700",
    [Device.tablet]: "700",
    [Device.desktop]: "700",
};

const headerColors = {
    [Device.mobile]: COLORS.CHARCOAL_SLATE,
    [Device.tablet]: COLORS.CHARCOAL_SLATE,
    [Device.desktop]: COLORS.MOSSY_OLIVE,
};

const marginTops = {
    [Device.mobile]: "75px",
    [Device.tablet]: "55px",
    [Device.desktop]: "55px",
};


export const Body3: React.FC<{ device: Device }> = ({device}) => {


    const paragraphFontSize = paragraphFontSizes[device] ?? "20px";


    const marginTop = marginTops[device] ?? "55px";
    const headerColor = headerColors[device] ?? COLORS.CHARCOAL_SLATE;
    const headerFontSize = headerFontSizes[device] ?? "48px";
    const headerFontWeight = headerFontWeights[device] ?? "700";
    const paragraphMarginTop = paragraphMarginTops[device] ?? "35px";
    const shouldReverseContentTextAndImage = device == Device.desktop || device == Device.tablet;


    const shouldGetFirstContentOnly = device == Device.mobile;
    const contents = _getContents(shouldGetFirstContentOnly);
    return (
        <div
            className="ao-body3-container"
            style={{backgroundColor: COLORS.GRAY}}
        >
            <PageA4 style={{
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
                        {
                            contents.map((content, index) => {
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
                                    <div style={{
                                        display: "flex",
                                        width: "100%",
                                        flexDirection: "column",
                                        backgroundColor: "red", borderRadius: "50%",
                                    }}>
                                    </div>
                                </div>
                                    ;
                            })
                        }

                    </div>
                </div>
            </PageA4>

        </div>
    );
};

export default Body3;
