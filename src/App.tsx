import './App.css';
import Body1 from "./LayoutComponents/Body1";
import {useMediaQuery} from 'react-responsive';

import {Layout} from "antd";
import {useEffect, useState} from "react";
import {Device} from "./utils/constants/constants.ts";


const {Footer} = Layout;

const Body2: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body2 oa-body">{children}</div>;
const Body3: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body3 oa-body">{children}</div>;
const Body4: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body4 oa-body">{children}</div>;
const Body5: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body5 oa-body">{children}</div>;
const Body6: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body6 oa-body">{children}</div>;
const Body7: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body6 oa-body">{children}</div>;

// Horizontal
const DEVICE_SIZE_BREAKPOINT_PORTRAIT = {
    mobile: {width: 600, height: 800},
    tablet: {width: 1024, height: 1366},
    desktop: {width: 1224, height: 900},
};


function App() {
    const [device, setDevice] = useState(Device.mobile);
    const hasReachedDesktopWidth = useMediaQuery({
        query: `(min-width: ${DEVICE_SIZE_BREAKPOINT_PORTRAIT.desktop.width}px)`,
    });

    const hasReachedTabletWidth = useMediaQuery({
        query: `(min-width: ${DEVICE_SIZE_BREAKPOINT_PORTRAIT.tablet.width}px)`,
    });

    const hasReachedMobileWidth = useMediaQuery({
        query: `(min-width: ${DEVICE_SIZE_BREAKPOINT_PORTRAIT.mobile.width}px)`,
    });

    useEffect(() => {
        let _device = Device.mobile;
        if (hasReachedDesktopWidth) {
            _device = Device.desktop;
        } else if (hasReachedTabletWidth) {
            _device = Device.tablet;
        }

        setDevice(() => {
            console.log(_device);
            return _device;
        });

    }, [hasReachedDesktopWidth, hasReachedTabletWidth, hasReachedMobileWidth]);

    return (
        <>
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
        </>
    );
}

export default App;
