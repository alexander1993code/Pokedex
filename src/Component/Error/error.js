import React from "react";

export class ErrorComponent extends React.Component {

    state = {
        hasError: false,
        message: ''
    }

    componentDidCatch(error) {
        this.setState({
            hasError: true,
            message: error.message
        })
    }

    render() {

        if (this.state.hasError) {
            return (
                <div>

                    <div className="font-medium text-red-600">

                        <p>Whooops! Something went Wrong.</p>
                        {this.state.message}
                    </div>


                </div>
            );
        }
        return this.props.children;
    }
}

export const whithError = (Component) => {
    class ErrorComponent extends React.Component {

        state = {
            hasError: false,
            message: ''
        }

        componentDidCatch(error) {
            this.setState({
                hasError: true,
                message: error.message
            })
        }

        render() {

            if (this.state.hasError) {
                return (
                    <div>

                        <div className="font-medium text-red-600">

                            <p>Whooops! Something went Wrong.</p>
                            {this.state.message}
                        </div>


                    </div>
                );
            }
            return <Component {...this.props} />;
        }
    }

    ErrorComponent.displayName = `whithError{${Component.displayName || Component.name}}`;

    return ErrorComponent;
}