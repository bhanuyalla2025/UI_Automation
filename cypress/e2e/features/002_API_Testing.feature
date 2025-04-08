###########################################################################################################
# File Name          : 002APITesting.feature                                                              #
# Author             : Bhanu                                                                              #
# Description        : API Pet Tests                                                                      #
###########################################################################################################
@APITesting
Feature: Create, Update, Read and Delete Pet details using API

  @CreateUniquePet
  Scenario: Create a unique pet and validate
    Given The User Create A Unique Pet Using API
    When The Response Status Code Should Is 200
    Then The Response Should Contain a Valid Pet id

  @UpdateExistingPet
  Scenario: Update the newly created pet and validate
    Given The User Update Existing Pet A PUT Request To The API
    When The Response Status Code Of Updated Pet Id Should Is 200
    Then The Response Should Contain Update Existing Pet

  @ReadExistingPet
  Scenario: Read the newly created pet and validate
    Given The User GET Pet By Id Request To The API
    When The Response Status Code Of Get Pet Id Should Is 200
    Then The Response Should Contain Get Pet By id

  @DeleteExistingPet
  Scenario: Delete the newly created pet and validate
    Given The User Delete Existing Pet A DEL Request To The API
    When The Response Status Code of Delete Pet Should Is 200
    Then The Response Should Contain Delete Existing Pet
