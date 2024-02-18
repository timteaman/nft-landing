import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import SvgAvatarPlaceholderIcon from '@shared/icons/AvatarPlaceholderIcon';

function Collection({
  primaryImage,
  secondaryImages,
  alt,
  count,
  title,
  artist,
}) {
  const generateKey = (pre, index) => `${pre}_${index}`;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/marketplace');
  };

  return (
    <div className={styles.collection}>
      <img
        className={styles['collection__main-img']}
        src={primaryImage}
        alt={alt}
        width="330"
        height="330"
        loading="lazy"
        onClick={handleClick}
      />

      <div className={styles.collection__inner}>
        {secondaryImages.map((image, index) => (
          <img
            key={generateKey(alt, index)}
            className={styles['collection__img']}
            src={image}
            alt={alt}
            width="100"
            height="100"
            loading="lazy"
            onClick={handleClick}
          />
        ))}
        <span className={styles['collection__count']} onClick={handleClick}>
          {count}
        </span>
      </div>
      <span className={`${styles['collection__title']}`}>{title}</span>

      <div className={`${styles['collection__artist']}`}>
        <SvgAvatarPlaceholderIcon className={styles['card-big__icon']} />
        <span>{artist}</span>
      </div>
    </div>
  );
}

export default React.memo(Collection);
