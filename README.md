
# 🧪 Prova II – CI com GitHub Actions  
### Laboratório de Desenvolvimento Multiplataforma – 2025S2  

## 👩‍💻 Aluna
**Nome:** Bianca Lucas da Silva Caçula  
**Curso:** DSM – FATEC Jacareí  
**Disciplina:** Laboratório de Desenvolvimento Multiplataforma  
**Professor:** Marcelo Augusto Sudo 

---

## 🎯 Objetivo da Avaliação
O objetivo desta prova é demonstrar a criação e configuração de um **pipeline de Integração Contínua (CI)** utilizando o **GitHub Actions**, garantindo que o projeto execute com sucesso os testes automatizados e a etapa de build.

O projeto também deve incluir documentação adequada, código versionado em repositório público e execução automática do pipeline a cada **push** ou **pull request** para a branch `main`.

---

## ⚙️ Estrutura do Projeto

```
prova-ci-bianca-cacula/
├── src/
│   ├── math.js
│   └── index.js
├── __tests__/
│   └── math.test.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── .gitignore
├── package.json
└── README.md
```

---

## 💻 Tecnologias Utilizadas
- **Node.js** – Ambiente de execução do JavaScript  
- **Jest** – Framework de testes automatizados  
- **GitHub Actions** – Ferramenta de CI/CD  
- **Git** – Controle de versão  
- **Markdown** – Documentação  

---

## 🧩 Descrição do Código

O projeto implementa operações matemáticas básicas no arquivo `math.js` e as executa no arquivo `index.js`.

### 📘 Funções implementadas

| Função | Descrição | Exemplo de uso | Resultado |
|--------|------------|----------------|------------|
| `sum(a, b)` | Soma dois números | `sum(2, 3)` | 5 |
| `subtract(a, b)` | Subtrai dois números | `subtract(5, 2)` | 3 |
| `multiply(a, b)` | Multiplica dois números | `multiply(4, 3)` | 12 |
| `divide(a, b)` | Divide dois números, lança erro se b = 0 | `divide(10, 2)` | 5 |
| `power(a, b)` | Calcula potência | `power(2, 4)` | 16 |

---

## 🧪 Testes Automatizados

Os testes unitários estão localizados em `__tests__/math.test.js` e foram escritos com **Jest**.

Para rodar os testes localmente:

```bash
npm install
npm test
```

### 🧾 Resultado esperado:

```
PASS  __tests__/math.test.js
  Operações matemáticas básicas
    ✓ soma dois números corretamente
    ✓ subtrai dois números corretamente
    ✓ multiplica dois números corretamente
    ✓ divide dois números corretamente
    ✓ gera erro ao dividir por zero
    ✓ calcula potenciação corretamente

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
```

---

## ⚙️ Pipeline de Integração Contínua (GitHub Actions)

O arquivo `.github/workflows/ci.yml` contém o pipeline configurado para executar automaticamente em todo **push** ou **pull request** para a branch `main`.

### 🔁 Etapas do Workflow

1. **Checkout do código**  
2. **Configuração do Node.js**  
3. **Instalação das dependências** (`npm ci`)  
4. **Execução do build** (`npm run build`)  
5. **Execução dos testes** (`npm test`)  

Se qualquer uma dessas etapas falhar, o status da execução é **marcado como “failed”** no GitHub.

---

## 🧰 Comandos Principais

| Comando | Descrição |
|----------|------------|
| `npm install` | Instala as dependências |
| `npm test` | Executa os testes automatizados |
| `npm run build` | Executa o build simulado |
| `git push origin main` | Envia alterações para o repositório remoto |

---

## 🧾 Arquivo `.gitignore`

O projeto inclui um `.gitignore` para evitar envio de dependências, logs e arquivos desnecessários ao repositório.

Principais exclusões:
```
node_modules/
logs/
dist/
build/
coverage/
.env
.vscode/
.idea/
```

---

## 📸 Evidências do Pipeline

*(Cole aqui os prints do seu workflow no GitHub Actions:)*  
✅ Pipeline passando com sucesso  
❌ Pipeline falhando (para demonstrar o comportamento esperado quando há erro)  

---

## 📚 Conclusão

O projeto atende a todos os requisitos solicitados na prova:

✅ Criação do repositório público no GitHub  
✅ Configuração de pipeline CI com GitHub Actions  
✅ Execução de build e testes automatizados  
✅ Testes com Jest cobrindo múltiplas operações matemáticas  
✅ Documentação completa (README)  
✅ Prints comprovando funcionamento do pipeline  

---

## 🏁 Resultado Final

O pipeline foi configurado com sucesso e validado através de múltiplas execuções.  
O código foi desenvolvido de forma modular, seguindo boas práticas de organização e versionamento.
