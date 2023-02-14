import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";

export const UseScroll = (thresh = 0.1) => {
    const controls = useAnimation();
    const [element, view] = useInView({ theshold: thresh });

    view ? controls.start("show") : controls.start("hidden");

    return [element, controls];
};