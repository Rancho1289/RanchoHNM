import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {

    const navigate = useNavigate()

    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }

    return (
        <div className='card' onClick={showDetail}>
            <img src={item?.img} alt="" width={300} />
            <div>Conscious Choise</div>
            <div>{item?.title}</div>
            <div>\{item?.price}</div>
            <div>{item?.new == true ? "신제품" : ""}</div>
            {/* <img src="https://lp2.hm.com/hmgoepprod?set=source[/76/c1/76c19a73f8d17fad1edafb469e399294bd33a9ba.jpg],origin[dam],category[ladies_shoes_sandals_espandrillos],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" alt="" />
            <div>Conscious Choise</div>
            <div>벨티드 트윌 코트</div>
            <div>99900 원</div>
            <div>신제품</div> */}
        </div>
    )
}

export default ProductCard
