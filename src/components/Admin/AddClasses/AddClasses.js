import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { UserContext } from '../../../App';

const AddClasses = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name : data.example,
            imageURL : imageURL
            
        }
        const url = `http://localhost:5000/addClasses`
       console.log(eventData);

        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res => console.log('server side response'))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '925ca699f78042ebc2b9507ddba4fa60');
        imageData.append('image', event.target.files[0]);

        
        axios.post('https://api.imgbb.com/1/upload',
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <div>
            <h4>Add Class</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Class Name</label> <br/>
                {/* <input name="name" defaultValue="name" id="name" {...register('example')} /> <br/> */}
                <input defaultValue="name" id="name" {...register("example")} />
                <label htmlFor="photo">Add Class Photo</label> <br/>
                <input name="image" id ="photo" type="file" onChange={handleImageUpload} /> <br/> <br/>
                <input type="submit" value="Send"/>
            </form>
        </div>
        </div>
    );
};

export default AddClasses;