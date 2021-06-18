import React from "react"

interface Props {

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
        
    }

    render() {
        if(this.state.hasError) {
            return <p>Fail to execute</p>
        }
        return this.props.children
    }


}
