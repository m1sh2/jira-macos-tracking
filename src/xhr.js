
const APIHOST = 'http://developers.solidopinion.com:8080/rest';

class Xhr {
  prepareRequestData(data) {
    let dataPrepared = [];

    for (let i in data) {
      dataPrepared.push(`${i}=${data[i]}`);
    }

    return dataPrepared.join('&');
  }

  get(apiUrl, data) {
    if (data) {
      apiUrl += '?' + this.prepareRequestData(data);
    }

    console.warn('GET', apiUrl);

    return fetch(`${APIHOST}/${apiUrl}`)
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  }

  post(apiUrl, data) {
    data = data || {}

    console.warn('POST', apiUrl, data);

    return fetch(
        `${APIHOST}/${apiUrl}`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        }
      )
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  }
}

export const xhr = new Xhr();