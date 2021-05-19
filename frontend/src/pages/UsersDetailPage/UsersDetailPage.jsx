import React, { Component } from 'react'

export default class UsersDetailPage extends Component {
    render() {
        const {match}=this.props
        console.log(match);
        return (
            <div>
                detail
            </div>
        )
    }
}
