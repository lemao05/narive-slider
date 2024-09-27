import { useRef, useState } from 'react';

export default function Slide({ url, handleHomeClick, id, handleNextClick }) {
  const [value, setValue] = useState(0);
  const buttonHomeRef = useRef(null);
  const buttonNextRef = useRef(null);
  const textRef = useRef(null);
  const [isAboutShown, setIsAboutShown] = useState(false);
  const abouteSlideRef = useRef(null);

  const handleScrollChange = (e) => {
    const currentValue = e.target.value;
    setValue(currentValue);
    textRef.current.scrollTop = currentValue * 4;
  };

  return (
    <div style={{ backgroundImage: url }} className='slide'>
      <img
        className='button-home'
        ref={buttonHomeRef}
        onClick={handleHomeClick}
        src='/global.png'
      />
      {id === 1 && (
        <>
          <input
            onChange={handleScrollChange}
            value={value}
            className='scrollBar'
            type='range'
          />
          <p ref={textRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            magnam, quis sed illum tenetur soluta adipisci totam eaque autem
            repellendus animi minus modi! Incidunt, maxime. Sint pariatur
            explicabo modi eligendi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Id laudantium quaerat tenetur doloribus quis! Ut
            doloremque voluptatem nobis praesentium error tempore illum dicta
            eius, illo autem consequatur eos quos. Quas? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eaque quidem placeat voluptatum,
            officiis debitis perferendis tempora praesentium vero maxime eius
            rerum sunt nesciunt laboriosam nemo expedita voluptate tenetur ab
            odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            molestiae deleniti voluptates, facere nemo provident exercitationem
            nobis ducimus nulla earum quaerat dolorem a. Fugit voluptates
            adipisci blanditiis ducimus tempore voluptatibus! Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Rerum, laudantium velit
            voluptatem doloremque recusandae repellendus minima harum eum
            placeat ea fugit commodi temporibus animi, beatae perferendis
            molestiae facilis debitis autem! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil, magnam, quis sed illum tenetur
            soluta adipisci totam eaque autem repellendus animi minus modi!
            Incidunt, maxime. Sint pariatur explicabo modi eligendi? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Id laudantium quaerat
            tenetur doloribus quis! Ut doloremque voluptatem nobis praesentium
            error tempore illum dicta eius, illo autem consequatur eos quos.
            Quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            quidem placeat voluptatum, officiis debitis perferendis tempora
            praesentium vero maxime eius rerum sunt nesciunt laboriosam nemo
            expedita voluptate tenetur ab odio. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Rem molestiae deleniti voluptates,
            facere nemo provident exercitationem nobis ducimus nulla earum
            quaerat dolorem a. Fugit voluptates adipisci blanditiis ducimus
            tempore voluptatibus! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Rerum, laudantium velit voluptatem doloremque
            recusandae repellendus minima harum eum placeat ea fugit commodi
            temporibus animi, beatae perferendis molestiae facilis debitis
            autem!
          </p>
        </>
      )}
      {id === 0 && (
        <img
          className='button-next'
          ref={buttonNextRef}
          onClick={handleNextClick}
          src='/btn.png'
        />
      )}
      {id === 2 && (
        <>
          {isAboutShown && (
            <div className='about'>
              <div
                ref={abouteSlideRef}
                style={{
                  backgroundImage: 'url("public/test_onpoint_0003_4.jpg")',
                  zIndex: 1,
                }}
                className='slide'
              >
                <img
                  onClick={() => setIsAboutShown(false)}
                  className='button-close'
                  src='/btn_close.png'
                />
                <img
                  onClick={() => {
                    abouteSlideRef.current.style.backgroundImage =
                      'url("public/test_onpoint_0003_4.jpg")';
                  }}
                  className='arrow-prev'
                  src='/btn_prev.png'
                />
                <img
                  onClick={() => {
                    abouteSlideRef.current.style.backgroundImage =
                      'url("public/test_onpoint_0004_5.jpg")';
                  }}
                  className='arrow-next'
                  src='/btn_next.png'
                />
              </div>
            </div>
          )}
          <img
            className='button-about'
            onClick={() => setIsAboutShown(true)}
            src='/btn_about.png'
          />
        </>
      )}
    </div>
  );
}
