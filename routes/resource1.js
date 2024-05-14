const express = require('express');
const router = express.Router();
const Resource1 = require('../models/resource1');

router.get('/', async (req, res) => {
  try {
    const resources = await Resource1.find();
    res.send(resources);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const newResource = new Resource1(req.body);
    await newResource.save();
    res.send(newResource);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedResource = await Resource1.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedResource);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Resource1.findByIdAndDelete(req.params.id);
    res.send('Resource deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
