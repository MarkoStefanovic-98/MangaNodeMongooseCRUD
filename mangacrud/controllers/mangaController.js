const express = require('express');
var router =express.Router();
const mongoose = require('mongoose');
const Manga = mongoose.model('Manga');



router.get('/',(req,res)=>{
    res.render("manga/ajoutOuModif",{
        viewTitle : "Ajouter un personnage"
    });
});

router.post('/',(req,res)=>{
    if (req.body._id == '')
        ajouter(req, res);
    else
        modifier(req, res);
});

function ajouter(req,res){
    var manga = new Manga();
    manga.nomComplet = req.body.nomComplet;
    manga.pouvoir = req.body.pouvoir;
    manga.but = req.body.but;
    manga.caractere = req.body.caractere;
    manga.save((err,doc) => {
        if (!err)
            res.redirect('manga/list');
        else {
            console.log('Problème durant insertion : ' + err);
        }
    });
}

function modifier(req, res) {
    Manga.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) {
            res.redirect('manga/list');
        }
        else
          console.log('Erreur dans la modification : ' + err);
    });
}

router.get('/list', (req, res) => {
    Manga.find((err, docs) => {
        if (!err) {
            res.render("manga/list", {
                list: docs
            });
        }
        else {
            console.log('Erreur dans la tentative de récuperation :' + err);
        }
    });});

router.get('/:id', (req, res) => {
    Manga.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("manga/ajoutOuModif", {
                viewTitle: "Maj du perso Manga",
                manga: doc
            });
        }
    });
});

router.get('/supp/:id', (req, res) => {
    Manga.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/manga/list');
        }
        else { console.log('Probleme de suppression :' + err); }
    });
});

module.exports = router;