import { useSearchParams, Link } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp";

function Search() {
    const [seachParams] = useSearchParams();
    const param = seachParams.get('animal'); // 받아오고 싶은 정보
    const reg = getRegExp(param); // 검색어를 기반으로 정규식을 표현해줌

    const filteredData = data.filter((el) => el.name.match(reg)); // 문자열이 정규식과 맞는지

    return (
        <>
            <ul>
                {filteredData.map(el => <li key={el.id}>
                    <Link to={`/detail/${el.id}`}>
                        <img src={el.img}></img>
                        <div>{el.name}</div>
                    </Link>
                </li>)}
            </ul>
        </>
    );
}

export default Search;