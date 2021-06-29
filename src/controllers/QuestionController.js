const Database = require("../db/config")

module.exports = {
    async index(req, res) {
        const db = await Database()

        const roomId = req.params.room
        const questionIndex = req.params.question
        const action = req.params.action
        const password = req.body.password


        // Verifica se senha está correta
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)

        if (verifyRoom.pass == password) {
            if (action == "delete") {
                await db.run(`DELETE FROM questions WHERE id = ${questionIndex}`)
            } else if (action == "check") {
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionIndex}`)
            }

            res.redirect(`/room/${roomId}`)
        } else {
            res.render('passIncorrect', { roomId })
        }

        await db.close()
    },

    async create(req, res) {
        const db = await Database()

        const question = req.body.question
        const roomId = req.params.room

        await db.run(`INSERT INTO questions(
            title,
            read,
            room
        ) VALUES (
            "${question}",
            0,
            ${roomId}
        )`)

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}