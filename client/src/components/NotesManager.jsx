import { motion } from 'framer-motion';

const NotesManager = () => {
return (
    <motion.div
        className="card container col-md-8 mt-3 py-3 mb-3 cold-md-8 px-3 shadow-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
    >
        <motion.h2
            className= "fw-bold"
            style= {{ color: "#66524bff" }}
            whileHover={{ scale: 1.1, color: "#a06148" }}
            transition={{ type: "spring", stiffness: 200 }}
            ><motion.span><i className="bi bi-journal-text me-2" style= {{ color: "#66524bff" }}></i></motion.span>Notes Manager
        </motion.h2>
        <motion.textarea
            className= "fw-semibold rounded"
            style= {{ color: "#904f35ff" }}
            whileHover={{ scale: 1.1, color: "#a06148" }}
            transition={{ type: "spring", stiffness: 200 }}
            placeholder= "Write your notes here..."
            >
        </motion.textarea>
        <motion.button className= "btn btn-primary mt-3">Save</motion.button>
        <motion.button className= "btn btn-secondary mt-3">Clear</motion.button>
    </motion.div>
)
}

export default NotesManager;