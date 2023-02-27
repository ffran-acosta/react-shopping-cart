
import { ProductTest } from "@/models/test.model"
import { testingService } from "@/services"
import { useEffect, useState } from "react"

const About = () => {

    const [products, setProducts] = useState<ProductTest[]>([])
    const fetchProducts = async () => {
        const { data } = await testingService()
        setProducts(data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            {products.map(item => (
                <p key={item.id}>
                    {item.name}
                </p>
            ))}
        </div>
    )
}
export default About