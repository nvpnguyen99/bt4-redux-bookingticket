import { DAT_GHE, XAC_NHAN, XOA_GHE } from "../types/BTBookingTicketType";

const initialState = {
    mangGheDangDat: [],
    selectStatus: true
}

export const bookingTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAT_GHE:
            if(state.selectStatus){
                let mangGheDangDatCapNhat = [...state.mangGheDangDat]
                let gheTK = mangGheDangDatCapNhat.find(gheDat => gheDat.soGhe === action.ghe.soGhe);
                if(gheTK){
                  state.mangGheDangDat = mangGheDangDatCapNhat.filter(gheDat => gheDat.soGhe !== gheTK.soGhe)
                }  else{
                    let gheDat = {
                        soGhe: action.ghe.soGhe,
                        gia: action.ghe.gia
                    }
                state.mangGheDangDat = [...mangGheDangDatCapNhat, gheDat]
                }  
            }
           
        return {...state};
            
        case XOA_GHE:
            if(state.selectStatus){
                let mangGheDangDatCN = [...state.mangGheDangDat]
                state.mangGheDangDat = mangGheDangDatCN.filter(gheDat => gheDat.soGhe !== action.soGhe)
            }
            return {...state};
        case XAC_NHAN:
            state.selectStatus = action.selectStatus;
            return {...state}
        default: 
        return state;
    }
}
