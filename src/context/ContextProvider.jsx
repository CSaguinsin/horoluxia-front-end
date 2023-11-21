import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "../api/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [currentUser, setCurrentUser] = useState({});
  const [userToken, _setUserToken] = useState(
    localStorage.getItem("auth_token") || ""
  );
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  // const [status, setStatus] = useState(null);

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const setUserToken = (token) => {
    if (token) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
    }
    _setUserToken(token);
  };
  const getUser = async () => {
    const { data } = await axios.get("/api/user");
    setUser(data);
  };

  const login = async ({ ...data }) => {
    await csrf();
    axios
      .post("/api/login", data)
      .then(({ data }) => {
        setUser(data.user);
        setUserToken(data.token);
        new Swal({
          title: "Success",
          text: "Log In Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((e) => {
        if (e.response && e.response.status === 422) {
          setErrors(e.response.data.errors);
        }
      });
  };
  const register = async ({ ...data }) => {
    await csrf();
    axios
      .post("/api/register", data)
      .then(({ data }) => {
        setUser(data.user);
        setUserToken(data.token);
        new Swal({
          title: "Success",
          text: "Registration Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((e) => {
        if (e.response && e.response.status === 422) {
          setErrors(e.response.data.errors);
        }
      });
  };
  const logout = () => {
    axios.post("/api/logout").then(() => {
      setUser(null);
      window.location.reload();
    });
  };

  // const forgotPassword = async() => {s

  // }
  return (
    <StateContext.Provider
      value={{
        // currentUser,
        // setCurrentUser,
        login,
        register,
        logout,
        setUser,
        userToken,
        setUserToken,
        getUser,
        user,
        errors,
        setErrors,
        csrf,
        // forgotPassword,
        // status,
        // setStatus,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
