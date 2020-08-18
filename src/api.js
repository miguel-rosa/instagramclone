//export const API_URL = 'http://apidogs.combr/json';
export const API_URL = 'https://wdtheme.wdt.com.br/json';

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
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                'Authorization':'Bearer '+token
            }
        }
    }
}

export function USER_GET(token){
    return{
        url:API_URL + '/v1/user',
        options:{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+ token
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

export function UNIQUE_USER_GET(id){
    return{
        url:API_URL + '/v1/user/' + id,
        options:{
            method:'GET',
        }
    }
}

export function POST_PHOTO(formData, token){
    return{
        url:API_URL + '/v1/photo',
        options:{
            method:'POST',
            headers:{
                /*'Content-Type': "multipart/form-data; boundary=---011000010111000001101001",*/
                'Authorization': 'Bearer ' + token
            },
            body:formData
        }
    }
}

export function DELETE_POST(id, token){
    return{
        url:API_URL + '/v1/photo/' + id,
        options:{
            method:'DELETE',
            headers:{
                'Authorization': 'Bearer ' + token
            }
        }
    }
}


export function PHOTOS_GET(){
    return{
        url:API_URL + '/v1/photo/',
        options:{
            method:'GET',
            headers:{
                
            }
        }
    }
}