import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Show = () => {

        //   const [data, setData] = useState(null);
        //    const [loading, setLoading] = useState(true);
        //   const [apiParameter, setApiParameter] = useState('default'); // Initial parameter value
        const [data, setData] = useState([{}]);
        const [loading, setLoading] = useState(true);
         useEffect(() => {
            fetch("/sample").then(
             res => res.json()
            ).then(
             data => {
                 setData(data)
                 console.log(data);
             }
            )
        
         }, []);
//   const [loading, setLoading] = useState(true);
//   const [apiParameter, setApiParameter] = useState('default'); // Initial parameter value

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:5000/api/${apiParameter}`);
//         // setData(response.data);
//         console.log(apiParameter);
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [apiParameter]); // Re-run effect when apiParameter changes

//   const handleInputChange = (e) => {
//     setApiParameter(e.target.value);
//   };
const [formValues, setFormValues] = useState({
    Input : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
        const response = await fetch('http://localhost:5000/api/submitf', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValues),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          // Add your logic to handle the response as needed
        } else {
          console.error('Failed to submit form data');
        }
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
   
  };
  return (
  <>
     <div>
      <h2 className='text-center font-custom text-velvet-100 text-4xl font-bold mt-5'>Enter your statement</h2>
      <form onSubmit={handleSubmit}
      className='flex flex-col gap-7
      py-5 items-center mt-10'
      >
        <label
        className='justify-center font-custom font-semibold'
        >
          User Input : 
          <input
            type="string"
            name="Input"
            step="any" // Allows entering floating-point numbers
            value={formValues.value1}
            onChange={handleChange}
            className='border-2 border-black'
          />
        </label>

       

        <button type="submit"
        className='border-2 border-black px-3 font-semibold font-custom bg-champ-100'
        >Submit</button>
      </form>
    </div>
    <div>
       {(typeof data.sample === 'undefined') ? (
        <p className='text-velvet-100 text-center font-custom text-4xl'>Fine will be charged</p>
       ) : (
        data.sample.map((sample , i) =>(
            <p key={i}>{sample}</p>
        ))
       )}
  </div>

    </>
  );
};

export default Show;
