
import { StoreItemProps } from "@/models"
import { formatCurrency } from "@/utilities"
import { Button, Card } from "react-bootstrap"

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps ) => {
    const quantity = 0
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="300px"
                style={{ objectFit: 'contain' }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-3">{name}</span>
                    <span className="fs-3 ms-2">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100"> + Add To Cart</Button>
                    ) : ( <div 
                            className="d-flex align-items-center flex-column" 
                            style={{gap: ".5rem"}}
                        >
                            <div 
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: ".5rem" }}
                            >
                                <Button>-</Button>
                                <div>   
                                    <span className="fs-3">{quantity}</span>
                                </div>
                                <Button>+</Button>
                            <Button size="sm" variant="danger">Remove</Button>
                            </div>
                        </div>)}
                </div>
            </Card.Body>
        </Card>
    )

}