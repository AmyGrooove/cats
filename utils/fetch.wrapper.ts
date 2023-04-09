import { userSubject, apiEndpoint } from '../services/user.service';


export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};


function Url(url: string){
    if(process.env.NEXT_PUBLIC_BACKEND_PATH != "")
        return process.env.NEXT_PUBLIC_BACKEND_PATH + url.replace(/api\//g,'')
    return url;
}

function get(url : string, token? : string) {
    const requestOptions : any = {
        method: 'GET',
        headers: authHeader(token)
    };
    return fetch(Url(url), requestOptions).then(handleResponse);
}

function post(url : string, body? : any, token? : string) {
    const requestOptions : any = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader(token) },
        //credentials: 'include',
        body: JSON.stringify(body)
    };
    return fetch(Url(url), requestOptions).then(handleResponse);
}

function put(url : string, body : any, token? : string) {
    const requestOptions : any = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeader(token) },
        body: JSON.stringify(body)
    };
    return fetch(Url(url), requestOptions).then(handleResponse);    
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url : string, token? : string) {
    const requestOptions : any = {
        method: 'DELETE',
        headers: authHeader(token)
    };
    return fetch(Url(url), requestOptions).then(handleResponse);
}

// helper functions

function authHeader(token? : string) {
    // return auth header with jwt if user is logged in and request is to the api url
    //const [user, setUser ] = userSubject();
    const isLoggedIn = token;
    //const isApiUrl = url.startsWith(apiEndpoint);
    if (isLoggedIn ) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}

function handleResponse(response : any) {
    return response.text().then( (text : string) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].includes(response.status) ) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                //userService.logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}