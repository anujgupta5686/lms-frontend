import React from 'react';

interface CartItemProps {
    item: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
    onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className='flex gap-2 justify-center items-center flex-wrap'>
                <img src={item.image} alt={item.name} className="w-28 h-28 object-cover" />
                <div className="flex-1 ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">${item.price}</p>
                </div>
            </div>
            <button
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                onClick={() => onRemove(item.id)}>
                Remove
            </button>
        </div>
    );
}

export default CartItem;
