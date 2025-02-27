import {Device} from "../utils/constants/constants.ts";

import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";

export const useDevice = (DEVICE_SIZE_BREAKPOINT: {
    mobile: { width: number };
    tablet: { width: number };
    desktop: { width: number }
}) => {
    const [device, setDevice] = useState(Device.mobile);
    const hasReachedDesktopWidth = useMediaQuery({
        query: `(min-width: ${DEVICE_SIZE_BREAKPOINT.desktop.width}px)`,
    });

    const hasReachedTabletWidth = useMediaQuery({
        query: `(min-width: ${DEVICE_SIZE_BREAKPOINT.tablet.width}px)`,
    });

    const hasReachedMobileWidth = useMediaQuery({
        query: `(min-width: ${DEVICE_SIZE_BREAKPOINT.mobile.width}px)`,
    });

    useEffect(() => {
        let _device = Device.mobile;
        if (hasReachedDesktopWidth) {
            _device = Device.desktop;
        } else if (hasReachedTabletWidth) {
            _device = Device.tablet;
        }

        setDevice(() => {
            return _device;
        });

    }, [hasReachedDesktopWidth, hasReachedTabletWidth, hasReachedMobileWidth]);

    return device;
};