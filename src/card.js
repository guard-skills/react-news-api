import React, { Component } from 'react';

class Card extends Component {

    getImage(){
        var id = Date.Now
        var url = "https://picsum.photos/200/300?random=" + id

        return url
    }

    render() {
        return(
        <div className="news-card" key={this.props.id}>
            <img src={this.props.image ? this.props.image : this.getImage()} alt="news-card" className="news-card-photo" />
            <div className="news-short-info">
                <div className="news-div">
                    <div className="news-category">
                        {this.props.category}
                    </div>
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer" className="news-title">
                        {this.props.title}
                    </a>
                    <div className="news-short-description">
                        {this.props.description}
                    </div>
                    <div className="news-card-bottom">
                        <div className="news-source">{this.props.source.name}</div>
                        <div className="news-timestamp">{this.props.publishedAt}</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Card;