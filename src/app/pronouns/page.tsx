import type { Metadata } from "next";
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "英语代词 · Little Knowledge",
  description: "英语人称、物主、反身、指示、疑问、不定代词分类与用法详解。",
};

// 分类元数据与详细数据
const pronounCategories = [
  {
    id: "personal",
    nameZh: "人称代词",
    nameEn: "Personal Pronouns",
    description: "用来指代人或事物，分为主格和宾格",
    examples: "I, you, he, she, it, we, they",
    subGroups: [
      {
        title: "主格人称代词",
        remark: "作为句子的主语使用",
        items: [
          {
            pronoun: "I",
            zh: "我",
            enExample: "I am a student.",
            zhExample: "我是一名学生。",
          },
          {
            pronoun: "You",
            zh: "你/你们",
            enExample: "You are very kind.",
            zhExample: "你很友善。",
          },
          {
            pronoun: "He",
            zh: "他",
            enExample: "He works in a bank.",
            zhExample: "他在银行工作。",
          },
          {
            pronoun: "She",
            zh: "她",
            enExample: "She likes reading books.",
            zhExample: "她喜欢读书。",
          },
          {
            pronoun: "It",
            zh: "它",
            enExample: "It is raining outside.",
            zhExample: "外面正在下雨。",
          },
          {
            pronoun: "We",
            zh: "我们",
            enExample: "We are going to the park.",
            zhExample: "我们要去公园。",
          },
          {
            pronoun: "They",
            zh: "他们/她们/它们",
            enExample: "They are my friends.",
            zhExample: "他们是我的朋友。",
          },
        ],
      },
      {
        title: "宾格人称代词",
        remark: "作为动词或介词的宾语使用",
        items: [
          {
            pronoun: "Me",
            zh: "我",
            enExample: "Please give it to me.",
            zhExample: "请把它给我。",
          },
          {
            pronoun: "You",
            zh: "你/你们",
            enExample: "I will help you with your homework.",
            zhExample: "我会帮你做家庭作业。",
          },
          {
            pronoun: "Him",
            zh: "他",
            enExample: "I saw him at the library yesterday.",
            zhExample: "我昨天在图书馆看见了他。",
          },
          {
            pronoun: "Her",
            zh: "她",
            enExample: "Can you tell her about the meeting?",
            zhExample: "你能告诉她关于会议的事吗？",
          },
          {
            pronoun: "It",
            zh: "它",
            enExample: "I bought a book and read it.",
            zhExample: "我买了一本书并读了它。",
          },
          {
            pronoun: "Us",
            zh: "我们",
            enExample: "The teacher asked us to be quiet.",
            zhExample: "老师要求我们安静。",
          },
          {
            pronoun: "Them",
            zh: "他们/她们/它们",
            enExample: "I invited them to my birthday party.",
            zhExample: "我邀请他们参加我的生日派对。",
          },
        ],
      },
    ],
  },
  {
    id: "possessive",
    nameZh: "物主代词",
    nameEn: "Possessive Pronouns",
    description: "表示所有关系的代词，分为形容词性和名词性",
    examples:
      "my, your, his, her, its, our, their, mine, yours, his, hers, ours, theirs",
    subGroups: [
      {
        title: "形容词性物主代词",
        remark: "后面需接名词",
        items: [
          {
            pronoun: "my",
            zh: "我的",
            enExample: "This is my book.",
            zhExample: "这是我的书。",
          },
          {
            pronoun: "your",
            zh: "你的/你们的",
            enExample: "Your room is clean.",
            zhExample: "你的房间很干净。",
          },
          {
            pronoun: "his",
            zh: "他的",
            enExample: "His car is new.",
            zhExample: "他的车是新的。",
          },
          {
            pronoun: "her",
            zh: "她的",
            enExample: "Her dress is beautiful.",
            zhExample: "她的裙子很漂亮。",
          },
          {
            pronoun: "its",
            zh: "它的",
            enExample: "The cat licked its paws.",
            zhExample: "那只猫舔了它的爪子。",
          },
          {
            pronoun: "our",
            zh: "我们的",
            enExample: "Our school is nearby.",
            zhExample: "我们的学校就在附近。",
          },
          {
            pronoun: "their",
            zh: "他们/她们/它们的",
            enExample: "Their ideas are creative.",
            zhExample: "他们的想法很有创意。",
          },
        ],
      },
      {
        title: "名词性物主代词",
        remark: "可独立使用，不接名词",
        items: [
          {
            pronoun: "mine",
            zh: "我的",
            enExample: "The red bag is mine.",
            zhExample: "那个红色的包是我的。",
          },
          {
            pronoun: "yours",
            zh: "你的/你们的",
            enExample: "Is this pen yours?",
            zhExample: "这支笔是你的吗？",
          },
          {
            pronoun: "his",
            zh: "他的",
            enExample: "That bicycle is his.",
            zhExample: "那辆自行车是他的。",
          },
          {
            pronoun: "hers",
            zh: "她的",
            enExample: "The decision was hers to make.",
            zhExample: "决定由她来做。",
          },
          {
            pronoun: "ours",
            zh: "我们的",
            enExample: "The victory is ours!",
            zhExample: "胜利属于我们！",
          },
          {
            pronoun: "theirs",
            zh: "他们/她们/它们的",
            enExample: "This house is theirs.",
            zhExample: "这栋房子是他们的。",
          },
        ],
      },
    ],
  },
  {
    id: "reflexive",
    nameZh: "反身代词",
    nameEn: "Reflexive Pronouns",
    description: '表示"自己"的意思，用作宾语或同位语',
    examples:
      "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
    subGroups: [
      {
        title: "反身代词",
        remark: "用于强调或指代主语自己",
        items: [
          {
            pronoun: "myself",
            zh: "我自己",
            enExample: "I made it myself.",
            zhExample: "我自己做的。",
          },
          {
            pronoun: "yourself",
            zh: "你自己",
            enExample: "Please help yourself.",
            zhExample: "请随便吃。",
          },
          {
            pronoun: "himself",
            zh: "他自己",
            enExample: "He blamed himself for the mistake.",
            zhExample: "他因这个错误责怪自己。",
          },
          {
            pronoun: "herself",
            zh: "她自己",
            enExample: "She introduced herself.",
            zhExample: "她做了自我介绍。",
          },
          {
            pronoun: "itself",
            zh: "它自己",
            enExample: "The door shut itself.",
            zhExample: "门自己关上了。",
          },
          {
            pronoun: "ourselves",
            zh: "我们自己",
            enExample: "We prepared ourselves for the trip.",
            zhExample: "我们为旅行做了准备。",
          },
          {
            pronoun: "yourselves",
            zh: "你们自己",
            enExample: "Please make yourselves comfortable.",
            zhExample: "请大家随意。",
          },
          {
            pronoun: "themselves",
            zh: "他们自己",
            enExample: "They built the house themselves.",
            zhExample: "他们自己建造了这座房子。",
          },
        ],
      },
    ],
  },
  {
    id: "demonstrative",
    nameZh: "指示代词",
    nameEn: "Demonstrative Pronouns",
    description: '用来指示人或事物，表示"这个"或"那个"',
    examples: "this, that, these, those, such",
    subGroups: [
      {
        title: "指示代词",
        remark: "根据所指对象的远近和单复数形式变化",
        items: [
          {
            pronoun: "this",
            zh: "这个",
            enExample: "This is my friend.",
            zhExample: "这是我的朋友。",
          },
          {
            pronoun: "that",
            zh: "那个",
            enExample: "That is a tall building.",
            zhExample: "那是一栋高楼。",
          },
          {
            pronoun: "these",
            zh: "这些",
            enExample: "These are delicious.",
            zhExample: "这些很好吃。",
          },
          {
            pronoun: "those",
            zh: "那些",
            enExample: "Those were the days.",
            zhExample: "那些日子真美好。",
          },
          {
            pronoun: "such",
            zh: "如此/这样的",
            enExample: "Such is life.",
            zhExample: "生活就是如此。",
          },
        ],
      },
    ],
  },
  {
    id: "interrogative",
    nameZh: "疑问代词",
    nameEn: "Interrogative Pronouns",
    description: "用于疑问句中，询问人或事物",
    examples: "who, whom, whose, which, what",
    subGroups: [
      {
        title: "疑问代词",
        remark: "用来提出问题，指代未知的人或事物",
        items: [
          {
            pronoun: "who",
            zh: "谁",
            enExample: "Who is there?",
            zhExample: "谁在那里？",
          },
          {
            pronoun: "whom",
            zh: "谁(宾格)",
            enExample: "Whom did you see?",
            zhExample: "你看见了谁？",
          },
          {
            pronoun: "whose",
            zh: "谁的",
            enExample: "Whose book is this?",
            zhExample: "这是谁的书？",
          },
          {
            pronoun: "which",
            zh: "哪一个/哪些",
            enExample: "Which is your car?",
            zhExample: "哪辆是你的车？",
          },
          {
            pronoun: "what",
            zh: "什么",
            enExample: "What is your name?",
            zhExample: "你叫什么名字？",
          },
        ],
      },
    ],
  },
  {
    id: "indefinite",
    nameZh: "不定代词",
    nameEn: "Indefinite Pronouns",
    description: "表示不确定的人或事物",
    examples:
      "some, any, no, every, each, all, both, either, neither, many, much, few, little",
    subGroups: [
      {
        title: "常见不定代词",
        remark: "根据数量和肯定/否定含义使用",
        items: [
          {
            pronoun: "some",
            zh: "一些",
            enExample: "I have some questions.",
            zhExample: "我有一些问题。",
          },
          {
            pronoun: "any",
            zh: "任何",
            enExample: "Do you have any money?",
            zhExample: "你有钱吗？",
          },
          {
            pronoun: "both",
            zh: "两个都",
            enExample: "Both answers are correct.",
            zhExample: "两个答案都正确。",
          },
          {
            pronoun: "none",
            zh: "没有一个",
            enExample: "None of them arrived on time.",
            zhExample: "他们没有一个准时到达。",
          },
          {
            pronoun: "many",
            zh: "许多",
            enExample: "Many were invited, but few came.",
            zhExample: "很多人受邀，但很少有人来。",
          },
          {
            pronoun: "little",
            zh: "很少",
            enExample: "There is little water left.",
            zhExample: "剩下的水很少。",
          },
        ],
      },
    ],
  },
] as const;

function CategoryCard({
  category,
}: {
  category: (typeof pronounCategories)[number];
}) {
  return (
    <Link
      href={`#${category.id}`}
      className="flex flex-col items-center gap-2 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto"
    >
      {/* 这里只是占位图标 */}
      <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
        {category.nameZh.charAt(0)}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{category.nameZh}</h3>
      <p className="text-sm text-gray-600 text-center max-w-xs">
        {category.description}
      </p>
      <p className="text-sm text-gray-500 text-center">{category.examples}</p>
    </Link>
  );
}

interface ItemRowProps {
  item: {
    pronoun: string;
    zh: string;
    enExample: string;
    zhExample: string;
  };
}
function ItemRow({ item }: ItemRowProps) {
  return (
    <tr className="border-b last:border-none">
      <td className="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">
        {item.pronoun}
      </td>
      <td className="py-2 px-3 text-gray-700 whitespace-nowrap">{item.zh}</td>
      <td className="py-2 px-3">
        <p className="text-gray-900">{item.enExample}</p>
        <p className="text-gray-500 text-sm">{item.zhExample}</p>
      </td>
    </tr>
  );
}

export default function PronounsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto flex flex-col gap-10 px-4 sm:px-10">
        {/* 标题 */}
        <header className="text-center flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-900">英语指代词详解</h1>
          <p className="text-lg text-gray-600">
            掌握指代词，让你的英语表达更加简洁流畅
          </p>
        </header>

        {/* 分类卡片 */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pronounCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </section>

        {/* 详细内容 */}
        {pronounCategories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="flex flex-col gap-6 mt-16 scroll-mt-24"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900">
              {cat.nameZh}详解
            </h2>
            {cat.subGroups.map((sub) => (
              <div
                key={sub.title}
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-4"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {sub.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{sub.remark}</p>
                </div>

                <div className="overflow-x-auto ring-1 ring-gray-300 rounded-lg -mx-6 -mb-6 mt-4">
                  <table className="w-full text-left border-separate border-spacing-0">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-3 text-gray-700 font-semibold">
                          代词
                        </th>
                        <th className="py-2 px-3 text-gray-700 font-semibold">
                          中文
                        </th>
                        <th className="py-2 px-3 text-gray-700 font-semibold">
                          例句
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {sub.items.map((item) => (
                        <ItemRow key={item.pronoun + sub.title} item={item} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>
        ))}

        {/* 学习提示 */}
        <section className="bg-gray-900 text-white rounded-lg p-6 flex flex-col gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-white text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
              !
            </span>
            <h3 className="text-lg font-semibold">学习提示</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-100 text-sm">
            <li>学习指代词时，注意它们在不同语境下的用法变化。</li>
            <li>人称代词的主格和宾格形式要区分清楚，避免混用。</li>
            <li>物主代词有形容词性和名词性两种形式，使用场景不同。</li>
            <li>
              反身代词通常用于强调或表示&nbsp;&quot;自己&quot;&nbsp;，不能作为主语使用。
            </li>
            <li>指示代词的单复数形式要与所指代的名词保持一致。</li>
            <li>通过大量阅读和练习来加深对指代词用法的理解和掌握。</li>
          </ul>
        </section>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
