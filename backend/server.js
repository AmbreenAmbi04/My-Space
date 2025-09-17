const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = 5000;
const filePath = 'notes.json';

app.use(cors());
app.use(bodyParser.json());

app.get('/api/notes', (request, response) => {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync('filePath', 'utf8');
        response.json(JSON.parse(data));
} else {
    response.json({ notes: "" });
}
});

app.post('/api/notes', (request, response) => {
    const noteData = { note: request.body.note };
    fs.writeFileSync(filePath, JSON.stringify(noteData));
    response.json({ message: 'Note saved successfully!', note: noteData });
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));