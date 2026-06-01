import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { createAsyncGraphQLAction2 } from "../../../../dynamic/src/Core/createAsyncGraphQLAction2";

const DeleteMutationStr = `
mutation studentDelete($id: UUID!, $lastchange: DateTime!) {
  studentDelete(student: {id: $id, lastchange: $lastchange}) {
  ...StudentGQLModelDeleteError
}
}

fragment StudentGQLModelDeleteError on StudentGQLModelDeleteError {
  __typename
  Entity {
    __typename
    id
    lastchange  
}
  msg
  code
  failed
  location
  input
}
`
const DeleteMutation = createQueryStrLazy(`${DeleteMutationStr}`)
export const DeleteAsyncAction = createAsyncGraphQLAction2(DeleteMutation)