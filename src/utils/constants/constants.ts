export enum Device {
    mobile = 0,
    tablet = 1,
    desktop = 2,
}

export const COLORS = {
    GOLDEN_AMBER: "#E1A520",
    BURNISHED_GOLD: "#C18500",
    WALNUT_BROWN: "#5F4112",
    MOSSY_OLIVE: "#695E3E",
    PURE_WHITE: "#FFFFFF",
    STEEL_BLUE: "#656F80",
    CHARCOAL_SLATE: "#262A31",
    TRUE_BLACK: "#000000",

    GRAY: "#e8e8e8",
    HIGH_ORANGE: "#a1781d",
    DEEP_OLIVE: "#d0a33a",
} as const;


export const horizontalPaddings = {
    [Device.mobile]: "60px",
    [Device.tablet]: "100px",
    [Device.desktop]: "650px",
};