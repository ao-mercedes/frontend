import img_carousel1 from "../../../assets/Body2/carousel-1.png";
import img_carousel2 from "../../../assets/Body2/carousel-2.png";
import img_carousel3 from "../../../assets/Body2/carousel-3.png";
import img_carousel4 from "../../../assets/Body2/carousel-4.png";

export interface IImageClient {
    getImage(label: string): string;
}

export class ImageClient implements IImageClient {
    private images: {
        [key: string]: string;
    };

    constructor() {
        this.images = {
            img_bonnet: img_carousel1,
            img_exhaust: img_carousel2,
            img_wheel: img_carousel3,
            img_side_profile: img_carousel4,
        };
    }

    public getImage(label: string): string {
        const img = this.images[label];
        if (img === undefined || img === null) {
            return img_carousel1; // default
        }
        return img;
    }
}
