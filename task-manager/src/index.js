// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const express = require('express')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const bcrypt = require('bcrypt')

const myFunction = async() => {
    const password = 'Red123!'
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log(password)
    console.log(hashedPassword)

    const isPatched = await bcrypt.compare(password, hashedPassword)
    console.log(isPatched)
}

myFunction()