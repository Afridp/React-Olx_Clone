import React, { useState } from "react";

export const FirebaseContext = React.createContext("firecontttttt");



export const AuthContext = React.createContext("authccccccc");

export default function Context({ children }) {
  const [user, setUser] = useState("helloo");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
} 
