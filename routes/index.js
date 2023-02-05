const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
  res.render('index', { title: 'Hireme' });
});

router.get('/about',(req,res)=>{

  let date=new Date();

  res.render('about',{
    title:'About Us',
    todayDate:date
  })
})

module.exports = router;
