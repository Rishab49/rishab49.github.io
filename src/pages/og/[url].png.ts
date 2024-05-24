export async function GET({ params, request }) {
    console.log(params);
    let response = `
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
        <filter id="noise" x="0" y="0">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
        <feBlend mode="screen"/>
        </filter>
        <rect width="500" height="500" filter="url(#noise)" opacity="0.15" fill="#ff0000"/>
        <Text>
    </svg>
    `;


    return new Response(response);
}