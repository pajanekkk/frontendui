import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

const UserFragmentStr = `
fragment User on UserGQLModel {
  __typename
  id
  fullname
  }
`

const MediumFragmentStr = `
fragment Medium on UserGQLModel {
  ...User
}
`

const LargeFragmentStr = `
fragment Large on UserGQLModel {
  ...Medium
}
`


export const UserFragment = createQueryStrLazy(`${UserFragmentStr}`)
export const MediumFragment = createQueryStrLazy(`${MediumFragmentStr}`, UserFragment)
export const LargeFragment = createQueryStrLazy(`${LargeFragmentStr}`, MediumFragment)