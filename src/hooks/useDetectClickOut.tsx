import { useEffect, useRef, useState } from "react";

export default function useDetectClickOut(initState: boolean) {
    const triggerRef = useRef<HTMLInputElement>(null);
    const nodeRef = useRef<HTMLInputElement>(null);

    const [show, setShow] = useState(initState);

    const handleClickOutside = (event: MouseEvent) => {
        if (!event.target) {
            return;
        }
        if (triggerRef.current &&
            triggerRef.current.contains(event.target as Node)) {
            return setShow(!show);
        }

        if (nodeRef.current &&
            !nodeRef.current.contains(event.target as Node)) {
            return setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    });

    return {
        triggerRef,
        nodeRef,
        show,
        setShow
    }
}