module.exports = {
    createSociety: "insert into society (society_name, address, pincode) values (?, ?, ?)",
    findById: "select * from society where id = ?"
}