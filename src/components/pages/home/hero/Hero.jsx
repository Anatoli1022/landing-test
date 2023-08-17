import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

import background from './images/hero.jpg';

const cx = classNames.bind(styles);

const Hero = () => {
  const [translateY, setTranslateY] = useState(0);

  const handleScroll = () => {
    setTranslateY(window.scrollY * 0.6);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={cx('hero')}>
      <div className={cx('container-large', 'hero-container')}>
        <div className={cx('wrapper-text')}>
          <h1 className={cx('title')} style={{ transform: `translateY(${translateY}px)` }}>
            Управляющая компания и брокер с базой недвижимости в 7 городах России
          </h1>
          <p className={cx('text')} style={{ transform: `translateY(${translateY}px)` }}>
            Снимаем с владельцев зданий все задачи по администрированию и подбираем недвижимость для
            инвестиций, покупки и аренды.
          </p>
        </div>

        <img src={background} className={cx('background')} alt="Background" />
      </div>
    </section>
  );
};

export default Hero;
