import express, { Express, Request, Response } from "express"
import users from "./resources/users.json" assert { type: "json" };
import products from "./resources/products.json" assert { type: "json" };
const app: Express = express()
const port = 3000;

app.use((req:Request, res:Response, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next()
})

app.get('/users', (req: Request, res: Response) => {
    let { skip, limit } = req.query
    const skipCount = parseInt(skip as string)
    const limitCount = parseInt(skip as string) + parseInt(limit as string)
    res.status(200).send(users.slice(skipCount, limitCount))
})

app.get('/products', (req: Request, res: Response) => {
    res.status(200).send(products)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})