import React, { Component } from 'react'
import { connect } from 'react-redux'
import { datGheAction } from '../redux/actions/BTBookingTicKetActions'

class HangGhe extends Component {

    renderHangGhe = () => {
        return this.props.danhSachGhe.map((hangGhe, index) => {
            if(index === 0){
                return <tr key={hangGhe.hang}>
                <td>{hangGhe.hang}</td>
                {this.renderSoHang(hangGhe)}
            </tr>
            }  
            return <tr key={hangGhe.hang}>
                    <td>{hangGhe.hang}</td>
                    {this.renderGhe(hangGhe)}
                </tr>
            
        })
    }

    renderSoHang = (hangGhe) => {
        return hangGhe.danhSachGhe.map((ghe) => { 
            return   <td key={ghe.soGhe}>
            {ghe.soGhe}
        </td>
         })
    }

    renderGhe = (hangGhe) => {
        return hangGhe.danhSachGhe.map((ghe) => {
            let tinhTrangGhe = '';
            let disabled = false;
           //Kiểm tra các ghế đã được đặt để ngăn người dùng click vào ghế đó
            if(ghe.daDat){
                tinhTrangGhe= 'gheDuocChon';
                disabled = true;
            }

            // Kiểm tra ghế có đang được đặt (so sánh với mảng ở state) để render ghế với màu khác
            let gheTk = this.props.mangGheDangDat.find(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if(gheTk){
                tinhTrangGhe= 'gheDangChon'
            }
        
                return <td className='py-2 px-2' key={ghe.soGhe}>
                    <button disabled={disabled} className={`ghe ${tinhTrangGhe}`} onClick={() => { 
                        let action = datGheAction(ghe);
                        this.props.dispatch(action)
                     }}>{ghe.soGhe}</button>
                </td>
        })
    }



  render() {
    return (
        <div>
        <table style={{ margin: "auto" }}>
            <thead></thead>
            <tbody>
                {this.renderHangGhe()}
            </tbody>
        </table>
    </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangGheDangDat: rootReducer.bookingTicketReducer.mangGheDangDat
    }
}

const ComponentHangGheRedux = connect(mapStateToProps)(HangGhe);

export default ComponentHangGheRedux;