import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

const StateFragmentStr = `
fragment State on StateGQLModel {
  __typename
  id
  lastchange
  created
  createdbyId
  changedbyId
  rbacobjectId
  name
  nameEn
  statemachineId
  writerslistId
  readerslistId
  order
}
`

const MediumFragmentStr = `
fragment Medium on StateGQLModel {
  ...State
}
`

const LargeFragmentStr = `
fragment Large on StateGQLModel {
  ...Medium
}
`


export const StateFragment = createQueryStrLazy(`${StateFragmentStr}`)
export const MediumFragment = createQueryStrLazy(`${MediumFragmentStr}`, StateFragment)
export const LargeFragment = createQueryStrLazy(`${LargeFragmentStr}`, MediumFragment)
