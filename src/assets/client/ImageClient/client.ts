import img_carousel1 from "../../body2/carousel-1.png";
import img_carousel2 from "../../body2/carousel-2.png";
import img_carousel3 from "../../body2/carousel-3.png";
import img_carousel4 from "../../body2/carousel-4.png";

export interface IImageClient {
    getImage(label:string):{url: string, alt:string};
}

export class ImageClient implements IImageClient {
    private images: {
        [key: string]: {url: string; alt: string};
    };

    constructor() {
        this.images = {
            img_bonnet: {url:img_carousel1, alt:"Front of a sports car in a parking lot"},
            img_exhaust: {url:img_carousel2, alt:"Rear of a sports car in a parking lot"},
            img_wheel: {url: img_carousel3, alt:"Wheel finishing of a sports car"},
            img_side_profile: {url:img_carousel4, alt:"Open-top sports car with a driver"},
        };
    }

    public getImage(label: string): {url: string; alt: string} {
        const img = this.images[label];
        if (img === undefined || img === null) {
            return {url:img_carousel1, alt:"Front of a sports car in a parking lot"}; // default
        }
        return img;
    }
}
