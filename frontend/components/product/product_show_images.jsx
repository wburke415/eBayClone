import React from 'react';

export default class ProductShowImages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMainImage: 0,
            selected: false
        };

        this.switchCurrentMainImage = this.switchCurrentMainImage.bind(this);
    }

    switchCurrentMainImage(e) {
        this.setState({currentMainImage: e.target.id});
        this.setState({selected: true});
    }


    render() {
        const {currentMainImage} = this.state;
        const {selected} = this.state;
        const {productImages} = this.props;

        const mainImage = <img className="main-image" src={productImages[currentMainImage].imageUrl} />;

        const childImages = productImages.map((image, idx) => {
            let childClass;
            (idx == currentMainImage && selected) ? childClass = "child-image selected" :  childClass = "child-image";
            // debugger;
            return (
                <li key={idx}>
                    <img id={idx} onClick={this.switchCurrentMainImage} className={childClass} src={image.imageUrl} />
                </li>
            );
        });

        return (
            <div className="product-images-wrapper">
                <div className="main-image-container">
                    {mainImage}
                </div>
                <ul className="child-images-list">
                    {childImages.map(image => image)}
                </ul>
        
                <span className="product-sell-button">
                    <i className="fas fa-dollar-sign"></i>
                    <p>Have one to sell?</p>
                    <button>Sell now</button>
                </span>
            </div>
        );
    }
}