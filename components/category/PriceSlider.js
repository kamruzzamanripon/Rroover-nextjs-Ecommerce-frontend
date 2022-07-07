import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const PriceSlider = ({setFilterPrice}) => {
  const [sliderValue, setSliderValue] = useState(0)

  useEffect(()=>{
    setFilterPrice(sliderValue)
  },[sliderValue, setFilterPrice])

  //console.log("slider Value", sliderValue)
  return (
    <>
      <p className="mt-5 mb-1">Select Price: <span className="font-bold">{sliderValue}</span></p>
      <Slider 
        min={0}
        max={1000}
        value={sliderValue}
        onChange={setSliderValue}
        railStyle={{
          height: 2
        }}
        handleStyle={{
          height: 20,
          width: 20,
          marginLeft: -12,
          marginTop: -10,
          backgroundColor: "green",
          border: 0
        }}
        trackStyle={{
          background: "none"
        }}
      />
    </>
  );
};

export default PriceSlider;
