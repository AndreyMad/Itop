const {queryHandler} =  require('./index')


//USERS
const getUsers = () => {
    return queryHandler("SELECT * FROM itoptestusers").then((res) => {
      return res.rows;
    }).catch(err=>{console.log(err)});
  };

  const createUser =(user)=>{
    const {email, password, isAdmin, id} =user
    const query = `insert into itoptestusers (email, password, isadmin, id) VALUES ('${email}', '${password}', '${isAdmin}', '${id}')`;
    return queryHandler(query).then((res) => {
      if (res.rowCount === 0) {
        return  {status:"NOT CREATED"}
      }
      return { status: "SUCCES",user };
    });
    
  }
  const updateUser =(userToUpdate)=>{
    const {email, password, isAdmin, id} =userToUpdate

    const query = `update itoptestusers set email='${email}', password='${password}', isAdmin='${isAdmin}' where id='${id}' `;
   
    return queryHandler(query).then((res) => {
      if (res.rowCount === 0) {
        console.log('%cItopDbController.js line:27 res', 'color: #007acc;', res);
        return {status:"NOT UPDATED"}
      }
      return { status: "SUCCES", newUser: userToUpdate };
 
    });
  }

  const deleteUser =(id)=>{
    const query = `Delete from itoptestusers where id = '${id}'`
    return queryHandler(query).then((res) => {
      if (res.rowCount === 0) {
        return {status:"NOT DELETED"}
      }
      return { status: "SUCCES", id };
  })
}

//PROFILES
const getProfiles = () => {
  return queryHandler("SELECT * FROM itoptestprofiles").then((res) => {
    return res.rows;
  }).catch(err=>{console.log(err)});
};

const createProfile =(user)=>{
  const {email, password, isAdmin, id} =user
  const query = `insert into itoptestprofiles (email, password, isadmin, id) VALUES ('${email}', '${password}', '${isAdmin}', '${id}')`;
  return queryHandler(query).then((res) => {
    if (res.rowCount === 0) {
      return  {status:"NOT CREATED"}
    }
    return { status: "SUCCES",user };
  });
  
}
const updateProfile =(userToUpdate)=>{
  const {email, password, isAdmin, id} =userToUpdate
  const query = `update itoptestprofiles set email='${email}', password='${password}', isAdmin='${isAdmin}' where id='${id}' `;
  
  return queryHandler(query).then((res) => {
    if (res.rowCount === 0) {
      console.log('%cItopDbController.js line:27 res', 'color: #007acc;', res);
      return {status:"NOT UPDATED"}
    }
    return { status: "SUCCES", newUser: userToUpdate };
  });
}

const deleteProfile =(id)=>{
  const query = `Delete from itoptestprofiles where id = '${id}'`
  return queryHandler(query).then((res) => {
    if (res.rowCount === 0) {
      return {status:"NOT DELETED"}
    }
    return { status: "SUCCES", id };
})
}

  module.exports.getUsers=getUsers 
  module.exports.createUser=createUser 
  module.exports.updateUser=updateUser 
  module.exports.deleteUser=deleteUser 

  module.exports.getProfiles=getProfiles 
  module.exports.createProfile=createProfile 
  module.exports.updateProfile=updateProfile 
  module.exports.deleteProfile=deleteProfile 
