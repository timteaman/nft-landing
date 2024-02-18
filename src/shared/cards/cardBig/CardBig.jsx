import styles from './styles.module.scss';
import SvgAvatarPlaceholderIcon from '@shared/icons/AvatarPlaceholderIcon';

function CardBig({ imageSrc, alt, title, artist, width, height }) {
  return (
    <article className={styles['card-big']}>
      <img
        className={styles['card-big__img']}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
      <div className={styles['card-big__box']}>
        <h2 className={`${styles['card-big__title']}`}>{title}</h2>
        <div className={styles['card-big__artist']}>
          <SvgAvatarPlaceholderIcon className={styles['card-big__icon']} />
          <span>{artist}</span>
        </div>
      </div>
    </article>
  );
}

export default CardBig;
