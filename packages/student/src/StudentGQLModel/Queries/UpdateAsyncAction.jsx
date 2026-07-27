import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { LargeFragment } from "./Fragments";
import { createAsyncGraphQLAction2 } from "../../../../dynamic/src/Core/createAsyncGraphQLAction2";
import { reduceToFirstEntity, updateItemsFromGraphQLResult } from "../../../../dynamic/src/Store";

/**
 * Mutace pro úpravu studenta.
 *
 * Dvě věci, které z kódu nejsou vidět:
 *
 * 1) lastchange je povinný. Posílá se čas poslední známé změny a server ho
 *    porovná se svým. Když se mezitím záznam změnil (upravoval ho někdo jiný),
 *    mutaci odmítne — místo aby cizí úpravu tiše přepsal.
 *
 * 2) Odpověď má dvě podoby: buď upravený student, nebo chybový objekt
 *    StudentGQLModelUpdateError. Proto se výsledek rozpadá přes "... on"
 *    a je tu fragment Error — nese msg, code a původní vstup.
 */
const UpdateMutationStr = `
mutation studentUpdate($id: UUID!, $lastchange: DateTime!, $programId: UUID, $stateId: UUID, $semesterNumber: Int) {
  studentUpdate(student: {id: $id, lastchange: $lastchange, programId: $programId, stateId: $stateId, semesterNumber: $semesterNumber}) {
  ... on StudentGQLModel { ...Large }
  ... on StudentGQLModelUpdateError { ...Error }
}
}

fragment Error on StudentGQLModelUpdateError {
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

const UpdateMutation = createQueryStrLazy(`${UpdateMutationStr}`, LargeFragment)
export const UpdateAsyncAction = createAsyncGraphQLAction2(UpdateMutation,
  updateItemsFromGraphQLResult, reduceToFirstEntity)