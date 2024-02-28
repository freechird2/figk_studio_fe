import { Variants } from 'framer-motion'

const fadeInOut: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
}

const fadeUpDown: Variants = {
    initial: {
        transform: 'translate3d(0,100%,0)',
    },
    animate: {
        transform: 'translate3d(0,0,0)',
    },
    exit: {
        transform: 'translate3d(0,100%,0)',
        transition: {
            duration: 0.2,
        },
    },
}
const navToggle: Variants = {
    initial: {
        transform: 'translate3d(100%,0,0)',
    },
    animate: {
        transform: 'translate3d(0,0,0)',
    },
    exit: {
        transform: 'translate3d(100%,0,0)',
        transition: {
            duration: 0.2,
        },
    },
}

export const variants = {
    fadeInOut,
    fadeUpDown,
    navToggle,
}
