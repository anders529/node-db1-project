const express = require('express');
const db = require('../data/dbConfig.js');
const router = express.Router();
router.get('/', (req, res) => {
    db.select('*')
        .from('accounts')
        .then(accounts => res.status(200).send(accounts))
        .catch(err =>
            res.status(500).send({message: 'Accounts were not able to be found.', error: err})
        );
});
router.post('/', (req, res) => {
    db('accounts')
        .insert(req.body)
        .then(account => res.status(201).send({response: account, message: 'Account successfully added.'}))
        .catch(err => res.status(500).send({error: err, message: 'Account was not added to the database'}));
});
router.put('/:id', (req, res) => {
    db('accounts')
        .where({id: req.params.id})
        .update(req.body)
        .then(account => res.status(200).send({result:account, message:'Account successfully updated'}))
        .catch(err => {res.status(500).send({errorMessage:'Account was not updated', error: err})});
});
router.delete('/:id', (req, res) => {
    db('accounts')
        .where({id: req.params.id})
        .del()
        .then(response => res.status(200).send({message:'Account successfully deleted', response: response}))
        .catch(err => res.status(500).send({errorMessage:'Account was not deleted', error: err}));
});