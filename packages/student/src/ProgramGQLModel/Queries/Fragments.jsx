import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

const ProgramFragmentStr = `
fragment Program on ProgramGQLModel {
  __typename
  id
  name
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
export const MediumFragment = createQueryStrLazy(`${MediumFragmentStr}`, ProgramFragment)
export const LargeFragment = createQueryStrLazy(`${LargeFragmentStr}`, MediumFragment)