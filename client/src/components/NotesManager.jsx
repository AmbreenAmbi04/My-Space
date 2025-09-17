import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const NotesManager = () => {
  const [notes, setNotes] = useState("");       // current textarea value
  const [savedNote, setSavedNote] = useState(""); // displayed saved note

  // Fetch saved note on load
  useEffect(() => {
    fetch('http://localhost:5000/api/notes')
      .then(res => res.json())
      .then(data => {
        // handle both string or object {note: "..."}
        const noteText = typeof data.note === "string" ? data.note : data.note?.note || "";
        setNotes(noteText);
        setSavedNote(noteText);
      })
      .catch(err => console.error("Error fetching note:", err));
  }, []);

  // Save note to backend
  const saveNotes = () => {
    fetch('http://localhost:5000/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ note: notes })
    })
    .then(res => res.json())
    .then(data => {
      alert('Notes saved successfully!');
      const noteText = typeof data.note === "string" ? data.note : data.note?.note || "";
      setSavedNote(noteText); // update displayed note
    })
    .catch(err => {
      console.error('Error saving note:', err);
      alert('Failed to save notes.');
    });
  };

  // Clear textarea
  const clearNotes = () => setNotes("");

  // Delete saved note from frontend
  const deleteNotes = () => {
    setSavedNote("");
    setNotes("");
  };

  return (
    <motion.div
      className="card container col-md-8 mt-3 py-3 mb-3 cold-md-8 px-3 shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.h2
        className="fw-bold"
        style={{ color: "#66524bff" }}
        whileHover={{ scale: 1.1, color: "#a06148" }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <motion.span>
          <i className="bi bi-journal-text me-2" style={{ color: "#66524bff" }}></i>
        </motion.span>
        Notes Manager
      </motion.h2>

      <motion.textarea
        className="form-control"
        style={{ color: "#904f35ff" }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200 }}
        placeholder="Write your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <motion.div className="mt-3">
        <motion.button className="btn btn-primary me-2" onClick={saveNotes}>Save</motion.button>
        <motion.button className="btn btn-secondary ms-2" onClick={clearNotes}>Clear</motion.button>
        <motion.button className="btn btn-danger ms-2" onClick={deleteNotes}>Delete Displayed Note</motion.button>
      </motion.div>

      {/* Display saved note */}
      {savedNote && (
        <motion.div className="mt-4 p-3 border rounded" style={{ backgroundColor: "#f8f9fa" }}>
          <motion.h5>Saved Note:</motion.h5>
          <motion.p>{savedNote}</motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NotesManager;
