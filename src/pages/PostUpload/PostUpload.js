import React, { useState, useContext } from 'react';

import { POST_PHOTO } from '../../api';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { UserContext } from '../../components/UserContext/UserContext';
import './PostUpload.css'

const PostUpload = () => {
    

    const { dataUser } = useContext(UserContext);

    const navigate = useNavigate();
    

    const [legend, setLegend] = useState({})
    const [image, setImage] = useState({})

    const {/* loading, error,*/ request } = useFetch();

    function handleInputChange(event){
        const { value } = event.target;
        setLegend( value );
    }

    function handleFileInputChange( event ){
        setImage({
            preview: URL.createObjectURL(event.target.files[0]),
            raw:event.target.files[0],
        })
    }

    async function handleFormSubmit(event){
        event.preventDefault();
        
        const token = window.localStorage.getItem('token');
        const formData = new FormData();

        formData.append('img', image.raw);
        formData.append('legend', String(legend));

        console.log(formData);
        
        const { url, options } = POST_PHOTO(formData, token);
        const { response } = await request(url, options);
        
        console.log(response)
        if(response.ok){ navigate(`/user/${dataUser.username}`)}
    }
    
    return (
        <Container>
            {image.preview && <div className="preview" style={{backgroundImage:`url('${image.preview}')`}}/>}
            <form onSubmit={handleFormSubmit}>
                <input className="input__file" onChange={handleFileInputChange} name="img" type="file" />
                <labe className="input__label">Legenda</labe>
                <textarea className="input__post" onChange={handleInputChange} name="legend" type="text" id="legend"/>
                <button className="login__button" >Enviar</button>
            </form>
        </Container>
    )
}

export default PostUpload;