// import { loadScript } from "@paypal/paypal-js";
// loadScript({ "client-id": YOUR_CLIENT_ID })
// .then((paypal) => {
//     // start to use the PayPal JS SDK script
// })
// .catch((err) => {
//     console.error("failed to load the PayPal JS SDK script", err);
// });


// import { PayPalButtons, PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';

// export default function App() {
//     const initialOptions: ReactPayPalScriptOptions = {
//         clientId: "YOUR_CLIENT_ID",
//         // Add other options as needed
//     };

//     return (
//         <div className="App">
//             <PayPalScriptProvider options={initialOptions}>
//               <PayPalButtons />
//             </PayPalScriptProvider>
//         </div>
//     );
// }


// <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
//   <input type="hidden" name="cmd" value="_s-xclick" />
//   <input type="hidden" name="hosted_button_id" value="58EZCYZ87A2P8" />
//   <input type="hidden" name="currency_code" value="USD" />
//   <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
// </form>