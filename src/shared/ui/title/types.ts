import { BaseTypes } from 'shared/types';

export type TitleVariants =
    | 'H1'
    | 'H2'
    | 'H3B'
    | 'H3S'
    | 'H3M'
    | 'H3R'
    | 'H4S'
    | 'H4M'
    | 'H4R'
    | 'Body16'
    | 'Body14'
    | 'caption1S'
    | 'caption1M'
    | 'caption2S'
    | 'caption2M';

export type Props = {
    children: string | number | undefined;
    variant: TitleVariants;
    visible?: boolean;
    isError?: boolean;
    className?: string;
    textWrap?: boolean;
    textAlign?: 'center' | 'left' | 'right';
    maxLength?: number;
    color?: 'red' | 'inactive' | 'primary';
};
