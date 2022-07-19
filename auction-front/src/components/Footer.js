import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div>Footer</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding-top: 3rem;
  position: relative;
  margin-top: 10%;
  width: 100vw;
  background-color: var(--card-bg);
  color: var(--card-bg);
`;
export default Footer;
