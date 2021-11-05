const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
    timstamp: {type: Date, default: Date.now},
    type: String,
    volume : Number,
    price: Number,
    amount: Number,
    fee: Number,
    settled: Number
});


module.exports = mongoose.model('tradeLog', tradeSchema);

/* 거래내역     
 * 체결시간     timstamp: {type: Date, default: Date.now},
 * 종류(매도매수)type: String,
 * 거래수량     volume : Number,
 * 거래단가     price: Number,
 * 거래금액     amount: Number,
 * 수수료       fee: Number,
 * 정산금액     settled: Number
 */

// {
//     "type": "매도",
//     "volume": 2,
//     "price": 3,
//     "amount": 4,
//     "fee": 5,
//     "settled": 6
// }