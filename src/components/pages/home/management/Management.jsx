import React, { useState, useLayoutEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Management.module.scss';

import background from './images/map.jpg';
import backgroundMobile from './images/map-mobile.jpg';

const cx = classNames.bind(styles);

const Management = () => {
  const [displayBackground, setDisplayBackground] = useState(false);

  useLayoutEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth;
      setDisplayBackground(newWidth >= 1024);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={cx('management')}>
      <div className={cx('container-small', 'management-container')}>
        <div className={cx('container-content')}>
          <h2 className={cx('title')}>Под нашим управлением</h2>
          <div className={cx('information')}>
            <div>
              <span className={cx('number-info')}>300 га</span>
              <p className={cx('text')}>земли</p>
            </div>
            <div>
              <span className={cx('number-info')}>4 000 000 м²</span>
              <p className={cx('text')}>жилой и коммерческой недвижимости</p>
            </div>
          </div>
        </div>

        {displayBackground ? (
          <img src={background} className={cx('background')} loading="lazy" alt="" />
        ) : (
          <img src={backgroundMobile} className={cx('background')} loading="lazy" alt="" />
        )}
      </div>
    </section>
  );
};
export default Management;
