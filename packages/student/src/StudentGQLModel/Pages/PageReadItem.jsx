import { GeneratedContentBase } from "../../../../_template/src/Base/Pages/Page"
import { PageItemBase } from "./PageBase"


import EvaluationsPage from "./EvaluationsPage"

/**
 * Detailní stránka studenta (routa .../view/:id).
 *
 * Načtení dat i navigaci řeší PageItemBase. Tahle komponenta rozhoduje jen
 * o tom, CO se v detailu zobrazí — a jako výchozí obsah dosazuje přehled
 * hodnocení. Tady se tedy tabulka hodnocení připojuje ke stránce.
 *
 * @param {React.ComponentType} [SubPage=EvaluationsPage] - obsah detailu;
 *   dá se přepsat, když je někde potřeba zobrazit něco jiného
 * @returns {JSX.Element}
 */
export const PageReadItem = ({
    SubPage = EvaluationsPage,
    ...props
}) => {
    return (
        <PageItemBase SubPage={SubPage} {...props} />
    )
}