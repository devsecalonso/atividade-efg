# Plano: criar 1 página HTML por item do menu

## Informação coletada
- O projeto atual tem: `index.html`, `fotos.html`, `style.css`, `main.js` e pasta `img/`.
- O `index.html` contém seções com IDs:
  - `sec-carta` (Carta)
  - `sec-comp` (Comparativo)
  - `sec-provas` (Compromissos)
  - `sec-promessas` (Promessas)
  - `sec-contato` (Contato)
  - `sec-cta` (Dizer sim)
- O menu atualmente (no `index.html`) tem links:
  - Carta (âncora: `#sec-carta`)
  - Fotos (`fotos.html`)
  - Comparativo (`#sec-comp`)
  - Compromissos (`#sec-provas`)
  - Promessas (`#sec-promessas`)
  - Contato (`#sec-contato`)
  - Dizer sim (`#sec-cta`)
- `fotos.html` já existe e contém duas seções próprias de fotos.
- `main.js` contém lógica do botão “Clique aqui pra dizer SIM” (`showResult()`) e do envio do formulário (`contact-form`).
- `style.css` estiliza todas as seções/componentes (nav, grid de fotos, comparativo, promises, form, etc.).

## O que será feito
Criar páginas HTML separadas para cada item do menu, reutilizando o mesmo `<header>`, `<nav>`, `<footer>` e importando `style.css` e `main.js`.

### Páginas novas (uma por item do menu)
- `carta.html`
- `comparativo.html`
- `compromissos.html`
- `promessas.html`
- `contato.html`
- `dizer-sim.html`

> Observação: `fotos.html` já existe, então não precisa ser criada.

### Conteúdo de cada página
- Cada página vai conter apenas o conteúdo relevante (ex: `carta.html` só a seção `sec-carta`, etc.), mantendo a estrutura semântica (`<section>`, headings, etc.).
- As páginas que não usam o formulário ainda assim podem carregar `main.js` (para manter consistência), mas o conteúdo principal muda.

### Atualização do menu
- Atualizar `index.html` para que cada item do menu aponte para a nova página correspondente (em vez de `#sec-*`).
- Garantir que a nav esteja consistente entre todas as páginas novas.

## Dependent Files to be edited
- `index.html` (atualizar nav e links)
- `fotos.html` (atualizar nav para apontar para as novas páginas)
- Criar novos arquivos HTML listados acima.

## Followup steps
- Abrir `index.html`, navegar pelos links e confirmar que:
  - cada página abre corretamente
  - o botão CTA continua funcional em `dizer-sim.html`
  - o formulário continua funcional em `contato.html`
- (Opcional) Checar responsividade em celular.

<ask_followup_question>
Confirma que os novos arquivos devem se chamar exatamente:
- `carta.html`, `comparativo.html`, `compromissos.html`, `promessas.html`, `contato.html`, `dizer-sim.html`
( e manter `fotos.html` como está )?
</ask_followup_question>

