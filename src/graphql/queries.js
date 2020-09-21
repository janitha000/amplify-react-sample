/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActor = /* GraphQL */ `
  query GetActor($id: ID!) {
    getActor(id: $id) {
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
export const listActors = /* GraphQL */ `
  query ListActors(
    $filter: ModelActorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        age
        movies
        gender
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
