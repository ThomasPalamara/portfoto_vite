import express from "express";
import ImageKit from "imagekit";
const app = express();
app.get("/api/images", async (req, res) => {
  var imagekit = new ImageKit({
    publicKey: "public_NdM+1pq6sl/mLlNUvxqQGKAfQz0=",
    privateKey: "private_Vi42FPDOrliTWTjCyy9vQSn2wU0=",
    urlEndpoint: "https://ik.imagekit.io/uiw3np2kr8ww/"
  });
  const list = await imagekit.listFiles({
    skip: 0,
    limit: 10
  });
  console.log("list :", list);
  res.json(list);
});
const handler = app;
export {
  handler
};
