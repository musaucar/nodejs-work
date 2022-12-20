backende veri gönderme = post
backendten veri alma = get
portu dinledin express,fastify -> başlangıç modulün sen buradan dallanıcaksın
route -> yönlendirme, endpoint, /api/about, /api/connect 
bütün routeları belirli bir klasörün altında belirli js dosyalarında barındırırsın.
endpointe istek yapıyosun response gelmesini bekliyosun
request-response iki tane nesnen var bunların özellikleri
request in içinde bazı propertyler var 
route + bütün endpointlerin hepsini bir arada tutuyor ve buradan controllerdaki fonksiyonu tetikliyor hangi ennpointe karşılık hangi controller fonksiyonu
controller kısmında fonksiyon iki parametre alır reuqesti response requesti alır response dönderir.
            servisteki fonksisyonu tetikliycem requestin data propertysini parametre olarak göndericem
            request.data aldım bunu service e gönderdim
service: controller kısmından alınan bu request service kısmındaki fonksiyon tetiklenir ve parametre olarak bana lazım olan öğe gönderilir.
            mantıksal işlemleri burada yapıcam parametre olarak sadece kullanacağım şey var
            data parametresi
            const name = data.name
            const surname = data.surname
            const personData = {
                name : name,
                surname : surname
            }
            dal daki ilgili fonksiyon tetiklenir createPerson(personData)
dal       data access layer burda bir tane fonksiton olsun fonksiyonumun adı createPerson(personData){
    sql komutları 
    insert into kişiler values[]....
    orm araçları 
    sql kullanıcaksan mysql,postgresql sequelize orm tools
    nosql kullanıyor mongodb,cassandra.. mongooose orm 
}
async createPerson(personData){
    const createdUser = await Kisiler.create(personData);
}   

model   klasörüm var bunun altında database şemalarım var tablolarım var 
        mesela kişiler database
        id
        name
        surname
        phone
        email
        ...
        ...
swagger
jsonschema

// routes ne yapar : endpointten request yani istek gelmesini bekler. istek gelirse tetiklenecek fonksiyonu çağırır . bide burada method belirtmemiz lazım
/* 
    user create
    user read 
    user update
    user delete
*/
/*
req-res routesdan gönderilir > controller burada işine yarayacakları servise gönderiyor sonra servisten cevabı routesa return ediyor
servis asıl olay hangi veritabanı sorgusunu ele alıcam iş mantığım olucak örnek ismin ilk üç harfi soyismin son üç harfinden şifre oluştur, aritmatik işlem iki sorgudan gelicek değere göre bişey
servisten dal tetiklenir
dal harici hiçbiyerde veritabanındaki tabloya istek atılmaz
dal da istek at veri tabanından gelicek değeri geriden ileriye sırada return et
routes->controller->service->dal->modeldeki tabloya sorgu at
*/