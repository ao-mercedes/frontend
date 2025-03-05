import {COLORS} from "../../utils/constants/constants.ts";


import {Typography} from "antd";
import {Property} from "csstype";

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
    reverse?: boolean
}> = ({summaryHeight, summaryDivSideRadius, summaryData, reverse}) => {
    const {imageUrl, texts, title} = summaryData;

    const summaryStyle: {
        flexDirection: FlexDirection;
        marginRight: string;
        borderTopRightRadius: string;
        borderBottomRightRadius: string
        transform: string;
    } | {
        flexDirection: FlexDirection;
        marginLeft: string;
        borderTopLeftRadius: string;
        borderBottomLeftRadius: string;
        transform: string;
    } = reverse ? {
        flexDirection: "row-reverse",
        marginLeft: "20px",
        borderTopLeftRadius: `${summaryDivSideRadius}px`,
        borderBottomLeftRadius: `${summaryDivSideRadius}px`,
        transform: "translateX(10px)",
    } : {
        flexDirection: "row",
        marginRight: "20px",
        borderTopRightRadius: `${summaryDivSideRadius}px`,
        borderBottomRightRadius: `${summaryDivSideRadius}px`,
        transform: "translateX(-10px)",
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
    return <div className="ao-body6-summaries" style={{
        display: "flex",
        width: "100%",
        height: "min-content",
        position: "relative",
        gridTemplateColumns: "repeat(2, 1fr)",
        marginTop: "120px",
    }}>
        <Summary summaryHeight={summaryHeight} summaryDivSideRadius={summaryDivSideRadius}
                 summaryData={summaryDatas[0]} reverse={false}/>
        <Summary summaryHeight={summaryHeight} summaryDivSideRadius={summaryDivSideRadius}
                 summaryData={summaryDatas[1]} reverse={true}/>


        <div className="ao-body6-summary" style={{display: "flex", height: "100px", width: "100%"}}>
            ass
        </div>
    </div>;
};