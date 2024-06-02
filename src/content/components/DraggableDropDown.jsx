import { FaPlus,FaRegImage,FaTable } from "react-icons/fa";
import { RiDraggable } from "react-icons/ri";
import { RxDividerHorizontal } from "react-icons/rx";
import { AnimatePresence, motion, spring } from "framer-motion"
import { useState } from "react";


export function DraggableDropDown() {

    const [isActive, setIsActive] = useState(false);
    const [listItems, setListItems] = useState([{
        value: "Table",
        icon: FaTable
    }, {
        value: "Divider",
        icon: RxDividerHorizontal
    }, {
        value: "Image",
        icon: FaRegImage
    }]);

    function onDragStart(e) {
        e.dataTransfer.setData("id", e.target.getAttribute("data-id"));
    }
    function onDrop(e) {
        e.preventDefault();
        setListItems((list) => {
            let id = Number(e.dataTransfer.getData("id"));
            let targetID = e.target.getAttribute("data-id");
            let elem = list.splice(id, 1);
            list.splice(Number(targetID), 0, ...elem);
            console.log(list, elem, id,);
            return [...list];
        });
    }
    return <div className="relative">
        <button type="button" className="relative flex h-full w-full bg-gray-700 px-4 py-2 rounded-md" onClick={() => setIsActive((val) => !val)}>
            <FaPlus color="white" />
        </button>
        <AnimatePresence>
            {isActive && <motion.div className="-z-1 top-12 absolute flex flex-col p-1 gap-1 bg-gray-950 border-gray-700 border-2 rounded-md text-white overflow-hidden"
                layout initial={{y: -10,opacity: 0}} animate={{y: 0,opacity: 1}} exit={{y: -10,opacity: 0}} transition={spring}>
                {listItems.map((e, index) => < motion.div layout data-id={index}
                    key={e.value}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => e.preventDefault()}
                    onDropCapture={onDrop}
                    onDragStart={onDragStart}
                    draggable="true"
                    className="flex items-center  flex-row gap-2 bg-gray-800 p-2 rounded-md hover:bg-gray-500"
                >
                    <e.icon />
                    <p className="flex-1 min-w-28 select-none" data-id={index}>{e.value}</p>
                    <RiDraggable />
                </motion.div>)}
            </motion.div>}</AnimatePresence>
    </div>
}