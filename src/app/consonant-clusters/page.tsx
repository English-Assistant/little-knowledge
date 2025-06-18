import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "辅音连缀 · Little Knowledge",
  description: "常见英语辅音连缀（Consonant Blends）分类与例词示例。",
};

// 表格行数据结构
interface Row {
  cluster: string;
  word: string;
  phonetic: string;
  correct: string;
  wrong: string;
}

const initialRows: Row[] = [
  {
    cluster: "/kr/",
    word: "crab",
    phonetic: "/kræb/",
    correct: "/kræb/",
    wrong: "/kə-ræb/",
  },
  {
    cluster: "/kr/",
    word: "Christmas",
    phonetic: "/ˈkrɪsməs/",
    correct: "/krɪ-/",
    wrong: "/kə-ri-/",
  },
  {
    cluster: "/kw/",
    word: "queen",
    phonetic: "/kwiːn/",
    correct: "/kwiːn/",
    wrong: "/kə-wiːn/",
  },
  {
    cluster: "/pl/",
    word: "please",
    phonetic: "/pliːz/",
    correct: "/pliːz/",
    wrong: "/pə-liːz/",
  },
  {
    cluster: "/tr/",
    word: "train",
    phonetic: "/treɪn/",
    correct: "/treɪn/",
    wrong: "/tə-reɪn/",
  },
  {
    cluster: "/gl/",
    word: "glass",
    phonetic: "/ɡlæs/",
    correct: "/ɡlæs/",
    wrong: "/ɡə-læs/",
  },
];

const finalRows: Row[] = [
  {
    cluster: "/st/",
    word: "last",
    phonetic: "/læst/",
    correct: "/læst/",
    wrong: "/læ-s-tə/",
  },
  {
    cluster: "/nd/",
    word: "hand",
    phonetic: "/hænd/",
    correct: "/hænd/",
    wrong: "/hæ-n-də/",
  },
  {
    cluster: "/mp/",
    word: "lamp",
    phonetic: "/læmp/",
    correct: "/læmp/",
    wrong: "/læ-m-pə/",
  },
  {
    cluster: "/ŋk/",
    word: "think",
    phonetic: "/θɪŋk/",
    correct: "/θɪŋk/",
    wrong: "/θɪ-n-kə/",
  },
];

const memoryTips = [
  {
    icon: "📢",
    title: "技巧 1",
    desc: "把连缀当成一个字母组合整体来记，不要试图一个一个拆开读。",
  },
  {
    icon: "⚠️",
    title: "技巧 2",
    desc: "避免在两个辅音之间人为加元音（这是非英语母语者常见错误）。",
  },
  {
    icon: "🎙️",
    title: "技巧 3",
    desc: "多练习这些连缀在真实单词里的发音。",
  },
] as const;

const practiceSteps = [
  {
    num: "1",
    title: "慢速朗读 → 正常语速",
    desc: "先准确发音，再追求流利。",
  },
  {
    num: "2",
    title: "模仿跟读（shadowing）练习",
    desc: "模仿母语者的节奏。",
  },
  {
    num: "3",
    title: "多听多读",
    desc: "重点感知开头和结尾的辅音组合。",
  },
] as const;

