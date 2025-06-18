import Link from "next/link";

const modules = [
  {
    href: "/pronouns",
    title: "英语代词",
    desc: "详解人称、物主、反身等代词用法",
  },
  {
    href: "/consonant-clusters",
    title: "辅音连缀",
    desc: "常见 Consonant Blends 分类与示例",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-10 flex flex-col gap-12">
        <header className="text-center flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-gray-900">英语小知识导航</h1>
          <p className="text-lg text-gray-600">
            汇集常用但易被忽视的英语知识点，持续更新中。
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <Link
              key={m.title}
              href={m.href}
              className="group flex flex-col gap-2 p-6 rounded-xl shadow border border-gray-200 transition transform hover:-translate-y-1 hover:shadow-lg bg-white hover:border-gray-300"
            >
              <h2 className="text-xl font-semibold text-gray-900">{m.title}</h2>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                {m.desc}
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
