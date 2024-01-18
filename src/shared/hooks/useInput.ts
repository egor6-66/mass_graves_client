import { useState, useCallback, ChangeEvent, useEffect, useRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { useDebounce } from 'shared/hooks';

export type Attrs = {
    value: InputAttrs['value'];
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export type InputAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'width' | 'height'>;
export type Props = {
    initialValue?: string;
    yupSchema?: any;
    realtimeValidate?: boolean;
    debounceDelay?: number;
    callback?: (arg: InputAttrs['value']) => void;
    onFocus?: (value: boolean) => void;
    onlyNumber?: boolean;
};

const useInput = ({ initialValue = '', yupSchema, realtimeValidate, callback, debounceDelay, onFocus, onlyNumber }: Props) => {
    const firstRender = useRef(true);
    const [value, setValue] = useState(initialValue || '');
    const [error, setError] = useState('');
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (onlyNumber) {
            if (/^[0-9]+$|^$/.test(e.currentTarget.value)) {
                setValue(e.currentTarget.value);
            }
        } else if (!e.currentTarget.value.includes('ㅤ')) {
            setValue(e.currentTarget.value);
        }
    }, []);

    const clear = () => {
        setValue('');
        setError('');
    };

    const reload = () => {
        setValue(initialValue);
        setError('');
    };

    useEffect(() => {
        initialValue && setValue(initialValue);
    }, [initialValue]);

    const asyncValidate = async (): Promise<{ error: string; value: string }> => {
        try {
            yupSchema && (await yupSchema.validate(value));
            setError('');
            return { error: '', value };
        } catch (err: any) {
            setError(err.errors[0]);
            return { error: err.errors[0], value };
        }
    };

    useEffect(() => {
        if (realtimeValidate) {
            asyncValidate().then();
        }
    }, [realtimeValidate, value]);

    const onFocusClearError = () => {
        !onFocus && setError('');
    };

    useDebounce(
        () => {
            callback && !firstRender.current && callback(value);
        },
        debounceDelay || 0,
        [value]
    );

    useEffect(() => {
        if (value) firstRender.current = false;
    }, [value]);

    return {
        attrs: {
            value,
            onChange,
            onFocus: onFocusClearError,
        },
        error: !!error,
        clear,
        errorTitle: error,
        asyncValidate,
        setError,
        reload,
        focus: onFocus,
    };
};
export type ReturnedType = ReturnType<typeof useInput>;
export default useInput;
