import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export function Color() {

    const [activeColor, setActiveColor] = useState("bg-red-500");
    const [isActive, setIsActive] = useState(false);
    const colors = [
        "bg-red-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-orange-500",
        "bg-gray-500"
    ];


    return <div 
    className="relative p-2 border-gray-800 border-4 rounded-2xl flex justify-center">
        <div 
        className={`h-11 w-11 ${activeColor} rounded-2xl`} 
        onClick={() => setIsActive(val => !val)}></div>
        <AnimatePresence>
            {isActive &&
                <motion.div className="absolute flex items-center justify-center gap-4  h-fit w-fit bg-transparent rounded-2xl overflow-hidden p-2 top-16 border-gray-800 border-4"
                    initial={{
                        opacity: 0,
                        y: "0rem"
                    }}
                    animate={{
                        opacity: 1,
                        y: "1rem"
                    }}
                    exit={{
                        opacity: 0,
                        y: "0rem"
                    }}
                >
                    {colors.map(e => {
                        return e == activeColor ?
                            <div className={`h-11 w-11 ${e} rounded-2xl border-gray-50 border-4`}
                                onClick={() => {
                                    setActiveColor(e);
                                    setIsActive(false);
                                }} key={e}></div>
                            :
                            <div className={`h-11 w-11 ${e} rounded-2xl`} onClick={() => {
                                setActiveColor(e);
                                setIsActive(false);
                            }} key={e}></div>
                    })}
                </motion.div>
                }
                </AnimatePresence>
    </div>
}