const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const resource1Routes = require('./routes/resource1');
const resource2Routes = require('./routes/resource2');

app.use('/api/resource1', resource1Routes);
app.use('/api/resource2', resource2Routes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1); 
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
