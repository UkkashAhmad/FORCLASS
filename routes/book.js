import express from 'express'
import {createBook} from '../controllers/book.js'
const router = express.Router();


router.post('/createbook', createBook);
// router.get('/books', getBooks);


export default router;


