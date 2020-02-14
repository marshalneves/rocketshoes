import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import * as S from './styles';

function Home() {
  return (
    <S.ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
          alt=""
        />
        <strong>
          Tênis bla bla djksah dskajhdsajk hdkjsahdjkasjkajkd djadsdjadjksh
          adjhdkhj jdjdja jksja jkahjk bla bla
        </strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </S.ProductList>
  );
}

export default Home;
