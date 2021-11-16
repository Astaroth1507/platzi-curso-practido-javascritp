//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const coupons = [{
        name: "firstTime",
        discount: 15
    },
    {
        name: "soon",
        discount: 30,
    },
    {
        name: "quarter",
        discount: 25
    }
]


function onCLickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputCoupon");
    const couponValue = inputDiscount.value;

    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue
    }

    const userCoupon = coupons.find(isCouponValueValid)
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido")
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento
    }

    /* const resultP = document.getElementById("ResultP");
     resultP.innerText = "El precio con descuento es: $" + precioConDescuento*/
}
/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/