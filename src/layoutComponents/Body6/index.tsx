import "./index.css";

import img_flawed_left1 from "../../assets/body6/Flawed_left1.png";
import img_flawed_left2 from "../../assets/body6/Flawed_left2.png";
import img_flawed_left3 from "../../assets/body6/Flawed_left3.png";
import img_flawed_right1 from "../../assets/body6/Flawed_right1.png";
import img_flawed_right2 from "../../assets/body6/Flawed_right2.png";
import img_flawed_right3 from "../../assets/body6/Flawed_right3.png";
import img_summary_left from "../../assets/body6/footer_left_what_we_like.png";
import img_summary_right from "../../assets/body6/footer_right_what_we_dislike.png";
import img_bottom_advertisement from "../../assets/body6/bottom_advertisement.png";

import {COLORS, Device} from "../../utils/constants/constants.ts";

import BodyHeader from "../../components/BodyHeader.tsx";
import Paragraphs from "../Body5/Paragraphs.tsx";
import {VerticalPage} from "../pageSizes.tsx";

import {useIntersectingRef} from "../../hooks/useIntersectingRef.tsx";
import ImageContentsGrid from "./ImageContentGrid.tsx";
import {Summaries, SummaryDataT} from "./Summaries.tsx";


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

const marginTops = {
    [Device.mobile]: "50px",
    [Device.tablet]: "120px",
    [Device.desktop]: "350px",
};

const texts = [
    "The SL55 is not perfect. Its ergonomics could be better, its rear wheel steering system further improved, and the boot should be bigger. I am puzzled at the lack of soft closing doors, and really, given the price tag, it s outrageous that carbon ceramic brakes aren t standard.",
    "The engines heat also soaks into the cabin once it and the air con are switched off. I excuse this by calling it the 'SL's warm embrace', but I am irked because the air con can t seem to cool the cabin on a hot day.",
    "Exotic supercars aside, there are not many luxury cars today with the SL's heritage and V8 soundtrack. The last car I recall was the Lexus LC500 Convertible . But it doesn t feel as solid. It also does not have the SL's lineage.",
    "Attraction is a funny thing because it can both heighten and dull your senses. Seeing and driving the SL makes my pulse race, and at the same time, overlook its shortcomings.",
    "What matters most, though, is that driving it reminds me that life isn t just about work. And in it, I am also freed from sustainabilitys constant clamour. The SL refreshes my soul how can I not love it so?",
];


const contentDatas = [
    {
        image: {url: img_flawed_left1, alt: "Feature of information screen in a sports car"},
        credit: "sgCarMart",
        text: "SL comes with a 'free' IWC timepiece with a stopwatch feature for recording lap times."
    },

    {
        image: {url: img_flawed_right1, alt: "Engine of a car"},
        credit: "sgCarMart",
        text: `"Full-fat" AMG models continue to have engines assembled by a single engineer, whose signature adorns the engine cover.`
    },
    {
        image: {url: img_flawed_left2, alt: "Feature of information screen in a sports car"},
        credit: "sgCarMart",
        text: "The SL 55 can adapt to your personal driving style all you need to do is adjust these parameters."
    },
    {
        image: {url: img_flawed_right2, alt: "View of a sport car with a soothing backdrop"},
        credit: "sgCarMart",
        text: "We're not sure if the next SL will be available with a V8 or even an internal combustion engine, so savour this one while it's still around."
    },
    {
        image: {url: img_flawed_left3, alt: "Opened soft-top of a car"},
        credit: "sgCarMart",
        text: "The soft-top actually opens and closes quickly provided the virtual toggle doesn't slip away from your finger, of course."
    },
    {
        image: {url:img_flawed_right3 , alt: "View of an open-top car with a driver"},
        credit: "sgCarMart",
        text: "The SL's dual-nature enables it to be a cruiser when you're chilling, or a bruiser when you're feeling fiery."
    },
];


const summaryDatas: SummaryDataT[] = [
    {
        title: "What We Like",
        image: {url:img_summary_left ,alt: "Front outline of car"},
        texts: ["Rapid performance", "Loud V8 and throaty exhaust", "Pliant ride", "Cruising ability", "Might be the last SL with a V8", "Still feels special"]
    },
    {
        title: "What We Dislike",
        image: {url:img_summary_right,alt: "Back outline of car" },
        texts: ["Ridiculous $1 million price tag", "Non-existent rear-wheel", "steering", "No soft-closing doors", "Seriously overpriced"]
    }
];


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

    const summaryHeight = 620;
    const summaryDivSideRadius = summaryHeight / 2;

    const marginTop = marginTops[device] ?? "350px";
    const shouldShowHeaderAndParagraph = device == Device.desktop || device == Device.tablet;
    return <div className="ao-body6"
                style={{
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    width: "100%",
                    overflow: "hidden",
                    height: "min-content",
                    backgroundColor: COLORS.GRAY,
                }}>
        <div ref={bodyEntryDiv}/>
        {shouldShowHeaderAndParagraph && <>
            <BodyHeader className={"ao-body6-header"} showHeader={showHeader} headerHeight={headerHeight}
                        headerWidth={headerWidth}
                        headerClipPath={headerClipPath} headerTextPadding={headerTextPadding}
                        headerLineHeight={headerLineHeight} headerFontSize={headerFontSize}
                        text={"The SL55 is not perfect. Its ergonomics could be better, its rear wheel steering system further improved, and the boot should be bigger."}
            />
            <VerticalPage style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
                paddingLeft: pageHorizontalPadding,
                paddingRight: pageHorizontalPadding,
                marginTop: marginTop,
            }}>
                <Paragraphs fontSize={paragraphFontSize} paragraphLineHeight={paragraphLineHeight}
                            texts={texts} rowGap={rowGap} color={color} fontWeight={fontWeight}/>
            </VerticalPage></>}


        {/* FIXME Only show Summaries on desktop for now, yet to work on mobile/tablet*/}
        {device == Device.desktop && <>
            <ImageContentsGrid contentDatas={contentDatas}/>
            <Summaries summaryHeight={summaryHeight} summaryDivSideRadius={summaryDivSideRadius}
                       summaryDatas={summaryDatas}/></>}


        {/* FIXME Missing image for advertisement*/}
        {device == Device.desktop && <div className="ao-body6-bottom-advertisement" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "700px",
            marginTop: "50px",
            backgroundColor: COLORS.GRAY
        }}>
            <img src={img_bottom_advertisement} alt="bottom advertisement" style={{height: "100%"}}/>
        </div>}
    </div>;
};

export default Body6;
