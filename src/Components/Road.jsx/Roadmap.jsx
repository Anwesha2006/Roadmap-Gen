import React, {useState,useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Roadmap.css'

export default function RoadMap(searchTerm, setSearchTerm){
    const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/list.json")
      .then(res => res.json())
      .then(data => setList(data))
      .catch(err => console.error(err));
  }, []);

  console.log(list);
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}
  return (
  <>
    <div className="text">
      <div className="slider-container">
        <h1>Explore Learning Roadmaps</h1>

        <div className="filters">
          <div className="search-box">
            <input type="text" placeholder="Search" />
          </div>

          <div className="filter-btnwrapper">
            <div className="filter-btn">All Subjects</div>
            <div className="filter-btn">Difficulty</div>
            <div className="filter-btn">Price Range</div>
          </div>
        </div>

        <Slider {...settings}>
          {list.map((item) => (
            <div key={item.id} className="card">

              <div className="card-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="card-content">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-desc">{item.title}</p>

                <div className="card-footer">
                  <span>${item.price}</span>
                  <button className="card-btn">View Details</button>
                </div>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  </>
)};