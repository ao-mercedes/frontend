import {Typography} from "antd";

export const Paragraph: React.FC<{
    lineHeight: string,
    fontWeight: string,
    text: string,
    color: string,
    fontSize: string
}> = ({
          text,
          fontSize, fontWeight,
          lineHeight,
          color
      }) => {

    console.log(`Paragraph.color ${color}`);
    return <div className="ao-body5-content-paragraph"
                style={{
                    display: "flex",
                    height: "max-content",
                }}>
        <Typography.Text
            style={{fontWeight: fontWeight, color: color, fontSize: fontSize, lineHeight: lineHeight}}>
            {text}
        </Typography.Text>
    </div>;
};

export const Paragraphs: React.FC<{
    fontSize: string,
    fontWeight: string,
    paragraphLineHeight: string,
    rowGap: string,
    texts: string[],
    color: string,
}> = ({
          fontSize, fontWeight,
          color,
          paragraphLineHeight,
          texts,
          rowGap,
      }) => {

    return <div className="ao-body5-content-paragraphs" style={{
        display: "flex",
        height: "max-content",
        fontSize: "30px",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "20px",
        rowGap: rowGap,
    }}>
        {texts.map((text, index) => {
            return <div key={index}>
                <Paragraph
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    lineHeight={paragraphLineHeight}
                    text={text} color={color}></Paragraph>
            </div>;
        })}
    </div>;
};

export default Paragraphs;