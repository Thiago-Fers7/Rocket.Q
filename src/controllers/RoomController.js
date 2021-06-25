const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password

        let roomId = ''

        for (let i = 0; i < 6; i++) {
            roomId += String(Math.floor(Math.random() * 9))
        }

        await db.run(`INSERT INTO rooms(
            id,
            pass
        ) VALUES (
            ${parseInt(roomId)},
            ${pass}
        )`)

        await db.close()

        console.log(roomId, pass)

        res.redirect(`/room/${roomId}`)
    }
}