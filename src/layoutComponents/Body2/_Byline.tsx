import {COLORS} from "../../utils/constants/constants.ts";

import {Typography} from "antd";

interface ByLineComponentProps {
    fontSize: string,
    tKey: string,
    tValue: string,
    fontWeight: string

}


export const ByLineComponent: React.FC<ByLineComponentProps> = ({fontSize, tKey, tValue, fontWeight}) => {
    return <div style={{display: "flex", gap: "10px"}}>
        <Typography.Text
            style={{
                fontSize: fontSize,
                color: COLORS.WALNUT_BROWN,
                fontWeight: fontWeight,
            }}
        >
            {tKey}
        </Typography.Text>
        <Typography.Text
            style={{
                fontSize: fontSize,
                color: COLORS.BURNISHED_GOLD,
                fontWeight: fontWeight,
            }}
        >
            {tValue}
        </Typography.Text>
    </div>;
};


export default ByLineComponent;