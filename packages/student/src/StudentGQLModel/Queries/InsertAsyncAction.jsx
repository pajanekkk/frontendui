import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { LargeFragment } from "./Fragments";
import { createAsyncGraphQLAction2 } from "../../../../dynamic/src/Core/createAsyncGraphQLAction2";


const InsertMutationStr = `
mutation studentInsert($userId: UUID!, $programId: UUID!, $id: UUID, $stateId: UUID, $semesterNumber: Int) {
  studentInsert(student: {userId: $userId, programId: $programId, id: $id, stateId: $stateId, semesterNumber: $semesterNumber}) {
  ... on StudentGQLModel { ...Large }
  ... on StudentGQLModelInsertError { ...StudentGQLModelInsertError }
}
}


fragment StudentGQLModelInsertError on StudentGQLModelInsertError {
    __typename
    Entity {
  ...Large
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