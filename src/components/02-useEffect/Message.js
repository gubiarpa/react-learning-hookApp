import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 });
    const { x, y } = coords;

    useEffect(() => {
        
        const mouseMove = (e) => {
            const browserCoords = { x: e.x, y: e.y }
            setCoords(browserCoords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <h3>Eres genial!</h3>
            <p>
                Coords = (x: { x }; y: { y })
            </p>
        </>
    )
}
