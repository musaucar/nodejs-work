const mongoose = require('mongoose')
// veri tabanına bağlantı kurma 
// connection string / veritabanı ismi
mongoose.connect('mongodb://localhost:27017/LibrarySystem', {useNewUrlParser: true,useUnifiedTopology: true})
  .then(()=> console.log('veritabaina bağlandi'))
  .catch(err=>console.log('db bağlanti hatasi'))