import { createContext, useState } from "react"

export const storeContext = createContext();

export default function Store({ children }) {

  const [side, setSide] = useState(false)
  const [oldPrice, setOldPrice] = useState(20.99)
  const [discount, setDiscount] = useState(50)
  const [homeWord, setHomeWord] = useState("Login")
  const [showPopup, setShowPopup] = useState(false)

  const className = "bg-[#333333] text-[#B3B3B3]"


  function disappearSidebar() {
    setSide(!side)
  }


  return (
    <div>
      <storeContext.Provider value={{
        side, setSide, disappearSidebar,
        oldPrice, setOldPrice, discount,
        setDiscount, homeWord, setHomeWord, showPopup, setShowPopup,className
      }}>
        {children}
      </storeContext.Provider>
    </div>
  )
}
