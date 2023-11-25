import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Anjali Mohta",
        email: "anjali.mohta@gmail.com"
    }
})

export default UserContext;