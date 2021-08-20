import React from "react"

interface Props {
    errorMsg: string
}

interface State {
    hasError: boolean
}

export default class ErrorBoundry extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false}
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true}
    }

    componentDidCatch(error: any, errorInfo: any) {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return <p>{ this.props.errorMsg }</p>
        }
        return this.props.children
    }


}

