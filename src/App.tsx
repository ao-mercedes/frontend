import './App.css';
import {Layout} from "antd";

const {Footer} = Layout;

const Body1: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body1 oa-body">{children}</div>;
const Body2: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body2 oa-body">{children}</div>;
const Body3: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body3 oa-body">{children}</div>;
const Body4: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body4 oa-body">{children}</div>;
const Body5: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body5 oa-body">{children}</div>;
const Body6: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body6 oa-body">{children}</div>;
const Body7: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body6 oa-body">{children}</div>;

function App() {
    return (
        <>
            <Layout>
                <Body1>content</Body1>
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
