import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AmphoraPage from "../pages/AmphoraPage";

Given(/^User Navigates To Amphora Page$/, () => {
  AmphoraPage.Navigate_Amphora_Page();
});

When(/^User Mouseover On The Products$/, () => {
  AmphoraPage.Mouseover_To_Products();
});

When('User Clicks On {string}', (sub_product) => {
  AmphoraPage.Click_Amphora_Subproducts(sub_product);
});

Then('User Validates Page Redirection To {string},{string}', (sub_product,url_subproduct) => {
  AmphoraPage.Validate_Amphora_Subproducts(sub_product,url_subproduct);
});

When(/^User Mouseover On The Resources$/, () => {
  AmphoraPage.Mouseover_To_Resources();
});

Then(/^User Clicks On Newsletter Sign Up/, () => {
  AmphoraPage.Click_Newsletter_SignUP();
});

When(/^User Validates Page Redirection To Newsletter Sign Up$/, () => {
  AmphoraPage.Validate_Newsletter_SignUP();
});

Then(/^User Clicks On Business Email Address And Enter Email$/, () => {
  AmphoraPage.Enter_Email_Address();
});

When(/^User Clicks On First Name And Enter First Name$/, () => {
  AmphoraPage.Enter_First_Name();
});

Then(/^User Clicks On Last Name And Enter Last Name$/, () => {
  AmphoraPage.Enter_Last_Name();
});


When(/^User Clicks On Sign Up Button$/, () => {
  AmphoraPage.Submit_Signup_Button();
});

Then(/^User Validates "Thank you for signing up for our newsletter"$/, () => {
  AmphoraPage.Validate_Thank_you_for_signing_up();
});


