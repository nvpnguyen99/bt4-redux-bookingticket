import React, { Component } from 'react'
import { connect } from 'react-redux'
import { xoaGheAction } from '../redux/actions/BTBookingTicKetActions'

class ThongTin extends Component {

    renderThongTinGheDaDat = () => {
        return this.props.mangGheDangDat.map((ghe) => {
            return <tr key={ghe.soGhe}>
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia}</td>
                <td style={{textAlign: "center", fontSize: "32px", padding: 0}}>
                    <button style={{border: "none", backgroundColor: "transparent", color: "red"}} onClick={() => { 
                        this.props.xoaGheDat(ghe.soGhe)
                     }}>x</button>
                </td>
            </tr>
        })
    }

    renderTongTien = () => {
        let tongTien = this.props.mangGheDangDat.reduce((sum,gheDangDat) => {
            return sum += gheDangDat.gia
        },0)
        if(this.props.mangGheDangDat.length > 0){
            return  <tr>
            <td>Tổng tiền</td>
            <td>{tongTien}</td>
            <td></td>
        </tr>
        }
       
    }

    render() {
        return (
            <div>
                <div>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td><button className="gheDuocChon"></button></td>
                                <td><span>Ghế đã đặt</span></td>
                            </tr>
                            <tr>
                                <td><button className="gheDangChon"></button></td>
                                <td><span>Ghế đang đặt</span></td>
                            </tr>
                            <tr>
                                <td><button className="ghe"></button></td>
                                <td><span>Ghế chưa đặt</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mt-5'>
                    <table className="table text-light" border="2">
                        <thead>
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderThongTinGheDaDat()}
                            {this.renderTongTien()}
                        </tbody>
                    </table>
                </div>



            </div>
        )
    }
}

//! Truyền mapDispatchToProps vào tham số thứ 2 của connect
const mapDispatchToProps = (dispatch) => {
    return{
        xoaGheDat: (soGhe) => {
            const action = xoaGheAction(soGhe)
            dispatch(action)
        }
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangGheDangDat: rootReducer.bookingTicketReducer.mangGheDangDat
    }
}

const ComponentThongTinRedux = connect(mapStateToProps, mapDispatchToProps)(ThongTin);

export default ComponentThongTinRedux;

