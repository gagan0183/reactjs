import React, { Component } from 'react';
class Card extends Component {
    render() {
        return (
            <div style={{margin: '1em'}}>
                <img width="75" src={this.props.avatar_url}/>
                <div style={{display: 'inline-block', marginLeft: 10}}>
                    <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{this.props.name}</div>
                    <div>{this.props.company}</div>
                </div>
            </div>
        );
    };
};

class CardList extends Component {
    render() {
        return (
            <div>
                {this.props.cards.map(card => <Card {...card}/>)}
            </div>
        );
    }
}

export default CardList;