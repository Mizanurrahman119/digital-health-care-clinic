import { useContext } from "react"
import { AuthContext } from "../Contaxts/AuthProvider"

const UseAuth = () => {
    return useContext(AuthContext);

}

export default UseAuth;