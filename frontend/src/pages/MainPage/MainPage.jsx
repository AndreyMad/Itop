import React, { Component } from 'react'
import Authorization from '../../components/Authorization/Authorization'

export default class AuthPage extends Component {
    
    render() {
        const {isAuth} =this.props
        return (
            <div>
                <Authorization/>
            </div>
        )
    }
}
