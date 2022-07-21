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
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--card-bg);
  color: var(--card-bg);
`;
export default Footer;
