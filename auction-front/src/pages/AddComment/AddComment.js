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
    const [desc, setDesc] = useState("")
    const navigate = useNavigate()

    const {fetchSingleOrder, addRatingToSeller, showToast} = useAppContext();

    useEffect(() => {
        const orderId = searchParams.get("order")
        setId(orderId)
        const fetchOrder = async (id) => {
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
        if (desc) {
            await addRatingToSeller(rating, seller, order, desc);
            navigate("/")
        }else{
            showToast("Uzupełnij opis", "warning")
        }
    }
    const placeholder = "Oceń na ile podobała Ci się transakcja!"

    return currentOrder ? (
            <Wrapper>
                <div className="add-comment-container">
                    <div className="half">
                        <div>
                            <Rating onClick={handleRating} className="add-comment-rating" initialValue={rating}/>
                            <div className="order-details">
                                <p>Sprzedający: {currentOrder.seller.nickname}</p>
                                <p>Przedmiot: {currentOrder.item.name} </p>
                                <p>Sztuk: {currentOrder.amount}</p>
                            </div>
                        </div>
                        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder={placeholder}/>
                    </div>
                    {/*<p>Oceń na ile podobała Ci się transakcja!</p>*/}
                    <button className="btn btn-add-comment" onClick={handleClick}>Oceń!</button>
                </div>
            </Wrapper>
        ) :
        <Loading/>

}

export default AddComment;