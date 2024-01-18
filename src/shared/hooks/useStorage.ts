import Cookies from 'universal-cookie';

const ls = window.localStorage;
const cookies = new Cookies(null, { path: '/' });
export type ValuesInCookies = 'accessToken' | 'refreshToken' | 'device_id';
export type ValuesInLS = 'theme';
function useStorage() {
    const lsSet = (name: ValuesInLS, value: any) => {
        ls.setItem(name, typeof value === 'string' ? value : JSON.stringify(value));
    };

    const lsGet = <T = any>(name: ValuesInLS): T | null => {
        const valueInLs = ls.getItem(name);
        if (!valueInLs) return null;
        if (valueInLs[0] === '{' && valueInLs[valueInLs.length - 1] === '}') return JSON.parse(valueInLs);
        return valueInLs as T;
    };

    const lsRemove = (name: ValuesInLS) => {
        ls.removeItem(name);
    };

    const cookiesSet = (name: ValuesInCookies, value: any) => {
        cookies.set(name, typeof value === 'string' ? value : JSON.stringify(value));
    };

    const cookiesGet = <T = any>(name: ValuesInCookies): T | null => {
        const valueInLs = cookies.get(name);
        if (!valueInLs) return null;
        if (valueInLs[0] === '{' && valueInLs[valueInLs.length - 1] === '}') return JSON.parse(valueInLs);
        return valueInLs as T;
    };

    const cookiesRemove = (name: ValuesInCookies) => {
        cookies.remove(name);
    };

    return { lsSet, lsGet, lsRemove, cookiesSet, cookiesGet, cookiesRemove };
}

export default useStorage;
