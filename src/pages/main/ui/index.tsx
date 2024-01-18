import React from 'react';

import Main from "features/main";
import { useRouter, useStorage } from 'shared/hooks';
import { Box } from 'shared/ui';

import styles from './styles.module.scss';


function MainPage() {
    const { navigate } = useRouter();

    return (
        <Box presence={false} className={styles.wrapper}>
            <Main/>
        </Box>
    );
}

export default MainPage;
 