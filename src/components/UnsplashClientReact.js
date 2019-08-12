import React from 'react'
import RenderImages from "./RenderImages";

class UnsplashClientReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            inputValue: 'car',
            baseUrl: 'https://api.unsplash.com',
            photoUrl: '/search/photos',
            randomUrl: '/photos/random',
        }
    }

    fetchImage = async () => {

        const imageToSearch = encodeURIComponent(this.state.inputValue).replace(' ', '%20');
        const urlCompleta = this.baseUrl.concat(this.photoUrl, '?client_id=f9cc4bf78c94ff7e83612e71407345c48ebb44bded6bf0f1995fd4dbbb764a3c', `&query=${imageToSearch}`);

        var myRequest = new Request(urlCompleta);

        const response2 = await fetch(myRequest);

        const data = await response2.json();

        if (response2.status >= 200 || response2.status <= 299) {
            if (data !== undefined) {
                const newImage = [data.results];
                newImage.map((image) => {
                    this.setState({
                        images: image
                    });
                })
            }
        } else {
            alert('Image not available');
        }
    };

    render = () => (
        <div className={"mainContainer"}>
            {this.fetchImage()}
            <RenderImages images={this.state.images} />
        </div>
    )

};


export default UnsplashClientReact;