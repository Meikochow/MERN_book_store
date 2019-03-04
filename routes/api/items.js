const express = require('express');
const router = express.Router();
const fs = require('fs');

//Item Model
const Item = require('../../models/Item');

//@route GET api/items
//@desc Get all books
//@access Public
router.get('/getallbooks', (req, res) => {
    Item.find()
        .then(items => res.json(items))
})

//@route GET api/items
//@desc Get one books
//@access Public
router.get('/getsomebooks/:bookGenre?', (req, res) => {
    Item.find({
        'genre': req.params.bookGenre
    })
        .then(books => res.json(books))
        .catch(err => console.log(err));
});
/*
router.post('/addbook', (req, res) => {
    const data = {
         'name': "Gabriel's Inferno",
         'author':"Sylvain Reynard",
         'description':"Gabriel's Inferno is a romance novel by an anonymous Canadian author under the pen name Sylvain Reynard. The story was first published in novel format in 2011 by Omnific Publishing, with further publishing rights to the series being purchased by Berkley Books.",
         'price':"41.99",
         'genre':"romance",
         'quantity': "0"
        }
    let imgPath = 'C:/Users/meiko/Desktop/MERN Store/images/ROMANCE/romance5.jpg'
    const newBook = new Item(data);
    newBook.img.data = fs.readFileSync(imgPath);
    newBook.img.contentType = 'image/jpg';
    newBook.save()
    .then(item => res.json(item))
});
*/

module.exports = router;