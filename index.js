const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const categoryData = require('./data/categoryData.json');

app.get('/', (req, res) => {
    res.send('Educational API is Running')
});

// Category data

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '01') {
        res.send(categoryData);
    }
    else {
        const categoryCourses = categoryData.filter(c => c.category_id === id);
        res.send(categoryCourses);
    }
})

app.get('/allCourses', (req, res) => {
    res.send(categoryData);
})

app.get('/categoryData/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = categoryData.find(categData => categData._id === id)
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('MCT port: ', port);
})