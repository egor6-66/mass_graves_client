import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import * as BoxTypes from './types';

function Box(props: BoxTypes.Props) {
    const { presence = true, children, className, visible = true, ...divAttrs } = props;

    const defaultAnimation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { type: 'tween', duration: 0.2 },
    };

    function content() {
        return visible ? (
            <motion.div {...defaultAnimation} className={className} {...divAttrs}>
                {children}
            </motion.div>
        ) : null;
    }

    return presence ? <AnimatePresence mode="wait">{content()}</AnimatePresence> : content();
}

export default Box;
