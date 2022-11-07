import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Loading} from "../../components";
import {Rating} from 'react-simple-star-rating'
import {useAppContext} from "../../context/appContext";
import Wrapper from './AddComment.styled'

function AddComment(props) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [id, setId] = useState("");
    const [currentOrder, setCurrentOrder] = useState();
    const [rating, setRating] = useState(5)
    const [view, setView] = useState(false)
    const navigate = useNavigate()
    const {fetchSingleOrder, addRatingToSeller} = useAppContext();

    useEffect(() => {
        const orderId = searchParams.get("order")
        setId(orderId)
        const fetchOrder = async(id) => {
            const data = await fetchSingleOrder(id)
            console.log(data);
            setCurrentOrder({...data.order[0]});
        }
        return () => {
            fetchOrder(orderId);
        };
    }, []);

    const handleRating = (rate) => {
        setRating(rate)
    }

    const handleClick = async () => {
        const seller = currentOrder.seller;
        const order = currentOrder._id;
        await addRatingToSeller(rating, seller, order);
        navigate("/")
    }

    return currentOrder  ? (
            <Wrapper>
                <div className="add-comment-container">
                    <p>Oceń na ile podobała Ci się transakcja!</p>
                    <div className="order-details">
                        <p>Sprzedający: {currentOrder.seller.nickname}</p>
                        <p>Przedmiot:  {currentOrder.item.name} </p>
                        <p>Sztuk: {currentOrder.amount}</p>
                    </div>
                    <Rating onClick={handleRating} className="add-comment-rating" initialValue={rating}/>
                    <button className="btn btn-add-comment" onClick={handleClick}>Oceń!</button>
                </div>
            </Wrapper>
        ) :
        <Loading/>

}

export default AddComment;