import React from "react";
import {history} from "../../_helper/history"


class SolutionCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            src: ''
        }
    }

    handleClick = (category) => {
        history.push(`/property#${category}`)
    }

    componentDidMount() {
        this.loadImage(this.props.imgName)
    }

    componentDidUpdate(prevProps, prevState, nextProps) {
        if (prevProps.imgName !== this.props.imgName) {
            this.loadImage(this.props.imgName)
        }
    }

    loadImage(name) {
        import(`../../assets/images/${name}`)
            .then(image => {
                console.log(image.default);
                this.setState({src: image.default})
            })
    }

    render() {
        const {title, text, imgName, category} = this.props
        return (
            <div className="overview-box col-xl">

                <img src={this.state.src} alt={imgName}/>

                <div className="overview-text">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <div className="overview-button">
                    <button
                        type="button"
                        className="btn btn-outline-primary text-left"
                        onClick={() => this.handleClick(category)}>Explore
                    </button>
                </div>
            </div>
        )
    }

};

export default SolutionCard;
