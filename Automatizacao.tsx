import { Cpu, Activity, Gauge, Wifi, CircuitBoard, Zap } from "lucide-react";

export function Automatizacao() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl mb-4 text-gray-800">Automatização</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tecnologia e IoT aplicados ao monitoramento inteligente de compostagem
        </p>
      </div>

      {/* Introdução */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl mb-4 text-blue-700">
          Compostagem Inteligente
        </h2>
        <p className="text-gray-700 mb-4">
          A automatização do processo de compostagem utiliza sensores e
          microcontroladores para monitorar em tempo real as condições ideais
          de decomposição, garantindo melhor qualidade do composto final.
        </p>
        <p className="text-gray-700">
          Com tecnologias como Arduino, ESP32 e Raspberry Pi, é possível criar
          sistemas de baixo custo que otimizam o processo e facilitam o
          aprendizado prático de eletrônica e programação.
        </p>
      </div>

      {/* Sensores */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
        <h2 className="text-3xl mb-6 text-blue-800">Sensores Utilizados</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
              <Activity className="text-orange-600" size={24} />
            </div>
            <h3 className="text-lg mb-2 text-gray-800">
              Sensor de Temperatura
            </h3>
            <p className="text-gray-600 text-sm mb-2">DHT22 ou DS18B20</p>
            <p className="text-gray-700 text-sm">
              Monitora a temperatura interna da composteira (ideal: 40-65°C)
            </p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
              <Gauge className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg mb-2 text-gray-800">Sensor de Umidade</h3>
            <p className="text-gray-600 text-sm mb-2">
              DHT22 ou sensor capacitivo
            </p>
            <p className="text-gray-700 text-sm">
              Mede a umidade do material (ideal: 50-60%)
            </p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
              <Zap className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg mb-2 text-gray-800">Sensor de pH</h3>
            <p className="text-gray-600 text-sm mb-2">Módulo pH 4502C</p>
            <p className="text-gray-700 text-sm">
              Verifica acidez do composto (ideal: 6.0-8.0)
            </p>
          </div>
        </div>
      </div>

      {/* Microcontroladores */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl mb-6 text-blue-700">
          Plataformas de Hardware
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <CircuitBoard className="text-blue-600" size={32} />
              <h3 className="text-xl text-gray-800">Arduino</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Microcontrolador ideal para iniciantes, com vasta documentação e
              comunidade ativa.
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Fácil programação (IDE Arduino)
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Grande variedade de bibliotecas
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Baixo custo e acessível
              </li>
            </ul>
          </div>

          <div className="border border-purple-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Wifi className="text-purple-600" size={32} />
              <h3 className="text-xl text-gray-800">ESP32</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Microcontrolador com WiFi e Bluetooth integrados, perfeito para
              IoT.
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                Conectividade WiFi/Bluetooth
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                Envio de dados para nuvem
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                Monitoramento remoto via app
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Funcionalidades */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-8">
        <h2 className="text-3xl mb-6 text-gray-800">
          Funcionalidades do Sistema
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <div className="text-blue-600 flex-shrink-0 text-2xl">📊</div>
            <div>
              <h3 className="text-lg mb-1 text-gray-800">
                Monitoramento em Tempo Real
              </h3>
              <p className="text-gray-700 text-sm">
                Visualização instantânea de temperatura, umidade e pH através
                de dashboard web
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-green-600 flex-shrink-0 text-2xl">🔔</div>
            <div>
              <h3 className="text-lg mb-1 text-gray-800">Alertas Automáticos</h3>
              <p className="text-gray-700 text-sm">
                Notificações quando parâmetros saem do ideal (muito seco, frio
                ou ácido)
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-purple-600 flex-shrink-0 text-2xl">📈</div>
            <div>
              <h3 className="text-lg mb-1 text-gray-800">Histórico de Dados</h3>
              <p className="text-gray-700 text-sm">
                Registro de medições ao longo do tempo para análise e
                aprendizado
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-orange-600 flex-shrink-0 text-2xl">🤖</div>
            <div>
              <h3 className="text-lg mb-1 text-gray-800">
                Inteligência Artificial
              </h3>
              <p className="text-gray-700 text-sm">
                IA analisa dados e sugere ações para otimizar o processo de
                compostagem
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Diagrama Simplificado */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl mb-6 text-blue-700">Arquitetura do Sistema</h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity size={36} className="text-green-600" />
            </div>
            <p className="text-gray-800">Sensores</p>
            <p className="text-sm text-gray-500">DHT22, pH, etc.</p>
          </div>

          <div className="text-3xl text-gray-400">→</div>

          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Cpu size={36} className="text-blue-600" />
            </div>
            <p className="text-gray-800">Microcontrolador</p>
            <p className="text-sm text-gray-500">ESP32/Arduino</p>
          </div>

          <div className="text-3xl text-gray-400">→</div>

          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Wifi size={36} className="text-purple-600" />
            </div>
            <p className="text-gray-800">Nuvem</p>
            <p className="text-sm text-gray-500">Armazenamento</p>
          </div>

          <div className="text-3xl text-gray-400">→</div>

          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-3xl">📱</span>
            </div>
            <p className="text-gray-800">Interface</p>
            <p className="text-sm text-gray-500">App/Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
