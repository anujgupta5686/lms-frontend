import React from 'react';
import CartItem from '../cartItem';

interface CartListProps {
    items: {
        id: number;
        name: string;
        price: number;
        image: string;
    }[];
    onRemove: (id: number) => void;
}

const CartList: React.FC<CartListProps> = ({ items, onRemove }) => {
    return (
        <div className="max-h-70vh overflow-y-auto ">
            {items.map(item => (
                <CartItem key={item.id} item={item} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default CartList;
