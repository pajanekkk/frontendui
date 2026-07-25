import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"
import { ProgramFragment } from "../../ProgramGQLModel/Queries/Fragments"
import { UserFragment } from "../../UserGQLModel/Queries/Fragments"
import { StateFragment } from "../../StateGQLModel/Queries/Fragments"
import { SubjectFragment } from "../../SubjectGQLModel/Queries/Fragments"

const LinkFragmentStr = `
fragment Link on StudentGQLModel {
   __typename
  id
  lastchange
  created
  createdbyId
  changedbyId
  changedby{
    ...User
  }
  rbacobjectId

  userId

  programId
  program{
  ...Program
  }
  user{
  ...User}
  
  stateId
  state{
  ...State
  }
  semesterNumber

  startdate
  enddate
  valid
}
`

const MediumFragmentStr = `
fragment Medium on StudentGQLModel {
  ...Link
  rbacobject {
    ...RBRoles
  }
}
`

const LargeFragmentStr = `
fragment Large on StudentGQLModel {
  ...Medium
  
  evaluations(limit: 100){
    order
    points
      classificationlevel{
        name
        ordervalue
      }
      semester{
          id
          order
          subjectId
    }
  }
}
`
const RoleFragmentStr = `
fragment Role on StudentGQLModel {
    __typename
    id
    lastchange
    created
    createdbyId
    changedbyId
    rbacobjectId
    createdby { id __typename }
    changedby { id __typename }
    rbacobject { id __typename }
    valid
    deputy
    startdate
    enddate
    roletypeId
    userId
    groupId
    roletype { __typename id }
    user { __typename id fullname }
    group { __typename id name }
  }
`
const RBACFragmentStr = `
fragment RBRoles on RBACObjectGQLModel {
  __typename
  id
  currentUserRoles {
    __typename
    id
    lastchange
    valid
    startdate
    enddate
    roletype {
      __typename
      id
      name
    }
    group {
      __typename
      id
      name
      grouptype {
        __typename
        id
        name
      }
    }
  }
}`

export const RoleFragment = createQueryStrLazy(`${RoleFragmentStr}`)
export const RBACFragment = createQueryStrLazy(`${RBACFragmentStr}`)

export const LinkFragment = createQueryStrLazy(`${LinkFragmentStr}`)
export const MediumFragment = createQueryStrLazy(`${MediumFragmentStr}`, LinkFragment, RBACFragment)
export const LargeFragment = createQueryStrLazy(`${LargeFragmentStr}`, MediumFragment, ProgramFragment, UserFragment, StateFragment, SubjectFragment)
