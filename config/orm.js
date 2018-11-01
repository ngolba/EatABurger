const connection = require('../config/connection')


const questions = num => Array(num).fill('?').toString();

const sqlVals = object => {
    let arrPairs = Object.entries(object)
    return arrPairs.map(x => `${x[0]} = '${x[1]}'`).join(', ');
}

const orm = {

    selectAll(table) {
        return new Promise((resolve, reject) => {
            let queryString = `SELECT * FROM ${table};`;
            connection.query(queryString, (err, res) => {
                if (err) throw err;
                resolve(res)
            })
        })
    },

    insertOne(table, cols, vals) {
        return new Promise((resolve, reject) => {
            let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${questions(vals.length)})`;
            connection.query(queryString, (err, res) => {
                if (err) throw err;
                resolve(res);
            })
        })
    },

    updateOne(table, vals, condition) {
        return new Promise((resolve, reject) => {
            let queryString = `UPDATE ${table} SET ${sqlVals(vals)} WHERE ${condition}`;
            connection.query(queryString, (err, res) => {
                if (err) throw err;
                resolve(res);
            })
        })
    }
}


module.exports = orm;