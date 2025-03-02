import "./index.css";

import {COLORS, Device, horizontalPaddings} from "../../utils/constants/constants.ts";

import {_getContents} from "./contentInfoGetter.ts";

import {PageA4} from "../pageSizes.tsx";

import {Typography} from "antd";
import * as React from "react";
import _Contents from "./_Contents.tsx";


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
                    </div>
                    <_Contents contents={contents} shouldReverseContentTextAndImage={shouldReverseContentTextAndImage}
                               paragraphFontSize={paragraphFontSize}></_Contents>
                </div>
            </PageA4>

        </div>
    );
};

export default Body3;
