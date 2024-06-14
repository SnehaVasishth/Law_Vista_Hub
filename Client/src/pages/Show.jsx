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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/submit');
        // setData(response.data);
      //  alert(response);
        //const jsonData = await response.json();
        setData(response);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


const [formValues, setFormValues] = useState({
    Settlement: '',
    Income: '',
    Duration: '',
    Fees: '',
    Type: '',
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
        const response = await fetch('http://localhost:5000/api/submit', {
            headers: {
                'Content-Type': 'application/json',
              },
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
      <h2 className='text-center font-custom text-velvet-100 text-4xl font-bold mt-5'>Enter the details</h2>
      <form onSubmit={handleSubmit}
      className='flex flex-col gap-7
      py-5 items-center mt-10'
      >
        <label
        className='justify-center font-custom font-semibold'
        >
          Settlement : 
          <input
            type="number"
            name="Settlement"
            step="any" // Allows entering floating-point numbers
            value={formValues.value1}
            onChange={handleChange}
            className='border-2 border-black'
          />
        </label>

        <label
        className='justify-center font-custom font-semibold'
        >
          Income :
          <input
            type="number"
            name="Income"
            step="any"
            value={formValues.value2}
            onChange={handleChange}
            className='border-2 border-black'
          />
        </label>

        <label
        className='justify-center font-custom font-semibold'
        >
         Duration :
          <input
            type="number"
            name="Duration"
            step="any"
            value={formValues.value3}
            onChange={handleChange}
            className='border-2 border-black'
          />
        </label>

        <label
         className='justify-center font-custom font-semibold'>
          Lawyer Fees :
          <input
            type="number"
            name="Fees"
            step="any"
            value={formValues.value4}
            onChange={handleChange}
            className='border-2 border-black'
          />
        </label>

        <label
         className='justify-center font-custom font-semibold'>
         Type :
          <input
            type="string"
            name="Type"
            step="any"
            value={formValues.value5}
            onChange={handleChange}
            className='border-2 border-black'
          />
        </label>

        <button type="submit"
        className='border-2 border-black px-3 font-semibold font-custom bg-champ-100'
        >Submit</button>
      </form>
      <div>
       {(typeof data.sample === 'undefined') ? (
        <p className='text-velvet-100 font-custom text-center text-4xl'>"Yes you can go for trial" </p>
       ) : (
        data.sample.map((sample , i) =>(
            <p key={i}>{data.ab}</p>
        ))
       )}
  </div>
        
     </div>

    </>
  );
};

export default Show;
