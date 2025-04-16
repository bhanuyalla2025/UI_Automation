const petid = 121234324234
class APITestingPage {

  static Create_Unique_Pet() {

    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        id: petid,
        category: {
          id: 123456,
          name: 'string',
        },
        name: 'test',
        photoUrls: ['string'],
        tags: [
          {
            id: 0,
            name: 'string',
          },
        ],
        status: 'available',
      },
    }).then((response) => {
      cy.wrap(response).as('apiResponse'); 
    });
  }

  static Validate_Response_Status_Code(statusCode) {
    cy.get("@apiResponse").its("status").should("eq", statusCode);

  }

  static Validate_Pet_Id() {
    cy.get("@apiResponse").its("body.id").should("exist");
    cy.get("@apiResponse").its("body.id").should("eq", petid);
    cy.get("@apiResponse").its("body.id").as("pet_id")
  }

  static Update_Existind_Pet() {
    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/pet',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        id: petid,
        category: {
          id: 123456,
          name: 'string',
        },
        name: 'test_update',
        photoUrls: ['string'],
        tags: [
          {
            id: 567,
            name: 'string',
          },
        ],
        status: 'available',
      },
    }).then((existingresponse) => {
      cy.wrap(existingresponse).as('updateapiResponse');
    });

  }

  static Validate_Updated_Pet_Id(statusCode) {
    cy.get("@updateapiResponse").its("status").should("eq", statusCode);
  }


  static Validate_Existing_Pet() {
    cy.get("@updateapiResponse").its("body.id").should("exist");
    cy.get("@updateapiResponse").its("body.id").should("eq", petid);
    cy.get("@updateapiResponse").its("body.id").as("pet_id")

  }

  static Get_Pet_By_Id() {
    cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/${petid}`,
      headers: {
        accept: 'application/json',
      },
    }).then((getpetidresponse) => {
      cy.wrap(getpetidresponse).as('getpetidapiResponse');
    });
  }

  static Validate_Get_Pet_Id(statusCode) {
    cy.get("@getpetidapiResponse").its("status").should("eq", statusCode);
  }

  static Validate_Get_Pet() {
    cy.get("@getpetidapiResponse").its("body.id").should("exist");
    cy.get("@getpetidapiResponse").its("body.id").should("eq", petid);
    cy.get("@getpetidapiResponse").its("body.id").as("pet_id")

  }

  static delete_Pet() {
    cy.request({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/pet/${petid}`,
      headers: {
        accept: 'application/json',
        api_key: 'special-key',
      },
    }).then((response) => {
      cy.wrap(response).as('deleteapiResponse');
    });
  }

  static Validate_delete_Pet_Id(statusCode) {
    cy.get("@deleteapiResponse").its("status").should("eq", statusCode);
  }

  static Validate_delete_Pet() {
    cy.get("@deleteapiResponse").its("body.id").should("not.exist");
  }




}


export default APITestingPage;


