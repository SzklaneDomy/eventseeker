import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class FavouriteEvent extends Component {
    render() {
        const { title, start, entities, end, location } = this.props.event;
        return (

            <div>
                <Card>
                    <Card.Body>
                        {title}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
