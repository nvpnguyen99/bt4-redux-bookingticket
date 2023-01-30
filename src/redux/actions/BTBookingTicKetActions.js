import { DAT_GHE, XOA_GHE } from "../types/BTBookingTicketType"

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