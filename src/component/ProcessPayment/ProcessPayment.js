import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51Ie1lELbSzDT8BpG5sYwaNJFOqhc0PN0C5AMn7oKmuq5Mhf9XoOcWGj0IgtnEK70Zn2q57SlPceEBq2HDycsAIR600Vd1bimCd');
const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            {/* <SimpleCardForm></SimpleCardForm> */}
            <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
        </Elements>
    );
};

export default ProcessPayment;