import cn from 'classnames';
import cnBind from 'classnames/bind';
import React, { useRef } from 'react';

import styles from './styles.module.scss';
import * as TitleTypes from './types';
import { Box } from '../index';

function Title(props: TitleTypes.Props) {
    const { visible = true, color = '', maxLength, children, isError, textWrap, variant = 'primary', textAlign = 'left' } = props;

    const cx = cnBind.bind(styles);

    const classes = cn(
        cx('wrapper', {
            error: isError,
            [variant]: variant,
            textWrap,
            [color]: color,
        })
    );

    return (
        <Box visible={visible} style={{ textAlign }} className={classes}>
            {children}
        </Box>
    );
}

export default Title;
