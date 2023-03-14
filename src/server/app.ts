import express, { Express, Request, Response } from "express"
import users from "./resources/users.json" assert { type: "json" };
import products from "./resources/products.json" assert { type: "json" };
const app: Express = express()
const port = 3000;

app.get('/users', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(users)
})

app.get('/products', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(products)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})