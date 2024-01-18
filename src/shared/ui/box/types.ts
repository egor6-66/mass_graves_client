import { AnimatePresenceProps, AnimationProps, MotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';

import { BaseTypes } from '../../types';

export type Props = { visible?: boolean; presence?: boolean } & BaseTypes.Component & HTMLAttributes<HTMLDivElement> & AnimationProps & MotionProps;
