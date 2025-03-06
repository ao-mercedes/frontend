import {useEffect, useState} from "react";

export const useTimeout = (millseconds: number) => {
    const [tick, setTick] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setTick(true);
        }, millseconds);
    },[millseconds]);

    return tick;
};