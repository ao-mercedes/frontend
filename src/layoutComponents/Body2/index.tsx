import "./index.css";
import {Device} from "../../utils/constants/constants.ts";
import {PageA4} from "../pageSize.tsx";


// TODO
// [ ] alts for images sources
export const Body2: React.FC<{ device: Device }> = ({device}) => {
    return <PageA4 device={device}>
        <div className="ao-body2">
            <div className="body2-content">
                <div className="body2-content-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                        Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                </div>
            </div>
        </div>
    </PageA4>;
};


export default Body2;