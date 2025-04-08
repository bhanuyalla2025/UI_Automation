const timeout_2ms = 200;
const products_txt = '//*[@id="menu-main-menu"]/li[contains(@id,"menu-item")]/a[contains(text(),"Products")]';
const resource_txt = '//*[@id="menu-main-menu"]/li[contains(@id,"menu-item")]/a[contains(text(),"Resources")]';
const newsletter_signup_txt = '//*[@class="fserv-form-name"][contains(text(),"Newsletter Sign Up")]'
const email_address_txt = '[type="email"]';
const first_name_txt = '//label[@class="fserv-label"][contains(text(),"First Name")]/following::input[@type="text"][1]';
const last_name_txt = '//label[@class="fserv-label"][contains(text(),"Last Name")]/following::input[@type="text"][1]'
const signup_button = '[class="fserv-button-submit"]';
const close_popup = '[class="close"]';
const thank_you_for_signup_txt = '//*[contains(text(),"Thank you for signing up for our newsletter")]';
const productstxt = 'mouseover';
const resourcetxt = 'mouseover';
const newslettersignuptxt = 'Newsletter sign-up';

class AmphoraPage {

  static Navigate_Amphora_Page() {
    cy.visit("/");
    cy.wait(timeout_2ms);
    cy.title().should('eq', 'Amphora – Commodities trading platform; adaptable and proven')
  }
  static Mouseover_To_Products() {
    cy.xpath(products_txt)
      .trigger(productstxt);
    cy.wait(timeout_2ms);
  }
  static Click_Amphora_Subproducts(sub_product) {
    cy.contains(sub_product)
      .click({ force: true });
    cy.wait(timeout_2ms);
  }
  static Validate_Amphora_Subproducts(sub_product, url_subproduct) {
    cy.xpath(`//*[@class="heading--lg"][contains(text(),"${sub_product}")]`).should('be.visible');
    cy.url().should('include', url_subproduct);
    cy.wait(timeout_2ms);
  }


  static Mouseover_To_Resources() {
    cy.xpath(resource_txt)
      .trigger(resourcetxt);
    cy.wait(timeout_2ms);
  }

  static Click_Newsletter_SignUP() {
    cy.contains(newslettersignuptxt)
      .click({ force: true });
    cy.wait(timeout_2ms);
  }

  static Validate_Newsletter_SignUP() {
    cy.xpath(newsletter_signup_txt).should('be.visible');
    cy.url().should('include', '/newsletter-sign-up/');
    cy.wait(timeout_2ms);

  }
  static Enter_Email_Address() {
    cy.get(email_address_txt).should('be.visible').scrollIntoView().click().clear().type('abcd@outlook.com');

  }
  static Enter_First_Name() {
    cy.xpath(first_name_txt)
      .should('be.visible').scrollIntoView()
      .click().clear().type('ab');
  }
  static Enter_Last_Name() {
    cy.xpath(last_name_txt)
      .should('be.visible').scrollIntoView()
      .click().clear().type('cd');
  }
  static Submit_Signup_Button() {
    cy.get(signup_button).should('be.visible').scrollIntoView().click();
    cy.wait(timeout_2ms);
  }
  static Close_Popup() {
    cy.get('body').then($body => {
      if ($body.find(close_popup).length > 0) {
        cy.get(close_popup).should('be.visible').last().click({ force: true });
      } else {
        cy.log('No popup appeared');
      }
    })
  }
  static Validate_Thank_you_for_signing_up() {
    cy.xpath(thank_you_for_signup_txt).first().should("be.visible").invoke('text').then((username) => {
      expect(username).to.equal('Thank you for signing up for our newsletter. We are thrilled to have you join our community. Every quarter, you will receive exclusive content designed to keep you informed about generic topics within the CTRM industry.');
    });
  }

}

export default AmphoraPage;
