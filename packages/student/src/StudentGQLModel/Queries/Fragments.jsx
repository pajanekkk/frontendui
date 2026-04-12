import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"
import { ProgramFragment } from "../../ProgramGQLModel/Queries/Fragments"

const StudentFragmentStr = `
fragment Student on StudentGQLModel {
  __typename
  id
  userId
  programId
  semesterNumber
  program {
  ...Program
}
}
`

const MediumFragmentStr = `
fragment Medium on StudentGQLModel {
  ...Student
  user {
    __typename
    id
    fullname
    email
  }
}
`

const LargeFragmentStr = `
fragment Large on StudentGQLModel {
  ...Medium
  evaluations {
    __typename
    id
  }
  documents {
    __typename
    id
  }
}
`

export const StudentFragment = createQueryStrLazy(`${StudentFragmentStr}`, ProgramFragment)
export const MediumFragment = createQueryStrLazy(`${MediumFragmentStr}`, StudentFragment)
export const LargeFragment = createQueryStrLazy(`${LargeFragmentStr}`, MediumFragment)