const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// veri tabanındaki tablo veya tabloların kullanabileceği şablon oluşturma, sütunlar ve sütunların kısıtlamaları özellikleri
const UsersSchema = new Schema({ 
  email: {
    type: String,
    required: [true, 'E-posta alani zorunludur.']
  },
  password: {
    type: String
  },
  phoneNum: {
    type: Number
  }
}, {collection: 'UsersInfo', timestamps: true});
// collection : veritabanındaki tablo ismi
// belirtilen schema formatında tablo oluşturma
const UsersInfo = mongoose.model('UsersInfo', UsersSchema) // document

// tabloyu dışarıya export etme
module.exports = UsersInfo // kitaplar 

