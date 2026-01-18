// src/transitions.js

/* =========================================
   FADE TRANSITIONS
   ========================================= */

export const fadeTransition = {
    forwards: {
        old: { name: 'fadeOut', duration: '1.5s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'fadeIn', duration: '1.5s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        old: { name: 'fadeOut', duration: '1.5s', easing: 'ease-in' },
        new: { name: 'fadeIn', duration: '1.5s', easing: 'ease-out' }
    }
};


/* =========================================
   ZOOM TRANSITIONS
   ========================================= */

/* 1. SUBTLE ZOOM (Standard)
   Gentle scaling from 0.95 to 1. 
*/
export const zoomSubtle = {
    forwards: {
        old: { name: 'zoomOut', duration: '0.5s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'zoomIn', duration: '0.5s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        old: { name: 'zoomOut', duration: '0.5s', easing: 'ease-in' },
        new: { name: 'zoomIn', duration: '0.5s', easing: 'ease-out' }
    }
};

/* 2. INTENSE ZOOM (Pop Effect)
   The "Hero" effect. Old page shrinks away (0.5), New page pops in (0.5 -> 1).
*/
export const zoomIntense = {
    forwards: {
        old: { name: 'zoomOutExit', duration: '0.6s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'zoomInEntry', duration: '0.6s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        old: { name: 'zoomOutExit', duration: '0.5s', easing: 'ease-in' },
        new: { name: 'zoomInEntry', duration: '0.5s', easing: 'ease-out' }
    }
};

/* 3. REVERSE POP (Big to Normal)
   New content starts huge (1.5x) and shrinks down to fit.
   We pair it with 'zoomOut' for the exit, or you could use 'fadeOut'.
*/
export const zoomReversePop = {
    forwards: {
        old: { name: 'zoomOut', duration: '0.5s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'zoomOutEntry', duration: '0.6s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        old: { name: 'zoomOut', duration: '0.5s', easing: 'ease-in' },
        new: { name: 'zoomOutEntry', duration: '0.6s', easing: 'ease-out' }
    }
};


/* =========================================
   SLIDE TRANSITIONS (HORIZONTAL)
   ========================================= */

/* 1. SLIDE LEFT (Push Flow)
   Content moves Left. New page enters from the Right.
*/
export const slidePanLeft = {
    forwards: {
        old: { name: 'slideLeftOut', duration: '0.5s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'slideLeftIn', duration: '0.5s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        // On back button, typically we reverse direction (Pan Right)
        old: { name: 'slideRightOut', duration: '0.5s', easing: 'ease-in' },
        new: { name: 'slideRightIn', duration: '0.5s', easing: 'ease-out' }
    }
};

/* 2. SLIDE RIGHT (Back Flow)
   Content moves Right. New page enters from the Left.
*/
export const slidePanRight = {
    forwards: {
        old: { name: 'slideRightOut', duration: '0.5s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'slideRightIn', duration: '0.5s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        // On back button, typically we reverse direction (Pan Left)
        old: { name: 'slideLeftOut', duration: '0.5s', easing: 'ease-in' },
        new: { name: 'slideLeftIn', duration: '0.5s', easing: 'ease-out' }
    }
};


/* =========================================
   SLIDE TRANSITIONS (VERTICAL)
   ========================================= */

/* 1. SLIDE UP
   Content moves Up. New page enters from the Bottom.
*/
export const slidePanUp = {
    forwards: {
        old: { name: 'slideUpOut', duration: '0.5s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'slideUpIn', duration: '0.5s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        old: { name: 'slideDownOut', duration: '0.5s', easing: 'ease-in' },
        new: { name: 'slideDownIn', duration: '0.5s', easing: 'ease-out' }
    }
};

/* 2. SLIDE DOWN
   Content moves Down. New page enters from the Top.
*/
export const slidePanDown = {
    forwards: {
        old: { name: 'slideDownOut', duration: '0.5s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'slideDownIn', duration: '0.5s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        old: { name: 'slideUpOut', duration: '0.5s', easing: 'ease-in' },
        new: { name: 'slideUpIn', duration: '0.5s', easing: 'ease-out' }
    }
};

/* 3. SLIDE UP INTENSE
   Content moves Up. New page enters from the Bottom.
*/
export const slidePanUpIntense = {
    forwards: {
        old: { name: 'slideUpOutIntense', duration: '0.6s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'slideUpInIntense', duration: '0.6s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        old: { name: 'slideDownOutIntense', duration: '0.6s', easing: 'ease-in' },
        new: { name: 'slideDownInIntense', duration: '0.6s', easing: 'ease-out' }
    }
};

/* 4. SLIDE DOWN INTENSE
   Content moves Down. New page enters from the Top.
*/
export const slidePanDownIntense = {
    forwards: {
        old: { name: 'slideDownOutIntense', duration: '0.6s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'slideDownInIntense', duration: '0.6s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        old: { name: 'slideUpOutIntense', duration: '0.6s', easing: 'ease-in' },
        new: { name: 'slideUpInIntense', duration: '0.6s', easing: 'ease-out' }
    }
};

/* =========================================
   BLUR TRANSITIONS
   ========================================= */
/* 1. BLUR TRANSITION 
   Soft and modern. Good for modal-like pages.
*/
export const blurTransition = {
    forwards: {
        old: { name: 'blurOut', duration: '0.4s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'blurIn', duration: '0.4s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        old: { name: 'blurOut', duration: '0.4s', easing: 'ease-in' },
        new: { name: 'blurIn', duration: '0.4s', easing: 'ease-out' }
    }
};

/* =========================================
   SPIN TRANSITIONS
   ========================================= */
/* 5. SPIN TRANSITION
   Playful effect. Rotates element out and in.
*/
export const spinTransition = {
    forwards: {
        old: { name: 'spinOut', duration: '0.5s', easing: 'ease-in', fillMode: 'forwards' },
        new: { name: 'spinIn', duration: '0.5s', easing: 'ease-out', fillMode: 'backwards' }
    },
    backwards: {
        old: { name: 'spinOut', duration: '0.5s', easing: 'ease-in' },
        new: { name: 'spinIn', duration: '0.5s', easing: 'ease-out' }
    }
};