import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface ItemProps {
  item: string;
  onRemove: () => void;
  onMarkAsBought: () => void;
  comprado: boolean;
}

const Item: React.FC<ItemProps> = ({ item, onRemove, onMarkAsBought, comprado }) => {
  const itemStyle = {
    marginBottom: comprado ? '40px' : '10px', 
  };

  return (
    <li style={itemStyle}>
      {item}
      <button className="remove-button" onClick={onRemove}>
        <FontAwesomeIcon icon={faTrash} className="trash-icon" />
        Remover
      </button>
      <button className="buy-button" onClick={onMarkAsBought}>
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        Comprar
      </button>
    </li>
  );
};

export default Item;
