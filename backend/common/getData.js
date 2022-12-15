const express = require("express");
const { getDocs, collection } = require("firebase/firestore");
const { db } = require("../firebase");

const getData = async (collectionName) => {
  const data = [];
  const docref = collection(db, collectionName);
  const querySnap = await getDocs(docref);
  querySnap.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
  return data;
};

module.exports = getData;
