import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { motion } from "framer-motion";
const listItems = [
    "Components",
    "Pages",
    "Templates"
]

function DropDown() {
    const [selectedItem, setSelectedItem] = useState("Components");
    const [isActive, setIsActive] = useState(false);
    return <motion.div className="flex flex-col font-body bg-gray-950 p-1 rounded-md" layout >
        <motion.div className="flex items-center justify-between h-fit p-2 bg-gray-800 rounded-md gap-2 text-white cursor-pointer" onClick={() => setIsActive(val => !val)} layout>
            <p className="font-bold">{selectedItem}</p>
            <div className="flex flex-col">
                <FaCaretUp color="#5050ff" />
                <FaCaretDown color="#5050ff" />
            </div>
        </motion.div>
        <motion.div className="flex flex-col text-white overflow-hidden" layout style={{
            height: isActive ? "fit-content" : "0px"
        }}>
            {listItems.map(e => e != selectedItem && <motion.div
                key={e}
                className="flex items-center justify-start p-2 hover:text-[#5050ff] cursor-pointer"
                onClick={() => { setSelectedItem(e); setIsActive(false) }}
                layout
            >
                {e}
            </motion.div>)}
        </motion.div>
    </motion.div>
}

export default DropDown;