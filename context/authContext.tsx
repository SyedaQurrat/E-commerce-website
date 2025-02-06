// import { auth } from "../lib/firebaseConfig";
// import { useState, useContext, useEffect, createContext} from "react";
// import { onAuthStateChanged } from "firebase/auth";

// const AuthContext = createContext();

// export default function AuthContextProvider ({ children }) {
//     const [user, setUser] = useState(undefined);
//     useEffect(()=>{
//         const unsubscribe = onAuthStateChanged(auth ,(user) => {
//             if (user) {
//                 setUser(user);
                
//             }else{
//                 setUser(null);
//             }
//         });
//         return  () => unsubscribe ();
//     }, []);

//     return(
//         <AuthContext.Provider 
//         value={{
//             user,
//             isLoading : user === undefined ,
//         }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }
    
// export const useAuth = () => useContext(AuthContext);



import { auth } from "../lib/firebaseConfig";
import { useState, useContext, useEffect, createContext, ReactNode } from "react";
import { onAuthStateChanged, User } from "firebase/auth";

// Context with proper typing
interface AuthContextType {
    user: User | null;
    isLoading: boolean;
}

// Default value for context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
    children: ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null); // Fixed types

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Now accepts only User | null
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading: user === null, // If null, it means still loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook with safety check
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return context;
};
