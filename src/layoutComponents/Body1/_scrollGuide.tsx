import {COLORS, Device} from "../../utils/constants/constants.ts";

import {titleScrollGuideText} from "../../assets/textual/intro.ts";
import img_arrowdown from "../../assets/body1/main-arrow-down.svg";

import {Typography} from "antd";

export const _ScrollGuide: React.FC<{ device: Device }> = ({device}) => {
    let scrollGuideLength = "";
    if (device == Device.mobile) {
        scrollGuideLength = "320px";
    } else if (device == Device.tablet) {
        scrollGuideLength = "360px";
    } else if (device == Device.desktop) {
        scrollGuideLength = "900px";
    }

    let scrollGuideTextFontSize = "5.5rem";
    if (device == Device.mobile) {
        scrollGuideTextFontSize = "2rem";
    } else if (device == Device.tablet) {
        scrollGuideTextFontSize = "2rem";
    } else if (device == Device.desktop) {
        scrollGuideTextFontSize = "5.5rem";
    }

    let scrollGuideArrowStyle = {};
    if (device == Device.mobile) {
        scrollGuideArrowStyle = {width: "3.5rem", bottom: 28};
    } else if (device == Device.tablet) {
        scrollGuideArrowStyle = {width: "5rem", bottom: 30};
    } else if (device == Device.desktop) {
        scrollGuideArrowStyle = {width: "10rem", bottom: 80};
    }

    let scrollGuideKeyframeClassName = "ao-scroll-guide-tablet";
    if (device == Device.mobile) {
        scrollGuideKeyframeClassName = "ao-scroll-guide-mobile";
    } else if (device == Device.tablet) {
        scrollGuideKeyframeClassName = "ao-scroll-guide-tablet";
    } else if (device == Device.desktop) {
        scrollGuideKeyframeClassName = "ao-scroll-guide-desktop";
    }
    return (
        <div
            id="ao-scroll-guide"
            className={`${scrollGuideKeyframeClassName}`}
            style={{
                zIndex: 1000,
                display: "flex",
                position: "absolute",
                height: scrollGuideLength,
                width: scrollGuideLength,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                className="ao-scroll-guide-bg"
                style={{
                    display: "flex",
                    borderRadius: "50%",
                    opacity: 0.8,
                    backgroundColor: COLORS.CHARCOAL_SLATE,
                    height: "100%",
                    width: "100%",
                    position: "fixed",
                }}
            ></div>
            <div
                style={{
                    width: "80%",
                    height: "80%",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 1000,
                    alignItems: "center",
                }}
            >
                <Typography.Title
                    level={3}
                    style={{
                        textAlign: "center",
                        display: "flex",
                        color: COLORS.PURE_WHITE,
                        fontSize: scrollGuideTextFontSize,
                    }}
                >
                    {titleScrollGuideText}
                </Typography.Title>
            </div>
            <img
                style={{
                    zIndex: 0,
                    position: "absolute",
                    height: "auto",
                    ...scrollGuideArrowStyle,
                }}
                src={img_arrowdown}
                alt={"Go to next item"}
            ></img>
        </div>
    );
};

export default _ScrollGuide;
