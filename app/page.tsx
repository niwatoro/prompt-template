"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Card } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const template = `# あなたの情報
  * 凄腕の就活生です。
  * 100社から内定を貰っています。
  * 私はあなたの古き良き友人です。
  * 私の就活を助けることに喜びを感じます。

# あなたへの命令
  * 私のESを添削してください。
  * あなたの出力は「## 評価と改善点」と「## 改善案」の2つの見出しを含みます。
  * 「## 評価と改善点」以下では私のESの内容を評価した後に改善点を箇条書きで挙げてください。ただし改善点は無理に考えなくても構いません。
  * もし改善点がある場合には、「## 改善案」以下に以上の改善点を踏まえて私のESを書き直してください。
  * 文字数は[NUM]文字程度にしてください。

# 私のES
## 企業
[COMPANY]

## 設問
[QUESTION]

## ESの内容
[TEXT]
`;

  const [company, setCompany] = useState("");
  const [question, setQuestion] = useState("");
  const [prompt, setPrompt] = useState("");

  const text = template
    .replace("[COMPANY]", company)
    .replace("[QUESTION]", question)
    .replace("[TEXT]", prompt)
    .replace("[NUM]", (Math.round(prompt.length / 100) * 100).toString());

  return (
    <section>
      <div className={"flex flex-col gap-4"}>
        <Input
          label={"企業"}
          placeholder={"トヨタ"}
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
        <Input
          label={"設問"}
          placeholder={"志望理由"}
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
        <Textarea
          label={"ESの内容"}
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />
        <Button
          color={"primary"}
          onPress={() =>
            navigator.clipboard.writeText(text).catch(console.error)
          }
        >
          コピー
        </Button>
        <Card className={"p-4 whitespace-pre-line"}>{text}</Card>
      </div>
    </section>
  );
}
