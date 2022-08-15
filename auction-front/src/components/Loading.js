import styled from "styled-components";
const Loading = ({ center }) => {
  return (
    <Wrapper>
      <div className="lds-dual-ring"></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .lds-dual-ring {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 120px;
    height: 120px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Loading;
