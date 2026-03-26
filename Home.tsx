import { Link } from "react-router";
import { Leaf, ArrowRight, Recycle, Cpu, Thermometer, Droplets, Sprout } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-stone-900 text-stone-50 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1416879598555-2572fa82eb0e?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900/100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-3 bg-green-900/50 text-green-200 rounded-full mb-8 border border-green-800/50 backdrop-blur-sm shadow-xl">
            <Sprout size={20} className="mr-2" />
            <span className="font-semibold tracking-wider text-xs uppercase">Sustentabilidade & Tecnologia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight max-w-4xl leading-tight">
            Transformando Resíduos em <span className="text-green-400">Vida</span> através da Tecnologia
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed mb-12 max-w-3xl">
            Bem-vindo ao EcoTech Escolar. Um projeto educacional focado em revolucionar a forma como lidamos com os resíduos orgânicos, unindo a natureza da compostagem com a precisão da automatização inteligente.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/compostagem"
              className="px-8 py-4 bg-green-700 text-white rounded-full hover:bg-green-600 transition-all font-medium text-lg shadow-lg flex items-center gap-2 border border-green-600"
            >
              Explorar Projeto <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Compostagem Section */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-800 font-semibold tracking-wide uppercase text-sm mb-4">
                <Recycle size={20} /> O Processo Natural
              </div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6 leading-tight">O que é a Compostagem?</h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                A compostagem é um processo biológico em que os microrganismos transformam a matéria orgânica (como restos de frutas, verduras, borra de café e folhas secas) em um material semelhante ao solo, rico em nutrientes, chamado <strong className="text-amber-900 font-semibold">composto</strong>.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Ao invés de enviar nossos resíduos para aterros sanitários — onde gerariam metano, um gás de efeito estufa —, nós recriamos o ciclo da natureza de forma controlada. O resultado é um adubo natural de alta qualidade que revitaliza o solo, retém umidade e fortalece as plantas de maneira 100% orgânica.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                    <Leaf size={20} className="text-amber-700" />
                  </div>
                  <h4 className="font-semibold text-stone-800 mb-1">Matéria Seca (Carbono)</h4>
                  <p className="text-sm text-stone-500">Folhas secas, serragem e papelão que fornecem estrutura.</p>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Sprout size={20} className="text-green-700" />
                  </div>
                  <h4 className="font-semibold text-stone-800 mb-1">Matéria Úmida (Nitrogênio)</h4>
                  <p className="text-sm text-stone-500">Restos de alimentos frescos que aceleram a decomposição.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-900/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1633683789568-0b0e53fe7d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wb3N0aW5nJTIwc29pbCUyMG5hdHVyZXxlbnwxfHx8fDE3NzQ1MjY3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Processo de Compostagem" 
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Automatização Section */}
      <section className="py-24 bg-stone-900 text-stone-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-stone-900 to-stone-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-900/30 rounded-3xl transform -translate-x-4 translate-y-4"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1562976540-78c559c80296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwZWxlY3Ryb25pYyUyMGJvYXJkfGVufDF8fHx8MTc3NDUyNjc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Automatização com Arduino" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10 opacity-90"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-green-400 font-semibold tracking-wide uppercase text-sm mb-4">
                <Cpu size={20} /> Controle Tecnológico
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Por que Automatizar?</h2>
              <p className="text-lg text-stone-300 leading-relaxed mb-6">
                Para que a compostagem seja eficiente e não gere maus odores, ela precisa de um equilíbrio perfeito de temperatura, oxigenação e umidade. É aqui que entra a <strong className="text-green-300 font-semibold">automatização</strong> do nosso projeto.
              </p>
              <p className="text-lg text-stone-300 leading-relaxed mb-8">
                Utilizamos microcontroladores interligados a sensores de alta precisão (DHT22 para temperatura/umidade) inseridos diretamente na composteira. Eles coletam dados 24 horas por dia, permitindo que o sistema intervenha de forma autônoma.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-stone-800/80 backdrop-blur-sm p-5 rounded-2xl border border-stone-700/50">
                  <div className="bg-stone-900 p-3 rounded-xl text-amber-400 mt-1 shadow-inner">
                    <Thermometer size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Monitoramento de Temperatura</h4>
                    <p className="text-stone-400 text-sm mt-1 leading-relaxed">Garante que a pilha atinja os 55-65°C necessários para eliminar patógenos sem matar as bactérias termofílicas benéficas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-stone-800/80 backdrop-blur-sm p-5 rounded-2xl border border-stone-700/50">
                  <div className="bg-stone-900 p-3 rounded-xl text-blue-400 mt-1 shadow-inner">
                    <Droplets size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Controle de Umidade</h4>
                    <p className="text-stone-400 text-sm mt-1 leading-relaxed">Mantém a umidade na faixa ideal de 50-60%. O sistema pode acionar a irrigação por gotejamento automaticamente se estiver muito seco.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
