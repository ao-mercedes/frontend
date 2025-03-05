import {COLORS} from "../../utils/constants/constants.ts";


import {Typography} from "antd";
import {Property} from "csstype";
import {useIntersectingRef} from "../../hooks/useIntersectingRef.tsx";

type FlexDirection = Property.FlexDirection;

export type SummaryDataT = {
    title: string;
    imageUrl: string;
    texts: string[];
};


const Summary: React.FC<{
    summaryHeight: number,
    summaryDivSideRadius: number,
    summaryData: SummaryDataT,
    reverse?: boolean,
    hasIntersected: boolean
}> = ({summaryHeight, summaryDivSideRadius, summaryData, reverse, hasIntersected}) => {
    const {imageUrl, texts, title} = summaryData;


    const summaryStyle: {
        flexDirection: FlexDirection;
        borderTopRightRadius: string;
        borderBottomRightRadius: string
        transform: string;
    } | {
        flexDirection: FlexDirection;
        borderTopLeftRadius: string;
        borderBottomLeftRadius: string;
        transform: string;
    } = reverse ? {
        flexDirection: "row-reverse",
        borderTopLeftRadius: `${summaryDivSideRadius}px`,
        borderBottomLeftRadius: `${summaryDivSideRadius}px`,
        transform: hasIntersected ? "translateX(20px)" : "translateX(1500px)",
    } : {
        flexDirection: "row",
        borderTopRightRadius: `${summaryDivSideRadius}px`,
        borderBottomRightRadius: `${summaryDivSideRadius}px`,
        transform: hasIntersected ? "translateX(-20px)" : "translateX(-1500px)",
    };


    const summaryTextWrapperStyle = reverse ? {
        marginLeft: summaryDivSideRadius, // margin aligns to where the semicircle radios ends
        alignItems: "flex-start"
    } : {
        marginRight: summaryDivSideRadius, // margin aligns to where the semicircle radios ends
        alignItems: "flex-end",
    };
    const summaryTextFlexDirection = reverse ? "row" : "row-reverse";
    return <div className="ao-body6-summary"
                style={{
                    display: "flex",
                    height: `${summaryHeight}px`,
                    width: "100%",
                    backgroundColor: COLORS.BURNISHED_GOLD,
                    ...summaryStyle,
                    transition: "transform 2s",
                }}>
        <div className="ao-body6-summary-image" style={{display: "flex", alignItems: "center", flexShrink: 0}}>
            <img src={imageUrl} style={{height: "90%"}}/>
        </div>
        <div className="ao-body6-summary-text-wrapper" style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            marginTop: "100px",
            ...summaryTextWrapperStyle
        }}>
            <Typography.Text className={"ao-body6-summary-title"}
                             style={{fontSize: "3rem", color: COLORS.PURE_WHITE, fontWeight: "bold"}}>
                {title}
            </Typography.Text>
            <div className="ao-body6-summary-texts" style={{marginTop: "10px",}}>
                {texts.map((text, i) => {
                    return <div key={i} className="ao-body6-summary-text"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: "10px",
                                    flexDirection: summaryTextFlexDirection,
                                }}>

                        <Typography.Text
                            style={{
                                fontSize: "3rem",
                                fontWeight: "700",
                                color: COLORS.GOLDEN_AMBER,
                                lineHeight: "3rem"
                            }}>
                            •
                        </Typography.Text>
                        <Typography.Text
                            style={{
                                fontSize: "2rem",
                                fontWeight: "700",
                                color: COLORS.WALNUT_BROWN,
                                textAlign: "right",
                                whiteSpace: "nowrap",
                                lineHeight: "2rem"
                            }}>
                            {text}
                        </Typography.Text>
                    </div>;
                })}
            </div>
        </div>
    </div>;
};


export const Summaries: React.FC<{
    summaryHeight: number,
    summaryDivSideRadius: number,
    summaryDatas: SummaryDataT[]
}> = ({summaryDivSideRadius, summaryHeight, summaryDatas}) => {
    const {intersects: hasIntersected, ref: contentRef} = useIntersectingRef(false, 0.1);

    return <div className="ao-body6-summaries" style={{
        display: "flex",
        width: "100%",
        height: "min-content",
        position: "relative",
        gridTemplateColumns: "repeat(2, 1fr)",
        marginTop: "120px",
    }}
                ref={contentRef}
    >
        <Summary summaryHeight={summaryHeight} summaryDivSideRadius={summaryDivSideRadius}
                 hasIntersected={hasIntersected}
                 summaryData={summaryDatas[0]} reverse={false}/>
        <Summary summaryHeight={summaryHeight} summaryDivSideRadius={summaryDivSideRadius}
                 hasIntersected={hasIntersected}
                 summaryData={summaryDatas[1]} reverse={true}/>


        <div className="ao-body6-summary" style={{display: "flex", height: "100px", width: "100%"}}>
            ass
        </div>
    </div>;
};