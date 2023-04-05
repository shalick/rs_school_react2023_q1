import React from 'react'
import { Header } from './components/Header/Header'
type props = {
    pageTitle: string
    page: JSX.Element
}

export default class Layout extends React.Component<props> {
    render() {
        return (
            <>
                <Header pageTitle={this.props.pageTitle} />
                {this.props.page}
            </>
        )
    }
}
