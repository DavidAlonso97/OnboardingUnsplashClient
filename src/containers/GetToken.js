import React from 'react';
import LoadingPage from '../components/LoadingPage'

class GetToken extends React.PureComponent {

    componentWillMount() {
        window.location.assign(
            encodeURI('https://unsplash.com/oauth/authorize?client_id=f9cc4bf78c94ff7e83612e71407345c48ebb44bded6bf0f1995fd4dbbb764a3c&response_type=code&redirect_uri=http://localhost:3000/images&scope=public')
        )
    }

    render = () => (
        <div>
            <LoadingPage/>
        </div>
    )
}

export default GetToken;
