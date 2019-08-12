import React from 'react'
import RenderImages from '../components/RenderImages'
import UnsplashClient from '../components/UnsplashClient'
import UnsplashClientReact from "../components/UnsplashClientReact";

class SearchImage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            images: [],
        }
    }

    onChangeInputText = (value) =>{
        this.setState({
            inputValue: value,
        });
    };

    renderImageInList = () => {
        return(
            <RenderImages images={this.state.images}/>
        )
    }

    componentDidMount() {
        const uri = window.location.href;
        const accesCode = uri.split('code=');
        //http://localhost:3000/images?code=ee56dd72cc08f89e8d6adafd233c807c397dfc332e144e07bee066ed2ccb16d0
        this.setState({
            userToken : accesCode[1],
        });
    }

    fetchImage = async () => {
        var Uclient = new UnsplashClient();
        var newData;
        newData = await Uclient.fetchImage(this.state.inputValue, (data) => {
            this.setState({images: data})
        });

    };


    fetchRandomImage = async () => {
        var Uclient = new UnsplashClient();
        //var newData;
        await Uclient.fetchRandomImage((data) => {
            console.log('asdasdasd');
            console.log(data);
            this.setState({images: data})
        });
    };

    render = () => (
        <div className={"mainContainer"}>
            <input type={Text} onChange={this.onChangeInputText}/>
            <button onClick={this.fetchImage}>Buscar</button>
            <button onClick={this.fetchRandomImage} >GetRandomImage</button>
            {this.renderImageInList()}

        </div>
    )
}

export default SearchImage;