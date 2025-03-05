import {COLORS} from "../utils/constants/constants.ts";

import {Typography} from "antd";


interface BodyFooterProps {
    footerMarginTop: string;
    footerWidth: string;
    showBottomGuide: boolean;
    footerClipPath: string;
    footerPaddingTop: string;
    footerPaddingBottom: string;
    footerTextPaddingLeft: string;
    footerFontSize: string;
    footerLineHeight: string;
    rightFooterHeight: string;
    text: string;
    className: string;
}

export const BodyFooter: React.FC<BodyFooterProps> = (
    {
        footerMarginTop,
        footerWidth,
        showBottomGuide,
        footerClipPath,
        footerPaddingTop,
        footerPaddingBottom,
        footerTextPaddingLeft,
        footerFontSize,
        footerLineHeight,
        rightFooterHeight,
        text,
        className
    }
) => {
    return <div className={className} style={{
        display: "flex",
        position: "relative",
        height: "max-content",
        marginTop: footerMarginTop,
    }}>
        <div style={{
            display: "flex",
            width: footerWidth,
            justifyContent: "center",
            overflow: "hidden",
            transition: "transform 3s ease-in-out, opacity 3s ease-in-out",
            transform: showBottomGuide ? "translateX(0)" : "translateX(-100%)",
            clipPath: footerClipPath,
            alignItems: "center",
            height: "fit-content",
            zIndex: 1000,
            backgroundColor: COLORS.HIGH_ORANGE,
            paddingTop: footerPaddingTop,
            paddingBottom: footerPaddingBottom,
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
                    fontSize: footerFontSize,
                    fontWeight: "500",
                    lineHeight: footerLineHeight,
                    wordBreak: "break-word",
                }}>
                    {text}
                </Typography.Text>
            </div>
        </div>

        <div className={"ao-body-header-end-border"} style={{
            display: "flex",
            backgroundColor: COLORS.LIGHT_BROWN,
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: rightFooterHeight,
            justifyContent: "center"
        }}>
        </div>
    </div>;
};

export default BodyFooter;