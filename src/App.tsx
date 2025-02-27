import './font-face.css';
import './App.css';

import Body1 from "./LayoutComponents/Body1";
import {Device} from "./utils/constants/constants.ts";


import {ConfigProvider, Layout} from "antd";
import {useEffect, useState} from "react";
import {useMediaQuery} from 'react-responsive';
import * as React from "react";


const Body2: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body2 ao-body">{children}</div>;
const Body3: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body3 ao-body">{children}</div>;
const Body4: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body4 ao-body">{children}</div>;
const Body5: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body5 ao-body">{children}</div>;
const Body6: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body6 ao-body">{children}</div>;
const Body7: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body6 ao-body">{children}</div>;
const {Footer} = Layout;

const DEVICE_SIZE_BREAKPOINT = {
    mobile: {width: 480}, // 480 X 640
    tablet: {width: 800}, // 800 X 600
    desktop: {width: 2960}, // 2960 x 1440
};

const useDevice = () => {

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

function App() {
    const device = useDevice();

    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        fontSizeHeading1: 55,
                        fontSizeHeading2: 50,
                        fontSizeHeading3: 30,
                        fontSizeHeading4: 24,
                        fontSizeHeading5: 20,
                        fontFamily: "'Visby CF', 'sans-serif'",
                    },
                }}
            >
                <Layout>
                    <Body1 props={{
                        device: device
                    }}>content</Body1>
                    <Body2>content</Body2>
                    <Body3>content</Body3>
                    <Body4>content</Body4>
                    <Body5>content</Body5>
                    <Body6>content</Body6>
                    <Body7>content</Body7>
                    <Footer>footer</Footer>
                </Layout>
            </ConfigProvider>
        </>
    );
}

export default App;
