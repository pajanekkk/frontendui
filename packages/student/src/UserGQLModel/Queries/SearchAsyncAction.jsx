import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"
import { createAsyncGraphQLAction2 } from "../../../../dynamic/src/Core/createAsyncGraphQLAction2"
import { LargeFragment } from "./Fragments"
import { reduceToFirstEntity } from "../../../../dynamic/src/Store"

/**
 * Hledání uživatele podle celého jména — používá se při zakládání studenta,
 * kdy je potřeba vybrat, ke komu záznam vytvořit.
 *
 * Hledá se ve fullname, ne v příjmení zvlášť, takže funguje i zadání
 * "novak jan". _ilike ignoruje velikost písmen.
 */
const SearchQueryStr = `
query SearchQuery($skip: Int, $limit: Int, $pattern: String) {
  result: userPage(skip: $skip, limit: $limit, where: {fullname: {_ilike: $pattern}}) {
    ...Large
  }
}
`


export const SearchAsyncActionQuery = createQueryStrLazy(`${SearchQueryStr}`, LargeFragment)
export const UserSearchAsyncAction = createAsyncGraphQLAction2(SearchAsyncActionQuery, reduceToFirstEntity)