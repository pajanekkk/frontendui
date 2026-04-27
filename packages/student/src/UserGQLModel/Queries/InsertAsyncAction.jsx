import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { LargeFragment } from "./Fragments";
import { createAsyncGraphQLAction2 } from "../../../../dynamic/src/Core/createAsyncGraphQLAction2";


const InsertMutationStr = `
mutation userInsert($id: UUID, $name: String, $surname: String, $email: String, $valid: Boolean, $memberships: [MembershipInsertGQLModel!], $roles: [RoleInsertGQLModel!]) {
  userInsert(user: {id: $id, name: $name, surname: $surname, email: $email, valid: $valid, memberships: $memberships, roles: $roles}) {
    ... on UserGQLModel { ...User }
    ... on UserGQLModelInsertError { ...UserGQLModelInsertError }
  }
}


fragment UserGQLModelInsertError on UserGQLModelInsertError {
  __typename
  Entity {
  ...User
}
  msg
  failed
  code
  location
  input
  }
`

const InsertMutation = createQueryStrLazy(`${InsertMutationStr}`, LargeFragment)
export const InsertAsyncAction = createAsyncGraphQLAction2(InsertMutation)