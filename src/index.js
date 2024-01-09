const express = require('express')
const usersRoutes = require('./routes/users')
const middleware = require('./middleware/logs');
const upload = require('./middleware/multer');
require('dotenv').config()
const PORT = process.env.PORT || 5000;

const app = express();

// middleware allow json
app.use(express.json());

// middleware allow access file
app.use('assets',express.static('public'))

app.use(middleware.logRequest);
app.use('/users', usersRoutes);

// middleware upload file (image)
app.post('/upload', upload.single('photo'), (req,res)=>{
    res.json({
        message: 'Upload Berhasil'
    })
})

// middleware general error message
app.use((err,req,res,next)=>{
    req.json({
        message :err.message
    })
})

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
}) 