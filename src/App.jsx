import { useRef } from 'react';
import './App.scss';
import Slide from './Slide';

const slidesData = [
  {
    id: 0,
    url: "url('public/test_onpoint_0000_01.jpg')",
  },
  {
    id: 1,
    url: "url('public/test_onpoint_0001_02.jpg')",
  },
  {
    id: 2,
    url: "url('public/test_onpoint_0002_3.jpg')",
  },
];

function App() {
  const sliderRef = useRef(null);

  const handleHomeClick = () => {
    sliderRef.current.scrollLeft = 0;
  };

  const handleNextClick = () => {
    sliderRef.current.scrollLeft = 1024;
  };

  return (
    <div ref={sliderRef} className='slider'>
      {slidesData.map((slide) => (
        <Slide
          key={slide.id}
          {...slide}
          handleHomeClick={handleHomeClick}
          handleNextClick={handleNextClick}
        />
      ))}
    </div>
  );
}

export default App;
