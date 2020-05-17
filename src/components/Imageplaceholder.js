import React, { Component } from 'react'
import '../../src/App.css'
import Popup from "reactjs-popup";

export class Imageplaceholder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            openImagePopup: false,
            title: this.props.details.title,
            author: this.props.details.author,
            description: this.props.details.description,
        }
    }

    imageClickHandler = () => {
        this.setState({
            openImagePopup: true,
        });
    }
    onchangeTitle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onchangeAuthor = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onchangeDescription = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    cloaseImagePopup = (e) => {
        this.setState({
            openImagePopup: false
        });
    }

    render() {
        return (
            <div className="col-4 image-div-style" >
                <img 
                    className = "img-gallery"
                    onClick={this.imageClickHandler} 
                    src={this.props.details.imageUrl}
                    alt=""></img>
                <div>
                    <h6>{this.state.title}</h6>
                    <label>Author: {this.state.author}</label><br></br>
                    <label className="text-muted">{this.state.description}</label><br></br>
                </div>

                <Popup open={this.state.openImagePopup}
                    onClose={this.cloaseImagePopup}
                    contentStyle={{ maxWidth: '550px', minWidth: '400px', width: '66%' }}
                    modal>
                    <div className="sp-confirm-modal text-left">
                        <div className="row">
                            <div className="col-md-12">
                                <h6 className="sp-confirm-label float-left">Image details</h6>
                            </div>
                            <div className="col-md-12">
                                <hr className="sp-line-separator" />
                                <div>
                                    <label>Title</label>
                                    <input type="text"
                                        value={this.state.title}
                                        name="title"
                                        className="form-control"
                                        onChange={this.onchangeTitle}
                                    ></input>
                                    <label>Author</label>
                                    <input type="text"
                                        value={this.state.author}
                                        name="author"
                                        className="form-control"
                                        onChange={this.onchangeAuthor}
                                    ></input>
                                    <label>Description</label>
                                    <input type="text"
                                        value={this.state.description}
                                        name="description"
                                        className="form-control"
                                        onChange={this.onchangeDescription}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center pt-3">
                                <button
                                    id='btnReviewNo'
                                    className="btn btn-primary"
                                    onClick={this.cloaseImagePopup}
                                > close </button>
                            </div>
                        </div>
                    </div>
                </Popup>
            </div>
        )
    }
}

export default Imageplaceholder




