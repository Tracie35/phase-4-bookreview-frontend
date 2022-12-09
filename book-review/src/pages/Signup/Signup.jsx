import React , {  useState }from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signup = ({setUser}) => {




const [firstname, setFirstname ]= useState("") 
const [lastname, setLastname ]= useState("") 
const [password, setPassword  ]= useState("") 
const [passwordconfirmation, setPasswordconfirmation]= useState("") 
const [bio, setBio ]= useState("") 
const [errors, setErrors ]= useState([]) 
const navigate =useNavigate()

  


function handlesubmit(e){
e.preventDefault();
setErrors([])

fetch("/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        firstname,
        lastname, 
        password,
        password_confirmation: passwordconfirmation,
        bio,

})
}).then((r) => {
    if(r.ok){
        r.json().then((user) => setUser(user ))
    } else {
        r.json().then((err) => setErrors(err.errors))
    }
    navigate('/')
}) 

} 

  return (
//     <div>

// <section class="bg-white dark:bg-gray-900">
//     <div class="flex justify-center min-h-screen">
//     <div className='hidden sm:block'>
//         <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//     </div>

//         <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
//             <div class="w-full">
//                 <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
//                     Get your free account now.
//                 </h1>

//                 <p class="mt-4 text-gray-500 dark:text-gray-400">
//                     Let’s get you all set up so you can verify your personal account and begin setting up your profile.
//                 </p>

                

//                 <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handlesubmit}>
//                     <div>
//                         <label htmlFor="firstname"class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
//                         <input id='firstname' value={firstname}  onChange={(e)=> setFirstname(e.target.value)}   type="text" placeholder="First Name" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                     </div>

//                     <div>
//                         <label  htmlFor="lastname"  class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
//                         <input id='lastname' value={lastname}  onChange={(e)=> setLastname(e.target.value)}type="text" placeholder="Last Name " class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                     </div>

                   

//                     <div>
//                         <label  htmlFor="bio" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Bio</label>
//                         <input id='bio' value={bio}  onChange={(e)=> setBio(e.target.value)} type="text" placeholder="Describe yourself" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                     </div>

//                     <div>
//                         <label  htmlFor="password"class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
//                         <input id='password' value={password}  onChange={(e)=> setPassword(e.target.value)} autoComplete="current-password" type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                     </div>

//                     <div>
//                         <label htmlFor="password" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
//                         <input type="password" id="password_confirmation" value={passwordconfirmation} onChange={(e)=> setPasswordconfirmation(e.target.value)}  autoComplete="current-password"      placeholder="Confirm your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                     </div>

//                     <button  type='submit'
//                         class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
//                         <span>Sign Up </span>

//                         <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
//                             <path fill-rule="evenodd"
//                                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                                 clipRule="evenodd" />
//                         </svg>
//                     </button>
//                    {/*incase of errorrs   */}
//                    <ol>

// {errors.map((err)=> 

// <div  key={err} class="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700" role="alert">
// <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
// <div>
// <span class="font-medium">{err}!</span> 
// </div>
// </div>)}
// </ol>     



//                 </form>
//             </div>
//         </div>
//     </div>
// </section>
//     </div>
<div className='grid grid-cols-1 sm:grid-cols-2 w-[100%] mt-4'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>

        <div className='bg-white-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8' onSubmit={handlesubmit}>
                <h2 className='text-4xl light:text-white font-bold text-center'>SIGN UP</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" 
                    value={firstname}  onChange={(e)=> setFirstname(e.target.value)} placeholder="First name" autoComplete='off'
 />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" 
                    value={lastname}  onChange={(e)=> setLastname(e.target.value)} placeholder="Last name" autoComplete='off'
                    />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" 
                    value={bio}  onChange={(e)=> setBio(e.target.value)} placeholder="Your Bio" autoComplete='off'
                    />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" 
                    value={password}  onChange={(e)=> setPassword(e.target.value)} placeholder="Password" autoComplete='off'
                    />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" 
                    value={passwordconfirmation}  onChange={(e)=> setPasswordconfirmation(e.target.value)} placeholder="Confirm your Password" autoComplete='off'
                    />
                </div>
                <button className='w-full my-5 py-2 bg-purple-500 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40 text-white font-semibold rounded-lg' type='submit'>SIGN UP</button>
                <p>Having an existing account? <Link to='/login'>Login Here</Link></p>
            </form>
        </div>     
    </div>

  )
}

export default Signup