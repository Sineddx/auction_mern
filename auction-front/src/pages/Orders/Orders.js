import Wrapper from "./Orders.styled";
import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import { Loading } from "../../components";
import {useNavigate} from "react-router-dom";
import {images} from "../../utils/arrays";
import img from '../../assets/images/empty_orders.svg'

const Orders = () => {
  const { fetchOrders, loading } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [moreDetails, setMoreDetails] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataFromDB = async () => {
      const data = await fetchOrders();
      const onlyNotRated = data.orders.filter((item) => item.closed === false)
      // setOrders([...data.orders].reverse());
      setOrders([...onlyNotRated].reverse())
    };

    return () => {fetchDataFromDB();};
  }, []);

  const quickTranslate = (word) => {
    if (word === "pending") {
      return "W toku";
    }
    if (word === "paid") {
      return "Opłacone";
    }
  };
  const handleClick = (id) => {
    navigate(`add-comment?order=${id}`)
  }

  return !loading ? (
    <Wrapper>

      {orders.length > 0 ? orders?.map((order, index) => {
        return (
          <div
            className="order-container"
            onClick={() => setMoreDetails(!moreDetails)}
          >

            <div className="order-details">
              <p className="item-name">Nazwa: <span>{order.item.name}</span></p>
              <p className="item-amount">Ilość: <span>{order.amount}</span></p>
              <p className="item-price">Cena: <span>{order.total} zł </span></p>
              <p className="item-delivery">Dostawa: <span>{order.deliveryType}</span></p>
              <p className="order-address">
                Adres: <span>{order.addressDelivery.address1}{" "}
                {order.addressDelivery.address2}</span>
              </p>
              <p className="order-status">
                Status: <span>{quickTranslate(order.status)}</span>
              </p>

            </div>
            <div className="item-image">
              <img src={order?.item?.image[0]?.url || images[0].original}></img>
              {order.status === "paid" && (
                  <>
                <button className="btn btn-add-opinion" onClick={() => handleClick(order._id)}>Wystaw opinię!</button>
                <span className='order-opinion'>Można wystawić opinię!</span>
                  </>
              )}
            </div>
          </div>
        );
      }) : <div className="no-orders">
        <p>Nie masz jeszcze żadnych zamówień!</p>
        <img src={img} alt="brak zamówień!"></img>
      </div>}
    </Wrapper>
  ) : (
    <Loading />
  );
};
export default Orders;
