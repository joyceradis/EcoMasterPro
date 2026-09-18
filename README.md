# EcoMaster Pro

**Referência rápida, cálculos e raciocínio estruturado em ecocardiografia.**

O EcoMaster Pro é uma aplicação web educacional criada para organizar parâmetros ecocardiográficos, cálculos derivados e etapas de interpretação em uma interface de consulta rápida. O projeto nasce da interseção entre medicina, educação e design de ferramentas clínicas.

## Objetivo

Ecocardiografia exige integrar medidas, indexações, contexto hemodinâmico e critérios que não devem ser interpretados isoladamente. O EcoMaster organiza esse processo em um fluxo visual que reduz a necessidade de alternar entre múltiplas tabelas e referências.

```text
PACIENTE + CONTEXTO
        ↓
MEDIDAS ECOCARDIOGRÁFICAS
        ↓
CÁLCULOS / INDEXAÇÕES
        ↓
FAIXAS DE REFERÊNCIA
        ↓
INTERPRETAÇÃO CONTEXTUAL
```

## Capacidades atuais

- referência rápida de medidas e valores;
- cálculos derivados e indexados;
- avaliação de massa e geometria ventricular;
- apoio à leitura de função sistólica e diastólica;
- parâmetros de ventrículo direito e estimativas hemodinâmicas;
- organização de conteúdo para ecocardiografia adulta, pediátrica, neonatal e fetal;
- interface responsiva para consulta durante estudo ou revisão.

## Princípios

**Cálculo não é diagnóstico.** O resultado numérico é uma camada do raciocínio, não sua conclusão.

**Valor de referência não é contexto clínico.** Ritmo, idade, superfície corporal, valvopatias, qualidade da janela e condições hemodinâmicas podem alterar a interpretação.

**Dados ausentes permanecem ausentes.** A interface não deve converter campo não preenchido em normalidade presumida.

**Ferramenta educacional, não laudo autônomo.** O produto organiza informação e raciocínio; não substitui aquisição adequada de imagens, interpretação médica ou diretrizes vigentes.

## Tecnologia

Projeto client-side, sem backend obrigatório:

- HTML5;
- CSS3;
- JavaScript;
- execução direta em navegador;
- arquitetura adequada para publicação estática.

## Estrutura principal

```text
EcoMasterPro/
├── index.html
├── index2.html
├── script.js
├── script-2.js
├── styles.css
├── styles-v2.css
├── README.md
└── LICENSE
```

A existência de versões paralelas preserva experimentação de interface sem apagar a evolução anterior do projeto.

## Execução local

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Direção do produto

O roadmap conceitual inclui maior rastreabilidade das referências, versionamento de critérios, expansão das calculadoras, organização por cenário clínico e testes automatizados para fórmulas e regras interpretativas.

## Autoria

Projeto idealizado e desenvolvido por **Dra. Joyce Radis**, médica, como ferramenta de estudo e exploração de interfaces clínicas orientadas por evidência.

## Licença

Consulte o arquivo [LICENSE](LICENSE).
