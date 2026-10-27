import customer1 from "../../assets/images/products/customer1.png"

export default function FeedbackCustomer() {
   
  const baseUrl = "http://localhost:1337"
  const varUrl = "api/customers?populate=*"

  return (
    <div className="container my-9" >
      <div>
        <img src={customer1} alt="customer1" />

      </div>
      <div>

      </div>

    </div>
  )
}
