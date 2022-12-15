const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
const { getFirestore } = require("firebase/firestore");
require("dotenv").config();
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
// const StorageRef = ref(storage);

// console.log(StorageRef.bucket("kurti"));

module.exports = { storage, db };
// console.log(StorageRef);
// app.post("/", async (req, res) => {
//   const arr = [599, 899, 1099, 499, 699];
//   console.log("called");
//   const listRef = ref(storage, "dress");
//   var allPhotos = [];
//   await listAll(listRef).then((pics) => {
//     // pics.items.map((item) => console.log("item = ", item._location.path_));
//     pics.items.forEach((itemref) => {
//       allPhotos.push(itemref.fullPath);
//     });
//   });
//   //   const urls = [];
//   for (var i = 0; i < allPhotos.length; i++) {
//     await getDownloadURL(ref(storage, allPhotos[i])).then(
//       async (url) => {
//         const doc = await addDoc(collection(db, "dress"), {
//           price: arr[Math.floor(Math.random() * 5)],
//           sizes: ["S", "XL", "M"],
//           name: "Stylish Designer Dress for women",
//           imgUrl: url,
//         });
//       }
//       // urls.push(url)
//     );
//     console.log(i);
//   }
//   res.json({ msg: "done" });
//   //   try {
//   //     const docref = await addDoc(collection(db, "kurti"), {
//   //       imgurl: "123.com",
//   //       price: 300,
//   //     });
//   //     // res.json({ msg: "sucess", data: docref.id });
//   //   } catch (e) {
//   //     res.json(e).status(500);
//   //   }
//   //   res.json({ urls: urls }).status(200);
// });
