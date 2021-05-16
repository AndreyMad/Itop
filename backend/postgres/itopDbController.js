const { as } = require("pg-promise");
const { queryHandler } = require("./index");

const findUserFromDb = (userEmail) => {
  return queryHandler(
    `SELECT * FROM itoptestusers where email='${userEmail}'`
  ).then((res) => {
    return res.rows[0];
  });
};

const isUserLogged = (email) => {
  return queryHandler(`SELECT * FROM sessions where email='${email}'`).then(
    (res) => {
      return res.rows[0];
    }
  );
};

const checkSession =async(token)=>{
  return queryHandler(`SELECT * FROM sessions where token='${token}'`).then(res=>{
   if(!res.rows){
     return {status: "TOKEN IS NOT VALID"}
   }
   return res.rows[0]
  })
}

const pushTokenToDb = async (email, token) => {
  const isLoged = await isUserLogged(email);
  const query = isLoged
    ? `update sessions set  token='${token}'  where email='${email}' `
    : `insert into sessions (email, token) VALUES ('${email}', '${token}')`;
    return queryHandler(query).then((res) => {
      if (res.rowCount === 0) {
        return { status: "TOKEN NOT UPDATED" };
      }
      return { status: "SUCCES", token };
    });  
};

const deleteSession = (token)=>{
  const query = `DELETE FROM sessions WHERE token='${token}'`;
  return queryHandler(query).then((res) => {
    if (res.rowCount === 0) {
      return { status: "TOKEN NOT DELETED" };
    }
    return { status: "SUCCES" };
  });  
}



//USERS
const getUsers =async (token) => {
  const findUserByToken =await checkSession(token)
  const fullUserIndb = await findUserFromDb(findUserByToken.email)
   const query = fullUserIndb.isadmin?"SELECT * FROM itoptestusers":`SELECT * FROM itoptestusers where email='${fullUserIndb.email}'`
 
  return queryHandler(query)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

const createUser = async (user) => {
  const { email, password, isAdmin, id, userName } = user;
  const checkSameUser = await findUserFromDb(email);
  if (checkSameUser) {
    return { status: "ERROR", message: "That email allready registered" };
  }
  const query = `insert into itoptestusers (email, password, isadmin, id, username) VALUES ('${email}', '${password}', '${isAdmin}', '${id}', '${userName}')`;
  return queryHandler(query).then((res) => {
    if (res.rowCount === 0) {
      return { status: "NOT CREATED" };
    }
    return { status: "SUCCES", user: { email, isAdmin, id, userName } };
  });
};

const updateUser = (userToUpdate) => {
  const { email, password, isAdmin, id } = userToUpdate;

  const query = `update itoptestusers set email='${email}', password='${password}', isAdmin='${isAdmin}' where id='${id}' `;

  return queryHandler(query).then((res) => {
    if (res.rowCount === 0) {
      return { status: "NOT UPDATED" };
    }
    return { status: "SUCCES", newUser: userToUpdate };
  });
};

const deleteUser = (id) => {
  const query = `Delete from itoptestusers where id = '${id}'`;
  return queryHandler(query).then((res) => {
    if (res.rowCount === 0) {
      return { status: "NOT DELETED" };
    }
    return { status: "SUCCES", id };
  });
};

//PROFILES
const getProfiles = () => {
  return queryHandler("SELECT * FROM itoptestprofiles")
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

const createProfile = (user) => {
  const { email, password, isAdmin, id } = user;
  const query = `insert into itoptestprofiles (email, password, isadmin, id) VALUES ('${email}', '${password}', '${isAdmin}', '${id}')`;
  return queryHandler(query).then((res) => {
    if (res.rowCount === 0) {
      return { status: "NOT CREATED" };
    }
    return { status: "SUCCES", user };
  });
};
const updateProfile = (userToUpdate) => {
  const { email, password, isAdmin, id } = userToUpdate;
  const query = `update itoptestprofiles set email='${email}', password='${password}', isAdmin='${isAdmin}' where id='${id}' `;

  return queryHandler(query).then((res) => {
    if (res.rowCount === 0) {
      console.log("%cItopDbController.js line:27 res", "color: #007acc;", res);
      return { status: "NOT UPDATED" };
    }
    return { status: "SUCCES", newUser: userToUpdate };
  });
};

const deleteProfile = (id) => {
  const query = `Delete from itoptestprofiles where id = '${id}'`;
  return queryHandler(query).then((res) => {
    if (res.rowCount === 0) {
      return { status: "NOT DELETED" };
    }
    return { status: "SUCCES", id };
  });
};
module.exports.findUserFromDb = findUserFromDb;
module.exports.pushTokenToDb = pushTokenToDb;
module.exports.deleteSession = deleteSession;
module.exports.checkSession = checkSession;

module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

module.exports.getProfiles = getProfiles;
module.exports.createProfile = createProfile;
module.exports.updateProfile = updateProfile;
module.exports.deleteProfile = deleteProfile;
