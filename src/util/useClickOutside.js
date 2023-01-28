import { useEffect } from "react"

export const useClickOutside = (ref, handler) => {

    const handleClickOutside = event => {

        if (ref.current && !ref.current.contains(event.target)) {
            handler(false);
        }

    };

    useEffect(() => {

        // document.addEventListener('click', handleClickOutside);
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            // document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [ref, handler]);

}