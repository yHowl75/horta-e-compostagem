import { Recycle, Thermometer, Droplets, Clock } from "lucide-react";

export function Compostagem() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800 tracking-tight">Compostagem</h1>
        <p className="text-xl text-stone-500 max-w-3xl mx-auto font-light">
          Transforme resíduos orgânicos em adubo natural de forma sustentável
        </p>
      </div>

      {/* O que é Compostagem */}
      <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-12 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-green-800">O que é Compostagem?</h2>
        <p className="text-lg text-stone-600 leading-relaxed mb-4">
          A compostagem é um processo biológico natural onde microrganismos
          decompõem matéria orgânica (restos de alimentos, folhas, grama) em um
          material rico em nutrientes chamado composto ou húmus.
        </p>
        <p className="text-lg text-stone-600 leading-relaxed">
          Este processo não só reduz a quantidade de resíduos destinados a
          aterros sanitários, como também cria um fertilizante natural
          excelente para plantas e hortas.
        </p>
      </div>

      {/* Benefícios */}
      <div className="bg-[#EAE6DF] rounded-3xl p-8 md:p-12 mb-12 border border-stone-200">
        <h2 className="text-3xl font-bold mb-8 text-stone-800">Benefícios da Compostagem</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4 items-start">
            <div className="text-2xl mt-1">🌍</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">Redução de Resíduos</h3>
              <p className="text-stone-600">
                Diminui até 50% dos resíduos domésticos destinados a aterros.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl mt-1">🌱</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">Fertilizante Natural</h3>
              <p className="text-stone-600">
                Produz adubo rico em nutrientes para revitalizar o solo.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl mt-1">💰</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">Economia</h3>
              <p className="text-stone-600">
                Reduz gastos com adubos químicos e destinação de lixo.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl mt-1">♻️</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">Sustentabilidade</h3>
              <p className="text-stone-600">
                Contribui para um ciclo ecológico sustentável e contínuo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Processo */}
      <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-12 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-green-800">Como Funciona o Processo</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-700 shadow-sm">
              <Recycle size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-800">1. Coleta</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Separe resíduos orgânicos como cascas de frutas, legumes e restos
              de plantas.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 shadow-sm">
              <Droplets size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-800">2. Umidade</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Mantenha o material úmido (como esponja torcida) para ativar
              microrganismos.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-600 shadow-sm">
              <Thermometer size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-800">3. Temperatura</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              O processo gera calor (40-65°C), indicando decomposição ativa e saudável.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-stone-600 shadow-sm">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-800">4. Maturação</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Após 60-90 dias, o composto estará pronto para uso como adubo.
            </p>
          </div>
        </div>
      </div>

      {/* Materiais */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-green-50/50 border border-green-100 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-green-800">✅ O que PODE compostar</h3>
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Cascas de frutas e legumes
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Borra de café e saquinhos de chá
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Folhas secas e aparas de grama
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Restos de plantas e flores
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Cascas de ovos trituradas
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Papelão e papel não revestido
            </li>
          </ul>
        </div>

        <div className="bg-red-50/50 border border-red-100 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-red-800">❌ O que NÃO compostar</h3>
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
              Carnes, peixes e laticínios
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
              Óleos e gorduras
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
              Fezes de animais domésticos
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
              Plantas doentes ou com pragas
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
              Resíduos de madeira tratada
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
              Alimentos cozidos com sal
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
