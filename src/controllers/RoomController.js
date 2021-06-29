const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let isRoom = true
        let roomId = ''

        while (isRoom) {
            // Gera número da sala
            for (let i = 0; i < 6; i++) {
                if (i === 0) {
                    roomId = String(Math.floor(Math.random() * (10 - 1) + 1))
                } else {
                    roomId += String(Math.floor(Math.random() * 10))
                }
            }

            // Verificar se número já existe
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)

            if (!isRoom) {
                // Inseri a sala no banco
                await db.run(`INSERT INTO rooms(
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            }
        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req, res) {
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)

        let isNoQuestions

        if (questions.length === 0 && questionsRead.length === 0) {
            isNoQuestions = true
        }

        await db.close()

        res.render('room', { roomId, questions, questionsRead, isNoQuestions })
    },

    enter(req, res) {
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
}