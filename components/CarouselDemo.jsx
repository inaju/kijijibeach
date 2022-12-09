import React, { useEffect ,useState} from "react";
import useWindowDimensions from '../hooks/useWindowDimensions';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotelCard from "./HotelCard";
import bedroom from "../assets/bedroom.webp";
import bedroom_1 from "../assets/bedroom_1.webp";
import bedroom_2 from "../assets/bedroom_2.webp";
import bedroom_3 from "../assets/bedroom_3.webp";
import bedroom_4 from "../assets/bedroom_4.webp";
import bedroom_5 from "../assets/bedroom_5.webp";
import bedroom_6 from "../assets/bedroom_6.webp";
import bedroom_7 from "../assets/bedroom_7.webp";
import bedroom_8 from "../assets/bedroom_8.webp";
import bedroom_9 from "../assets/bedroom_9.webp";

export default function MultipleItems() {
  const { height, width } = useWindowDimensions();
  const [settings,setSettings]=useState( {
  
  })
  
  
  useEffect(()=>{
    console.log(height, width,'details' )
    if( width>1024){
      console.log( width>1024,' width>1024')
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      })
    }
    else if( width>880){
      console.log( width>685,' width>685')
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      })
    }
    else if( width>654){
        console.log( width<654,' width<654')
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        })
      }
    else if( width<684){
        console.log( width<685,' width<685')
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        })
      
      
}
  },[width])
 
  let hotelData = [
    {
      title: "New World",
      starNo: 2,
      price: 300,
      img: bedroom,
    },
    {
      title: "old World",
      starNo: 5,
      price: 100,
      img: bedroom_1,
    },
    {
      title: "Family World",
      starNo: 2,
      price: 1300,
      img: bedroom_2,
    },
    {
      title: "Children World",
      starNo: 3,
      price: 500,
      img: bedroom_3,
    },
    {
      title: "Adult World",
      starNo: 3,
      price: 300,
      img: bedroom_4,
    },
   
    {
      title: "Double Doulex",
      starNo: 4,
      price: 700,
      img: bedroom_5,
    },
    {
      title: "Single Doulex",
      starNo: 3,
      price: 300,
      img: bedroom_6,
    },
    {
      title: "Multiple Falls",
      starNo: 3,
      price: 100,
      img: bedroom_7,
    },
    {
      title: "Juice Falowo Room",
      starNo: 5,
      price: 200,
      img: bedroom_8,
    },
  ];
  return (
    <div className="xsm:max-w-[280px] xsm:m-0 xsm:mx-auto sm:max-w-full sm:m-auto">
      <Slider {...settings}>
        {hotelData?.map((i) => (
          <HotelCard
            title={i.title}
            starNo={i.starNo}
            price={i.price}
            img={i.img}
          />
        ))}
      </Slider>
    </div>
  );
}
