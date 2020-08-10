export const API_URL = 'http://apidogs.combr/json';

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
                'Authorization':'Bearer '+token
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

