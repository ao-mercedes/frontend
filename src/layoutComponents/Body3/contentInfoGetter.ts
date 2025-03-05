import img_porsche from "../../assets/body3/pedigree_porsche.png";
import img_mercedes_benz from "../../assets/body3/pedigree_mercedes_benz_sl.png";


export const _getContents = (shouldGetFirstOnly: boolean) => {
    const firstItem = {
        paragraphs: ["When one thinks of a German sports car with heritage, chances are the Porsche 911, which was first launched in 1963, immediately pops into mind.",
            "There's another model with an even longer history though: It's the Mercedes-Benz SL, which first debuted as a racecar in 1952.",
            "The SL has racecar heritage, but over seven decades, its sportiness was blended with cruising ability. SL, which stands for 'sport-light', continually evolved into a topless grand tourer.",
        ],
        image: {
            url: img_porsche,
            alt: "Porsche",
            caption: "Porsche 911",
            captionAlignment: "right",
        },
    };
    if (shouldGetFirstOnly) {
        return [firstItem];
    }
    return [
        firstItem,
        {
            paragraphs: [
                "Indeed, grand is a precise term for the new car's size. Compared to the previous SL, the latest one is 93mm longer, 38mm wider and 44mm taller. For improved stability and passenger space, the wheelbase has been stretched by 115mm to 2,700mm.",
                "The car looks cleaner, sleeker and meaner than its predecessor. Its bonnet seems lower and much wider, yet the designers have wisely refrained from giving it a massive grille and gaping air intake. Brashness is not part of the SL's DNA."
            ],
            image: {
                url: img_mercedes_benz,
                alt: "Mercedes-Benz",
                caption: "Mercedes-Benz SL",
                captionAlignment: "left",
            },
        }
    ];
};