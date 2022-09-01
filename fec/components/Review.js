import React, {useState} from "react";
import axios from "axios"

const customersData = ({customers}) => {
    console.log(customers)
}
const Reviews = (props) => {
    const [userName, setUserName] = useState([])
    const [propName, setPropName] = useState([])
    const [rating, setRating] = useState([1, 2, 3, 4, 5])
    const [review, setReview] = useState([
     {
        comment: '',
        rating: '',
        user: '',
        property: '',
     }
])

return (
    <div className="reviews" style={{border: "1px solid black", height: "50vh", width: "75vw", display: "flex", justifySelf: "center"}}>

    </div>
)
}

export default Reviews;