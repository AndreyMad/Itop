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
} = require("./itopController");

const router = Router();

router.get("/api/getusers", getUsers);
router.post("/api/createuser", createUser);
router.post("/api/updateuser", updateUser);
router.post("/api/deleteUser", deleteUser);
router.get("/api/getprofiles", getProfiles);
 router.post('/api/createprofile', createProfile);
 router.post('/api/updateprofile', updateProfile);
 router.post('/api/deleteprofile', deleteProfile);


module.exports = router;
