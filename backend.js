const express = require('express');
const upload = multer({ storage: storage });

// Skill Keywords
const skillKeywords = [
    'html',
    'css',
    'javascript',
    'react',
    'node',
    'mysql',
    'java',
    'python'
];

// Resume Upload API
app.post('/upload', upload.single('resume'), (req, res) => {

    const { name, email } = req.body;

    const filePath = req.file.path;

    // Read Resume File
    fs.readFile(filePath, 'utf8', (err, data) => {

        if (err) {
            return res.status(500).json({ message: 'Error reading file' });
        }

        let matchedSkills = [];
        let score = 0;

        skillKeywords.forEach(skill => {
            if (data.toLowerCase().includes(skill)) {
                matchedSkills.push(skill);
                score += 10;
            }
        });

        const sql = `INSERT INTO resumes(name, email, skills, score, filename)
                     VALUES (?, ?, ?, ?, ?)`;

        db.query(
            sql,
            [name, email, matchedSkills.join(', '), score, req.file.filename],
            (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Database Error' });
                }

                res.json({
                    message: 'Resume Uploaded Successfully',
                    skills: matchedSkills,
                    score: score
                });
            }
        );
    });
});

// Fetch All Resumes
app.get('/resumes', (req, res) => {

    db.query('SELECT * FROM resumes', (err, results) => {

        if (err) {
            return res.status(500).json({ message: 'Database Error' });
        }

        res.json(results);
    });
});

// Server Start
app.listen(5000, () => {
    console.log('Server running on port 5000');
});