import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"
import { SubjectFragment } from "../../SubjectGQLModel/Queries/Fragments"

const ProgramFragmentStr = `
fragment Program on ProgramGQLModel {
  __typename
  id
  typeId
  name
  nameEn
  lastchange
  subjects {
  ...Subject
}
}
`

const MediumFragmentStr = `
fragment Medium on ProgramGQLModel {
  ...Program
}
`

const LargeFragmentStr = `
fragment Large on ProgramGQLModel {
  ...Medium
}
`


export const ProgramFragment = createQueryStrLazy(`${ProgramFragmentStr}`)
export const MediumFragment = createQueryStrLazy(`${MediumFragmentStr}`, ProgramFragment, SubjectFragment)
export const LargeFragment = createQueryStrLazy(`${LargeFragmentStr}`, MediumFragment)