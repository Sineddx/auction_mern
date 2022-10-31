import Wrapper from "./Orders.styled";
import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import { Loading } from "../../components";

const Orders = () => {
  const { fetchOrders, loading } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [moreDetails, setMoreDetails] = useState(false);

  useEffect(() => {
    const fetchDataFromDB = async () => {
      const data = await fetchOrders();
      console.log(data);
      setOrders([...data.orders].reverse());
    };
    fetchDataFromDB();
    return () => {};
  }, []);

  const quickTranslate = (word) => {
    if (word === "pending") {
      return "W toku";
    }
    if (word === "paid") {
      return "Opłacone";
    }
  };

  return !loading ? (
    <Wrapper>
      {orders?.map((order, index) => {
        return (
          <div
            className="order-container"
            onClick={() => setMoreDetails(!moreDetails)}
          >
            <div className="item-image">
              <img src={order.item.image[0].url}></img>
            </div>
            <div className="order-details">
              <p className="item-name">Nazwa: {order.item.name}</p>
              <p className="item-amount">Ilość: {order.amount}</p>
              <p className="item-price">Cena: {order.total} zł </p>
              <p className="item-delivery">Dostawa: {order.deliveryType}</p>
              <p className="order-address">
                Adres: {order.addressDelivery.address1}{" "}
                {order.addressDelivery.address2}
              </p>
              <p className="order-status">
                Status: {quickTranslate(order.status)}
              </p>
              {order.status === "paid" && (
                <button className="btn btn-add-opinion">Wystaw opinię!</button>
              )}
            </div>
          </div>
        );
      })}
    </Wrapper>
  ) : (
    <Loading />
  );
};
export default Orders;
