import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Listuser from './Listuser';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    photo: null,
    dob: '',
    state: '',
    country: '',
    interests: '',
  });
  
  
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handlePhotoChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a FormData object to send the file
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('dob', formData.dob);
    formDataToSend.append('state', formData.state);
    formDataToSend.append('country', formData.country);
    formDataToSend.append('interests', formData.interests);
    formDataToSend.append('photo', formData.photo);
    
    try {

      const response = await axios.post('http://localhost:4000/api/user', formDataToSend);
      console.log('User created successfully:', response.data);

      setFormData({
        name: '',
        photo: null,
        dob: '',
        state: '',
        country: '',
        interests: '',
      });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  
  
  const [Data, setData] = useState([]);
  const handleget = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.get('http://localhost:4000/api/user',);

      setData(response.data)
      console.log('User created successfully:', response.data);


    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (

    <>
      <Stack gap={2} className="col-md-5 mx-auto">
        <div>
          <h2 className="col-md-5 mx-auto">User Form</h2>
          <form onSubmit={handleSubmit}>
            <Form.Label htmlFor="inputName">Enter your Name</Form.Label>
            <Form.Control
              type="text"
              id="inputName"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required

            />
            <Form.Label htmlFor="inputPhoto">Upload your Photo:</Form.Label>
            <Form.Control

              id="inputPhoto"
              type="file"
              name="photo"
              onChange={handlePhotoChange}
              accept="image/*"

            />
            <Form.Label htmlFor="dob">Enter your Date of Birth:</Form.Label>
            <Form.Control
              id="dob"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required

            />
            <Form.Label htmlFor="State">State:</Form.Label>
            <Form.Select aria-label="Default select example" id='State'
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required>
              <option value="">Select a state</option>
              <option value="Mp">Mp</option>
              <option value="up">up</option>
              <option value="bihar">bihar</option>
              <option value="Maharastra">Maharastra</option>
              <option value="chennai">chennai</option>
              <option value="gujrat">gujrat</option>
            </Form.Select>
            <Form.Label htmlFor="Country">Country:</Form.Label>
            <Form.Select aria-label="Default select example" id='Country'
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required>
              <option value="">Select a country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="south corean">south corean</option>
              <option value="south africa">south africa</option>
            </Form.Select>
            <Form.Label htmlFor="Interests">Interests:</Form.Label>
            <Form.Control
              id="Interests"
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleInputChange}
              required
            />
            <br></br>
             <Button type="submit" variant="outline-secondary">Submit</Button>&nbsp;&nbsp;
            <Button onClick={handleget} variant="outline-secondary">get data</Button>
          </form>
        </div>
      </Stack>
      <Listuser datas={Data}/>

      

            {/* <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div> */}
            {/* <div>
              <label>Photo:</label>
              <input
                type="file"
                name="photo"
                onChange={handlePhotoChange}
                accept="image/*"
              />
            </div> */}
            {/* <div>
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </div> */}
            
            {/* <div>
              <label>State:</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a state</option>
                <option value="Mp">Mp</option>
                <option value="up">up</option>
                <option value="bihar">bihar</option>
                <option value="Maharastra">Maharastra</option>
                <option value="chennai">chennai</option>
                <option value="gujrat">gujrat</option>

              </select>
            </div> */}
            {/* <div>
              <label>Country:</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="south corean">south corean</option>
                <option value="south africa">south africa</option>

              </select>
            </div> */}
          
            {/* <div>
              <label>Interests:</label>
              <input
                type="text"
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
              />
            </div> */}
            {/* <button type="submit">Submit</button>
        <button onClick={handleget}>get data</button> */}
           
    </>
  );
};

export default UserForm;
