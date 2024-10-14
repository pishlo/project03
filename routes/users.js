const express = require("express")
const router = express.Router()

const db = require("../database")

// GET METHOD
router.get("/users", (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
        res.status(500).json({ error: err.message });
        } else {
        res.json(rows);
        }
    })
})

// POST METHOD
router.post("/users", (req, res) => {
	const { firstName, lastName } = req.body

	res.status(201).json({
		msg: "This the message from POST ",
		firstName,
		lastName,
	})
})
// PUT METHOD
router.put("/users:id", (req, res) => {
	const { firstName, lastName } = req.body

	res.json({
		msg: "This the message from PUT ",
		firstName,
		lastName,
	})
})
// DELETE METHOD
router.delete("/users/:id", (req, res) => {
    const id = req.params

	res.json({
		msg: "This the message from DELETE ",
        id
	})
})

module.exports = router