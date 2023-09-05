import React, { useState } from "react";
//useNavigate = navegar entre paginas
import { useNavigate } from "react-router-dom";

const LogIn = ({ cambiarLogIn }) => {
  //variable para el useNavigate
  const navigate = useNavigate();

  //ESTADOS PARA CADA CAMPO
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  //Funcion para manejar input EMAIL
  //  const handleChange = (e) => {
  //   // console.log(e.target.value);
  //   setEmail(e.target.value);
  // };

  //ESTADO PARA TODOS LOS CAMPOS
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  //ESTADO PARA ALERTA
  const [showAlert, setShowAlert] = useState(false);

  //Funcion para manejar TODOS LOS INPUT
  const handleChange = (e) => {
    //CAMBIAR EL ESTADO DE VALIDACION
    setShowAlert(false);

    setFormValues({
      //SPREAD OPERATOR (...)
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  //----------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    //!Usuario de EJEMPLO--------------------------------
    const user = {
      email: "lucas@lucas.com",
      password: "123456",
    };

    const { email, password } = formValues;
    //!--------------------------------------------------

    //Validaciones
    if (!email) {
      alert("Faltan datos del campo");
    }

    //Mensaje TRUE
    setShowAlert(true);

    //Validacion del usuario
    if (email === user.email && password === user.password) {
      cambiarLogIn();
      navigate("/");
    } else {
      alert("Email o password incorrectos");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h3>
            Sing in to <i className="fa fa-btc" aria-hidden="true"></i>
            52 Coins
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-grid">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {/* Validacion campo EMAIL */}
              {showAlert && (
                <p className="text-danger">Faltan datos del campo</p>
              )}
            </div>
            <div className="mb-3 d-grid">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formValues.password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 d-grid">
              <button className="btn btn-success">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
