import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"
import { ProgramFragment } from "../../ProgramGQLModel/Queries/Fragments"
import { UserFragment } from "../../UserGQLModel/Queries/Fragments"
import { StateFragment } from "../../StateGQLModel/Queries/Fragments"
import { SubjectFragment } from "../../SubjectGQLModel/Queries/Fragments"

/**
 * Fragmenty pro StudentGQLModel ve třech úrovních podrobnosti.
 * Používají se podle toho, kolik dat daná obrazovka opravdu potřebuje —
 * není důvod tahat ze serveru všechna hodnocení, když vykreslujeme jen odkaz.
 *
 *   Link   → identifikace studenta + jeho program, uživatel a stav studia
 *   Medium → Link + role přihlášeného uživatele (RBAC), podle nich se skrývají tlačítka
 *   Large  → Medium + seznam hodnocení, používá ho detailní stránka studenta
 */
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

// limit: 100 je pojistka — student za celé studium tolik hodnocení nenasbírá,
// ale kdyby v datech byl nepořádek, dotaz nevrátí obrovskou odpověď.
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

// createQueryStrLazy poskládá závislé fragmenty až při prvním použití dotazu.
// Kdyby se skládaly hned při importu, vznikly by cyklické importy mezi modely
// (Student potřebuje Program, Program potřebuje Subject...).
export const RoleFragment = createQueryStrLazy(`${RoleFragmentStr}`)
export const RBACFragment = createQueryStrLazy(`${RBACFragmentStr}`)

export const LinkFragment = createQueryStrLazy(`${LinkFragmentStr}`)
export const MediumFragment = createQueryStrLazy(`${MediumFragmentStr}`, LinkFragment, RBACFragment)
export const LargeFragment = createQueryStrLazy(`${LargeFragmentStr}`, MediumFragment, ProgramFragment, UserFragment, StateFragment, SubjectFragment)
