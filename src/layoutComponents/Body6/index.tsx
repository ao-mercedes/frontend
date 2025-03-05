import "./index.css";

import img_flawed_left from "../../assets/Body6/Flawed_left1.png";

import {COLORS, Device} from "../../utils/constants/constants.ts";

import BodyHeader from "../../components/BodyHeader.tsx";
import Paragraphs from "../Body5/Paragraphs.tsx";
import {UnbrokenPage} from "../pageSizes.tsx";

import {useIntersectingRef} from "../../hooks/useIntersectingRef.tsx";

import {useState} from "react";

const headerClipPaths = {
    [Device.mobile]: "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)",
    [Device.tablet]: "polygon(0% 0%, 100% 0%, 100% 100%, 6% 100%)",
    [Device.desktop]: "polygon(0% 0%, 100% 0%, 100% 100%, 4% 100%)",
};

const headerHeights = {
    [Device.mobile]: "166px",
    [Device.tablet]: "110px",
    [Device.desktop]: "210px",
};

const headerLineHeights = {
    [Device.mobile]: "1.4rem",
    [Device.tablet]: "1.2rem",
    [Device.desktop]: "2.6rem",
};
const headerFontSizes = {
    [Device.mobile]: "1.2rem",
    [Device.tablet]: "1.2rem",
    [Device.desktop]: "2.4rem",
};

const headerWidths = {
    [Device.mobile]: "100%",
    [Device.tablet]: "87%",
    [Device.desktop]: "72%",
};

const headerTextPaddings = {
    [Device.mobile]: "5% 15% 0% 15%",
    [Device.tablet]: "4% 1% 0% 10%",
    [Device.desktop]: "2% 0% 0% 10%",
};


const rowGaps = {
    [Device.mobile]: "20px",
    [Device.tablet]: "20px",
    [Device.desktop]: "40px",
};

const pageHorizontalPaddingsPx = {
    [Device.mobile]: 70,
    [Device.tablet]: 100,
    [Device.desktop]: 640,
};

const paragraphLineHeights = {
    [Device.mobile]: "1.8rem",
    [Device.tablet]: "1.4rem",
    [Device.desktop]: "2.7rem",
};

const paragraphFontSizes = {
    [Device.mobile]: "1.2rem",
    [Device.tablet]: "1rem",
    [Device.desktop]: "2.1rem",
};

const texts = [
    "The SL55 is not perfect. Its ergonomics could be better, its rear wheel steering system further improved, and the boot should be bigger. I am puzzled at the lack of soft closing doors, and really, given the price tag, it s outrageous that carbon ceramic brakes aren t standard.",
    "The engines heat also soaks into the cabin once it and the air con are switched off. I excuse this by calling it the 'SL's warm embrace', but I am irked because the air con can t seem to cool the cabin on a hot day.",
    "Exotic supercars aside, there are not many luxury cars today with the SL's heritage and V8 soundtrack. The last car I recall was the Lexus LC500 Convertible . But it doesn t feel as solid. It also does not have the SL's lineage.",
    "Attraction is a funny thing because it can both heighten and dull your senses. Seeing and driving the SL makes my pulse race, and at the same time, overlook its shortcomings.",
    "What matters most, though, is that driving it reminds me that life isn t just about work. And in it, I am also freed from sustainabilitys constant clamour. The SL refreshes my soul how can I not love it so?",
];

