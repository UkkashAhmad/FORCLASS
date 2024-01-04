import Book from "../routes/book.js"


export  const createBook = async (req, res) =>{
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save()
        
        res.status(201).json({
            ok:"true",
            message:"You created Your Book",
            data: savedBook
        })
    } catch (err) {
        res.status(500).json({error : err.message})
    }
    

    
} 