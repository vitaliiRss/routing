import React from 'react';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { state } from './Brand';
import styles from "../Site.module.css";

export const Model = () => {
  const { brand, id } = useParams();

  const currentModel = brand ? state[brand].products.find((product) => product.id === Number(id)) : null;

  const locale = useLocation()

  const navigate = useNavigate()
  const onClickBackHandler = () => {
    navigate(-1)
  }

  return (
    <>
      {locale.pathname === '/adidas/3' &&
        <>
          <div>Можем вам еще посоветовать перейти в раздел ABIBAS</div>
          <Link to="/abibas" className={styles.LinkLikeButton}>перейти в раздел ABIBAS</Link>
        </>
      }

      {currentModel
        ?
        <>
          <button onClick={onClickBackHandler} className={styles.ButtonLikeLink}>Back to {brand}</button>
          <div className={styles.product}>
            <img className={styles.productImg} src={currentModel.picture} alt={currentModel.model} />
            <h2>{currentModel.model}</h2>
            <h4>{currentModel.collection}</h4>
            <h3>{currentModel.price}</h3>
          </div>
        </>
        :
        <h2>Модель отсутствует</h2>
      }
    </>
  );
};