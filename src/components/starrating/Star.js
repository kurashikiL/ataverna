import {React,useState} from 'react';
// import { StarIcon  } from "@material-ui/icons";
import {StarRate ,StarHalfIcon} from '@material-ui/icons';
import "./star.css"
const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return( 
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i+1;

                return(
                    <label>
                        <input 
                            type = "radio" 
                            name = "rating" 
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}

                        />
                        <StarRate
                            className="star"
                            color={ratingValue <= (hover || rating) ? "" : "disabled"}
                            onMouseOver={()=>setHover(ratingValue)}
                            onMouseLeave={()=>setHover(null)}
                        />
                    </label>
                );
            })}
            <p>A nota é {rating}</p>
        </div>
    )
}

export default StarRating;