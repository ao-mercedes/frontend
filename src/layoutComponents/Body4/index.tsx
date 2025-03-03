import {COLORS, Device} from "../../utils/constants/constants.ts";

import img_parallax_interior1 from "../../assets/Body4/parallax_interior1_trim_transparent.png";
import img_parallax_interior2 from "../../assets/Body4/parallax_interior2.png";

interface ContentProps {
    imgUrl: string;
    transform: string;
    imgWidth: string;
}

const Content: React.FC<ContentProps> = ({
                                             imgUrl,
                                             imgWidth,
                                             transform
                                         }) => {
    return <div className={"ao-body4-content"}
                style={{display: "flex", overflow: "hidden", flexDirection: "column", width: "100%", height: "1000px"}}>
        <img src={imgUrl} alt={""}
             style={{
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 width: imgWidth,
                 height: "100%",
                 alignSelf: "center",
                 transform: transform,
             }}/>

    </div>;
};


const headerClipPaths = {
    [Device.mobile]: "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)",
    [Device.tablet]: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    [Device.desktop]: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
};
const headerHeights = {
    [Device.mobile]: "180px",
    [Device.tablet]: "100px",
    [Device.desktop]: "100px",
};
const imgWidths = {
    [Device.mobile]: "295%",
    [Device.tablet]: "100%",
    [Device.desktop]: "100%",
};

const imgTransforms = {
    [Device.mobile]: "translateX(-12px) translateY(-20px)",
    [Device.tablet]: "",
    [Device.desktop]: "",
};


export const Body4: React.FC<{ device: Device }> = ({device}) => {
    const showFirstOnly = device == Device.mobile;


    const headerClipPath = headerClipPaths[device] ?? "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)";
    // const headerPaddingTop = headerPaddingTops[device] ?? "";
    // const headerPaddingBottom = headerPaddingBottoms[device] ?? "";
    // const headerTextPaddingLeft = headerTextPaddingLefts[device] ?? "";
    // const headerFontSize = headerFontSizes[device] ?? "";
    // const headerLineHeight = headerLineHeights[device] ?? "";

    const headerHeight = headerHeights[device] ?? "200px";
    const imgWidth = imgWidths[device] ?? "295%";
    const imgTransform = imgTransforms[device] ?? "translateX(-12px) translateY(-12px)";
    return <div className="ao-body4" style={{display: "flex", flexDirection: "column", width: "100%"}}>
        <div className={"ao-body4-header"} style={{
            display: "flex",
            position: "absolute",
            height: headerHeight,
            zIndex: 1000,
            width: "100%",
            justifyContent: "end",
        }}>
            <div className={"ao-body4-header-text"} style={{
                display: "flex",
                backgroundColor: COLORS.DEEP_OLIVE,
                width: "100%",
                clipPath: headerClipPath,
            }}>
                aa
            </div>
        </div>

        <Content imgWidth={imgWidth} imgUrl={img_parallax_interior1} transform={imgTransform}/>
        {!showFirstOnly && <Content imgWidth={imgWidth} imgUrl={img_parallax_interior2} transform=""/>}
    </div>;
};

export default Body4;