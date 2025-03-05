import {useEffect, useRef, useState,} from "react";


// useIntersectingRef
// if options.latch = true, maintains as intersects once toggled.
export const useIntersectingRef = (latch: boolean, thresHold: number) => {
    const [intersects, setIntersects] = useState(false);
    // const [interSectingRatio, setInterSectingRatio] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (latch) {
                    if (entry.isIntersecting) {
                        setIntersects(entry.isIntersecting);
                    }
                } else {
                    setIntersects(entry.isIntersecting);
                }
            },
            {threshold: thresHold},
        );

        const currRef = ref.current;
        if (currRef) {
            observer.observe(currRef);
        }

        return () => {
            if (currRef) {
                observer.unobserve(currRef);
            }
        };
    }, [ref, intersects, latch, thresHold]);

    return {
        intersects,
        ref,
    };
};