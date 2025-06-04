import { Layers, Database, Link, BarChart2, Server } from "lucide-react"

export function TechStack() {
  return (
    <section id="tech-stack" className="py-10 pt-20">
      <div className="flex items-center gap-3 mb-6">
        <Layers className="h-6 w-6 text-blue-400" />
        <h2 className="text-3xl font-bold">Stack Tecnológica</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Backend */}
        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Server className="h-5 w-5 text-blue-400" />
            <h3 className="text-xl font-semibold">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Python</span>
            <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">C#</span>
            <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">Ruby on Rails</span>
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Express</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Django</span>
          </div>
        </div>

        {/* Bancos de Dados */}
        <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-800/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Database className="h-5 w-5 text-green-400" />
            <h3 className="text-xl font-semibold ">Bancos de Dados</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">MySQL</span>
            <span className="px-3 py-1 bg-blue-700 text-white rounded-full text-sm">PostgreSQL</span>
            <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">MongoDB</span>
            <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">Redis</span>
            <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">SQLite</span>
            <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">SQL Server</span>
          </div>
        </div>

        {/* APIs e Integrações */}
        <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-800/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Link className="h-5 w-5 text-purple-400" />
            <h3 className="text-xl font-semibold">APIs e Integrações</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">REST</span>
            <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">ERPs</span>
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">CRMs</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Gateways de Pagamento</span>
          </div>
        </div>

        {/* Análise de Dados */}
        <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-800/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="h-5 w-5 text-amber-400" />
            <h3 className="text-xl font-semibold">Análise de Dados</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Python (Pandas)</span>
            <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-sm">Python (NumPy)</span>
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Power</span>
            <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">SQL Avançado</span>
            <span className="px-3 py-1 bg-blue-700 text-white rounded-full text-sm">Jupyter Notebooks</span>
          </div>
        </div>

        {/* DevOps & Outros */}
        <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Server className="h-5 w-5 text-red-400" />
            <h3 className="text-xl font-semibold">DevOps & Outros</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Docker</span>
            <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">Git</span>
            <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Linux</span>
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">CI/CD</span>
          </div>
        </div>

        {/* Web */}
        <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Server className="h-5 w-5 text-red-400" />
            <h3 className="text-xl font-semibold">Web</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Nextjs</span>
            <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Ruby on Rails</span>
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">UI/UX</span>
          </div>
        </div>
      </div>
    </section>
  )
}
