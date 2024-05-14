const express = require('express');
const router = express.Router();
const Resource1 = require('../models/resource1');

router.get('/', async (req, res) => {
  const resources = await Resource1.find();
  res.send(resources);
});

router.post('/', async (req, res) => {
  const newResource = new Resource1(req.body);
  await newResource.save();
  res.send(newResource);
});

router.put('/:id', async (req, res) => {
  const updatedResource = await Resource1.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updatedResource);
});

router.delete('/:id', async (req, res) => {
  await Resource1.findByIdAndDelete(req.params.id);
  res.send('Resource deleted');
});

module.exports = router;
