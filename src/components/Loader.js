import loading from './loading.svg'
import React, { Component } from 'react'

class Spinner extends Component() {
    render() {
        return (
                <div className='text-center'>
                    <img src={loading} alt="loading..." />
                </div>
        )
    }
}

export { Spinner }