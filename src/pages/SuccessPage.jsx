import React, { useEffect } from 'react'
import '../styles/SuccessPage.css'
import successGif from '../assets/success-gif.gif'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SuccessPage = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.auth.login.currentUser)
    useEffect(() => {
        if(!user){
            navigate('/login')
        }   
    },[navigate])
    return (
        <div id='success-page'>
            <div className="container">
                <img src={successGif} alt="" />
                <hr />
                <div className="success-message">
                    <h1>THANH TOÁN THÀNH CÔNG</h1>
                    <p>
                        Cảm ơn quý khách đã đặt phòng tại Khách sạn The Élégance. <br />
                        Hóa đơn chi tiết đã được gửi đến email của quý khách. <br />
                        Để theo dõi chi tiết đặt phòng: <br />
                        <ul style={{paddingLeft: '30px'}}>
                            <li>Vui lòng kiểm tra <b>email</b> để xem hóa đơn</li>
                            <li>Quý khách có thể theo dõi và quản lý đặt phòng tại mục <b>"Đặt phòng của tôi"</b> trên trang web. </li>
                        </ul>
                    </p>
                </div>
                <div className="btn-container">
                    <button onClick={() => navigate( '/')}>Quay lại trang chủ</button>
                    <button onClick={()=>navigate('/booking-list')}>Xem chi tiết đặt phòng</button>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage