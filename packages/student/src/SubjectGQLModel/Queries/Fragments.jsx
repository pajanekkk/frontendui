import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

const SubjectFragmentStr = `
fragment Subject on SubjectGQLModel {
  __typename
  id
  lastchange
  created
  createdbyId
  changedbyId
  rbacobjectId
  name
  nameEn
  description
  descriptionEn
  programId

  }
`

const MediumFragmentStr = `
fragment Medium on SubjectGQLModel {
  ...Subject
}
`

const LargeFragmentStr = `
fragment Large on SubjectGQLModel {
  ...Medium
  semesters{
  id
  }
}
`
/* 
const RoleFragmentStr = `
fragment Role on RoleGQLModel {
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
 */
export const SubjectFragment = createQueryStrLazy(`${SubjectFragmentStr}`)
export const MediumFragment = createQueryStrLazy(`${MediumFragmentStr}`, SubjectFragment)
export const LargeFragment = createQueryStrLazy(`${LargeFragmentStr}`, MediumFragment)
