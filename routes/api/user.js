const express = require('express');
const router = express.Router();

//user Model
const User = require('../../models/user');
const Item = require('../../models/item');

//@route GET api/user
//@desc Get user Data without checking the credentials
//@access Private!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.get('/userdata', (req, res) => {
    User.findById('5c780fb4c8dcf0267cfa91ca')
        .then(userData => res.json(userData))
});

//@route PUT api/user/addbook/:bookId
//@desc add a book to the users cart
//@access public

router.put('/addbook/:bookId', (req, res) => {
    Item.findById(req.params.bookId)
        .then(bookObj => User.findById('5c780fb4c8dcf0267cfa91ca', (err, doc) => {
            if (err) {
                console.log(err)
            } else {
                const newCart = doc.cart;
                bookObj.quantity = 1;
                bookObj.key = `${(Math.random() * 10000000).toFixed(0)}`
                newCart.push(bookObj);
                doc.cart = newCart;
                doc.save()
                .then(updatedUser => res.json(updatedUser));
            }
        })
    )
    .catch(err => console.log(err))
})

//@route PUT api/user
//@desc remove a book from the user's cart
//@access public
router.put('/removebook/:bookKey', (req, res) => {
    User.findById('5c780fb4c8dcf0267cfa91ca', (err, doc) => {
        if (err){res.json(err)}
         const newCart = doc.cart.filter(book => book.key!=req.params.bookKey);
         doc.cart = newCart;
        doc.save()
        .then(updatedUser => res.json(updatedUser));
    })
})

//@route PUT api/user
//@desc remove a book from the user's cart
//@access public
router.put('/removeAllBooks', (req, res) => {
    User.findById('5c780fb4c8dcf0267cfa91ca', (err, doc) => {
        if (err){res.json(err)}
         doc.cart = [];
        doc.save()
        .then(updatedUser => res.json(updatedUser));
    })
})


module.exports = router;