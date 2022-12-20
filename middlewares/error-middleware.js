const errorHandling = (error, req, res, next) => {

  if(error.name === 'CastError'){
    return res.send({
      success: false,
      message: 'Not Found',
      status: 404
    })
  }else{
    return res.send({
      success: false,
      name: error.name,
      message: error.message,
      status: 500
    })
  }
};

module.exports = errorHandling;





  // 400 BAD REQUEST s
  // 404 KAYNAKTAN İSTENİLEN VERİYİ BULAMIYOR DB DE YOK BÖYLE BİR İD
  // 401 GİRİŞ BİLGİLERİN UYUŞMUYOR
  // 200 
  // 201 CREATED 
  // 500 SERVER HATASI INTERNAL SERVER HATASI
  // 403  içeriğe erişim hakkı yok 
