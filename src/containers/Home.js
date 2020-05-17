import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from '../store/Home';
import Imageplaceholder from '../components/Imageplaceholder'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openImagePopup: false,
            selectImage: {}
        }
    }   
    async componentDidMount() {
        await this.props.getUnsplashImages();
    }
    render() {
        
        let images = this.props.imageList;
        return (
            <>
                <div className="row">
                    {
                        images.map((image) => <Imageplaceholder details={image} ></Imageplaceholder>)
                    }
                </div>                
            </>
        )
    }
}

export default connect(
    state => ({ ...state.home }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);
