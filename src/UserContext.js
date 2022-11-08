import React, { Children } from "react";
import { useContext } from "react";
import { createContext } from "react";


const ListProvider = ({ children }) => {
  const ListClothing = [
    {
      id: 1,
      name: "پیراهن مردانه 1",
      sale: "230,000 تومان",
    },
    
    {
      id: 2,
      name: "پیراهن مردانه 2",
      sale: "295.000 تومان",
    },
    
    {
      id: 3,
      name: "پیراهن مردانه 3",
      sale: "180,000 تومان",
    },
    
    {
      id: 4,
      name: "پیراهن مردانه 4",
      sale: "295.000 تومان",
    },
    
    {
      id: 5,
      name: "پیراهن مردانه 5",
      sale: "295.000 تومان",
    },

    {
      id: 6,
      name: "پیراهن مردانه 6",
      sale: "295.000 تومان",
    },
    
    {
      id: 7,
      name: "پیراهن مردانه 7",
      sale: "295.000 تومان",
    },
    
    {
      id: 8,
      name: "پیراهن مردانه 8",
      sale: "295.000 تومان",
    },
    
    {
      id: 9,
      name: "پیراهن مردانه 9",
      sale: "295.000 تومان",
    },
    
    {
      id: 10,
      name: "پیراهن مردانه 10",
      sale: "295.000 تومان",
    },
  ];
  
  return (
    <UserContext.Provider
    value={{
      ListClothing,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext();

// روش اول
export function useUserContext() {
    return useContext(UserContext);
  }
  
  export default ListProvider;
  
  