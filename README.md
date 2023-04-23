## Descrição

POC para registrar logs de forma automática dos métodos de uma classe.

## Estratégia aplicada

Modificação do prototype de uma classe para substituir os métodos originais adicionando uma camada automática de logging. Nessa POC em específico apliquei a estratégia de duas formas diferentes:

1) Typescript decorator na classe
2) Inicialização no constructor da classe

## Objetivos e resultados

| Informações a serem capturadas                          | Resultado |
|---------------------------------------------------------|-----------|
| Parâmetros usados nas invocações dos métodos            | ✅ |
| Tempo em milisegundos calculado da execução dos métodos | ✅ |
| Mensagem de erro em caso de falha na execução           | ✅ |
| Nome da classe logada                                   | ✅ |
| Nome da classe de implementação de log utilizada        | ✅ |

| Comportamentos esperados                                      | Resultado |
|---------------------------------------------------------------|-----------|
| Log automático de `info` antes da chamada do método           | ✅ |
| Log automático de `info` após chamada bem sucedida do método  | ✅ |
| Log automático de `error` após chamada mal sucedida do método | ✅ |

## Estrutura e arquivos

Dentro da pasta `src/services/logging` estão os arquivos com a estratégia aplicada. Foram criadas duas classes: `GreeterService` e `TalkerService` que simulam classes de serviço com suas devidas funcionalidades.

A classe `TalkerService` teve seu prototype modificado através de um decorator que aciona a função de modificação.
A classe `GreeterService` teve seu prototype modificado através da chamada da função de modificação no seu constructor e a injeção de um serviço de log customizado (`LoggerService`).

No arquivo `src/main.ts` está a criação das instâncias das classes de serviço e as chamadas de seus métodos.

## Instalação e execução

```bash
$ npm install
$ npm run start:dev
```