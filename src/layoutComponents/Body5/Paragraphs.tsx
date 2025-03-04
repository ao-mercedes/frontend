import {COLORS} from "../../utils/constants/constants.ts";

import {Typography} from "antd";

export const Paragraph: React.FC<{ paragraphLineHeight: string, text: string, fontSize: string }> = ({
                                                                                                         text,
                                                                                                         fontSize,
                                                                                                         paragraphLineHeight
                                                                                                     }) => {
    return <div className="ao-body5-content-paragraph"
                style={{
                    display: "flex",
                    height: "max-content",
                    color: "white",
                }}>
        <Typography.Text style={{color: COLORS.PURE_WHITE, fontSize: fontSize, lineHeight: paragraphLineHeight}}>
            {text}
        </Typography.Text>
    </div>;
};

export const Paragraphs: React.FC<{ fontSize: string, paragraphLineHeight: string, texts: string[] }> = ({
                                                                                                             fontSize,
                                                                                                             paragraphLineHeight,
                                                                                                             texts
                                                                                                         }) => {
    return <div className="ao-body5-content-paragraphs" style={{
        display: "flex",
        height: "max-content",
        fontSize: "30px",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "20px",
        rowGap: "20px",
    }}>
        {texts.map((text, index) => {
            return <div key={index}>
                <Paragraph
                    fontSize={fontSize}
                    paragraphLineHeight={paragraphLineHeight}
                    text={text}></Paragraph>
            </div>;
        })}
    </div>;
};

export default Paragraphs;