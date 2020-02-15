import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';
import * as S from './styles';

function Header({ cartSize }) {
  return (
    <S.Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>
      <S.Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </S.Cart>
    </S.Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
