const express = require('express');
const cors = require('cors')
const parser = require('body-parser');
const phoneNumberType = require('./routes/PhoneNumberType');
const personPhone = require('./routes/PersonPhone')
const app = express();
const port = 3000;
app.use(cors())
app.set('json spaces', 40);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', phoneNumberType);
app.use('/', personPhone);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});