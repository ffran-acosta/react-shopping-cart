import { StoreItem } from "@/components/StoreItem"
import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"

const Store = () => {
    return (
        <>
            <div>Store</div>
            <Row xs={1} md={2} lg={3} className="g-3" >
                {storeItems.map(item => (
                    // <Col>
                    //     {JSON.stringify(item)}
                    // </Col>
                    <Col key={item.id}>
                        <StoreItem {...item}/>
                    </Col>
                ))}

            </Row>
        </>
    )
}
export default Store