export const Noise = () => {
    return (
        <section className="noise">
        <svg className="noise">
            <filter id="noise">
            <feTurbulence id="turbulence">
            <animate
                attributeName="baseFrequency"
                dur="500s"
                values="0.1 0.1;0.2 0.2; 0.1 0.1"
                repeatCount="indefinite"
            ></animate>
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
            </filter>
        </svg>
        </section>
    );
}