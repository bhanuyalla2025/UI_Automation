import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import APITestingPage from "../pages/APITestingPage";


Given("The User Create A Unique Pet Using API", () => {
  APITestingPage.Create_Unique_Pet();
});

When('The Response Status Code Should Is {int}', (statuscode) => {
  APITestingPage.Validate_Response_Status_Code(statuscode);
});

Then("The Response Should Contain a Valid Pet id", () => {
  APITestingPage.Validate_Pet_Id();
});


Given("The User Update Existing Pet A PUT Request To The API", () => {
  APITestingPage.Update_Existind_Pet();
});

Then("The Response Status Code Of Updated Pet Id Should Is {int}", (statusCode) => {
  APITestingPage.Validate_Updated_Pet_Id(statusCode);
});

Then("The Response Should Contain Update Existing Pet", () => {
  APITestingPage.Validate_Existing_Pet();
});

Given("The User GET Pet By Id Request To The API", () => {
  APITestingPage.Get_Pet_By_Id();
});


Then("The Response Status Code Of Get Pet Id Should Is {int}", (statusCode) => {
  APITestingPage.Validate_Get_Pet_Id(statusCode);
});


Then("The Response Should Contain Get Pet By id", () => {
  APITestingPage.Validate_Get_Pet();
});


Given("The User Delete Existing Pet A DEL Request To The API", () => {
  APITestingPage.delete_Pet();
});

Then('The Response Status Code of Delete Pet Should Is {int}', (statusCode) => {
  APITestingPage.Validate_delete_Pet_Id(statusCode);
})

Then("The Response Should Contain Delete Existing Pet", () => {
  APITestingPage.Validate_delete_Pet();
});