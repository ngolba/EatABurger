const orm = require('../config/orm');

const {
    selectAll,
    insertOne,
    updateOne
} = orm;

const burgers = {
    all () {
        return new Promise((resolve, reject) => selectAll('burgers').then(res => resolve(res)))
    },
    insert(vals) {
        return new Promise((resolve, reject) => insertOne('burgers', ['burger_name', 'devoured'], vals).then(res => resolve(res)))
    },
    update(vals, id) {
        return new Promise((resolve, reject) => updateOne('burgers', vals, `id = ${id}`).then(res => resolve(res)))
    }
}

module.exports = burgers;