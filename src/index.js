import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}


class ReactSlickDemo extends React.Component {


  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      className: 'container',
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow/>,
    };
    return (
      <div className="container">
        <div className="title__text">Simple slider</div>
        <div className="container__block">
          <Slider {...settings}>
            <div className="card__container">
              <img className="card" src="https://triptofan.ru/wp-content/cache/thumb/98/cca75bde1d3ca98_810x260.jpg"/>
            </div>
            <div className="card__container">
              <img className="card" src="http://files2.adme.ru/files/news/part_78/784510/3.png"/>
            </div>
            <div className="card__container">
              <p className="card text">The End</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ReactSlickDemo/>, document.getElementById("container"));
