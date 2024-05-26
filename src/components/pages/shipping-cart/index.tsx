import React, { useState } from 'react';
import CartList from './cartList';
import BannerImage1 from "../../../assets/aboutus1.webp"
import BannerImage2 from "../../../assets/aboutus2.webp"
import BannerImage3 from "../../../assets/aboutus3.webp"
import CheckoutSummary from './cartCheckout';
import './shippingStyle.css'
interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
}

const initialItems: Item[] = [
    { id: 1, name: 'Item 1', price: 29.99, image: BannerImage1 },
    { id: 2, name: 'Item 2', price: 49.99, image: BannerImage2 },
    { id: 3, name: 'Item 3', price: 49.99, image: BannerImage1 },
    { id: 4, name: 'Item 4', price: 49.99, image: BannerImage3 },
    { id: 5, name: 'Item 5', price: 49.99, image: BannerImage2 },
    { id: 6, name: 'Item 6', price: 49.99, image: BannerImage1 },
    { id: 7, name: 'Item 7', price: 49.99, image: BannerImage3 },
    { id: 8, name: 'Item 8', price: 49.99, image: BannerImage2 },
    { id: 9, name: 'Item 9', price: 49.99, image: BannerImage3 },
    { id: 10, name: 'Item 10', price: 49.99, image: BannerImage1 },
    { id: 11, name: 'Item 11', price: 49.99, image: BannerImage2 },
    { id: 12, name: 'Item 12', price: 49.99, image: BannerImage3 },
    { id: 13, name: 'Item 13', price: 49.99, image: BannerImage2 },
    { id: 14, name: 'Item 14', price: 49.99, image: BannerImage1 },
    { id: 15, name: 'Item 15', price: 49.99, image: BannerImage2 },
    { id: 16, name: 'Item 16', price: 49.99, image: BannerImage3 },
    { id: 17, name: 'Item 17', price: 49.99, image: BannerImage2 },
    { id: 18, name: 'Item 18', price: 49.99, image: BannerImage1 },
    // Add more initial items as needed
];

const ShippingCart: React.FC = () => {
    const [items, setItems] = useState<Item[]>(initialItems);

    const handleRemove = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    const totalItems = items.length;
    const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

    const handleCheckout = () => {
        alert('Proceeding to checkout');
    };

    return (
        <div className='md:w-10/12 w-full  mx-auto p-4 bg-white shadow-lg rounded-lg'>
            <h1 className='text-2xl font-bold mb-4'>Shipping Cart</h1>
            <div className='flex flex-col md:flex-row md:space-x-4'>
                <div className='flex-1 mb-4 md:mb-0 max-h-[70vh] overflow-hidden overflow-y-scroll scrollbar-hide'>
                    <CartList items={items} onRemove={handleRemove} />
                </div>
                <div className='w-full md:w-1/3'>
                    <CheckoutSummary
                        totalItems={totalItems}
                        totalPrice={totalPrice}
                        onCheckout={handleCheckout}
                    />
                </div>
            </div>
        </div>
    );
}

export default ShippingCart;
