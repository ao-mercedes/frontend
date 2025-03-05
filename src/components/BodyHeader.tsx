import * as React from "react";
import {COLORS} from "../utils/constants/constants.ts";
import {Typography} from "antd";


interface BodyHeaderProps {
    showHeader: boolean;
    headerHeight: string;
    headerWidth: string;
    headerClipPath: string;
    headerTextPadding: string;
    headerLineHeight: string;
    headerFontSize: string;
    text: string;
    className: string;
}

export const BodyHeader: React.FC<BodyHeaderProps> = ({
                                                          headerHeight,
                                                          showHeader,
                                                          headerWidth,
                                                          headerClipPath,
                                                          headerTextPadding,
                                                          headerLineHeight,
                                                          headerFontSize, text, className
                                                      }) => {
    return <div className={className} style={{
        display: "flex",
        position: "absolute",
        height: headerHeight,
        zIndex: 1000,
        width: "100%",
        justifyContent: "end",
        transform: showHeader ? "translateX(0)" : "translateX(100%)",
        transition: "transform 3s ease-in-out, opacity 3s ease-in-out",
    }}>
        <div className={"ao-body4-header-text"} style={{
            display: "flex",
            backgroundColor: COLORS.DEEP_OLIVE,
            width: headerWidth,
            clipPath: headerClipPath,

        }}>
            <Typography.Text style={{
                color: COLORS.WALNUT_BROWN,
                padding: headerTextPadding,
                lineHeight: headerLineHeight,
                fontSize: headerFontSize,
                fontWeight: "700",
            }}>
                {text}
            </Typography.Text>
        </div>
    </div>;
};

export default BodyHeader;