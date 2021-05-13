const db = require("../../postgres/itopDbController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const shortId = require("shortId");

const getUsers = async (req, res) => {
  const dataResp = await db.getUsers();
  if (dataResp.error) {
    return res.status(200).send(dataResp);
  }
  return res.status(201).send(dataResp);
};
const createUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, config.saltRounds);
  const user = {
    password: hashedPassword,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    id: shortId.generate(),
  };
  const dbResponse = await db.createUser(user);
  return res.status(201).send(dbResponse);
};

const updateUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, config.saltRounds);
  const user = {
    password: hashedPassword,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    id: req.body.id,
  };
  const dbResponse = await db.updateUser(user);
  return res.status(200).send(dbResponse);
};

const deleteUser = async (req, res) => {
  const dbResponse = await db.deleteUser(req.body.id);
  return res.status(200).send(dbResponse);
};

//PROFILES

const getProfiles = async (req, res) => {
  const dataResp = await db.getProfiles();
  if (dataResp.error) {
    return res.status(200).send(dataResp);
  }
  return res.status(201).send(dataResp);
};

const createProfile = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, config.saltRounds);
  const user = {
    password: hashedPassword,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    id: shortId.generate(),
  };
  const dbResponse = await db.createProfile(user);
  return res.status(201).send(dbResponse);
};

const updateProfile = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, config.saltRounds);
  const user = {
    password: hashedPassword,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    id: req.body.id,
  };
  const dbResponse = await db.updateProfile(user);
  return res.status(200).send(dbResponse);
};

const deleteProfile = async (req, res) => {
  const dbResponse = await db.deleteProfile(req.body.id);
  return res.status(200).send(dbResponse);
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile
};
