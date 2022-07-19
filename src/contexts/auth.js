import { createContext, useState } from "react";
import App from "../App";
import UnauthApp from "../unauth-app";
import Container from "../components/container/container";


export const AuthContext = createContext();

const AuthProvider = ()=> {
  const [token, setToken] = useState();

  return(
    <AuthContext.Provider value={{token, setToken}}>
      <Container>
      {token ? <App/> : <UnauthApp  />}
      </Container>
    </AuthContext.Provider>
  )
}


export default AuthProvider;