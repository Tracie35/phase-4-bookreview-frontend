import React, {useState, useEffect} from 'react'

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('/books')
        .then((res)=>{return res.json()})
        .then((data)=> setBooks(data))
    }, [])

    return(
        <div class="grid gap-10 px-5 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-">
            {books.map((book)=>{
                return(
                    <div class="max-w-sm rounded overflow-hidden shadow-lg ">
                        <img class="w-full" src={book.image} alt="Book_Image" />
                        <div class="px-6 py-4">
                        <div class="font-bold uppercase text-2xl mb-2">{book.title}</div>
                        <div class="font-semibold text-xl mb-2">{book.author}</div>
                        <div class="font-normal text-xl mb-2">{book.genre}</div>
                            <p class="text-gray-700 text-base">
                        {book.description}
                        </p>
                        <p className='text-purple-500'>KSH {book.price}</p>
                        <button className='w-full py-4 px-6 font-medium text-[18px] review-btn'>Add Review</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Books