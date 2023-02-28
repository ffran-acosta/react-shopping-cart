// const pool = require('../data/db.client')
const pool = require('../data/db.rail.way')

module.exports = {
    //LOCAL DB
    // products: async (req, res) => {
    //     try {
    //         const test = await pool.query('select * from products')
    //         return res.status(200).json({
    //             data: test.rows,
    //             status: 200
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // },

    // RAILWAY DB
    all: async (req, res) => {
        try {
            const test = await pool.query('select * from store_items')
            return res.status(200).json({
                data: test.rows,
                status: 200
            })
        } catch (err) {
            console.log(err)
        }
    },
}