const mysqlPool = require('../../config/mysql');
const sql_society = require('../../sql/society');

function createSociety(society) {
    return new Promise( (resolve, reject) => {
        mysqlPool.getConnection((err, con) => {
            if(err) reject(err);
            con.query(sql_society.createSociety, 
                [society.society_name, society.address, society.pincode], 
                (err, result) => {
                    if(err) reject(err);
                    
                    con.release();
                    resolve("Society Created Successfully!");
            });
        });
    });
}

function findSocityById(id) {
    return new Promise( (resolve, reject) => {
        mysqlPool.getConnection((err, con) => {
            if(err) reject(err);
            con.query(sql_society.findById, [id], 
                (err, result) => {
                    if(err){
                        reject(err);
                    } 
                    
                    con.release();
                    resolve(result);
            });
        })
    });
}

module.exports = {
    createSociety : createSociety,
    findSocityById: findSocityById
}