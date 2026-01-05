import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Rishan",
  email: "koiryrishan@gmail.com",
  password: "2026",
  avatar:
    "https://scontent.fdac178-1.fna.fbcdn.net/v/t39.30808-1/491634889_1195430045575158_6817875379060472329_n.jpg?stp=c292.379.1019.1018a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=1soY8BcW9RUQ7kNvwFkWQkd&_nc_oc=Adk3Yll02QVOtuRxHK7-FD18QkkWFwMZvGlQ6gAAifwtnAScCUJ1XdcGKgzeKbXHZzE&_nc_zt=24&_nc_ht=scontent.fdac178-1.fna&_nc_gid=VQIefx861Ym7YFbvxzt_fA&oh=00_AfrOuUpzXOacPNnXp7EwPGQZc1FSueYvb92Foz4OvzToqA&oe=6961D1EB",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
