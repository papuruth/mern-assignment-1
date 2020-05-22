import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Items extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="list-items-wrapper">
                Iems Works
            </div>
        )
    }
}
