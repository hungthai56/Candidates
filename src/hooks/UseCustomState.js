import { useEffect, useRef, useState } from "react";
//----------------------------------------------
//  Set state if mounted
//----------------------------------------------
export default function useCustomState (initValue) {
    const isMounted = useRef(false)
    const [_state, _setState] = useState(initValue)
    useEffect(() => {
        isMounted.current = true
        return () => {
            isMounted.current = false
        }
    }, [])
    const _setCustomState = (val) => {
        if (isMounted.current) {
            _setState(val)
        }
    }
    return [_state, _setCustomState]
}