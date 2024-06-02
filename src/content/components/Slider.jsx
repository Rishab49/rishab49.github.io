import { useEffect, useRef, useState } from "react";

function Slider() {

    const sliderElementRef = useRef(null);
    const [value, setValue] = useState("1");
    const [pos,setPos] = value(0);

    return <div>
        <div>
            <input type="range" min="1" max="100" value={value} onChange={e => setValue(e.target.value)} ref={sliderElementRef}></input>
            <div>
                <div></div>
                <div>{value}</div>
            </div>
        </div>
    </div>
}

export default Slider;