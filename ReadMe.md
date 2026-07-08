<h1 align="center">O repozitáři</h1>

Toto repo se stará o zobrazení průběhu studia / zkoušek, známky, pokusy, předměty, semestry v rámci modelu StudentGQLModel + ProgramGQLModel + UserGQLModel

<h2 align="center">Změny a poznatky</h2>

### 12.4.2026

- zahájení práce na projektu
- vytvoření projektového npmjs package
- základní fragmenty

### 13.4.2026

- pokus o link modelu ProgramGQL se StudentGQL do hlavního modelu UserGQL
- zkouska commitu spolupracujícího na projektu

### 29.4.2026

- reorganizace a rekonstrukce projektu

### 6.5.2026

- pridani update mutace

### 7.5.2026

- rozšíření o ProgramGQLModel a UserGQLModel
- npmjs upload v0.7.5

### 11.5.2026

- implementace editu programu v kartě studenta
- known issues: člověk musí zadat UUID programu, což je uživatelsky složité

### 13.5.2026 + 2.PD

- implementace EntityLookup a SearchAsync pro zajištění pohodlnější změny programu
- npmjs upload v0.8.0

##### POZNATKY Z 2.PD:
  * chyba při rychlé změně za sebou není zaviněna naší chybou, ale je to globální chyba
  * nutné rozšířit o další modely, jinak všechno v pořádku

### 1.6.2026
- mutace create, delete
- pridani modelu Subject
- pridani modelu State
- tabulka s hodnocením v1

### 8.7.2026
- tabulka s hodnocením v2 (nyní dle semestru)
- uprava /view stranky

## Jak spustit app?

```cmd
npm run dev -w @pajapaja/app_student
```

## Jak sestavit app?

```cmd
npm run build -w @pajapaja/app_student
```

### Odkaz na npmjs.org:
- https://www.npmjs.com/package/@pajapaja/app_student
