const router = require('express').Router();
router.route('/').get((req, res)=>{
    msg = `Hello ${req.query.name || "world"} from <b>get</b> request!`;
    res.json({msg});
});

router.route('/:lang').get((req, res)=>{
    switch(req.params.lang){
        case "es":
            msg = "Hola Visitante";
            break;
        case "fr":
            msg = "Bonjour visiteur";
            break;
        case "de":
            msg = "Hallo Besucher";
            break;
        default:
            msg = "Hello Visitor";
    }
    res.json({msg});
})

router.route('/').post((req, res)=>{
 
    msg = `Hello, ${req.body.name || "world"} from post request!`;
    res.json({msg});
})
router.route('/add').post((req, res)=>{
    let result = req.body.a + req.body.b;
    res.json({result});
    
})
module.exports = router;