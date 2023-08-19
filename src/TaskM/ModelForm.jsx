import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ModelForm = ({ set }) => {
    const [selectedValue, setSelectedValue] = useState('Bio');
    const [nameValue, setNameValue] = useState('');
    const [textValue, setTextValue] = useState('');

    const handleSelectChange = (event) => {
        console.log(event.target.value)
        setSelectedValue(event.target.value);
    };

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    };
    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    };

    const handleAddButtonClick = async () => {
        const response = await axios.post(`https://finalserver-lne5.onrender.com/content/tasks/add/${localStorage.getItem("userId")}`, {
            name: nameValue,
            text: textValue,
            type: selectedValue
        });
        set(response.data.tasks)

        setNameValue('');
        setTextValue('');
    };

    return (
        <Form className='ModelForm'>
            <Form.Group controlId="Select">
                <Form.Label>Choose the Model</Form.Label>
                <select value={selectedValue} onChange={handleSelectChange}>
                    <option value="Bio">Bio</option>
                    <option value="Psycho">Psycho</option>
                    <option value="Social">Social</option>
                    <option value="Spiritual">Spiritual</option>
                </select>
            </Form.Group>
            <Form.Group controlId="Input1">
                <Form.Label>Give the name of your task</Form.Label>
                <Form.Control type="text" value={nameValue} onChange={handleNameChange} />
            </Form.Group>
            <Form.Group controlId="Input2">
                <Form.Label>Describe your task</Form.Label>
                <Form.Control type="text" value={textValue} onChange={handleTextChange} />
            </Form.Group>
            <Button variant="primary" onClick={handleAddButtonClick}>
                Add
            </Button>

        </Form>
    );
};

export default ModelForm;