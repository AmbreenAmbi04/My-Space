import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const QuoteGenerator =() => {
    const [ quote, setQuote] = useState("");
    const [ loading, setLoading ] = useState(false);

    const API_KEY = process.env.REACT_APP_QUOTES_API_KEY;

    const fetchQuote = async() => {
        setLoading(true);
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: { 'X-Api-Key': API_KEY }
        });
        const data = await response.json();
        setQuote(data[0]);
        console.log(data);
        setQuote(data[Math.floor(Math.random() * data.length)]);
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
    setLoading(false);
    }

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <motion.div
        className="card container col-md-8 mt-3 py-3 mb-3 cold-md-8 px-3 shadow-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}>
        <motion.h3
            className= "fw-bold fs-2"
            whileHover={{ scale: 1.1, color: "#66524bff" }}
            transition={{ type: "spring", stiffness: 200 }}
            style= {{ color: "#66524bff" }}
        >Quote of the Day</motion.h3>
        {loading ? (
            <motion.div className= "mt-3 py-3 px-3"><motion.h4 className= "text-danger fw-semibold">Loading the quotes...</motion.h4></motion.div>
            ) : (quote && (
                <motion.div className= "px-5 py-3">
                <motion.h4
                    className="card-text fs-4 fw-semibold"
                    style= {{ color: "#a06148" }}
                    whileHover={{ scale: 1.1, color: "#904f35ff" }}
                    transition={{ type: "spring", stiffness: 200 }}
                >"{ quote.quote }"</motion.h4>
                <motion.h4
                    className="mx-2 fs-4 fw-semibold no-underline"
                    style= {{ color: "#bb7f63ff" }}
                    whileHover={{ scale: 1.1, color: "#9b6952ff" }}
                    transition={{ type: "spring", stiffness: 200 }}
                >-{ quote.author }</motion.h4>
                </motion.div>
            ))}
            <motion.button
                className="btn btn-md mt-3 fs-3 fw-semibold"
                style= {{ backgroundColor: "#808080" }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1, color: "#5a5757ff" }}
                transition={{ type: "spring", stiffness: 200 }}
                value= {quote}
                onClick= { fetchQuote }
            >Generate Quote</motion.button>
        </motion.div>
    )
}

export default QuoteGenerator;