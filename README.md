# 🤠 Petição Rodeio — Júlia

## Estrutura do projeto

```
julia/
├── index.html        ← página principal (abra esse no navegador)
├── css/
│   └── style.css     ← todos os estilos e responsividade
├── js/
│   └── main.js       ← lógica de upload de fotos e botão
├── img/              ← coloque as fotos aqui (opcional)
└── README.md         ← este arquivo
```

---

## Como usar

1. **Abra** o arquivo `index.html` no navegador (Chrome, Safari, etc.)
2. **Clique** nos quadradinhos pontilhados para adicionar as fotos
3. **Personalize** os textos no `index.html` com seus dados reais (veja abaixo)
4. **Envie** o link ou o arquivo para os pais da Júlia 💌

---

## Textos para personalizar no index.html

Procure e substitua os seguintes trechos:

| Trecho no código           | O que colocar                        |
|---------------------------|--------------------------------------|
| `[data do evento]`        | Ex: 28 de junho de 2025              |
| `[horário]`               | Ex: 23h                              |
| `[Coloque aqui como vão…]`| Ex: Carona com a mãe da Maria        |

---

## Fotos

As fotos são carregadas diretamente pelo navegador ao clicar nos slots.
Você pode também colocar imagens na pasta `img/` e referenciar no HTML assim:

```html
<img src="img/foto1.jpg" alt="Nós juntas">
```

---

## Responsividade

O site adapta automaticamente para:
- 📱 Celular (< 400px)
- 📱 Celular médio (< 640px)
- 💻 Tablet / Desktop (> 640px)
