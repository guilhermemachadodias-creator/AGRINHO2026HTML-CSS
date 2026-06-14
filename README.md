# AGRINHO2026HTML-CSS
Projeto feito para o agrinho
1. Visão Geral

AgroParaná é uma plataforma web desenvolvida para auxiliar produtores rurais e técnicos agrícolas na realização de cálculos essenciais para o planejamento agrícola.

A aplicação oferece ferramentas para:

Cálculo de semeadura
Cálculo de adubação
Cálculo de irrigação
Estimativa de custos agrícolas
Dashboard consolidado dos resultados

O sistema foi desenvolvido utilizando apenas:

HTML5
CSS3
JavaScript Vanilla
2. Objetivo

Fornecer uma interface moderna, intuitiva e acessível para auxiliar no gerenciamento técnico de atividades agrícolas.

3. Estrutura do Projeto
AgroParaná/
│
├── index.html
├── style.css
└── script.js
index.html

Responsável pela estrutura da aplicação.

Contém:

Hero Section
Navegação por abas
Formulários de cálculo
Dashboard
Recursos de acessibilidade
style.css

Responsável pela aparência da plataforma.

Contém:

Sistema de cores
Layout responsivo
Animações
Componentes visuais
Modo alto contraste
Controle de tipografia
script.js

Responsável pela lógica da aplicação.

Contém:

Cálculos agrícolas
Navegação entre abas
Dashboard dinâmico
Notificações Toast
Acessibilidade
Animações
4. Funcionalidades
4.1 Semeadura

Calcula a quantidade total de sementes necessárias.

Fórmula

Total=
A
ˊ
rea×Sementes por hectare

Exemplo

Área: 100 ha

Sementes: 60.000 sementes/ha

Resultado:

6.000.000 sementes
4.2 Adubação

Calcula a quantidade total de fertilizante.

Fórmula

Total=
A
ˊ
rea×Dose

Exemplo

Área: 50 ha

Dose: 300 kg/ha

Resultado:

15.000 kg
4.3 Irrigação

Calcula o volume total de água necessário.

Fórmula

Volume=
A
ˊ
rea×L
a
^
mina×10

Onde:

Área em hectares
Lâmina em milímetros
Resultado em m³
Exemplo

Área: 10 ha

Lâmina: 20 mm

Resultado:

2.000 m³
4.4 Custos Agrícolas

Calcula o custo total da operação.

Fórmula

Custo Total=Custo por hectare×
A
ˊ
rea

Exemplo

Custo por hectare:

R$ 2.500

Área:

100 ha

Resultado:

R$ 250.000
5. Dashboard

O dashboard reúne todos os cálculos realizados durante a sessão.

Indicadores disponíveis:

Total de sementes
Total de fertilizante
Volume de irrigação
Custo total

Características:

Atualização automática
Barras de progresso animadas
Comparação visual entre resultados
6. Recursos de Acessibilidade

A plataforma possui:

Aumentar fonte

Botão:

A+

Aumenta o tamanho da fonte.

Diminuir fonte

Botão:

A-

Reduz o tamanho da fonte.

Alto contraste

Botão:

◐

Alterna para modo de alto contraste.

7. Tecnologias Utilizadas
Front-End
HTML5
CSS3
JavaScript ES6
Bibliotecas Externas
Google Fonts
DM Serif Display
Inter
JetBrains Mono
Font Awesome

Utilizada para exibição dos ícones.

8. Fluxo de Funcionamento
Usuário acessa o sistema
          │
          ▼
Seleciona uma ferramenta
          │
          ▼
Preenche os campos
          │
          ▼
Executa o cálculo
          │
          ▼
Resultado exibido
          │
          ▼
Dashboard atualizado
9. Responsividade

O sistema foi desenvolvido para:

Desktop
Notebook
Tablet
Smartphone

Adaptações automáticas:

Navegação compacta em telas pequenas
Cards responsivos
Dashboard adaptável
Layout otimizado para mobile
10. Segurança e Validação

Validações implementadas:

Campos obrigatórios
Tratamento de valores vazios
Conversão segura para números
Prevenção de resultados inválidos

Quando um campo não é preenchido corretamente, o sistema exibe uma mensagem:

Preencha todos os campos.
11. Melhorias Futuras

Possíveis evoluções do projeto:

Cadastro de usuários
Armazenamento em banco de dados
Histórico de cálculos
Exportação em PDF
Relatórios de safra
Integração com APIs meteorológicas
Cálculo de defensivos agrícolas
Controle de estoque
Planejamento de safras
Modo offline (PWA)
12. Aluno Guilherme Alves 

Projeto: AgroParaná – Plataforma Agrícola Inteligente

Versão: 1.0

Arquitetura: Front-end Web Responsivo

Ano: 2026
