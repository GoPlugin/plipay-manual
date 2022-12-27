import React from 'react'
import Paypli from './Paypli'
import "./Paypli.css"


const Index = () => {
    return (
        <Paypli
            chainId={50}
            paymethod={"XDC"}
            fiatcurrency={"usd"}
            style={`apple_pay_button apple_pay_button_black`}
            receiverAddress={"0x117c691d76c1d9c68e3709a87f7d496097f2b56f"}
            amount={"1"}
            onSuccess={(data) => console.log("onSuccess", data)}
            onFailure={(data) => console.log("onFailure", data)}
            onError={(data) => console.log("onError", data)}
        />
    )
}
export default Index;

