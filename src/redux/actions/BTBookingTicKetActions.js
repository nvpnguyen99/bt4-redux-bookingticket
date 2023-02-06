import { DAT_GHE, XAC_NHAN, XOA_GHE } from "../types/BTBookingTicketType"

export const datGheAction = (ghe) => {
    return {
        type: DAT_GHE,
        ghe: ghe
    }
}

export const xoaGheAction = (soGhe) => {
    return {
        type: XOA_GHE,
        soGhe: soGhe
    }
}

export const xacNhanDatAction = () => {
    return {
        type: XAC_NHAN,
        selectStatus: false
    }
}