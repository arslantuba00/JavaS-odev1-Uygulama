class Customer{
    constructor(id,customerNumber){
        this.instance_id = id
        this.instance_customerNumber = customerNumber
    }

}

let customer = new Customer("21KE3","78432")

Customer.bisey ="Mehmut"
console.log(Customer.bisey)

console.log("Ürün id: " + customer.instance_id)
console.log("Ürün numarası: " + customer.instance_customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}