import * as React from "react";


interface ArrowComponentProps {
    onClick: () => void;
    scale: number;
    img: string;
    leansRight: boolean;
}

export const Arrow: React.FC<ArrowComponentProps> = ({onClick, scale, img, leansRight}) => {
    return <div
        className="ao-body2-carousel-arrow-wrapper"
        style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "right",
            zIndex: 500,
        }}
    >
        <div
            className="ao-body2-carousel-arrow"
            style={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: leansRight ? "flex-end" : "flex-start",
                alignItems: "center",
                zIndex: 500,
            }}
        >
            <img
                style={{
                    scale: scale,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                src={img}
                alt={""}
                onClick={onClick}
            />
        </div>
    </div>;
};

export default Arrow;