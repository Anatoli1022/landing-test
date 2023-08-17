import React from 'react';

import classNames from 'classnames/bind';
import styles from './Cooperate.module.scss';

import data from './data';

const cx = classNames.bind(styles);

const Cooperate = () => {
  return (
    <section className={cx('cooperate')}>
      <div className={cx('container-small')}>
        <h2 className={cx('title')}>С кем мы сотрудничаем</h2>

        <ul className={cx('list')}>
          {data.map((item, itemKey) => (
            <li className={cx('item')}>
              <img
                src={item.img.default}
                alt=""
                loading="lazy"
                aria-hidden="true"
                className={cx('image')}
                initial="initial"
              />
              <h3 className={cx('item-title')} initial="initial">
                {item.title}
              </h3>
              <p className={cx('text')} initial="initial">
                {item.text}
              </p>
              <a href="" className={cx('link')} initial="initial">
                <span>подробнее</span>
                <svg
                  className={cx('arrow')}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    className={cx('arrow-path')}
                    d="M4.5 5.5H11.5M11.5 5.5V12.5M11.5 5.5L5.01852 11.9815"
                    stroke="#2E2E2E"
                    stroke-width="1.5"
                    stroke-linejoin="bevel"
                    // animate={{ stroke: hoverStates[itemKey] ? '#ffff' : '#2E2E2E' }}
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cooperate;
