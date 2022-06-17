const mongoose = require('mongoose');

var mangaSchema = new mongoose.Schema({
    nomComplet:{
        type: String,
        required:'Ce champ est obligatoire'
    },
    pouvoir:{
        type: String,
        required:'Ce champ est obligatoire'
    },
    but:{
        type: String,
        required:'Ce champ est obligatoire'
    },
    caractere:{
        type: String,
        required:'Ce champ est obligatoire'
    }


});

mongoose.model('Manga', mangaSchema);