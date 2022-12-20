const userTable = require("../model/user_table_model");

const createUser = async (email, password, phoneNum) => {
  const data = {
    email,
    password,
    phoneNum,
  };
  const eklenecekUser = new userTable(data);
  try {
    const result = await eklenecekUser.save();
    return result
  } catch (error) {
    next(error)
  }
};

const readUser = async (id) => {
  try {
    const result = await userTable.findById({ _id: id });
    return result;
  } catch (error) {
    next(error)
  }
};

const readUserWithEmail = async(email)=>{
  try {
    const result = await userTable.findOne({email});
    return result
  } catch (error) {
    next(error)
  }
}

const updateUser = async (id, phoneNum) => {
  try {
    const result = await userTable.findByIdAndUpdate(id, { phoneNum });
    return result;
  } catch (error) {
    next(error)
  }
};

const deleteUser = async (id) => {
  try {
    const result = await userTable.findByIdAndRemove(id);
    return result;
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  readUserWithEmail
};





// sunucu bir bilgisayar içinde bir işletim sistemi var aynı bilgisayardaki gibi donanım aygıtları var
// sistem çağrıları -> apiyle yapılır -> apinin içinde kanka metodlar var -> uygulama bunu sen görüyorsun -> metodları var
// işlemciye gidiyor -> işlemci bunu işliyor -> senin bütün methodların belleğe kaydedilliyor
// işlemcinin içinde cache -> en çok kullanılan işlemler
// işlemci gidecek isteği bellekten alacak
// process = iş
// thread = iş parçaçığı multi thread java
// js de multithread yok bu ne var pekiiiiiiii multi job