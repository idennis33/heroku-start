const express = require('express');
const router = express.Router();
const Vegetable = require('../models/vegetables.js'); 
const { Router } = require('express');

// INDEX ROUTE
router.get('/',(req,res)=>{
    Vegetable.find({},(error,allVegetables)=>{
        res.render("vegetables/Index", {
            vegetables: allVegetables
        }); 

    })
}); 

// New
router.get('/new', (req,res)=>{
    res.render('vegetables/New'); 
}); 

//DELETE

router.delete('/:id', (req, res) => {
    // Delete document from collection
    Vegetable.findByIdAndRemove(req.params.id, (err, fruit) => {
        res.redirect('/vegetables');
    });
});

// Update 
router.put('/:id', (req, res) => {
    req.body.isGreen = req.body.isGreen === "on" ? true : false;

    // Update the fruit document using our model
    Vegetable.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/vegetables');
    });
});

//Create 
router.post('/',(req,res)=>{
    if(req.body.isGreen === "on"){
        req.body.isGreen = true; 
    }else{
        req.body.isGreen = false; 
    }
    Vegetable.create(req.body,(error,createdVegatable)=>{
        res.redirect('/vegetables'); 
    })
})


// EDIT 
router.get('/:id/edit', (req,res)=>{
    Vegetable.findById(req.params.id,(err,foundVegetables)=>{
        res.render('vegetables/Edit',{
            vegetable:foundVegetables
        })
    })
})

//Show 
router.get('/:id', (req,res)=>{
    Vegetable.findById(req.params.id,(error,foundVegetables)=>{
        res.render('vegetables/Show', {
            vegetable:foundVegetables
        })
    })
})


// EXPORT ROUTER 
module.exports = router; 