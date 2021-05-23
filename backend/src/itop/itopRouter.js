const { Router } = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
  authorization,
  logOut,
  checksession,
  
} = require("./itopController");

const router = Router();
router.post("/api/createuser", createUser);
router.post("/api/updateuser", updateUser);
router.post("/api/authorization", authorization)
router.post("/api/logout", logOut)
router.post('/api/checksession',checksession)

router.post("/api/getusers", getUsers);
router.post("/api/deleteUser", deleteUser);

router.post("/api/getprofiles", getProfiles);
 router.post('/api/createprofile', createProfile);
 router.post('/api/updateprofile', updateProfile);
 router.post('/api/deleteprofile', deleteProfile);


module.exports = router;
