export async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('session-token') ? 'Token ' + sessionStorage.getItem('session-token') : ""
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data)
    });
    return {data: await response.json(), status: response.status}
  }

  export async function putData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('session-token') ? 'Token ' + sessionStorage.getItem('session-token') : ""
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data)
    });
    return {data: await response.json(), status: response.status}
  }

export async function getData(url){
    const response = await fetch(url,{
        method: 'GET',
        headers: {
          'Authorization': sessionStorage.getItem('session-token') ? 'Token ' + sessionStorage.getItem('session-token') : ""
        },
    });
    return {data: await response.json(), status: response.status}
}