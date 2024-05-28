import React, {useState} from 'react'

function MyComponent() {
   
   let [name, setName] = useState('Pedro') // const [state, setState] = useState(initialState)
   let [age, setAge] = useState(0)
   let [isEmployed, setIsEmployed] = useState(false)


   const updateName = () => {
      setName('Spongebob')
   }

   const incrementAge = () => {
      setAge(age + 1)
   }

   const toggleEmployedStatus = () => {
      setIsEmployed(!isEmployed) // O "!" é um inversor de booleano
   }
   
   return(
      <div>
         <p>Name: {name}</p>
         <button onClick={updateName}>Set Name</button>

         <p>Age: {age}</p>
         <button onClick={incrementAge}>Increment Age</button>

         <p>Is employed: {isEmployed ? 'Yes' : 'No'}</p>
         <button onClick={toggleEmployedStatus}>Toggle status</button>
      </div>
   )
}

export default MyComponent