import express, { Express, Request, Response } from "express"
import user from "./user.json" assert { type: "json" };
const app: Express = express()
const port = 3000;


app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(user)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})