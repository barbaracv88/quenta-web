import React from 'react';

export default class TitleSection extends React.Component {
    render() {
        return (
              
                    <div className="title-section">
                    <p className="category"> {this.props.category}</p>
                    <p className="description"> {this.props.description}</p>
                    </div>
              
            );
        
        }

}