const ImageContent: React.FC<{
    shouldReverse: boolean,
    imageScale: number,
    contentId: number,
}> = ({
          shouldReverse,
          contentId
      }) => {
    const [isHovered, setIsHovered] = useState(false);


    console.log("isHovered", isHovered);
    return <div key={`${contentId}${contentId}`}
                style={{
                    // backgroundColor: "blue",
                    display: "flex",
                    flexDirection: shouldReverse ? "row-reverse" : "row",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    height: "700px",
                }}>
        <div className={"ao-body6-gray-bubble-mobile"} style={{
            display: "flex",
            flex: 5,
            height: "min-content",
            alignSelf: "flex-start",
            justifyContent: shouldReverse ? "flex-start" : "flex-end",
        }}>
            <div style={{
                display: "flex",
                height: "400px",
                backgroundColor: COLORS.STEEL_BLUE,
                width: "400px",
                // transform: "translateY(-100px)",
                borderRadius: "50%",
            }}>
            </div>
        </div>
        <div className={"ao-body6-inner-gap-mobile"} style={{
            display: "flex",
            width: "100px",
        }}/>
        <div className={"ao-body6-image-bubble-mobile"} style={{
            display: "flex",
            flex: 5,
            justifyContent: "center",
            height: "600px",
            width: "600px",
            position: "relative",
        }}

        >
            {isHovered && <>
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
            }} src={img_flawed_left} alt={""}
                 onMouseEnter={() => {
                     setIsHovered(true);
                 }}
                 onMouseLeave={() => setIsHovered(false)}
            />
        </div>
        <div className={"ao-body6-outer-gap"} style={{
            display: "flex",
            width: "30px",
        }}/>
    </div>;
};

export const Body6: React.FC<{ device: Device, }> = ({device}) => {
    const {intersects: bodyEntered, ref: bodyEntryDiv} = useIntersectingRef(true, 1);

    const showHeader = bodyEntered && (device == Device.tablet || device == Device.desktop);


    const headerHeight = headerHeights[device] ?? "166px";
    const headerTextPadding = headerTextPaddings[device] ?? "5% 15% 0% 15%";
    const headerLineHeight = headerLineHeights[device] ?? "1.4rem";
    const headerClipPath = headerClipPaths[device] ?? "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)";
    const headerWidth = headerWidths[device] ?? "100%";
    const headerFontSize = headerFontSizes[device] ?? "1.2rem";

    const pageHorizontalPaddingPx = pageHorizontalPaddingsPx[device] ?? 70;
    const pageHorizontalPadding = `${pageHorizontalPaddingPx}px`;
    const paragraphFontSize = paragraphFontSizes[device] ?? "30px";
    const rowGap = rowGaps[device] ?? "20px";
    const paragraphLineHeight = paragraphLineHeights[device] ?? "30px";

    const color = COLORS.WALNUT_BROWN;
    const fontWeight = "600";
    return <div className="ao-body6"
                style={{
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    width: "100%",
                    overflow: "auto",
                    height: "min-content",
                    backgroundColor: COLORS.GRAY,
                }}

    >
        <div ref={bodyEntryDiv}/>
        <BodyHeader className={"ao-body6-header"} showHeader={showHeader} headerHeight={headerHeight}
                    headerWidth={headerWidth}
                    headerClipPath={headerClipPath} headerTextPadding={headerTextPadding}
                    headerLineHeight={headerLineHeight} headerFontSize={headerFontSize}
                    text={"The SL55 is not perfect. Its ergonomics could be better, its rear wheel steering system further improved, and the boot should be bigger."}
        />
        <UnbrokenPage style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            paddingLeft: pageHorizontalPadding,
            paddingRight: pageHorizontalPadding,
            marginTop: "350px",
        }}>
            <Paragraphs fontSize={paragraphFontSize} paragraphLineHeight={paragraphLineHeight}
                        texts={texts} rowGap={rowGap} color={color} fontWeight={fontWeight}/>
        </UnbrokenPage>

        <div className={"ao-body6-bubbles-mobile"} style={{
            display: "flex",
            position: "relative",
            width: "80%",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            // backgroundColor: "red",
        }}>
            <div
                className={"ao-body6-bubbles-mobile-grid"}
                style={{
                    display: "grid",
                    position: "relative",
                    width: "min-content",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    rowGap: "20px",
                }}>

                {[1, 2, 3, 4].map((_, i) => {
                    const shouldReverse = i % 2 == 1;
                    const imageScale = 0.9;

                    return <ImageContent shouldReverse={shouldReverse} imageScale={imageScale} contentId={i}/>;
                })}
            </div>

        </div>

    </div>;
};

export default Body6;

// const expS = {
//     border: "4px solid transparent",
//     borderRadius: "20px",
//     background: "linear-gradient(to right, white, white), linear-gradient(to right, red , blue)",
//     backgroundClip: "padding-box, border-box",
//     backgroundOrigin: "padding-box, border-box",
// };
