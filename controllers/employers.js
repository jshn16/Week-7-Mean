const express=require('express');
const router=express.Router()
//add fsfile
const fs=require('fs');



//Get employers index

router.get('/',(req,res)=>{

   
    
    // get data from json file
    fs.readFile("./data/employers.json",'utf8',(error,employers)=>{
        if(error){
            console.log(error);
        }
        else{
            res.render('employers/index',{ title:'Employers List',
            employers:JSON.parse(employers)
        });
        }
    })
    

    
});

//public visible
module.exports=router;