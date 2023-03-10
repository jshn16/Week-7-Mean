const express = require('express');
const router = express.Router();

// add fs to read the data file
//const fs = require('fs');

// use Employer model for CRUD w/mongoose
const Employer = require('../models/employer');
const City = require('../models/city');

/* GET employers index (the module home page) */
router.get('/', (req, res) => {
    /*const employers = [
        {
            "name": "Provix"
        },
        {
            "name": "Element6"
        },
        {
            "name": "Netgain"
        },
        {
            "name": "44 North"
        }
    ];

    res.render('employers/index', {
        title: 'Employer List',
        employers: employers
    });*/

    // get data from json file
    /*fs.readFile('./data/employers.json', 'utf8', (err, employers) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(employers);
            res.render('employers/index', {
                title: 'Employer List',
                employers: JSON.parse(employers)
            });
        }
    }); */

    // get data from mongodb using the Employer model
    Employer.find((err, employers) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(employers);
            res.render('employers/index', {
                title: 'Employer List',
                employers: employers
            });
        }
    });
});

/* GET /create - display form to add an employer */
router.get('/create', (req, res) => {
    // use City model to fetch list of cities from db to populate city dropdown
    City.find((err, cities) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('employers/create', {
                cities: cities
            });
        }
    }).sort('name');    
});

/* POST /create - submit form data to mongodb */
router.post('/create', (req, res) => {
    Employer.create(req.body, (err, newDocument) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/employers');
        }
    });
});

//GET delete

router.get('/delete/:_id',(req, res)=>{
    Employer.remove({_id:req.params._id}, (err)=>{

        if(err){
            console.log(err);
        }
        else{
            res.redirect('/employers')
        }

    })
})


router.get('/edit/:_id', (req, res) => {
    Employer.findById(req.params._id, (err, employer) => {
        if (err) {
            console.log(err);
        }
        else {
            City.find((err, cities) => {
                if (err) {
                    console.log(err);
                }
                else {
                     res.render('employers/edit', {
                        employer: employer,
                        title: 'Edit Employer Details',
                        cities: cities
                    });
                }
            }).sort('name');               
        }
    });
});

router.post('/edit/:_id', (req, res) => {
    Employer.findByIdAndUpdate({ _id: req.params._id }, req.body, null, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/employers');
        }
    });
});
// make public
module.exports = router;