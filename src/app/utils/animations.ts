import { Variants } from "motion/react";

// --- Premium Easing Curves ---
// "Quintic" feel but sharper start and smooth end - feels expensive and weighty.
export const TRANSITION_EASE = [0.25, 0.1, 0.25, 1.0] as const;
export const HEAVY_EASE = [0.6, 0.05, -0.01, 0.9] as const; // For weighty entrances

// --- Standard Durations ---
export const DURATION_FAST = 0.4;
export const DURATION_MEDIUM = 0.8;
export const DURATION_SLOW = 1.2;

// --- Reusable Variants ---

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION_MEDIUM,
            ease: TRANSITION_EASE
        }
    }
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const scaleReveal: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.4,
            ease: TRANSITION_EASE
        }
    }
};

export const textRevealParent: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

export const textRevealChild: Variants = {
    hidden: { y: "100%" },
    visible: {
        y: "0%",
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] // Apple-like type ease
        }
    }
};
