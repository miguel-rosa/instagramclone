const USE_IP = true;
const USE_LOCAL = false;
const HOST = USE_IP ? '192.168.0.16' : 'localhost'; 
export const API_URL =  USE_LOCAL ? `http://${HOST}:3333` : 'https://miguelsocialserver.herokuapp.com/';
// export const API_URL = 'https://wdtheme.wdt.com.br/json';

export function TOKEN_POST (body) {
    return {
        url:API_URL + '/jwt-auth/v1/token',
        options:{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(body)
        }
    }
}

export function TOKEN_VALIDATE_POST(token){
    return{
        url:API_URL + '/jwt-auth/v1/token/validate',
        options:{
            method:'GET',
            headers:{
                "Content-Type": "application/json",
                'Authorization':'Bearer '+token
            }
        }
    }
}

export function USER_GET_LOGIN(token){
    return{
        url:API_URL + '/v1/user_validate/',
        options:{
            method:'GET',
            headers:{
                'Authorization':token
            }
        }
    }
}

export function USER_POST(formData){
    return{
        url:API_URL + '/v1/user',
        options:{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                     "Accept":"application/json"
            },
            body: JSON.stringify(formData)
        }
    }
}

export function USER_PUT(id, formData, token){
    return{
        url:API_URL + '/v1/user/' + id,
        options:{
            method:'PUT',
            headers:{
                /*'Content-Type': "multipart/form-data; boundary=---011000010111000001101001",*/
                'Authorization': token
            },
            body:formData
        }
    }
}

export function UNIQUE_USER_GET(slug, token){
    return{
        url:API_URL + '/v1/user/' + slug,
        options:{
            method:'GET',
            headers:{
                'Authorization': token
            }
        }
    }
}

export function POST_PHOTO(formData, token){
    console.log(formData)
    return{
        url:API_URL + '/v1/posts',
        options:{
            method:'POST',
            headers:{
                /*'Content-Type': "multipart/form-data; boundary=---011000010111000001101001",*/
                'Authorization': token
            },
            body:formData
        }
    }
}

export function DELETE_POST(id, token){
    return{
        url:API_URL + '/v1/posts/' + id,
        options:{
            method:'DELETE',
            headers:{
                'Authorization': token
            }
        }
    }
}

export function PHOTOS_GET(page){
    return {
        url:API_URL + '/v1/posts/?page=' + page,
        options:{
            method:'GET',
            headers:{
                
            }
        }
    }
}

export function FOLLOW_POST(formData, token){
    console.log('formData', formData)
    return {
        url:API_URL + '/v1/follow',
        options:{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                'Authorization': token,
            },
            body: JSON.stringify(formData)
        }
    }
}