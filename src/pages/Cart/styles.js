import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  /** footer com botão finalizar e total */
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /** Botão finalizar pedido */
    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  text-align: left;
  padding: 12px;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  /** Imagem do produto */
  img {
    height: 100px;
  }

  /** Descrição do produto */
  strong {
    color: #333;
    display: block; /** quebra o preço pra baixo */
  }

  /** Preço */
  span {
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  /** div com botões + - e input qtd */
  div {
    display: flex;
    align-items: center;

    /** qtd */
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  /** aplica estilo em todos os botões */
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  /** TOTAL: */
  span {
    color: #999;
    font-weight: bold;
  }

  /** VALOR R$ */
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
