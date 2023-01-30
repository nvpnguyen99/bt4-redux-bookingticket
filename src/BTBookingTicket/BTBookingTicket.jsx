import React, { Component } from 'react'
import "./BTBookingTicket.css"
import ThongTin from './ThongTin'
import danhSachGhe from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'


export default class BTBookingTicket extends Component {

 

    render() {
        return (
            <div className='bookingApp'>
                <div className="cover">
                    <div className="container-fluid">
                        <div className="row py-2">
                            <div className="col-8 text-center text-light">
                                <h2>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
                                <h4>Màn hình</h4>
                                <div className="screen"></div>
                              <HangGhe danhSachGhe={danhSachGhe}/>
                            </div>
                            <div className="col-4 text-light">
                                <h2>DANH SÁCH GHẾ BẠN CHỌN</h2>
                                <ThongTin />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
