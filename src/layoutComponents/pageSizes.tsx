interface PageA4Props {
    children: React.ReactNode; // Allows any valid React child
    style: React.CSSProperties;
}


export const VerticalPage: React.FC<PageA4Props> = (props) => {
    const {children, style: pStyle} = props;
    const style = {
        display: "flex",
        justifyContent: "center",
        ...pStyle,
    };
    return <div style={style}> {children}</div>;
};
