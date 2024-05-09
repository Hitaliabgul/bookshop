import express from "express";
import {getBook} from '../Controller/bookcontroller.js'
const router=express.Router()

router.get("/",getBook);

export default router;