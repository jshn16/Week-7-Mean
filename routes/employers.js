const express=require('express');
const router=express.Router()
//add fsfile
const fs=require('fs');



//Get employers index

router.get('/',(req,res)=>{

    const employers=[
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
    ]
    
    //get data from json file
    // fs.readFile("./data/employers.json",'utf8',(error,employers)=>{
    //     if(error){
    //         console.log(error);
    //     }
    //     else{
    //         res.render('employers/index',{ title:'Employers',
    //         Employers:employers
    //     });
    //     }
    // })
    res.render('employers/index',{ title:'Employers',
            Employers:employers})

    
});

//public visible
module.exports=router;