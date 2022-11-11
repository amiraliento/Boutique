import React, { Children } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ListProvider = ({ children }) => {
  const AllCloth = [
    {
      id: 1,
      img: "../img/pantspage/pants1.jpg",
      name: "شلوار 1",
      sale: "420.000",
    },

    {
      id: 2,
      img: "../img/pantspage/pants2.jpg",
      name: "شلوار 1",
      sale: "420.000",
    },

    {
      id: 9,
      img: "../img/shirtpage/shirt9.jpg",
      name: "پیراهن مردانه 9",
      sale: "295.000 تومان",
    },

    {
      id: 7,
      img: "../img/shirtpage/shirt7.jpg",
      name: "پیراهن مردانه 7",
      sale: "295.000 تومان",
    },

    {
      id: 4,
      img: "../img/tshirtpage/tshirt4.jpg",
      name: "تیشرت 1",
      sale: "230.000",
    },

    {
      id: 7,
      img: "../img/tshirtpage/tshirt7.jpg",
      name: "تیشرت 1",
      sale: "230.000",
    },

    {
      id: 3,
      img: "../img/tshirtpage/tshirt3.jpg",
      name: "تیشرت 3",
      sale: "240.000",
    },

    {
      id: 8,
      img: "../img/sweatshirtpage/sweatshirt8.jpg",
      name: "سویتشرت مردانه 8",
      sale: "540.000",
    },

    {
      id: 9,
      img: "../img/tshirtpage/tshirt9.jpg",
      name: "تیشرت 1",
      sale: "230.000",
    },

    {
      id: 1,
      img: "../img/shirtpage/shirt1.jpg",
      name: "پیراهن مردانه 1",
      sale: "230,000 تومان",
    },

    {
      id: 7,
      img: "../img/shirtpage/shirt7.jpg",
      name: "پیراهن مردانه 7",
      sale: "295.000 تومان",
    },

    {
      id: 8,
      img: "../img/shirtpage/shirt8.jpg",
      name: "پیراهن مردانه 8",
      sale: "295.000 تومان",
    },
  ];

  const MoreSet = [
    {
      id: 1,
      img: "../img/setpage/More1.jpg",
    },

    {
      id: 2,
      img: "../img/setpage/More2.jpg",
    },

    {
      id: 3,
      img: "../img/setpage/More3.jpg",
    },

    {
      id: 4,
      img: "../img/setpage/More4.jpg",
    },

    {
      id: 5,
      img: "../img/setpage/More5.jpg",
    },

    {
      id: 6,
      img: "../img/setpage/More6.jpg",
    },

    {
      id: 7,
      img: "../img/setpage/More7.jpg",
    },

    {
      id: 8,
      img: "../img/setpage/More8.jpg",
    },

    {
      id: 9,
      img: "../img/setpage/More9.jpg",
    },

    {
      id: 10,
      img: "../img/setpage/More10.jpg",
    },

    {
      id: 11,
      img: "../img/setpage/More11.jpg",
    },

    {
      id: 12,
      img: "../img/setpage/More12.jpg",
    },
  ];

  const ListSweatshirt = [
    {
      id: 1,
      img: "../img/sweatshirtpage/sweatshirt5.jpg",
      name: "سوییشرت 1",
      sale: "450,000 تومان",
    },

    {
      id: 2,
      img: "../img/sweatshirtpage/sweatshirt7.jpg",
      name: "سوییشرت 2",
      sale: "450,000 تومان",
    },

    {
      id: 3,
      img: "../img/sweatshirtpage/sweatshirt17.jpg",
      name: "سوییشرت 3",
      sale: "450,000 تومان",
    },

    {
      id: 4,
      img: "../img/sweatshirtpage/sweatshirt9.jpg",
      name: "سوییشرت 4",
      sale: "450,000 تومان",
    },

    {
      id: 5,
      img: "../img/sweatshirtpage/sweatshirt44.jpg",
      name: "سوییشرت 5",
      sale: "450,000 تومان",
    },

    {
      id: 6,
      img: "../img/sweatshirtpage/sweatshirt33.jpg",
      name: "سوییشرت 6",
      sale: "450,000 تومان",
    },

    {
      id: 7,
      img: "../img/sweatshirtpage/sweatshirt29.jpg",
      name: "سوییشرت 7",
      sale: "450,000 تومان",
    },

    {
      id: 8,
      img: "../img/sweatshirtpage/sweatshirt57.jpg",
      name: "سوییشرت 8",
      sale: "450,000 تومان",
    },

    {
      id: 9,
      img: "../img/sweatshirtpage/sweatshirt6.jpg",
      name: "سوییشرت 9",
      sale: "450,000 تومان",
    },

    {
      id: 10,
      img: "../img/sweatshirtpage/sweatshirt14.jpg",
      name: "سوییشرت 10",
      sale: "450,000 تومان",
    },
  ];

  const ListClothing = [
    {
      id: 1,
      img: "../img/shirtpage/shirt7.jpg",
      name: "پیراهن مردانه 1",
      sale: "230,000 تومان",
    },

    {
      id: 2,
      img: "../img/shirtpage/shirt15.jpg",
      name: "پیراهن مردانه 2",
      sale: "295.000 تومان",
    },

    {
      id: 3,
      img: "../img/shirtpage/shirt3.jpg",
      name: "پیراهن مردانه 3",
      sale: "180,000 تومان",
    },

    {
      id: 4,
      img: "../img/shirtpage/shirt9.jpg",
      name: "پیراهن مردانه 4",
      sale: "295.000 تومان",
    },

    {
      id: 5,
      img: "../img/shirtpage/shirt10.jpg",
      name: "پیراهن مردانه 5",
      sale: "295.000 تومان",
    },

    {
      id: 6,
      img: "../img/shirtpage/shirt45.jpg",
      name: "پیراهن زنانه 6",
      sale: "295.000 تومان",
    },

    {
      id: 7,
      img: "../img/shirtpage/shirt49.jpg",
      name: "پیراهن زنانه 7",
      sale: "295.000 تومان",
    },

    {
      id: 8,
      img: "../img/shirtpage/shirt38.jpg",
      name: "پیراهن زنانه 8",
      sale: "295.000 تومان",
    },

    {
      id: 9,
      img: "../img/shirtpage/shirt48.jpg",
      name: "پیراهن زنانه 9",
      sale: "295.000 تومان",
    },

    {
      id: 10,
      img: "../img/shirtpage/shirt57.jpg",
      name: "پیراهن زنانه 10",
      sale: "295.000 تومان",
    },
  ];

  const ListTshirt = [
    {
      id: 1,
      img: "../img/tshirtpage/tshirt12.jpg",
      name: "تیشرت 1",
      sale: "230.000",
    },

    {
      id: 2,
      img: "../img/tshirtpage/tshirt55.jpg",
      name: "تیشرت 2",
      sale: "230.000",
    },

    {
      id: 3,
      img: "../img/tshirtpage/tshirt34.jpg",
      name: "تیشرت 3",
      sale: "230.000",
    },

    {
      id: 4,
      img: "../img/tshirtpage/tshirt22.jpg",
      name: "تیشرت 4",
      sale: "230.000",
    },

    {
      id: 5,
      img: "../img/tshirtpage/tshirt28.jpg",
      name: "تیشرت 5",
      sale: "230.000",
    },

    {
      id: 6,
      img: "../img/tshirtpage/tshirt19.jpg",
      name: "تیشرت 6",
      sale: "230.000",
    },

    {
      id: 7,
      img: "../img/tshirtpage/tshirt1.jpg",
      name: "تیشرت 7",
      sale: "230.000",
    },

    {
      id: 8,
      img: "../img/tshirtpage/tshirt59.jpg",
      name: "تیشرت 8",
      sale: "230.000",
    },

    {
      id: 9,
      img: "../img/tshirtpage/tshirt44.jpg",
      name: "تیشرت 9",
      sale: "230.000",
    },

    {
      id: 10,
      img: "../img/tshirtpage/tshirt48.jpg",
      name: "تیشرت 10",
      sale: "230.000",
    },
  ];

  const ListPants = [
    {
      id: 1,
      img: "../img/pantspage/pants15.jpg",
      name: "شلوار 1",
      sale: "420.000",
    },

    {
      id: 2,
      img: "../img/pantspage/pants8.jpg",
      name: "شلوار 2",
      sale: "420.000",
    },

    {
      id: 3,
      img: "../img/pantspage/pants27.jpg",
      name: "شلوار 3",
      sale: "420.000",
    },

    {
      id: 4,
      img: "../img/pantspage/pants33.jpg",
      name: "شلوار 4",
      sale: "420.000",
    },

    {
      id: 5,
      img: "../img/pantspage/pants19.jpg",
      name: "شلوار 5",
      sale: "420.000",
    },

    {
      id: 6,
      img: "../img/pantspage/pants56.jpg",
      name: "شلوار 6",
      sale: "420.000",
    },

    {
      id: 7,
      img: "../img/pantspage/pants35.jpg",
      name: "شلوار 7",
      sale: "420.000",
    },

    {
      id: 8,
      img: "../img/pantspage/pants48.jpg",
      name: "شلوار 8",
      sale: "420.000",
    },

    {
      id: 9,
      img: "../img/pantspage/pants50.jpg",
      name: "شلوار 9",
      sale: "420.000",
    },

    {
      id: 10,
      img: "../img/pantspage/pants40.jpg",
      name: "شلوار 10",
      sale: "420.000",
    },
  ];

  const ListShoes = [
    {
      id: 1,
      img: "../img/shoespage/shoes21.jpg",
      name: "کفش مردانه 1",
      sale: "540.000",
    },

    {
      id: 2,
      img: "../img/shoespage/shoes2.jpg",
      name: "کفش مردانه 2",
      sale: "540.000",
    },

    {
      id: 3,
      img: "../img/shoespage/shoes39.jpg",
      name: "کفش مردانه 3",
      sale: "540.000",
    },

    {
      id: 4,
      img: "../img/shoespage/shoes32.jpg",
      name: "کفش مردانه 4",
      sale: "540.000",
    },

    {
      id: 5,
      img: "../img/shoespage/shoes19.jpg",
      name: "کفش مردانه 5",
      sale: "540.000",
    },

    {
      id: 6,
      img: "../img/shoespage/shoes24.jpg",
      name: "کفش مردانه 6",
      sale: "540.000",
    },

    {
      id: 7,
      img: "../img/shoespage/shoes45.jpg",
      name: "کفش زنانه 7",
      sale: "540.000",
    },

    {
      id: 8,
      img: "../img/shoespage/shoes54.jpg",
      name: "کفش زنانه 8",
      sale: "540.000",
    },

    {
      id: 9,
      img: "../img/shoespage/shoes47.jpg",
      name: "کفش زنانه 9",
      sale: "540.000",
    },

    {
      id: 10,
      img: "../img/shoespage/shoes50.jpg",
      name: "کفش زنانه 10",
      sale: "540.000",
    },
  ];

  return (
    <UserContext.Provider
      value={{
        ListSweatshirt,
        ListClothing,
        ListTshirt,
        ListPants,
        ListShoes,
        MoreSet,
        AllCloth,
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
