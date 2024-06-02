import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion"
const items = [
    "Milk",
    "Bread",
    "Eggs",
    "Apples",
    "Bananas",
    "Lettuce",
    "Cheese",
    "Chicken",
    "Pasta",
    "Tomato sauce"
];

export function SearchBar() {

    const [filteredResults, setFilteredResults] = useState([]);
    function filter(e) {
        setFilteredResults(e.target.value.length > 0
            ? items.filter(elem => elem.includes(e.target.value))
            : []);
    }
    return <div className="w-100 relative">
        <div className="relative flex items-center justify-center p-4 rounded-md bg-white gap-4 font-body">
            <div className="flex bg-gray-200 rounded-md flex-1">
                <div className="h-[45px] aspect-square flex items-center justify-center">
                    <AiOutlineSearch fontSize="1.5rem" color="gray" />
                </div>
                <input
                    type="text"
                    className="h-[45px] flex-1 rounded-sm bg-transparent outline-none"
                    onChange={filter} placeholder="Search grocery" />
            </div>
            <button type="button" className="bg-transparent font-md" 
            onClick={() => setFilteredResults([])}>cancel</button>
        </div>
        {
            <motion.div className="absolute top-20 flex flex-col w-full bg-white rounded-md overflow-hidden" layout
                style={{
                    height: filteredResults.length > 0 ? "fit-content" : "0px",
                    padding: filteredResults.length > 0 ? "1rem" : "0rem"
                }}>
                {filteredResults.map(e => {
                    return <motion.div
                        layout
                        initial={{
                            scale: "0.5",
                            opacity: 0,
                            dur: 0.5
                        }}
                        exit={{
                            scale: "0.5",
                            opacity: 0,
                            dur: 0.5
                        }}
                        animate={{
                            scale: "1",
                            opacity: 1,
                            dur: 0.5
                        }}
                        className="flex items-center justify-center gap-2 p-2 hover:bg-gray-300 rounded-md hover:font-semibold origin-center cursor-pointer" key={e}>
                        <div className="aspect-square flex items-center justify-center bg-gray-100 p-2 rounded-sm ">
                            <AiOutlineSearch color="gray" />
                        </div>
                        <p className="flex-1">{e}</p>
                    </motion.div>
                })}

                <motion.div layout className="flex items-center justify-center gap-2 text-blue-700 p-2 cursor-pointer">
                    <div className="aspect-square flex items-center justify-center">
                        <FiPlus />
                    </div>
                    <p className="flex-1">Add to your shopping list</p>
                </motion.div>
            </motion.div>
        }
    </div >
}
