import React from 'react';
import {getOrders} from '../db/actions';
import { Suspense } from 'react';
import OrderPage from '../app/ui/orders';

export const OrderData = async () => {
    const orders = getOrders().then(data => data.map(orders => ({ id: orders.id, total: orders.total, status: orders.status, items: orders.items })));
    return (
        <div className="order-data">
            
            <Suspense fallback={<div>Loading...</div>}>
                <OrderPage orders={orders} />
            </Suspense>
        </div>
    )

}