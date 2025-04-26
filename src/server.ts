import express,{Request, Response} from 'express';
import { title } from 'process';
const app = express();
const PORT = 3000;

app.get('/',(req: Request, res: Response) =>{
    res.send('Welcom to My Library!');
})

// app.get('/books',(req: Request, res: Response) =>{
//     res.json(books);
// })//ใส่router 2 ครั้ง จะ run router 1 ไม่run router 2

app.get("/books",(req,res)=>{
    if(req.query.title){
    const title = req.query.title;
    const FilteredBooks = books.filter((book) => book.title === title);
    res.json(FilteredBooks);
    }else{
        res.json(books);
    }
})

app.listen(PORT ,()=>{
    console.log(`App Listen at http://localhost:${PORT}`);
})

interface Book {
    id: number;
    title: string;
    Autor_name: string;
    description: string;
    group: string;
}

const books: Book[] =[
    {
        id: 1,
        title: 'The Great Gatsby',
        Autor_name: 'F. Scott Fitzgerald',
        description: 'A novel set in the 1920s that explores themes of wealth and love.',
        group: 'Fiction'
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        Autor_name: 'Harper Lee',
        description: 'A novel about racial injustice in the Deep South.',
        group: 'Fiction'
    },
    {
        id: 3,
        title: '1984',
        Autor_name: 'George Orwell',
        description: 'A dystopian novel about totalitarianism and surveillance.',
        group: 'Fiction'
    },
    {
        id: 4,
        title: 'Pride and Prejudice',
        Autor_name: 'Jane Austen',
        description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.',
        group: 'Fiction'
    },
    {
        id: 5,
        title: 'The Catcher in the Rye',
        Autor_name: 'J.D. Salinger',
        description: 'A story about teenage rebellion and alienation.',
        group: 'Fiction'
    },
    {
        id: 6,
        title: 'Moby-Dick',
        Autor_name: 'Herman Melville',
        description: 'A novel about the voyage of the whaling ship Pequod.',
        group: 'Fiction'
    }
];