import React from 'react';

interface CheckoutSummaryProps {
    totalItems: number;
    totalPrice: number;
    onCheckout: () => void;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ totalItems, totalPrice, onCheckout }) => {
    return (
        <div className="p-4 bg-gray-100 max-h-70vh">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <p className="text-lg">Total Items: {totalItems}</p>
            <p className="text-lg mb-4">Total Price: ${totalPrice.toFixed(2)}</p>
            <button
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                onClick={onCheckout}>
                Checkout
            </button>
        </div>
    );
}

export default CheckoutSummary;
