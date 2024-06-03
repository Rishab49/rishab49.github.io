import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { TbDoorExit } from "react-icons/tb";
import { motion } from "framer-motion";
const interviewQuestions = [
    {
        question: "What is the difference between '===' and '==' operators in JavaScript?",
        options: [
            "They are always equivalent.",
            "'===' performs strict comparison, checking type and value equality.",
            "'==' allows type coercion, potentially leading to unexpected results.",
            "Both are used for bitwise operations."
        ],
        correctAnswer: 2
    },
    {
        question: "What does the keyword 'this' refer to in JavaScript?",
        options: [
            "The global object (window in browsers).",
            "The function it's defined within.",
            "The argument passed to the function when called.",
            "It depends on how the function is called (regular, method, etc.)."
        ],
        correctAnswer: 3
    },
    {
        question: "How can you iterate over the elements of an array in JavaScript?",
        options: [
            "Using a for loop with the array's length.",
            "Using a for...in loop to access indices.",
            "Using the array.forEach() method.",
            "Using all of the above."
        ],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of a closure in JavaScript?",
        options: [
            "To create a private scope within a function.",
            "To improve performance by avoiding function re-creation.",
            "To define a new object type.",
            "To handle asynchronous operations."
        ],
        correctAnswer: 0
    },
    {
        question: "What is the difference between primitive data types and reference types in JavaScript?",
        options: [
            "Primitive data types are stored directly in memory, while reference types store references to the actual data.",
            "Primitive data types are immutable, while reference types are mutable.",
            "Both are the same.",
            "Primitive data types are only numbers and strings, while reference types include objects and arrays."
        ],
        correctAnswer: 0
    },
    {
        question: "What does the 'async/await' syntax achieve in JavaScript?",
        options: [
            "Allows for cleaner handling of asynchronous operations by making them appear synchronous.",
            "Provides a way to define asynchronous functions.",
            "Both of the above.",
            "Neither of the above."
        ],
        correctAnswer: 2
    },
    {
        question: "What is the DOM (Document Object Model) in JavaScript?",
        options: [
            "A representation of an HTML document in memory, allowing manipulation of its structure and content.",
            "A library for performing network requests.",
            "A data structure for storing key-value pairs.",
            "A framework for building web applications."
        ],
        correctAnswer: 0
    },
    {
        question: "How can you prevent default behavior in event handlers (e.g., preventing form submission on submit event)?",
        options: [
            "By returning 'false' from the event handler function.",
            "Using the preventDefault() method on the event object.",
            "Both of the above.",
            "There's no way to prevent default behavior."
        ],
        correctAnswer: 2
    },
    {
        question: "What are the benefits of using modules in JavaScript?",
        options: [
            "Improve code organization and reusability.",
            "Control the scope of variables and functions.",
            "Enable dependency management.",
            "All of the above."
        ],
        correctAnswer: 3
    },
    {
        question: "What are some popular JavaScript frameworks and libraries, and what are their use cases?",
        options: [
            "React: Building user interfaces with components; Angular: Full-featured framework for complex web applications; Vue.js: Lightweight and versatile framework.",
            "Axios: Making HTTP requests; Lodash: Utility library for common tasks; jQuery: DOM manipulation and event handling (though usage is decreasing).",
            "Both of the above.",
            "There are too many to list here; research based on specific project needs."
        ],
        correctAnswer: 0
    }
];

export function Quiz() {

    const [activeQuestion, setActiveQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const formRef = useRef(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const questionsLength = interviewQuestions.length;

    return <div className="text-white font-body flex flex-col items-center bg-gray-900 border rounded-md min-w-[350px] max-w-[450px]">
        <div className="flex flex-row items-center justify-between border-b-2 w-full py-2 px-4">
            <h1 className="font-body font-bold text-xl">JavaScript Quiz</h1>
            <TbDoorExit />
        </div>
        <div className="flex flex-row items-start justify-center p-4 gap-4">

            {interviewQuestions.map((e, ind) => ind == activeQuestion && <AnimatePresence>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -20
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    exit={{
                        opacity: 0,
                        x: 20
                    }}
                    className="flex flex-col w-full gap-4">
                    <h3 className="font-medium  text-lg">{e.question}</h3>
                    <form className="flex flex-col gap-2 w-full" ref={formRef}>
                        {e.options.map((opt, i) => <label key={opt} className="flex flex-row items-start justify-start px-4 py-2 bg-gray-800 w-full rounded-md gap-2">
                            <input
                                type="radio" name={activeQuestion}
                                value={i}
                            ></input>
                            <p className="-mt-1">{opt}</p>
                        </label>
                        )}
                    </form>
                </motion.div>
            </AnimatePresence>)}


        </div>
        <div className="flex flex-row items-center justify-between font-heading w-full py-2 px-4 border-t-2">
            <p className="font-heading text-sm">{activeQuestion + 1}/{questionsLength}</p>
            <p className="font-heading text-sm">{score}</p>
            <button type="button" className="bg-blue-800 rounded-md px-4 py-2"
                onClick={() => {
                    let formData = new FormData(formRef.current);
                    let isCorrect = formData.get(activeQuestion) == interviewQuestions[activeQuestion].correctAnswer
                    isCorrect ?
                        setScore(val => val + 1) :
                        null;
                    activeQuestion + 1 < questionsLength ? setActiveQuestion(val => val + 1) : setIsCompleted(true);
                }}>Next</button>
        </div>
        {isCompleted && <AnimatePresence>
            <motion.div
                className="absolute top-12 bg-blue-900 rounded-md p-4 text-white"
                initial={{
                    y: -100,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
            >
                You have completed your quiz, you scored : {score}
            </motion.div>
        </AnimatePresence>}

    </div>
}