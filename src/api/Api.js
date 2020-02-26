class Api {
  constructor(url) {
    this.baseUrl = url;

    this.get = this.sendResponse('GET');
  }

  sendResponse = type => (path, params) => {
    return fetch(`${this.baseUrl}${path}`, {
      body: JSON.stringify(params),
      method: type,
    }).then(response => response.json()).then(response => console.log(response));
  };

}

export default new Api(' http://api.tvmaze.com');
