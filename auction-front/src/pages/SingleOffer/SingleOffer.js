import Wrapper from "./SingleOffer.styled";
import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loading, OfferOptions } from "../../components";
import { images } from "../../utils/arrays";

const SingleOffer = () => {
  const { getSingleOffer, isLoading, user, createChat } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [oneOffer, setOneOffer] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const id = searchParams.get("code");
    const loadOffer = async () => {
      const data = await getSingleOffer(id);
      setOneOffer({ ...data });
    };
    loadOffer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async (receiverId, senderId) => {
    const obj = { receiverId, senderId };
    const chatCreated = await createChat(obj);
    if (chatCreated === true) {
      navigate("/user/messages");
    }
  };
  
    return isLoading || !oneOffer ? (
      <Loading />
    ) : (
      <Wrapper>
        <div className="item-container">
          <div className="gallery">
            {oneOffer ? (
              <ImageGallery
                items={oneOffer.image.length > 0 ? oneOffer.image : images}
              />
            ) : null}
          </div>
          <div className="item-info">
            <div className="seller">
              <div className="seller-name-container">
                <div className="seller-avatar">
                  <img
                    src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-vector-vector-id1337144146?k=20&m=1337144146&s=612x612&w=0&h=Mz4oPre6r3fccgvm5lyd22S5VFqTnrEYRJj9clL3Q1o="
                    alt="avatar sprzedawcy"
                  />
                </div>
                <span>{oneOffer.user.nickname}</span>
              </div>
              <button
                onClick={() => handleClick(oneOffer.user._id, user.id)}
                className="btn call-seller"
              >
                Napisz do sprzedawcy
              </button>
            </div>
            <div className="offer-name">{oneOffer.name}</div>
            <div className="item-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ratione eveniet quidem fugiat animi ab incidunt eius laboriosam nobis molestiae in nihil quaerat earum reprehenderit cupiditate placeat, culpa deserunt nulla!
            </div>
            {oneOffer.auctionType === "buyNow" && (
              <OfferOptions
                auctionType="buyNow"
                price={oneOffer.price}
                user={user}
                availability={oneOffer.quantity}
                auction={oneOffer}
              />
            )}
            {oneOffer.auctionType === "bid" && (
              <OfferOptions
                auctionType="bid"
                price={oneOffer.price}
                user={user}
              />
            )}
          </div>
        </div>
      </Wrapper>
    );
  
};

export default SingleOffer;
