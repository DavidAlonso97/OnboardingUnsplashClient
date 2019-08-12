class UnsplashClient{
    constructor() {
        this.baseUrl = 'https://api.unsplash.com';
        this.photoUrl = '/search/photos';
        this.randomUrl = '/photos/random';
        this.images = [];
    }

    async fetchImage(inputValue, onSucess) {
        let images = [];

        const urlCompleta = this.baseUrl.concat(this.photoUrl, '?client_id=f9cc4bf78c94ff7e83612e71407345c48ebb44bded6bf0f1995fd4dbbb764a3c', `&query=${inputValue}`);

        let req = new XMLHttpRequest();
        req.open('GET', urlCompleta, true);
        req.onreadystatechange = function (aEvt) {
            if (req.readyState === 4) {
                if(req.status >= 200 || req.status <= 299){
                    const data = JSON.parse(req.responseText);
                    console.log(data);
                    data.results.map(image => (
                        images.push(image.urls.regular)
                        )
                    )

                    onSucess(images);
                } else {
                    alert(req.status);
                }
            }
        };
        req.send(null);
    };

    async fetchRandomImage(onSucess) {

        let images = [];

        const urlCompleta = this.baseUrl.concat(this.randomUrl, '?client_id=f9cc4bf78c94ff7e83612e71407345c48ebb44bded6bf0f1995fd4dbbb764a3c');

        let req = new XMLHttpRequest();
        req.open('GET', urlCompleta, true);
        req.onreadystatechange = function (aEvt) {
            if (req.readyState === 4) {
                if(req.status >= 200 || req.status <= 299){
                    const data = JSON.parse(req.responseText);
                    console.log(data.urls.regular);
                    images.push(
                        data.urls.regular
                    )
                    //images = data.urls.regular;
                    onSucess(images);
                } else {
                    alert(req.status);
                }
            }
        };
        req.send(null);

        console.log(images);
        this.images = images;

    };


}
export default UnsplashClient;