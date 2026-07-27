import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"
import { SubjectFragment } from "../../SubjectGQLModel/Queries/Fragments"

/**
 * Fragmenty pro studijní program.
 *
 * Program s sebou nese i seznam svých předmětů (subjects). Díky tomu si
 * detail studenta vystačí s jedním dotazem — názvy předmětů u hodnocení
 * pak dohledáváme právě v tomto seznamu.
 */
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


// Medium a Large zatím nic navíc nepřidávají, existují ale kvůli jednotné
// struktuře napříč modely — až bude program potřeba zobrazit podrobněji,
// rozšíří se tady a zbytek kódu se měnit nemusí.
export const ProgramFragment = createQueryStrLazy(`${ProgramFragmentStr}`)
export const MediumFragment = createQueryStrLazy(`${MediumFragmentStr}`, ProgramFragment, SubjectFragment)
export const LargeFragment = createQueryStrLazy(`${LargeFragmentStr}`, MediumFragment)