const express = require('express');
const db = require('../data/dbConfig.js');
const router = express.Router();
router.get('/', (req, res) => {
    db.select('*')
        .from('accounts')
        .then(accounts => res.status(200).json(accounts))
        .catch(error => res.status(500).send({error:error, message:'The accounts were not able to be found.'}));
});
router.post('/', (req, res) => {
        db('accounts')
            .insert(req.body, 'id')
            .then(account => {res.status(201).json({response:account, message:'The account was added Successfully.'})})
            .catch(error => res.status(500).json({error:error, message:'The account was not added to the database'}));
});
router.put('/:id', (req, res) => {
    db('accounts')
        .where({id: req.params.id })
        .update(req.body)
        .then(account => res.status(200).json({result:account, message:'The Account was successfully updated'}))
        .catch(error => {res.status(500).json({error:error, errorMessage:'The account was not updated'});});
});
router.delete('/:id', (req, res) => {
    db('accounts')
        .where({id:req.params.id})
        .del()
        .then(response => res.status(200).json({response:response, message:'Account successfully deleted'}))
        .catch(error => res.status(500).json({error:error, errorMessage:'Account was not deleted'}));
});
module.exports = router;