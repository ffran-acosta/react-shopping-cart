import { Cart } from "@/components"
import { CartItem, ShoppingCartContextM, ShoppingCartProps } from "@/models"
import { createContext, useContext, useState } from "react"

const ShoppingCartContext = createContext({} as ShoppingCartContextM)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ( { children }: ShoppingCartProps) => {

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartquantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const getItemQuantity = (id: number) => cartItems.find(item => item.id === id)?.quantity || 0

    const increaseCartQuantity = (id: number) => {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id) == null){
                return [...currentItems, {id, quantity: 1}]
            } else {
                return currentItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity++}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id: number) => {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity-- }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return ( 
        <ShoppingCartContext.Provider 
            value={{ 
                getItemQuantity, 
                increaseCartQuantity, 
                decreaseCartQuantity, 
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
                cartquantity,
        }} >
            {children}
            <Cart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}