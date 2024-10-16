import { useParams } from "react-router-dom";
import { data } from "../assets/data/data";

function Detail() {
    const params = useParams();
    console.log(params.id); 

    const animalData = data.find(el => el.id === Number(params.id));
    // params에서 받아온 값은 문자열
    console.log(animalData);

    return (
        <section className="detail">
            <img src={animalData.img} />
            <h2>{animalData.name}</h2>
            <div>{animalData.description}</div>
        </section>
    )
}

export default Detail;