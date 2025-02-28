export interface IImageClient {
    getImage(): string;

    getImageSize(): { width: number; height: number };
}

export class ImageClient implements IImageClient {
    private image: string = '';
    private imageSize: { width: number; height: number } = {width: 0, height: 0};

    constructor(image
                :
                string, imageSize
                :
                {
                    width: number;
                    height: number
                }
    ) {
        this.image = image;
        this.imageSize = imageSize;
    }

    public getImage(): string {
        return this.image;
    }

    public getImageSize(): { width: number; height: number } {
        return this.imageSize;
    }
}