import { CustomerServices } from "./domain/customer/services/implementations/CustomerServices";

const button = document.querySelector(".btn-create-customer");

const customerService = new CustomerServices();

const onCreateCustomer = () => {
   console.log("fui executado");
   customerService.createCustomer({
      name: "Arthur Saldanha",
      cpf: "12345678900",
      email: "email@gmail.com",
      phone: "79 12345-6789",
      address: "Rua A, 110",
   });
};

button.addEventListener("click", onCreateCustomer);
