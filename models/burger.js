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
    insert(cols, vals) {
        return new Promise((resolve, reject) => insertOne('burgers', cols, vals).then(res => resolve(res)))
    },
    update(vals, condition) {
        return new Promise((resolve, reject) => updateOne('burgers', vals, condition).then(res => resolve(res)))
    }
}

module.exports = burgers;