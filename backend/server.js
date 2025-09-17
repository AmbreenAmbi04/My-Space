const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const filePath = path.join(__dirname, 'notes.json');

app.use(cors());
app.use(bodyParser.json());

app.get('/api/notes', (req, res) => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8').trim();

      if (!data) {
        return res.json({ note: "" });
      }

      try {
        const parsed = JSON.parse(data);
        res.json(parsed);
      } catch (parseErr) {
        console.error("Invalid JSON in notes.json:", parseErr);
        return res.json({ note: "" });
      }
    } else {
      res.json({ note: "" });
    }
  } catch (err) {
    console.error("Error reading notes:", err);
    res.status(500).json({ message: "Error reading notes file" });
  }
});

app.post('/api/notes', (req, res) => {
  const noteData = { note: req.body.note };
  fs.writeFileSync(filePath, JSON.stringify(noteData));
  res.json({ message: 'Note saved successfully!', note: noteData });
});

app.put('/api/notes', (req, res) => {
  const noteData = { note: req.body.note };
  fs.writeFileSync(filePath, JSON.stringify(noteData));
  res.json({ message: 'Note updated successfully!', note: noteData });
});

app.delete('/api/notes', (req, res) => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  res.json({ message: 'Note deleted successfully!' });
});

app.listen(PORT, () => console.log(`✅ Server is running on http://localhost:${PORT}`));
