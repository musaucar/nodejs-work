const express = require("express");
const app = express();
const port = 3000;
const oldPass = ['1234','musa123','123123123']
const router = express.Router();
const {check, validationResult, param} = require('express-validator')

const validator = [check('email','Email is not valid').exists({checkNull: true}).withMessage('Email is required.').isEmail(), 
    check('email','Email cannat be empty').notEmpty({ignore_whitespace: true}),
    check('email').custom((value)=>{
        const gmailregex = /(?!@)(gmail.com)/gm
        if(gmailregex.test(value)){
            return true
        }
        return false
    }).withMessage('validasyon hatasi, gmail adresi girmelisiniz'),
    check('password', 'Password cannot less than 2 and more than 20.').isLength({min: 2,max:20}),
    //doğum tarihi olamaz ardışık olamaz son 3 parola aynı olamaz vs vs..             databasede nasıl sorgulama 
    check('password','You cannot use these passwords').not().isIn(['123456','admin']),
    check('password').custom((value) =>{  // custom validation 
            const isExists = oldPass.find((item) =>{
                return item === value
            }) 
            if(isExists){
                return false
            }return true
            //db sorgu atarım 
    }).withMessage('You used this password 3 months ago.'),
    // şifremde bir tane buyük harf-küçük bir tane numbers sembol 9 karakterden az olmalı
    check('password').custom((value)=>{
        const numericRegex = /[1-9]/gm
        const lowerLetterRegex = /[a-z]/gm
        const upperLetterRegex = /[A-Z]/gm
        if(numericRegex.test(value) && lowerLetterRegex.test(value) && upperLetterRegex.test(value)){
            return true
        }
        return false
    }).withMessage('Paroloada büyük küçük harf ve rakam en az bir tane olmali')
];

const otherValidator = [
    param('id','Cannot have a value of 20').custom(value => {
        if(value === "20"){
            return false
        }
        return true
    }),
    param('id').isInt().withMessage('Please enter a integer value.')
];

app.use(express.json()); // body parser
app.use(express.urlencoded({ extended: true })); // encoded parser


app.use("/", router);

router.get("/", (req, res, next) => {
  res.send("hello there");
});

router.get("/test/:id", otherValidator, (req,res,next)=> {
    const {id} = req.params;
    const errors = validationResult(req);
    console.log('errors', errors)
    res.send(id)
})

router.post('/login',validator, (req,res,next) =>{
    //const {email, password} = req.body; // email ile parolayı requestin bodysinin içinden al
    
    const errors = validationResult(req);
    console.log('errors', errors)
    
    if(errors.isEmpty()){
        res.json({msg:"hello there!"}).status(200); // email ve parolayı geri gönder
        console.log('no error')
    }else{
        res.json(errors).status(400)
        console('There are errors')
    }
})

app.listen(port, () => {
  console.log("Connected");
});
