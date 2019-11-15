class Cat {

  constructor(container, api_key) {
    this.container = container;
    this.resourceURI = 'https://api.thecatapi.com/v1/images/search';
    this.api_key = api_key;
    this.img = document.createElement('img');
    this.setPhoto();
  }

  setPhoto() {
    this.getPhoto()
      .then(cat => {
        this.img.alt = 'Active Cat';
        this.img.className = 'img-fluid'
        this.img.src = cat.url;
        this.container.appendChild(this.img);
      })
      .catch(err => console.log('something\'s wrong with the API'));
  }

  async getPhoto() {
    const response = await fetch(`${this.resourceURI}?api_key=${this.api_key}`);
    const data = await response.json();
    return data[0];
  }
}

export { Cat as default };