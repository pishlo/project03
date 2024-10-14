const express = require("express")
const router = express.Router()

const usersArray =[

    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' },
    { id: 3, firstName: 'Michael', lastName: 'Johnson' },
    { id: 4, firstName: 'Emily', lastName: 'Davis' },
    { id: 5, firstName: 'David', lastName: 'Miller' }
];


router.get("/users", (req, res) => {
    res.json(usersArray)
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