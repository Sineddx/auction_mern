import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import Wrapper from "../assets/wrappers/pages/Register";
import { FormRow, Alert } from "../components";

const Register = () => {
  let [params] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, user, showAlert, displayAlert, setupUser } =
    useAppContext();
  let isActive = JSON.parse(params.getAll("login").toString());

  const initialState = {
    nickname: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    isMember: isActive,
    birthday: {},
  };
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    setValues({ ...values, isMember: isActive });
    if (user) {
      setTimeout(() => {
        if (location.state) {
          navigate(-1);
        } else {
          navigate("/");
        }
      }, 1000);
    }
  }, [isActive, user]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(values.password);
    e.preventDefault();
    const { name, email, password, isMember, birthday, surname, nickname } =
      values;
    if (!email || !password || (!isMember && !surname && !birthday && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { email, password, name, birthday, surname, nickname };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Zalogowano pomyślnie!",
        alertText2: "Nieprawidłowe dane logowania",
      });
    }
    if (!isMember) {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "Konto utworzone! Przechodzę na stronę główną!",
      });
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{values.isMember ? "Zaloguj" : "Zarejestruj"} </h3>
        {showAlert && <Alert />}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
          required={true}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="Hasło"
          required={true}
        />
        {!values.isMember && (
          <>
            <FormRow
              type="text"
              name="nickname"
              value={values.nickname}
              handleChange={handleChange}
              labelText="Nazwa"
              required={true}
            />
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
              labelText="Imię"
              required={true}
            />
            <FormRow
              type="text"
              name="surname"
              value={values.surname}
              handleChange={handleChange}
              labelText="Nazwisko"
              required={true}
            />
            <FormRow
              type="date"
              name="birthday"
              value={values.date}
              handleChange={handleChange}
              labelText="Data urodzenia"
              required={true}
            />
          </>
        )}
        <div className="buttons">
          <button className="btn">
            {values.isMember ? "Zaloguj" : "Zarejestruj"}
          </button>
          {!values.isMember && (
            <button className="btn btn-clear">Wyczyść pola</button>
          )}
        </div>
        <p>
          {values.isMember ? "Nie zarejestrowany?" : "Posiadasz już konto?"}
          <button
            type="button"
            onClick={toggleMember}
            className="member-btn"
            disabled={isLoading}
          >
            {values.isMember ? "Zarejestruj" : "Zaloguj"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
