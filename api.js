import express from 'express';
import ImageKit from 'imagekit';

const app = express();

app.get('/api/images', async (req, res) => {
  var imagekit = new ImageKit({
    publicKey: import.meta.env.VITE_IK_PUBLIC_KEY || '',
    privateKey: import.meta.env.VITE_IK_PRIVATE_KEY || '',
    urlEndpoint: 'https://ik.imagekit.io/uiw3np2kr8ww/',
  });

  const list = await imagekit.listFiles({
    skip: 0,
    limit: 10,
  });

  res.json(list);
});

export const handler = app;
