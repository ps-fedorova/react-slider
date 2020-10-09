import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";
import api from "./API"

const initialCards_1 = [ // массив JS
  {
    _id: "1",
    link: 'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg'
  },
  {
    _id: "2",
    link: 'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg'
  },
];

const initialCards_2 = [ // массив JSON
  {
    "_id": "1",
    "link": "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
  },
  {
    "_id": "2",
    "link": "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg"
  },
];


// "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
// "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
// "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
// "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
// "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
// "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
// "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
// "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"


function SampleNextArrow(props) {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}


function ReactSlickDemo() {


  const settings = {
    // dots: true,
    lazyLoad: true,
    infinite: true,
    className: 'container',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow/>,
  };

  const [cards, setCards] = React.useState([])
  // const [searchString, setSearchString] = React.useState('')

  React.useEffect(() => {

    api.search('nature').then(data => {
      setCards(data.results.map(item => ({
        id: item.id,
        src: item.urls.regular,
      })))
    })
  }, [])


  return (
    <div className="container">
      <div className="title__text">Simple slider</div>
      <div className="container__block">
        <Slider {...settings}>

          <div className="card__container">
            {/*вытащили первый элемент из массива JS*/}
            <img className="card" src={initialCards_1[0].link}/>
          </div>

          <div className="card__container">
            {/*вытащили первый элемент из массива JSON*/}
            <img className="card" src={initialCards_2[0].link}/>
          </div>


          {initialCards_1.map(card => {
            return (
              <div className="card__container">
                <img className="card"
                     key={card._id}
                     src={card.link}
                />
                {console.log()}
              </div>
            )
          })}


          {cards.map(({ id, src }) => {
            return (
              <div className="card__container">
                <img className="card"
                     key={id}
                     src={src}
                />
              </div>
            )
          })}



          {/*<div className="card__container">*/}
          {/*  <img className="card" src="http://files2.adme.ru/files/news/part_78/784510/3.png"/>*/}
          {/*</div>*/}

          <div className="card__container">
            <p className="card text">The End</p>
          </div>

        </Slider>
      </div>
    </div>
  );
}

ReactDOM.render(<ReactSlickDemo/>, document.getElementById("container"));
