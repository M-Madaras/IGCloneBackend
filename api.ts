import express, {Request, Response} from 'express'
import cors from 'cors'
import {MongoClient} from "mongodb"
import {uri} from "./credentials"
const client = new MongoClient(uri)
const db = client.db("DamianCluster")
const photos = db.collection("photos")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req: Request,res: Response) => {
    res.status(200).send("Hello")
})

const PORT = 5001
app.listen(PORT, () =>{
    console.log("we started on port", PORT )
})