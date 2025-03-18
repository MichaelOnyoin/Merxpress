//'use server'
// import React from 'react';
// import {getOrders} from '@/db/data'
// //import OrderPage from '@/app/ui/orders';
// import { Suspense } from 'react';

// export function OrderView() {
//   //'use server'
//   const orders = getOrders().then(data =>
//           data.map(orders => ({ id: orders.id, total: orders.total, status: orders.status, items: orders.items })));
      

//   return (
//     <div className='items-center justify-center'>
//       <p>
//         <Suspense fallback={<div>Loading...</div>}>
//                 <OrderPage orders={orders} />
//         </Suspense>
//       </p>
//     </div>
//   );
// };