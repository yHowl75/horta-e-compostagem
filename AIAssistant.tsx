import { useState } from "react";
import { Sparkles, X, Send, Loader2 } from "lucide-react";

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Olá! Sou a Inteligência Artificial do EcoTech. Posso responder qualquer dúvida que você tenha sobre compostagem, automatização, ou até mesmo pesquisar sobre outros assuntos para você. Como posso ajudar hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    // Resposta inicial rápida para tópicos conhecidos ou busca externa para os demais
    const aiResponseContent = await getAIResponse(currentInput);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: aiResponseContent,
      },
    ]);
    setIsLoading(false);
  };

  const getAIResponse = async (query: string) => {
    const lowerQuery = query.toLowerCase();

    // Base de conhecimento expandida sobre o projeto
    
    // Temperatura
    if (lowerQuery.includes("temperatura") || lowerQuery.includes("grau") || lowerQuery.includes("calor")) {
      return `🌡️ **Temperatura na Compostagem**

A temperatura ideal para compostagem varia entre **40-65°C** durante a fase ativa (termofílica). Aqui está o que você precisa saber:

• **20-40°C**: Fase inicial/mesofílica - decomposição lenta
• **40-65°C**: Fase termofílica - decomposição rápida e eliminação de patógenos
• **Acima de 70°C**: Risco! Pode matar microrganismos benéficos

**Nosso sistema** monitora a temperatura 24/7 com sensores DHT22 e envia alertas automáticos quando está fora da faixa ideal. Se a temperatura está muito alta, revire o composto para resfriar. Se está muito baixa, adicione material rico em nitrogênio (restos de vegetais verdes).`;
    }
    
    // Umidade
    if (lowerQuery.includes("umidade") || lowerQuery.includes("água") || lowerQuery.includes("úmid")) {
      return `💧 **Umidade na Compostagem**

A umidade ideal fica entre **50-60%**. É crucial para o sucesso do processo!

**Como identificar:**
• Aperte um punhado de composto na mão
• Se pingar água: muito úmido (>70%)
• Se formar uma bola que se desmancha ao tocar: ideal (50-60%)
• Se não formar bola: muito seco (<40%)

**Correções:**
• **Muito seco**: Adicione água aos poucos ou resíduos úmidos
• **Muito úmido**: Adicione folhas secas, serragem ou jornal picado

Nosso sensor monitora isso automaticamente e te avisa quando precisa ajustar!`;
    }
    
    // Sensores/Arduino/ESP32
    if (lowerQuery.includes("sensor") || lowerQuery.includes("arduino") || lowerQuery.includes("esp32") || lowerQuery.includes("eletrônica")) {
      return `🔧 **Sistema de Monitoramento Automatizado**

Nosso projeto usa tecnologia de ponta para monitorar a composteira:

**Hardware:**
• **ESP32**: Microcontrolador com WiFi integrado
• **DHT22**: Sensor de temperatura (-40 a 80°C) e umidade (0-100%)
• **Sensor de pH** (opcional): Para medir acidez do solo

**Funcionamento:**
1. Sensores coletam dados a cada 1 minuto
2. ESP32 processa e envia via WiFi
3. Dashboard web exibe gráficos em tempo real
4. Sistema envia alertas automáticos quando necessário

**Benefícios:**
✓ Monitoramento 24/7 sem esforço
✓ Dados históricos para análise
✓ Aprendizado sobre padrões de decomposição
✓ Intervenção rápida quando necessário`;
    }
    
    // Compostagem em geral
    if (lowerQuery.includes("compost") || lowerQuery.includes("adubo") || lowerQuery.includes("fertilizante")) {
      return `🌱 **Compostagem: Transformando Resíduos em Adubo**

A compostagem é um processo natural de decomposição de matéria orgânica por microrganismos. O resultado é um adubo rico em nutrientes!

**PODE compostar (Material Verde - Nitrogênio):**
✅ Cascas de frutas e vegetais
✅ Borra de café e saquinhos de chá
✅ Restos de vegetais crus
✅ Grama cortada

**PODE compostar (Material Marrom - Carbono):**
✅ Folhas secas
✅ Serragem
✅ Papelão picado
✅ Galhos pequenos

**NÃO PODE compostar:**
❌ Carnes e peixes
❌ Laticínios
❌ Óleos e gorduras
❌ Fezes de animais carnívoros
❌ Plantas doentes

**Proporção ideal**: 2 partes de verde para 1 parte de marrom

**Tempo**: 60-90 dias em condições ideais`;
    }
    
    // Prazo/tempo
    if (lowerQuery.includes("prazo") || lowerQuery.includes("quanto tempo") || lowerQuery.includes("demora") || lowerQuery.includes("duração")) {
      return `⏱️ **Tempo de Compostagem**

O tempo varia de acordo com diversos fatores, mas em geral:

• **Condições ideais**: 60-90 dias
• **Condições normais**: 3-6 meses
• **Inverno ou clima frio**: até 12 meses

**Fatores que aceleram:**
✓ Temperatura adequada (40-65°C)
✓ Umidade ideal (50-60%)
✓ Revirar frequentemente (2x por semana)
✓ Pedaços pequenos de resíduos
✓ Proporção correta verde/marrom
✓ Aeração adequada

**Como saber que está pronto:**
✓ Cor marrom escura/preta
✓ Cheiro de terra fresca
✓ Textura uniforme e esfarelada
✓ Não dá para identificar os resíduos originais

Com nosso sistema de monitoramento, otimizamos o processo!`;
    }
    
    // Minhocas
    if (lowerQuery.includes("minhoca") || lowerQuery.includes("vermicompost") || lowerQuery.includes("verme")) {
      return `🪱 **Vermicompostagem: Compostagem com Minhocas**

Usamos **Eisenia fetida** (minhoca californiana ou vermelha), a melhor espécie para compostagem!

**Por que usar minhocas?**
• Aceleram a decomposição em até 50%
• Produzem húmus de altíssima qualidade
• Não produzem mau cheiro
• Processam o próprio peso em resíduos por dia

**Cuidados:**
✓ Temperatura: 15-25°C (elas não gostam de calor extremo)
✓ Umidade: 60-80% (mais úmido que compostagem normal)
✓ pH: 6-7 (neutro)
✓ Evitar luz direta
✓ Não adicionar cítricos em excesso

**Quantidade inicial:** 250-500g de minhocas (500-1000 indivíduos)

**Reprodução:** Elas se reproduzem rapidamente! Em 3 meses podem triplicar a população.`;
    }
    
    // pH
    if (lowerQuery.includes("ph") || lowerQuery.includes("acidez") || lowerQuery.includes("alcalino")) {
      return `📊 **pH na Compostagem**

O pH ideal para compostagem é **6.5 - 8.0** (neutro a levemente alcalino).

**Fases do processo:**
• **Início**: pH pode cair para 5-6 (ácidos orgânicos)
• **Meio**: pH sobe para 8-8.5 (decomposição ativa)
• **Final**: Estabiliza em 7-8 (composto maduro)

**Se muito ácido (pH < 6):**
→ Adicione cal agrícola ou cinzas de madeira
→ Pode estar muito úmido ou com excesso de material verde

**Se muito alcalino (pH > 9):**
→ Adicione material rico em carbono (folhas secas)
→ Raro de acontecer

Estamos planejando adicionar sensor de pH ao nosso sistema de monitoramento!`;
    }
    
    // Cheiro/odor
    if (lowerQuery.includes("cheiro") || lowerQuery.includes("fede") || lowerQuery.includes("odor") || lowerQuery.includes("mal cheiro")) {
      return `👃 **Compostagem Não Deve Ter Mau Cheiro!**

Se sua composteira está com mau cheiro, algo está errado. Veja as causas e soluções:

**Cheiro de podre/amônia:**
→ **Causa**: Excesso de nitrogênio (material verde) ou falta de oxigênio
→ **Solução**: Adicione material seco (folhas, serragem), revire o composto

**Cheiro de ovo podre:**
→ **Causa**: Falta de oxigênio (decomposição anaeróbica)
→ **Solução**: Revire imediatamente! Adicione material seco

**Excesso de umidade:**
→ **Solução**: Adicione material seco, melhore a drenagem

**Compostagem bem-feita cheira a terra de floresta!** 🌲

Isso significa que o equilíbrio está correto e a decomposição está aeróbica (com oxigênio).`;
    }
    
    // Dashboard/monitoramento
    if (lowerQuery.includes("dashboard") || lowerQuery.includes("gráfico") || lowerQuery.includes("monitorar") || lowerQuery.includes("visualizar")) {
      return `📈 **Dashboard de Monitoramento**

Desenvolvemos uma interface web moderna para visualizar todos os dados da composteira em tempo real!

**Recursos:**
• **Gráficos de linha**: Temperatura e umidade nas últimas 24h, 7 dias ou 30 dias
• **Cards de status**: Valores atuais com indicadores visuais (verde/amarelo/vermelho)
• **Histórico**: Tabela com mínimas, máximas e médias
• **Alertas inteligentes**: Notificações quando algo precisa de atenção
• **Tendências**: Análise se está subindo, estável ou descendo

**Tecnologias:**
• React + TypeScript
• Recharts para gráficos
• Tailwind CSS para estilização
• Atualização automática a cada minuto

**Próximos passos:**
→ App mobile
→ Machine learning para prever quando o composto estará pronto
→ Integração com IA para análise preditiva`;
    }
    
    // Projeto/escola
    if (lowerQuery.includes("projeto") || lowerQuery.includes("escola") || lowerQuery.includes("ecotech")) {
      return `🎓 **Sobre o Projeto EcoTech**

Somos um grupo de estudantes apaixonados por sustentabilidade e tecnologia!

**Objetivos:**
• **Educacional**: Aprender sobre decomposição, microbiologia e ciclos naturais
• **Tecnológico**: Desenvolver sistema de monitoramento com IoT
• **Sustentável**: Reduzir desperdício e produzir adubo orgânico
• **Social**: Conscientizar a comunidade escolar

**O que já fizemos:**
✓ Construímos composteira com materiais recicláveis
✓ Instalamos sensores de temperatura e umidade
✓ Programamos ESP32 com envio de dados via WiFi
✓ Criamos dashboard web com gráficos em tempo real
✓ Implementamos sistema de alertas automáticos

**Resultados até agora:**
• Processamos mais de 15kg de resíduos orgânicos
• Temperatura estável entre 45-55°C
• Umidade controlada em 55-60%
• 0 desperdício de alimentos da cantina

Acompanhe nosso progresso no blog!`;
    }

    // Se não for um tópico conhecido, busca na Wikipedia
    return await searchWikipedia(query);
  };

  const searchWikipedia = async (query: string) => {
    try {
      // Primeiro, busca por páginas relacionadas
      const searchResponse = await fetch(
        `https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&origin=*&srlimit=3`
      );
      const searchData = await searchResponse.json();
      
      if (!searchData.query?.search?.length) {
        return `🔍 Não encontrei resultados específicos sobre "${query}" na Wikipedia.

Em um sistema de produção real, eu estaria conectado a APIs de IA como **ChatGPT** (OpenAI) ou **Gemini** (Google), permitindo responder literalmente qualquer pergunta de forma inteligente e conversacional!

**Mas veja o que posso fazer agora:**
✓ Responder sobre compostagem, temperatura, umidade
✓ Explicar sobre sensores, Arduino, ESP32
✓ Dar dicas sobre o projeto EcoTech
✓ Buscar informações gerais na Wikipedia

Tente reformular sua pergunta ou pergunte sobre nosso projeto de compostagem! 🌱`;
      }

      // Pega o resumo da primeira página encontrada
      const title = searchData.query.search[0].title;
      const snippet = searchData.query.search[0].snippet.replace(/<[^>]*>/g, ''); // Remove HTML tags
      
      const pageResponse = await fetch(
        `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
      );
      const pageData = await pageResponse.json();
      
      if (pageData.extract) {
        let response = `📚 **${pageData.title}**\n\n${pageData.extract}`;
        
        // Se houver mais resultados, menciona
        if (searchData.query.search.length > 1) {
          response += `\n\n**Outros resultados relacionados:**`;
          searchData.query.search.slice(1, 3).forEach((result: { title: string }) => {
            response += `\n• ${result.title}`;
          });
        }
        
        response += `\n\n_Fonte: Wikipédia_`;
        
        return response;
      }
      
      // Fallback se não conseguir o resumo
      return `📚 Encontrei informações sobre **${title}**:\n\n${snippet}\n\n_Busque na Wikipedia para mais detalhes._`;
      
    } catch (error) {
      return `⚠️ Tive problemas ao buscar informações sobre "${query}".

**Possíveis causas:**
• Problemas de conexão com a internet
• Timeout na API da Wikipedia
• Bloqueio de CORS

**O que posso fazer:**
Pergunte sobre compostagem, temperatura, umidade, sensores, Arduino, ou outros tópicos do nosso projeto EcoTech. Esses dados estão na minha memória local e não dependem de conexão externa! 🌱`;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <Sparkles className="text-gray-300" size={20} />
              </div>
              <div>
                <h2 className="text-xl text-white font-medium tracking-tight">IA</h2>
                <p className="text-gray-400 text-sm">
                  Faça qualquer pergunta
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-5 py-4 text-[15px] leading-relaxed whitespace-pre-line ${
                  message.role === "user"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 rounded-2xl px-5 py-4 flex items-center gap-2">
                <Loader2 size={16} className="animate-spin" />
                <span className="text-sm">Pensando...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Digite aqui sua dúvida..."
              className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-[15px]"
            />
            <button
              onClick={handleSend}
              className="bg-gray-900 text-white px-5 py-3.5 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}