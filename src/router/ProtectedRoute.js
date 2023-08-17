import { useEffect, useState } from 'react';
import {
    matchPath
} from 'react-router-dom';
import CustomRoute from './CustomRoute';

export const ProtectedRoute = ({
    fallback,
    route,
    guards,
    ...rest
}) => {
    const [canAccess, setCanAccess] = useState(true)
    useEffect(() => {
        checkAsync()
    }, [])

    const checkAsync = async () => {
        const {
            pathname,
        } = window.location;
        const matchResult = matchPath(pathname, rest);
        const hasMatchedRoute = !!matchResult;
        if (hasMatchedRoute) {
            const guardArgs = rest;
            // const canBeRendered = await route?.guards?.every(async (guard) => await guard(guardArgs));
            const canBeRendered = await asyncEvery(route?.guards, async (guard) => await guard(guardArgs, route));
            if (route?.guards?.length && !canBeRendered) {
                setCanAccess(false)
            } else {
                setCanAccess(true)
            }
        }
    }
    if (!canAccess) {
        const fallbackArgs = rest;
        return route?.fallback(fallbackArgs);
    }
    const asyncEvery = async (arr, predicate) => {
        for (let e of arr) {
            if (!(await predicate(e))) {
                return false;
            }
        }
        return true;
    };

    return (
        <CustomRoute path={route.path} exact Layout={route.layout} route={route} >
            {route.component}
        </CustomRoute >
    );
};