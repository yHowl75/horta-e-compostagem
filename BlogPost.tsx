import { useParams, Link } from "react-router";
import { Calendar, User, Clock, ArrowLeft, Heart, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

interface Comment {
  id: number;
  user: string;
  text: string;
}

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  likes: number;
  comments: Comment[];
}

const blogPostsData: BlogPostData[] = [
  {
    id: 1,
    title: "Iniciando Nosso Projeto de Horta e Compostagem Automatizada",
    excerpt: "Hoje marcamos o início oficial do nosso projeto escolar integrando horta, compostagem e automatização. Conheça como tudo começou e nossos objetivos.",
    fullContent: `Hoje é um dia especial para nossa turma! Após meses de planejamento e reuniões com a direção da escola, finalmente iniciamos oficialmente nosso projeto de Horta Escolar com Compostagem Automatizada.

## Por Que Este Projeto?

Durante nossas aulas de Ciências e Biologia, estudamos os ciclos biogeoquímicos e ficamos impressionados com um dado: no Brasil, cerca de 50% dos resíduos sólidos urbanos são orgânicos e a maioria vai para aterros sanitários. Lá, sem oxigênio adequado, esses materiais produzem metano (CH₄), um gás de efeito estufa 25 vezes mais potente que o CO₂.

Nossa escola produz diariamente restos de alimentos da cantina: cascas de frutas, sobras de verduras, borra de café da sala dos professores. Estimamos cerca de 8-12kg de resíduos orgânicos por dia que poderiam virar adubo de alta qualidade!

## Nossos Objetivos

### 1. Educacional
Aprender sobre decomposição, microbiologia do solo, fotossíntese e desenvolver habilidades em programação com Arduino/ESP32. Aplicar matemática através da análise de dados, gráficos e estatísticas.

### 2. Ambiental  
Desviar 100% dos resíduos orgânicos da escola dos aterros, produzir adubo orgânico rico em nutrientes e cultivar alimentos sem agrotóxicos. Reduzir a pegada de carbono da escola.

### 3. Tecnológico
Construir sistema de monitoramento IoT (Internet das Coisas), desenvolver dashboard web com React e TypeScript, implementar alertas automáticos e coletar dados para análise.

### 4. Social
Envolver toda comunidade escolar (alunos, professores, funcionários), doar parte da produção para famílias em vulnerabilidade e criar workshops sobre compostagem para a vizinhança.

## A Equipe

Somos 8 alunos do 2º ano do Ensino Médio, divididos em três times:
- Time Biológico: Responsável pela composteira e horta
- Time Tecnológico: Cuida dos sensores, programação e dashboard  
- Time Educação: Documenta o processo e faz workshops

Contamos com apoio da professora de Biologia (Dra. Marina) e do professor de Física (Dr. Roberto), além da direção que cedeu um espaço de 50m² no pátio da escola.

## Recursos e Parcerias

Conseguimos R$ 800,00 da APM (Associação de Pais e Mestres), doação de materiais como madeira de pallets, caixas plásticas e terra vegetal. Também temos parceria com loja de eletrônica (20% de desconto em sensores) e apoio técnico de um engenheiro agrônomo voluntário.

## Próximos Passos

Esta semana já começamos a limpeza e preparação do terreno, planejamento dos canteiros e pesquisa sobre plantas adequadas ao clima local. Na próxima semana vamos construir a composteira e começar a coletar os resíduos da cantina.

Estamos muito empolgados! Este projeto une tudo que amamos: ciência, tecnologia, sustentabilidade e trabalho em equipe.`,
    date: "15 de Março, 2026",
    author: "Equipe EcoTech",
    readTime: "7 min",
    category: "Novidades",
    likes: 45,
    comments: [
      { id: 1, user: "Prof. Marina", text: "Muito orgulhosa de vocês! Este projeto vai transformar nossa escola!" },
      { id: 2, user: "Carlos (pai)", text: "Parabéns pela iniciativa! Quando começam os workshops para a comunidade?" }
    ],
  },
  {
    id: 2,
    title: "Construindo a Composteira: Do Zero ao Primeiro Resíduo",
    excerpt: "Relato detalhado de como construímos nossa composteira usando materiais recicláveis. Incluindo lista completa de materiais e passo a passo ilustrado.",
    fullContent: `Hoje foi dia de colocar a mão na massa - literalmente! Passamos 6 horas construindo nossa composteira de vermicompostagem (com minhocas). Foi cansativo, mas extremamente gratificante ver o resultado final.

## Por Que Vermicompostagem?

Decidimos pela vermicompostagem (compostagem com minhocas) por vários motivos: é 50-60% mais rápida que compostagem tradicional, não produz odor quando bem manejada, gera húmus de qualidade superior rico em nutrientes e é fascinante ver as minhocas trabalhando!

## Materiais Utilizados

### Estrutura Principal
- 3 caixas plásticas de 50 litros (doadas pelo supermercado local)
- 1 torneira plástica de 1/2 polegada (R$ 8,00)
- Tela mosquiteiro 1m² (R$ 12,00)
- Furadeira com broca de 5mm e 10mm

### Substrato Inicial
- 10kg de terra vegetal (R$ 15,00)
- 5kg de húmus de minhoca para inocular (R$ 20,00)
- 3kg de folhas secas trituradas (coletadas no pátio)
- 500g de minhocas californianas - Eisenia fetida (R$ 35,00)

Custo total: R$ 90,00 (bem abaixo do orçado!)

## Passo a Passo da Construção

### 1. Preparação da Caixa Coletora (Inferior)
Esta caixa fica embaixo e coleta o chorume (líquido rico em nutrientes). Instalamos a torneira a 5cm do fundo usando serra copo, vedamos com silicone e NÃO fizemos furos nesta caixa.

Dica importante: Testamos a vedação enchendo com água antes de continuar. Tivemos que refazer a vedação 2 vezes até ficar perfeita!

### 2. Preparação das Caixas Digestoras (Meio e Superior)
Estas caixas são onde os resíduos são processados pelas minhocas. Fizemos 20-25 furos de 10mm no fundo de cada caixa com espaçamento regular. Também fizemos 15-20 furos de 5mm em cada lateral para aeração e cobrimos internamente com tela mosquiteiro.

A tela evita que as minhocas escapem e que mosquitos entrem.

### 3. Preparação do Substrato Inicial

Montamos camadas na Caixa Digestora 1 (de baixo para cima):

**Camada 1 - Drenagem (5cm):** Folhas secas inteiras mais pedaços de papelão para evitar entupimento dos furos.

**Camada 2 - Terra (3cm):** Terra vegetal pura para fornecer microbiota benéfica.

**Camada 3 - Húmus (2cm):** Húmus de minhoca comprado para inocular com minhocas iniciadoras e microorganismos.

**Camada 4 - Resíduos Iniciais (5cm):** Cascas de banana, cenoura, beterraba picadas pequeno, borra de café e cascas de ovo trituradas. Deixamos curtir por 3 dias antes de adicionar as minhocas.

**Camada 5 - Cobertura (3cm):** Folhas secas picadas mais papelão picado para manter umidade e evitar moscas.

## Introdução das Minhocas

No dia 3 após preparar o substrato, compramos 500g de Eisenia fetida (minhoca californiana vermelha). Esta espécie vive em matéria orgânica em decomposição, tolera densidade populacional alta, reproduz rapidamente e processa 100% do próprio peso em resíduos por dia.

Fizemos aclimatação: colocamos as minhocas sobre o substrato, cobrimos com papel jornal úmido, deixamos a luz acesa. Em 20 minutos, elas desceram sozinhas fugindo da luz.

## Primeiros Resíduos Processados

No dia 5, adicionamos os primeiros resíduos da cantina: 1kg de cascas de frutas (banana, maçã, mamão), 500g de cascas de vegetais, 300g de borra de café e 100g de cascas de ovo trituradas.

SEMPRE: picamos em pedaços pequenos (2-3cm), enterramos levemente no substrato, cobrimos com folhas secas e verificamos umidade.

## Aprendizados e Desafios

### Erro 1: Furos Muito Pequenos
Inicialmente fizemos furos de 3mm, mas entupiam fácil. Refizemos com 10mm e funcionou perfeitamente.

### Erro 2: Substrato Muito Úmido  
No primeiro dia, exageramos na água. Tivemos que adicionar folhas secas e deixar respirar por 1 dia.

### Acerto 1: Tela Mosquiteiro
Preveniu entrada de mosquitos desde o início. Essencial!

### Acerto 2: Papelão Picado
Absorve excesso de umidade e é rico em carbono. Virou nosso coringa!

## Resultados Primeiros 7 Dias

Após uma semana, o volume dos 3kg iniciais reduziu 40%, não há odor (cheiro de terra fresca), as minhocas estão ativas, temperatura entre 24-26°C e coletamos 500ml de chorume que usamos diluído na horta.

A composteira está belíssima e totalmente funcional! Calculamos que em 3 meses teremos população de 2000+ minhocas, podendo até doar para outras escolas interessadas.`,
    date: "20 de Março, 2026",
    author: "João Silva & Maria Santos",
    readTime: "10 min",
    category: "Compostagem",
    likes: 68,
    comments: [
      { id: 1, user: "Prof. Roberto", text: "Excelente documentação! Isso pode virar um manual para outras escolas." },
      { id: 2, user: "Beatriz", text: "Onde vocês compraram as minhocas? Quero fazer em casa!" }
    ],
  },
  {
    id: 3,
    title: "Instalando Sensores IoT: Composteira Inteligente",
    excerpt: "Como transformamos nossa composteira comum em um sistema inteligente com ESP32, sensores DHT22, e envio de dados via WiFi para a nuvem.",
    fullContent: `Hoje foi o dia mais empolgante do projeto! Finalmente instalamos os sensores e transformamos nossa composteira em um sistema IoT (Internet of Things) completo. Agora ela "conversa" conosco em tempo real!

## Por Que Automatizar?

A compostagem precisa de condições específicas: Temperatura entre 40-65°C (fase termofílica ótima), Umidade entre 50-60% (equilíbrio perfeito) e pH entre 6.5-8.0 (neutro a levemente alcalino).

Verificar manualmente é trabalhoso e impreciso. Com sensores, temos monitoramento 24/7 automático, dados precisos com resolução de 0.1°C e 1%, histórico completo para análise e alertas quando algo sai da faixa ideal.

## Hardware Selecionado

### Microcontrolador: ESP32 DevKit v1

Por que ESP32 e não Arduino? WiFi integrado (essencial para IoT), Bluetooth para futuro app mobile, mais memória RAM (520KB vs 2KB do Arduino Uno), dual-core que processa sensores e WiFi simultaneamente, e preço similar (R$ 35-45).

Especificações: Clock de 240MHz, Tensão de 3.3V, 34 GPIOs e ADC de 12-bit.

### Sensor Principal: DHT22 (AM2302)

Por que DHT22? Mede temperatura E umidade em um único sensor, precisão de ±0.5°C e ±2% UR, faixa de -40 a 80°C / 0-100% UR, protocolo digital (fácil programar), baixo consumo e custo de R$ 25.

Escolhemos DHT22 pela precisão superior ao DHT11.

### Outros Componentes
- Resistor 10kΩ pull-up para DHT22
- Protoboard 400 pontos para testes
- Jumpers macho-macho e macho-fêmea
- Fonte USB 5V 2A para alimentação contínua
- Case plástico IP65 para proteção contra umidade

Custo total hardware: R$ 120

## Esquema de Conexões

DHT22 conectado ao ESP32:
- Pino 1 (VCC) conectado ao 3.3V do ESP32
- Pino 2 (DATA) conectado ao GPIO 4
- Pino 4 (GND) conectado ao GND
- Resistor 10kΩ entre VCC e DATA (pull-up)

ALERTA: Primeiro conectamos no 5V e queimou o sensor! ESP32 trabalha com 3.3V. Aprendemos da forma difícil (e custou R$ 25).

## Programação do ESP32

Usamos Arduino IDE com as bibliotecas DHT sensor library (Adafruit), Adafruit Unified Sensor, WiFi (built-in ESP32) e HTTPClient (built-in ESP32).

O código lê os sensores a cada 60 segundos, verifica se a leitura é válida, exibe no Serial Monitor e envia para o servidor Firebase via HTTP POST.

## Desafios e Soluções

### Problema 1: Leituras NaN (Not a Number)
Causa: DHT22 precisa de tempo para inicializar e intervalo mínimo entre leituras.
Solução: Adicionar delay de 2 segundos após inicializar e entre leituras.

### Problema 2: WiFi Desconecta
Causa: Sinal fraco mais ESP32 entra em sleep mode.
Solução: Verificar conexão no início do loop e reconectar se necessário. Também instalamos repetidor WiFi próximo à composteira (R$ 80 doado pela escola).

### Problema 3: Dados Inconsistentes
Causa: Umidade da composteira danificou sensor (condensação interna).
Solução: Selamos sensor com termo-retrátil (deixando ponta exposta), instalamos dentro de case IP65 com furos para circulação, e posicionamos sensor a 10cm acima do composto (não em contato direto).

## Instalação Física

O circuito foi protegido em case plástico hermético de 15x10x5cm com furos laterais de 5mm, vedação com silicone e instalado na lateral externa da composteira.

O sensor DHT22 tem cabo extensor de 50cm soldado, termo-retrátil em todas soldas, ponta do sensor dentro da composteira (10cm acima do composto) e fixado com braçadeira de nylon.

A alimentação usa cabo USB de 3m, fonte 5V 2A instalada na tomada do depósito próximo.

## Primeiras Leituras

Dia 1 (composteira nova antes de aquecer): Temperatura 28.3°C, Umidade 67%, Status Normal.

Dia 3 (início da fase termofílica): Temperatura 45.8°C, Umidade 58%, Status IDEAL!

Dia 7 (pico de atividade): Temperatura 58.2°C, Umidade 54%, Status IDEAL!

As minhocas se moveram para camadas mais fundas (mais frescas). Comportamento esperado!

## Dados em Tempo Real

Configuramos Firebase Realtime Database (gratuito até 1GB) com estrutura JSON simples, leituras a cada 1 minuto e armazenamento de 30 dias (depois arquivamos).

## Benefícios Observados

Após 1 semana com sensores detectamos problema cedo (umidade caiu para 42% e adicionamos água antes de prejudicar as minhocas), otimizamos adição de resíduos, tivemos aprendizado rico sobre correlações entre temperatura e tipos de resíduos, e geramos dados incríveis para a Feira de Ciências!

Este projeto está ficando cada vez mais profissional! A união de biologia e tecnologia é incrível!`,
    date: "22 de Março, 2026",
    author: "Pedro Costa & Ana Oliveira",
    readTime: "12 min",
    category: "Automatização",
    likes: 92,
    comments: [
      { id: 1, user: "Prof. Roberto", text: "Documentação técnica impecável! Já pensaram em publicar um artigo científico?" },
      { id: 2, user: "Eng. Marcos", text: "Parabéns! Uso ESP32 profissionalmente e o código de vocês está muito bem estruturado." },
      { id: 3, user: "Laura", text: "Onde aprenderam a programar assim? Curso online?" }
    ],
  },
  {
    id: 4,
    title: "Primeira Semana de Dados: Descobertas Surpreendentes",
    excerpt: "Análise completa dos dados coletados na primeira semana com 10.080 leituras. Descobrimos padrões fascinantes sobre temperatura, umidade e comportamento das minhocas.",
    fullContent: `Uma semana completa de monitoramento automatizado! Coletamos 10.080 leituras (1 por minuto, 24/7) e os resultados são fascinantes.

## Metodologia de Coleta

O sistema de monitoramento usa ESP32 lendo DHT22 a cada 60 segundos, dados enviados para Firebase Realtime Database, backup local em cartão microSD para redundância, totalizando 7 dias × 24h × 60min = 10.080 medições.

Monitoramos Temperatura (°C) com precisão de ±0.5°C, Umidade Relativa (%) com precisão de ±2% e Timestamp em milissegundos desde boot.

## Resultados: Temperatura

Estatísticas Gerais: Mínima de 23.8°C (03:42 do dia 21/03), Máxima de 61.3°C (14:18 do dia 24/03), Média de 45.2°C, Mediana de 47.1°C e Desvio padrão de 9.3°C.

### Fases Identificadas

Dia 1-2 - Fase Mesofílica (20-40°C): Média 28.5°C, microrganismos mesofílicos dominantes, decomposição lenta mas importante, quebra inicial de açúcares simples.

Dia 3-6 - Fase Termofílica (40-65°C): Média 52.7°C, Pico 61.3°C (dentro do ideal!), bactérias termofílicas ativas, decomposição rápida de proteínas e celulose, eliminação de patógenos e sementes.

Dia 7 - Início da Estabilização: Média 48.9°C (leve queda), tendência de estabilização, material já 40% decomposto.

### Padrões Diários

Descobrimos um padrão circadiano claro:
- Manhã (06:00-10:00): Temperatura sobe rápido (+8°C em 4h)
- Tarde (12:00-16:00): Pico térmico (até +3°C acima da média)
- Noite (20:00-02:00): Queda gradual (-5°C em 6h)
- Madrugada (02:00-06:00): Temperatura mínima estável

Hipótese: A temperatura ambiente influencia, mas a atividade microbiana (que aumenta com calor) é o fator principal.

## Resultados: Umidade

Estatísticas Gerais: Mínima 41.2% (dia 23/03 - precisou intervenção!), Máxima 72.8% (dia 20/03 - após adição de resíduos úmidos), Média 57.3%, Faixa ideal 50-60% mantida 78% do tempo.

### Eventos Críticos

Dia 23/03 - Alerta de Baixa Umidade: Umidade caiu para 41.2% às 11:30, sistema enviou alerta automático. Intervenção: Adicionamos 500ml de água às 12:00, umidade subiu para 58% em 2 horas. Aprendizado: Composteira perde muita água em dias quentes.

Dia 25/03 - Excesso de Umidade: Adicionamos resíduos muito úmidos (melancia), umidade subiu para 72.8%. Sintomas: Início de odor (decomposição anaeróbica). Intervenção: Adicionamos 300g de papelão picado + folhas secas, reviramos o composto para arejar. Umidade normalizou em 68% (6h depois) e 59% (24h depois).

### Correlação Temperatura × Umidade

Descobrimos correlação negativa moderada (r = -0.43): Quando temperatura sobe, umidade cai (evaporação). Quando temperatura cai, umidade tende a subir (condensação).

Padrão: Temperatura Alta (>50°C) → Umidade Baixa (45-55%), Temperatura Moderada (40-50°C) → Umidade Ideal (55-60%), Temperatura Baixa (<40°C) → Umidade pode ficar alta (>65%).

## Comportamento das Minhocas

### Movimentação Vertical

Dias Frios (temp < 40°C): Minhocas em toda profundidade, mais ativas na superfície, processamento rápido.

Dias Quentes (temp > 55°C): Minhocas migram para camadas profundas (mais frias), apenas algumas na superfície à noite. Estratégia de sobrevivência inteligente!

### População Estimada

Começamos com 500g ≈ 1000 minhocas. Após 7 dias estimamos (por amostragem): População adulta ~1100 (+10%), Casulos ~50 (reprodução iniciada!), Juvenis ~30, Projeção 3 meses: 3000-5000 minhocas.

### Saúde das Minhocas

Indicadores positivos: Cor vermelha viva (saudáveis), movimento ágil quando perturbadas, presença de casulos (reprodução ativa), sem mortalidade observada, clitelo desenvolvido (minhocas maduras).

## Análise de Resíduos Processados

Volume Adicionado (7 dias): Total de 10.8kg distribuídos em cascas de frutas (45%), cascas de vegetais (30%), borra de café (15%), cascas de ovo (5%), outros (5%).

Volume Reduzido: De ~12 litros inicial para ~7 litros final, redução de 41.6%.

## Comparação com Literatura Científica

Nossa Composteira vs. Ideal Teórico:
- Temp. Termofílica: Ideal 40-65°C, Nossa Média 52.7°C - ÓTIMO
- Umidade: Ideal 50-60%, Nossa Média 57.3% - ÓTIMO  
- Relação C/N: Ideal 25-30:1, Estimado ~28:1 - BOM

Conclusão: Estamos com desempenho acima da média para projeto escolar!

## Lições Aprendidas

O Que Funcionou Bem: Monitoramento automatizado é ESSENCIAL (detectamos problemas em minutos), proporção verde/marrom de 2:1 resultou em temperatura perfeita, tudo picado em 2-3cm acelera decomposição, cobertura constante resultou em zero moscas.

Erros e Correções: Melancia demais (90% água) desequilibrou umidade - solução: limitar frutas aquosas a 20% do total. Esquecemos de regar em dias quentes - solução: alarme de umidade < 50%. Não revolvemos no início - solução: revirar 2x/semana melhora aeração.

## Próximos Passos

Dashboard Web (Esta Semana!): Interface para visualizar gráficos de linha (temp/umidade), estatísticas em tempo real, alertas visuais e exportação de dados (CSV).

Análise de ML (Futuro): Com mais dados (4-6 semanas), treinar modelo para prever quando composto estará pronto, detectar anomalias automaticamente e sugerir intervenções.

Esta primeira semana superou expectativas! O sistema funcionou perfeitamente e aprendemos MUITO mais que em qualquer aula teórica.

Números que nos orgulham: 10.080 medições coletadas, 99.4% de uptime, 10.8kg de resíduos processados, 41.6% de redução de volume, 0 falhas críticas.`,
    date: "27 de Março, 2026",
    author: "Equipe EcoTech - Análise de Dados",
    readTime: "15 min",
    category: "Experimentos",
    likes: 115,
    comments: [
      { id: 1, user: "Prof. Marina", text: "Análise estatística impecável! Vocês superaram qualquer expectativa que eu tinha." },
      { id: 2, user: "Dr. Aguiar (UFRJ)", text: "Sou pesquisador de compostagem e fiquei impressionado com a metodologia. Parabéns!" }
    ],
  },
  {
    id: 5,
    title: "Dashboard Web: Visualizando Dados em Tempo Real",
    excerpt: "Desenvolvemos uma interface web completa com React, Recharts e Firebase. Agora qualquer pessoa pode acompanhar nossa composteira de qualquer lugar!",
    fullContent: `Hoje é dia de comemorar! Depois de 3 dias de desenvolvimento intenso (e muuuito café), nosso dashboard web está no ar! Agora podemos visualizar todos os dados da composteira em tempo real, de qualquer dispositivo.

## Por Que um Dashboard?

Tínhamos os dados no Firebase, mas só conseguíamos ver no formato JSON (nada visual). Precisávamos de gráficos bonitos e intuitivos, alertas visuais quando algo sair do ideal, histórico para análise de tendências, acesso fácil (professores, pais, outros alunos) e responsivo (funciona em celular, tablet, desktop).

## Stack Tecnológica

Frontend: React 18.3 + TypeScript 5.0, Vite 6.3 (build tool muito rápido!), Tailwind CSS 4.1 (estilização), Recharts 2.15 (gráficos).

Backend/Dados: Firebase Realtime Database (NoSQL), Firebase Hosting (hospedagem gratuita), Cloud Functions (processamento serverless).

DevOps: GitHub (versionamento), GitHub Actions (CI/CD automático).

Por que essa stack? Tudo gratuito (essencial para projeto escolar), escalável (se outras escolas quiserem usar), moderna (bom para portfólio) e bem documentada (fácil aprender).

## Funcionalidades Implementadas

### 1. Cards de Status em Tempo Real

Três cards principais mostram:

Card Temperatura: Valor atual grande e destacado, tendência (subindo/estável/caindo), indicador de zona (verde 40-65°C ideal, amarelo 35-40°C ou 65-70°C atenção, vermelho <35°C ou >70°C crítico).

Card Umidade: Valor atual, tendência, indicador de zona (verde 50-60% ideal, amarelo 45-50% ou 60-70% atenção, vermelho <45% ou >70% crítico).

Card Status Geral: "Ótimo" / "Bom" / "Atenção" / "Crítico" baseado em ambos os parâmetros, com última atualização (timestamp).

### 2. Gráficos Interativos

Gráfico de Linha - Temperatura (24h): Eixo X tempo (0-24h), Eixo Y temperatura (°C), faixa ideal destacada (40-65°C) em verde claro, tooltip ao passar mouse com hora exata + valor, zoom e pan para navegar.

Gráfico de Linha - Umidade (24h): Similar ao de temperatura, faixa ideal 50-60%.

Gráfico Dual - Temperatura + Umidade: Ambos no mesmo gráfico com eixos separados, facilita ver correlação visual.

### 3. Seletor de Período

Dropdown para escolher período: Últimas 24 horas (padrão), Últimos 7 dias, Últimos 30 dias, Personalizado (data picker).

### 4. Tabela de Estatísticas

Tabela mostrando por período selecionado: Atual, Mínima, Máxima, Média e Desvio Padrão para temperatura e umidade.

### 5. Sistema de Alertas

Banner no topo quando algo está fora do ideal:
- Amarelo: "Atenção: Umidade abaixo de 50%. Considere adicionar água."
- Vermelho: "Crítico: Temperatura acima de 70°C! Revire o composto urgentemente."
- Verde: "Tudo ótimo! Composteira em condições ideais."

### 6. Exportação de Dados

Botão "Exportar CSV" que gera arquivo com todos os dados para análise em Excel/Google Sheets, importar em ferramentas estatísticas (R, Python) ou backup manual.

## Desafios e Soluções

### Problema 1: Firebase Limits
Firebase tem limite de 100 conexões simultâneas no plano grátis.
Solução: Implementamos agregação a cada 10 minutos calculando média. Dados brutos mantidos por 48h, depois agregados. Reduzimos de 1440 pontos/dia para 144 pontos/dia (10x menos).

### Problema 2: Gráficos Lentos  
Com 10.000+ pontos, gráficos ficavam lentos.
Solução: Downsampling mostrando no máximo 500 pontos (seleção inteligente), virtualization renderizando só pontos visíveis, lazy loading carregando dados sob demanda.

### Problema 3: Sincronização Tempo Real
Às vezes dados atrasavam 2-3 minutos.
Solução: Implementamos heartbeat (ESP32 envia ping a cada 30s), se não receber ping por 90s dashboard mostra "Offline", timestamps sincronizados com NTP (protocolo de tempo).

## Métricas de Performance

Medimos com Lighthouse (ferramenta do Chrome):
- Performance: 98/100
- Accessibility: 100/100
- Best Practices: 100/100
- SEO: 92/100

Tempo de carregamento: First Contentful Paint 0.8s, Time to Interactive 1.2s, Total Bundle Size 245 KB otimizado!

## Feedback da Comunidade

Professores: "Impressionante! Nem softwares profissionais têm essa qualidade visual" e "Posso usar na aula para ensinar gráficos e estatística?"

Pais: "Consigo acompanhar da minha casa! Meu filho fica falando do projeto"

Alunos: "Quero aprender React também! Vocês podem dar uma aula?"

Direção: "Vamos mostrar isso na próxima reunião da secretaria de educação"

## Próximos Passos

Esta Semana: Dashboard básico funcionando, adicionar modo escuro (dark mode), implementar notificações push.

Próximo Mês: App mobile (React Native), Machine Learning para predições, sistema de login (multi-usuários), API pública (outras escolas podem usar).

## Conclusão

Este dashboard transformou dados brutos em conhecimento acionável. Agora não só coletamos dados, mas os compreendemos e agimos com base neles.

Impacto: Tempo de detecção de problemas de horas para minutos, engajamento da comunidade +300%, aprendizado técnico inestimável.

O projeto está cada dia mais profissional. Mal podemos esperar pela Feira de Ciências!

Stack completa aprendida: Hardware (ESP32, sensores), Firmware (C++), Backend (Firebase), Frontend (React + TypeScript), DevOps (CI/CD, hosting), UX/UI Design.

Estamos prontos para o mercado de trabalho? Quase!`,
    date: "30 de Março, 2026",
    author: "Ana Oliveira & Time Tecnológico",
    readTime: "18 min",
    category: "Automatização",
    likes: 156,
    comments: [
      { id: 1, user: "Prof. Roberto", text: "Stack profissional! Vocês estão no nível de desenvolvedores júnior já." },
      { id: 2, user: "Dev_Carlos", text: "Trabalho com React há 5 anos. O código de vocês está muito bem estruturado!" },
      { id: 3, user: "Startup_Edu", text: "Nossa startup de educação quer conversar com vocês. Podemos licenciar o código?" }
    ],
  },
];

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || "1", 10);
  const post = blogPostsData.find((p) => p.id === postId);

  const [likes, setLikes] = useState(post?.likes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>(post?.comments || []);
  const [newComment, setNewComment] = useState("");

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Post não encontrado</h1>
        <Link to="/blog" className="text-green-700 hover:text-green-800 font-medium">
          ← Voltar para o blog
        </Link>
      </div>
    );
  }

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    setComments([...comments, { 
      id: Date.now(), 
      user: "Visitante", 
      text: newComment 
    }]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900/40 via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors mb-8 font-medium"
          >
            <ArrowLeft size={20} />
            Voltar para o blog
          </Link>

          <div className="mb-6">
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase ${
                post.category === "Compostagem"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : post.category === "Automatização"
                  ? "bg-green-500/20 text-green-300 border border-green-500/30"
                  : post.category === "Experimentos"
                  ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                  : "bg-stone-500/20 text-stone-300 border border-stone-500/30"
              }`}
            >
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-stone-300">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200 mb-8">
          <div 
            className="prose prose-lg prose-stone max-w-none"
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: '#44403c'
            }}
          >
            {post.fullContent.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-stone-900">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-stone-800">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.trim().startsWith('-')) {
                const items = paragraph.split('\n').filter(line => line.trim().startsWith('-'));
                return (
                  <ul key={index} className="space-y-2 my-6 ml-6 list-disc">
                    {items.map((item, i) => (
                      <li key={i} className="text-stone-700 leading-relaxed">
                        {item.replace(/^-\s*/, '')}
                      </li>
                    ))}
                  </ul>
                );
              } else {
                return (
                  <p key={index} className="mb-6 text-stone-700 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>

        {/* Interaction Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-stone-200">
            <button 
              onClick={handleLike}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-medium ${
                isLiked 
                  ? 'bg-red-50 text-red-600 border-2 border-red-200' 
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border-2 border-stone-200'
              }`}
            >
              <Heart size={20} className={isLiked ? 'fill-current' : ''} />
              <span>{likes} curtidas</span>
            </button>
            
            <div className="flex items-center gap-2 text-stone-600">
              <MessageSquare size={20} />
              <span className="font-medium">{comments.length} comentários</span>
            </div>
          </div>

          {/* Comments */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-stone-900">Comentários</h3>
            
            <div className="space-y-4 mb-6">
              {comments.map((comment) => (
                <div 
                  key={comment.id} 
                  className="bg-stone-50 p-4 rounded-2xl border border-stone-200"
                >
                  <span className="font-semibold text-green-800 block mb-2">
                    {comment.user}
                  </span>
                  <p className="text-stone-700">{comment.text}</p>
                </div>
              ))}
              
              {comments.length === 0 && (
                <p className="text-stone-400 text-center py-8 italic">
                  Nenhum comentário ainda. Seja o primeiro a comentar!
                </p>
              )}
            </div>

            {/* Add Comment */}
            <div className="flex gap-3">
              <input 
                type="text" 
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                placeholder="Escreva seu comentário..."
                className="flex-1 border-2 border-stone-200 bg-white text-stone-700 px-5 py-3 rounded-xl focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
              />
              <button 
                onClick={handleAddComment}
                className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-colors font-medium shadow-sm flex items-center gap-2"
              >
                <Send size={18} />
                Enviar
              </button>
            </div>
          </div>
        </div>

        {/* Navigation to other posts */}
        <div className="mt-12 pt-12 border-t border-stone-200">
          <h3 className="text-2xl font-bold mb-6 text-stone-900">Outros Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPostsData
              .filter((p) => p.id !== postId)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg transition-all group"
                >
                  <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-xl font-bold mt-2 mb-2 text-stone-900 group-hover:text-green-800 transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-stone-600 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}