export default function ConsonantClustersPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 顶部渐变横幅 */}
      <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-6">
          {/* 标题行 */}
          <div className="flex items-center gap-4">
            {/* 可以替换为合适的图标 */}
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-2xl">
              📚
            </div>
            <h1 className="text-4xl font-bold leading-none">
              辅音连缀 Consonant Clusters
            </h1>
          </div>

          {/* 听发音按钮 */}
          <button
            type="button"
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-full px-4 py-2 text-sm font-medium"
          >
            🎧 听标准发音
          </button>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-10 flex flex-col gap-12">
          {/* 核心结论 */}
          <section className="bg-white border border-purple-200 rounded-lg p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <h2 className="text-xl font-semibold text-purple-700">
                核心结论
              </h2>
            </div>
            <blockquote className="text-gray-700 leading-8">
              <span className="text-purple-700 font-semibold">连续的辅音</span>
              在英语中，如果出现在
              <span className="text-purple-700 font-semibold">
                一个音节的开头或结尾
              </span>
              ，需要
              <span className="text-purple-700 font-semibold">
                直接连读成一个整体音
              </span>
              ，
              <span className="text-purple-700 font-semibold">
                不能拆开，也不能插入元音
              </span>
              。
            </blockquote>
          </section>

          {/* 初始 & 结尾连缀表格 */}
          <section className="grid gap-8 md:grid-cols-2">
            {/* 开头连缀 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden">
              <div className="bg-purple-50 px-4 py-4 flex items-center gap-2">
                <span className="text-lg">📌</span>
                <h3 className="font-semibold text-purple-700 text-lg">
                  开头的辅音连缀（Initial Consonant Clusters）
                </h3>
              </div>
              <p className="text-gray-600 text-sm px-4 pt-2 pb-4">
                多个辅音组合在一个音节的开头时，要连读为一个整体音节。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-purple-700 text-white text-center">
                      <th className="py-3 px-4">连缀</th>
                      <th className="py-3 px-4">示例单词</th>
                      <th className="py-3 px-4">音标</th>
                      <th className="py-3 px-4">正确读法</th>
                      <th className="py-3 px-4">错误示范</th>
                    </tr>
                  </thead>
                  <tbody>
                    {initialRows.map((row, idx) => (
                      <tr
                        key={row.word}
                        className={idx % 2 ? "bg-purple-50/30" : ""}
                      >
                        <td className="py-3 px-4 text-center">{row.cluster}</td>
                        <td className="py-3 px-4 text-center font-semibold text-purple-700">
                          {row.word}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.phonetic}
                        </td>
                        <td className="py-3 px-4 text-center text-green-600 font-medium">
                          {row.correct}
                        </td>
                        <td className="py-3 px-4 text-center text-red-500">
                          {row.wrong}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 结尾连缀 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden">
              <div className="bg-purple-50 px-4 py-4 flex items-center gap-2">
                <span className="text-lg">📌</span>
                <h3 className="font-semibold text-purple-700 text-lg">
                  结尾的辅音连缀（Final Consonant Clusters）
                </h3>
              </div>
              <p className="text-gray-600 text-sm px-4 pt-2 pb-4">
                多个辅音组合在音节结尾时，同样要一口气连读，不可拆开。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-purple-700 text-white text-center">
                      <th className="py-3 px-4">连缀</th>
                      <th className="py-3 px-4">示例单词</th>
                      <th className="py-3 px-4">音标</th>
                      <th className="py-3 px-4">正确读法</th>
                      <th className="py-3 px-4">错误示范</th>
                    </tr>
                  </thead>
                  <tbody>
                    {finalRows.map((row, idx) => (
                      <tr
                        key={row.word}
                        className={idx % 2 ? "bg-purple-50/30" : ""}
                      >
                        <td className="py-3 px-4 text-center">{row.cluster}</td>
                        <td className="py-3 px-4 text-center font-semibold text-purple-700">
                          {row.word}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.phonetic}
                        </td>
                        <td className="py-3 px-4 text-center text-green-600 font-medium">
                          {row.correct}
                        </td>
                        <td className="py-3 px-4 text-center text-red-500">
                          {row.wrong}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 记忆技巧 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🥇</span>
              <h2 className="text-2xl font-semibold text-purple-700">
                记忆技巧
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {memoryTips.map((tip) => (
                <div
                  key={tip.title}
                  className="bg-white border border-purple-100 rounded-xl shadow-sm p-6 flex flex-col gap-2"
                >
                  <div className="text-4xl">{tip.icon}</div>
                  <h3 className="font-semibold text-purple-700">{tip.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 建议练习方式 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <h2 className="text-2xl font-semibold text-purple-700">
                建议练习方式
              </h2>
            </div>

            {/* 分步骤卡片，带序号圆圈 */}
            <div className="grid md:grid-cols-3 gap-6">
              {practiceSteps.map((step) => (
                <div
                  key={step.num}
                  className="bg-white border border-purple-100 rounded-xl shadow-sm p-6 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold">
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-purple-700">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 底部提示 */}
          <section className="bg-purple-50 border border-purple-100 rounded-lg px-6 py-4 text-center">
            <span className="text-xl">✨</span>
            <span className="text-purple-700 text-base ml-2">
              记住：英语发音重节奏、连贯，<b>辅音连缀就是连接音节的关键技巧</b>
              。
            </span>
          </section>
        </div>
      </main>
    </div>
  );
}
