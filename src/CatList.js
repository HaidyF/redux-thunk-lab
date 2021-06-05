// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    render() {
        const catPicUrl = () => this.props.catPics.map(catPic => <img src={catPic.rul} alt={catPic.id}></img>)
        return (
            <div>
                {catPicUrl()}
            </div>
        );
    }
}

export default CatList;
