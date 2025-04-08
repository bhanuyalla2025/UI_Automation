###########################################################################################################
# File Name          : 001AmphoraProducts.feature                                                         #
# Author             : Bhanu                                                                              #
# Description        : UI Product Tests                                                                   #
###########################################################################################################
@AmphoraProducts
Feature: Functional Amphora Sub_Product Verification 

  @AmphoraSubProducts
  Scenario Outline: Validate "<subproducts>" Under The Products
    Given User Navigates To Amphora Page
    When User Mouseover On The Products
    And User Clicks On "<subproducts>"
    Then User Validates Page Redirection To "<subproducts>","<urlsubproduct>"

    Examples:
      | subproducts                 | urlsubproduct               |
      | Symphony CTRM               | symphony                    |
      | Alchemy CTRM                | alchemy                     |
      | VaR Module                  | var-module                  |
      | Trade confirmations manager | trade-confirmations-manager |
      | Freight manager             | freight-manager             |
      | Claims manager              | claims-manager              |
      | Symphony Credit             | symphony-credit             |

  @AmphoraResources
  Scenario: Validate Newsletter Sign Up Under The Resources
    Given User Navigates To Amphora Page
    When User Mouseover On The Resources
    And User Clicks On Newsletter Sign Up
    Then User Validates Page Redirection To Newsletter Sign Up
    Then User Clicks On Business Email Address And Enter Email
    Then User Clicks On First Name And Enter First Name
    And User Clicks On Last Name And Enter Last Name
    Then User Clicks On Sign Up Button
    Then User Validates "Thank you for signing up for our newsletter"
