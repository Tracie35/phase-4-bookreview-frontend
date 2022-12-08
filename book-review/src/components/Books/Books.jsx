import React, {useState, useEffect} from 'react'

const Books = () => {
    const [booksData, setBooks] = useState([])

    useEffect(()=>{
        // backend url here
        fetch('/books')
        .then((res)=> res.json())
        .then((data)=> setBooks(data))
    }, [])

    return(
        <div class="grid gap-10 px-5 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
            {booksData.map((book)=>(
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={book.image_url} alt="Book_Image" />
                <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{book.name}</div>
                <p class="text-gray-700 text-base">
                  {book.description}
                </p>
              </div>
            </div>
            ))}
        </div>
    )
}

export default Books