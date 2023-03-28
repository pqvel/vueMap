export const createIconContent = (pharmacyProducts, cartProducts) => {
    let countPharmacyProducts = 0
    let totalCartCount = 0
    let totalPrice = 0

    cartProducts.forEach((cartProduct) => {
        
        const pharmacyProduct = pharmacyProducts.find(pharmacyProduct => pharmacyProduct.product.id === cartProduct.product.id)
        totalCartCount += cartProduct.count

        if (pharmacyProduct) {
            totalPrice += cartProduct.count * pharmacyProduct.product.price

            if (cartProduct.count <= pharmacyProduct.count) {
                countPharmacyProducts += cartProduct.count
            } else {
                countPharmacyProducts += pharmacyProduct.count
            }
            
        }
    })

    if (countPharmacyProducts < totalCartCount) {
        return {
            content: `${countPharmacyProducts} из ${totalCartCount}`,
            defaultClass: 'white'
        }
    }

    // return countPharmacyProducts
    return {
        content: `${Math.ceil(totalPrice * 100) / 100} р.`,
        defaultClass: 'blue'
    }
}