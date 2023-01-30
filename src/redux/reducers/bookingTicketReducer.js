import { DAT_GHE, XOA_GHE } from "../types/BTBookingTicketType";

const initialState = {
    mangGheDangDat: []
}

export const bookingTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAT_GHE:
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

           
        return {...state};
            
        case XOA_GHE:
            let mangGheDangDatCN = [...state.mangGheDangDat]
            state.mangGheDangDat = mangGheDangDatCN.filter(gheDat => gheDat.soGhe !== action.soGhe)
            return {...state};
        default: 
        return state;
    }
}
