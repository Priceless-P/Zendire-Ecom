import React, { useContext } from 'react';
import classes from './checkoutpage.module.css'
import Footer from '../components/Footer/Footer';
import { ProductContext } from '../context/Shopcontextapi';
import Cartorder from './Cartorder';
import { useNavigate } from 'react-router-dom';

const Checkoutpage = () => {
    const {cartItems, data, getTotalPrice } = useContext(ProductContext);
    const navigate = useNavigate();

    return (
        <div className={classes.container}>
            <div className={classes.checkout}>
                <div className={classes.form}>
                    <form>
                        <h1>Bill Details</h1>
                        <div className={classes.nameinput}>
                            <ul>
                                <label>First Name<span>*</span></label>
                                <input
                                    type='text'
                                    required
                                />
                            </ul>
                            <ul className={classes.lastinput}>
                                <label>Last Name<span>*</span></label>
                                <input
                                    type='text'
                                    required
                                />
                            </ul>
                        </div>

                        <label>Company Name(Optional)</label>
                        <input type='text' />
                        <label>Email<span>*</span></label>
                        <input
                            type='text'
                            required
                        />
                        <label>Phone<span>*</span></label>
                        <input
                            type='number'
                            required
                        />
                    </form>
                </div>
                <div className={classes.orderbox}>
                    <div className={classes.box1}>
                        <h1>Your Order</h1>
                        <div className={classes.supbox}>
                            <table>
                                <tr>
                                    <th>PRODUCTS</th>
                                    <th>SUBTOTAL</th>
                                </tr>
                                <tr>
                                    <td>
                                        {data.map((item, i) => {
                                            if (cartItems[item.sku]) {
                                                return (
                                                    <Cartorder
                                                        key={item.sku}
                                                        name={item.name}
                                                        sku={item.sku}
                                                    />
                                                );
                                            }
                                            return null;
                                        })}
                                    </td>
                                    <td>${getTotalPrice()}</td>
                                </tr>
                            </table>
                        </div>
                        <button onClick={() => navigate('/stripe')}>PLACE ORDER</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Checkoutpage