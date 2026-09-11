# PiterCell — LeadPending Responsiva

Projeto desenvolvido para a atividade prática **"Layout Responsivo com Bootstrap"**.

| | |
|---|---|
| **Aluno(a)** | _[Piter Miranda Macedo]_ |
| **Disciplina** | Desenvolvimento Web III |
| **Tema escolhido** | LeadPending de assistência técnica de celulares |

## Descrição

PiterCell é a página de um negócio real da minha assistência técnica de celulares.
A ideia foi montar algo que o cliente da loja
pudesse realmente usar para entender os serviços, tirar dúvidas e pedir um
orçamento pelo WhatsApp.

## Objetivo da atividade

Praticar a estrutura de layout do Bootstrap 5 (menu, grid, cards) e a
adaptação da interface para diferentes tamanhos de tela, sem back-end nem
banco de dados.

## Estrutura de pastas

```
pitercell/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── color.css      → paleta de cores e estilos próprios
    ├── js/
    │   └── main.js         → JS próprio (exibe o toast de confirmação)
    └── img/                → imagens dos cards de serviço e logo
```

> A estrutura usa a pasta `assets/` (com `css/`, `js/` e `img/` dentro dela)
> em vez de `css/` e `img/` soltas na raiz — é a mesma ideia sugerida no
> enunciado, só organizada em uma pasta só.

## Funcionalidades

**Obrigatórias**
- Navbar fixo no topo com marca e 3+ opções de navegação (Serviços, Como
  funciona, Dúvidas) mais um atalho de contato.
- Seção de destaque (hero) logo abaixo do menu, com título, texto e botão de
  chamada para ação.
- Grid do Bootstrap organizando os cards de serviço (3 colunas no desktop, 1
  coluna no celular).
- 6 cards de serviço, cada um com imagem, título, texto curto e, em dois
  deles, um selo (badge).
- Seção "Como funciona" com o passo a passo do atendimento.
- Rodapé com identificação do projeto, contato e horário de atendimento.
- Layout responsivo, testado em telas de desktop, tablet e celular.

**Componentes extras do Bootstrap (mínimo de 2 pedidos, foram usados 4)**
- **Accordion** — perguntas frequentes (FAQ).
- **Carousel** — faixa giratória com os diferenciais da loja (garantia,
  atendimento rápido, peças de qualidade).
- **Modal** — janela com endereço, telefone e horário de funcionamento,
  aberta pelo botão "Endereço e horário" no menu.
- **Badges** — selo de destaque em dois cards de serviço e nos indicadores de
  confiança do hero.
- **Toast** — aviso de confirmação exibido ao clicar em qualquer botão que
  leva ao WhatsApp (é o único ponto do site com JavaScript próprio, exigido
  pelo próprio componente).

## Paleta de cores

| Cor | Hex | Uso |
|---|---|---|
| Roxo profundo | `#3d1863` | Navbar, rodapé, títulos, carrossel |
| Roxo médio | `#6b3fa0` | Hover de cards, detalhes |
| Roxo claro | `#f6f1fb` | Fundos de seção |
| Âmbar | `#d99a3d` | Botão de orçamento, badges, destaques |
| Tinta | `#221735` | Texto principal |
| Papel | `#fffdfb` | Fundo geral da página |

A ideia foi manter o roxo pedido, mas sair do tom quase preto/marinho da
versão anterior: usar um roxo mais vivo como cor de base e um âmbar como
contraste, lembrando as trilhas douradas de uma placa de circuito — ligação
direta com o tema de conserto de celular.

## Tecnologias utilizadas

Só o que já fazia parte do projeto original — nenhuma biblioteca nova foi
adicionada:

- HTML5
- CSS3 (arquivo próprio `assets/css/color.css`)
- Bootstrap 5 (via CDN)
- JavaScript puro (apenas para o toast de confirmação)

Não foi usado Node.js, framework de front-end, API externa nem banco de
dados, conforme pedido no enunciado.

## Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` diretamente no navegador (não precisa de
   servidor, build ou instalação de nada).

## Autor

_[Piter Miranda Macedo]_ — Desenvolvimento Web III
