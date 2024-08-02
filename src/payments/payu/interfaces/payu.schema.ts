import * as mongoose from 'mongoose';

export const PayUConfirmationSchema = new mongoose.Schema({
    date: Date,
    pse_reference3: String,
    payment_method_type: Number,
    pse_reference2: String,
    franchise: String,
    commision_pol: Number,
    pse_reference1: String,
    shipping_city: String,
    bank_referenced_name: String,
    sign: String,
    extra2: String,
    extra3: String,
    operation_date: Date,
    payment_request_state: String,
    billing_address: String,
    extra1: String,
    administrative_fee: Number,
    administrative_fee_tax: Number,
    bank_id: String,
    nickname_buyer: String,
    payment_method: Number,
    attempts: Number,
    transaction_id: String,
    transaction_date: Date,
    test: Boolean,
    exchange_rate: Number,
    ip: String,
    reference_pol: String,
    cc_holder: String,
    tax: Number,
    antifraudMerchantId: String,
    pse_bank: String,
    state_pol: String,
    billing_city: String,
    phone: String,
    error_message_bank: String,
    shipping_country: String,
    error_code_bank: String,
    cus: String,
    commision_pol_currency: String,
    customer_number: Number,
    description: String,
    merchant_id: Number,
    administrative_fee_base: Number,
    authorization_code: String,
    currency: String,
    shipping_address: String,
    nickname_seller: String,
    cc_number: String,
    installments_number: Number,
    value: Number,
    transaction_bank_id: String,
    billing_country: String,
    response_code_pol: String,
    payment_method_name: String,
    office_phone: String,
    email_buyer: String,
    payment_method_id: Number,
    response_message_pol: String,
    account_id: Number,
    airline_code: String,
    pseCycle: String,
    risk: Number,
    reference_sale: String,
    additional_value: Number,
    json: String
}, { timestamps: true, collection: 'payu-confirmations' });
PayUConfirmationSchema.index({ email_buyer: 1 })