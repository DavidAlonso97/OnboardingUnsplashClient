import React from 'react'

class RenderImages extends React.PureComponent{
    getImages = () => {
        console.log("En renderImage")
        console.log(this.props.images);
        return(
            this.props.images.map((image, index) => (
                <img src={image} alt={index} key={index}/>
            ))
        )
    }

    render = () => (
        <div id={"test"}>
            {this.getImages()}
        </div>
    )


}
export default RenderImages;