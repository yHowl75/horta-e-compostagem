import { useState } from "react";
import { Link } from "react-router";
import { Calendar, User, Clock, Heart, MessageSquare, Send } from "lucide-react";

const initialBlogPosts = [
  {
    id: 1,
    title: "Iniciando Nosso Projeto de Horta e Compostagem Automatizada",
    excerpt:
      "Hoje marcamos o início oficial do nosso projeto escolar integrando horta, compostagem e automatização. Conheça como tudo começou e nossos objetivos.",
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
    excerpt:
      "Relato detalhado de como construímos nossa composteira usando materiais recicláveis. Incluindo lista completa de materiais e passo a passo ilustrado.",
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
    excerpt:
      "Como transformamos nossa composteira comum em um sistema inteligente com ESP32, sensores DHT22, e envio de dados via WiFi para a nuvem.",
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
    excerpt:
      "Análise completa dos dados coletados na primeira semana com 10.080 leituras. Descobrimos padrões fascinantes sobre temperatura, umidade e comportamento das minhocas.",
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
    excerpt:
      "Desenvolvemos uma interface web completa com React, Recharts e Firebase. Agora qualquer pessoa pode acompanhar nossa composteira de qualquer lugar!",
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

export function Blog() {
  const [posts, setPosts] = useState(initialBlogPosts);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [activeCommentPost, setActiveCommentPost] = useState<number | null>(null);
  const [newComment, setNewComment] = useState("");

  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
      setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes - 1 } : p));
    } else {
      setLikedPosts([...likedPosts, postId]);
      setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
    }
  };

  const handleAddComment = (postId: number) => {
    if (!newComment.trim()) return;
    
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [...p.comments, { id: Date.now(), user: "Visitante", text: newComment }]
        };
      }
      return p;
    }));
    setNewComment("");
  };

  const featuredPost = posts[posts.length - 1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800 tracking-tight">Diário do Projeto</h1>
        <p className="text-xl text-stone-500 max-w-3xl mx-auto font-light">
          Acompanhe nossa jornada de aprendizado sobre sustentabilidade e tecnologia
        </p>
      </div>

      {/* Featured Post */}
      <div className="bg-stone-900 rounded-3xl p-8 md:p-12 mb-16 text-stone-50 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900/40 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-green-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-lg">
              Destaque
            </span>
            <span className="text-stone-300 text-sm font-medium uppercase tracking-wider">
              {featuredPost.category}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            {featuredPost.title}
          </h2>
          <p className="text-stone-300 mb-8 text-xl font-light max-w-3xl leading-relaxed">
            {featuredPost.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-stone-700/50 pt-6">
            <div className="flex items-center gap-6 text-sm text-stone-400">
              <div className="flex items-center gap-2">
                <User size={18} />
                {featuredPost.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {featuredPost.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                {featuredPost.readTime}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => handleLike(featuredPost.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${likedPosts.includes(featuredPost.id) ? 'bg-red-500/20 text-red-400' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'}`}
              >
                <Heart size={18} className={likedPosts.includes(featuredPost.id) ? 'fill-current' : ''} />
                <span className="font-medium">{featuredPost.likes}</span>
              </button>
              <button 
                onClick={() => setActiveCommentPost(activeCommentPost === featuredPost.id ? null : featuredPost.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-stone-800 text-stone-300 hover:bg-stone-700 transition-all"
              >
                <MessageSquare size={18} />
                <span className="font-medium">{featuredPost.comments.length}</span>
              </button>
            </div>
          </div>

          {/* Comments Section for Featured Post */}
          {activeCommentPost === featuredPost.id && (
            <div className="mt-8 bg-stone-800/50 p-6 rounded-2xl backdrop-blur-sm border border-stone-700/50">
              <h4 className="font-semibold mb-4 text-stone-200">Comentários</h4>
              <div className="space-y-4 mb-4 max-h-60 overflow-y-auto pr-2 no-scrollbar">
                {featuredPost.comments.map(c => (
                  <div key={c.id} className="bg-stone-800 p-3 rounded-xl border border-stone-700/50">
                    <span className="font-medium text-green-400 text-sm block mb-1">{c.user}</span>
                    <p className="text-stone-300 text-sm">{c.text}</p>
                  </div>
                ))}
                {featuredPost.comments.length === 0 && (
                  <p className="text-stone-500 text-sm italic">Nenhum comentário ainda. Seja o primeiro!</p>
                )}
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddComment(featuredPost.id)}
                  placeholder="Escreva um comentário..."
                  className="flex-1 bg-stone-900 border border-stone-700 text-stone-200 px-4 py-2 rounded-xl focus:outline-none focus:border-green-500 text-sm"
                />
                <button 
                  onClick={() => handleAddComment(featuredPost.id)}
                  className="bg-green-600 hover:bg-green-500 text-white p-2 rounded-xl transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {posts.slice(0, -1).reverse().map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${
                  post.category === "Compostagem"
                    ? "bg-amber-100 text-amber-800"
                    : post.category === "Automatização"
                    ? "bg-green-100 text-green-800"
                    : post.category === "Experimentos"
                    ? "bg-orange-100 text-orange-800"
                    : "bg-stone-100 text-stone-700"
                }`}
              >
                {post.category}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3 text-stone-800 leading-tight">
              {post.title}
            </h3>

            <p className="text-stone-500 mb-6 flex-1 font-light leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between border-t border-stone-100 pt-6 mb-4">
              <div className="flex items-center gap-4 text-xs text-stone-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <User size={14} />
                  {post.author}
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-stone-50 p-2 rounded-2xl">
              <div className="flex gap-2">
                <button 
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${likedPosts.includes(post.id) ? 'bg-red-50 text-red-500' : 'text-stone-500 hover:bg-stone-200'}`}
                >
                  <Heart size={16} className={likedPosts.includes(post.id) ? 'fill-current' : ''} />
                  {post.likes}
                </button>
                <button 
                  onClick={() => setActiveCommentPost(activeCommentPost === post.id ? null : post.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${activeCommentPost === post.id ? 'bg-stone-200 text-stone-800' : 'text-stone-500 hover:bg-stone-200'}`}
                >
                  <MessageSquare size={16} />
                  {post.comments.length}
                </button>
              </div>
              <Link 
                to={`/blog/${post.id}`}
                className="text-green-700 font-semibold text-sm px-3 hover:text-green-800 transition-colors flex items-center gap-1"
              >
                Ler <span className="hidden sm:inline">completo</span> →
              </Link>
            </div>

            {/* Comments Section for Grid Post */}
            {activeCommentPost === post.id && (
              <div className="mt-4 bg-stone-50 p-4 rounded-2xl border border-stone-200">
                <div className="space-y-3 mb-3 max-h-40 overflow-y-auto pr-2 no-scrollbar">
                  {post.comments.map(c => (
                    <div key={c.id} className="bg-white p-3 rounded-xl shadow-sm border border-stone-100">
                      <span className="font-semibold text-green-800 text-xs block mb-0.5">{c.user}</span>
                      <p className="text-stone-600 text-sm">{c.text}</p>
                    </div>
                  ))}
                  {post.comments.length === 0 && (
                    <p className="text-stone-400 text-sm italic text-center py-2">Seja o primeiro a comentar!</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                    placeholder="Adicionar comentário..."
                    className="flex-1 border border-stone-200 bg-white text-stone-700 px-3 py-2 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm shadow-sm"
                  />
                  <button 
                    onClick={() => handleAddComment(post.id)}
                    className="bg-stone-800 hover:bg-stone-700 text-white p-2 rounded-xl transition-colors shadow-sm"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Newsletter */}
      <div className="bg-[#EAE6DF] rounded-3xl p-12 mt-16 text-center border border-stone-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-stone-800">
            Fique por Dentro do Projeto
          </h2>
          <p className="text-stone-600 mb-8 font-light text-lg">
            Inscreva-se para receber novidades mensais sobre os avanços da nossa composteira inteligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-5 py-3.5 rounded-xl border border-stone-300 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 shadow-sm"
            />
            <button className="bg-green-800 text-white px-8 py-3.5 rounded-xl hover:bg-green-700 transition-colors font-medium shadow-sm">
              Inscrever
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}