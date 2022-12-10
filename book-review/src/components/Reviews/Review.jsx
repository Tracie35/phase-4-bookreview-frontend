import {useLocation} from 'react-router-dom'
import { useEffect } from "react";
import { useState } from "react";
import './Review.css'
import Login from '../../pages/Login/Login';

function Review({ user, setUser }){
    const [book, setBook] = useState(null)
  const location = useLocation()
    const {book_id} = location.state
    const [comment, setComment] = useState(null)

    useEffect(() => {
          fetch(`/books/${book_id}`)
            .then(res => res.json())
            .then(data => {
              console.log(data)
                setBook(data)
            })
            
           
      }, []);
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log("this button was clicked");
        const response = await fetch(`/reviews`, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                book_id: book_id,
                user_id: user.id,
                comment: comment
            })
        })
        const returnedData = await response.json()

        if (response.ok) {
          console.log(returnedData);
        } else {
          console.log(returnedData)
        }
    }
 
    if (!user) {
      return <Login user={user} setUser={setUser}/>
    }

    return(
        <div className='review'>
            <div className='book-details-content grid book_details'>
          <div className='book-details-img'>
            <img src = {book?.image} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Author: </span>
              <span className='text-italic'>{book?.author}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Genre: </span>
              <span className='text-italic'>{book?.genre}</span>
            </div>
        <div className='book-details-item'>
          {
            book?.reviews.map(review => <p>{review}</p>)
          }
        </div>
          </div>
        </div>
        <div className='review_form'>
            <form>
                <input type="text" id="comment" name="name" onChange={(e) => setComment(e.target.value)} />
                <button type="submit" onClick={(e) => handleSubmit(e)}>POST</button>
            </form>
        </div>
        </div>
    ) 
    

}
export default Review