import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const QuoteGenerator =() => {
    const [ quote, setQuote] = useState("");
    const [ loading, setLoading ] = useState(false);

    const fetchQuote = async() => {
        setLoading(true);
    try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();
        setQuote(data[0]);
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
            <motion.h3>Quote of the Day</motion.h3>
            {loading ? (
            <motion.div className= "mt-3 py-3 px-3"><motion.h4 className= "text-danger fw-semibold">Loading the quotes...</motion.h4></motion.div>
            ) : (quote && (
                <motion.div>
                <motion.h4>{ quote.q }</motion.h4>
                <motion.h4>{ quote.a }</motion.h4>
                </motion.div>
            ))}
            <motion.button
                className= "btn btn-md mt-2 fs-4 fw-semibold btn-danger"
                value= {quote}
                onClick= { fetchQuote }
            >Generate Quote</motion.button>
        </motion.div>
    )
}

export default QuoteGenerator;