/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActor = /* GraphQL */ `
  mutation CreateActor(
    $input: CreateActorInput!
    $condition: ModelActorConditionInput
  ) {
    createActor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      age
      movies
      gender
      createdAt
      updatedAt
    }
  }
`;
export const updateActor = /* GraphQL */ `
  mutation UpdateActor(
    $input: UpdateActorInput!
    $condition: ModelActorConditionInput
  ) {
    updateActor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      age
      movies
      gender
      createdAt
      updatedAt
    }
  }
`;
export const deleteActor = /* GraphQL */ `
  mutation DeleteActor(
    $input: DeleteActorInput!
    $condition: ModelActorConditionInput
  ) {
    deleteActor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      age
      movies
      gender
      createdAt
      updatedAt
    }
  }
`;
