const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.use(routes);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))