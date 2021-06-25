module.exports = {
    index(req, res) {
        const roomId = req.params.room
        const questionIndex = req.params.question
        const action = req.params.action

        const password = req.body.password

        console.log(`room: ${roomId} \n question index: ${questionIndex} \n action: ${action} \n password: ${password}`)
    }
}