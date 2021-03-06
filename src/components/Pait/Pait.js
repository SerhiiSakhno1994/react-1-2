import PropTypes from 'prop-types';
import s from './Pait.module.css';
import defaultImg from './default.jpg';

console.log(defaultImg);

export default function Pait({
  url = defaultImg,
  title,
  author = 'не відомо',
  profileUrl,
  price,
  quantity,
}) {
  return (
    <div className={s.conteiner}>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'} </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Pait.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
