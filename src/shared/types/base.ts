import { ReactNode } from 'react';

export type Empty = undefined | null;

export type Error = {
    statusCode: number;
    message: string;
};

export type Component = {
    children?: ReactNode;
    className?: string;
};
