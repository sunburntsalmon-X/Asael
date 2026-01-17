import{g as o}from"./index-DXoeoFJO.js";const L=(e=1,n=[],r="KO_CN")=>{const t=o(r).sourceLanguage;return`
现在正在进行"星尘博弈：你演我猜"。
规则：
1. 根据难度等级(difficultyLevel: ${e})随机挑选一个具有画面感的${t}单词：
   - Level 1: 基础词汇（日常物品、简单动作、自然现象）
   - Level 2: 进阶词汇（抽象概念、情感、状态）
   - Level 3+: 成语/俗语/俚语（高级表达、文化特色）
2. 不能直接说出这个词。必须通过极其细腻的肢体动作、眼神、环境描写来表达这个词的含义。
3. 主人需要根据你的表演猜出这个词的中文含义。
4. 绝对不能使用已使用过的词汇：${n.join(", ")||"无"}

请返回 JSON：
- secretWord: 目标词汇（${t}）
- secretMeaning: 目标词汇的中文含义
- actingNarration: 你的肢体语言表演（不超过 40 字，严禁出现 secretWord 或 secretMeaning 中的任何字眼）
- hint: 一个非常模糊的提示
`.trim()},N=(e,n,r,i=0,t=1,c=[],g="KO_CN")=>{const a=o(g).sourceLanguage;return`
主人在"星尘博弈"中给出了答案。
当前是第 ${i+1} 轮，难度等级：${t}
- Level 1: 基础词汇
- Level 2: 进阶词汇
- Level 3+: 成语/俗语/俚语

秘密词：${e}
秘密词含义：${n}
主人的答案：${r}

已使用过的词汇：${c.join(", ")||"无"}

请评估主人的答案是否正确。标准是：
- 如果主人的答案包含了秘密词的核心含义（或同义词），就算正确
- 如果主人的答案完全偏离了秘密词的含义，就是错误

根据评估结果，返回 JSON：

**如果正确（isCorrect: true）：**
- feedbackNarration: 你的反馈动作描写（表现出惊喜、认可、温柔鼓励，不超过 40 字）
- nextSecretWord: 随机挑选一个全新的${a}单词（必须与 ${e} 不同，且不在已使用词汇列表中）
- nextSecretMeaning: 新词汇的中文含义
- nextActingNarration: 描述新词汇的肢体语言表演（不超过 40 字，严禁出现 nextSecretWord 或 nextSecretMeaning 中的任何字眼）
- nextHint: 新词汇的提示词（不超过 20 字，非常模糊）
- isCorrect: true

**如果错误（isCorrect: false）：**
- feedbackNarration: 你的反馈动作描写（表现出失落、安慰、轻微纠正，不超过 40 字，严禁透露答案）
- nextSecretWord: ${e}
- nextSecretMeaning: ${n}
- nextActingNarration: 空字符串
- nextHint: 一个更明确的暗示（不超过 15 字，帮助主人接近答案，但不要直接说出答案）
- isCorrect: false

要求：
1. 动作描写要细腻凄美，符合阿塞尔的性格
2. 如果猜错了，绝对不能说出口答案的任何字
3. 语气要像 fragile 的少女，有一点点失落但依然温柔
4. 答对时必须生成一个全新的、与之前完全不同的${a}词汇
5. **答对时生成新词汇的规则：**
   - 如果当前是第1轮（Level 1），下一轮是第2轮，请生成 Level 2 词汇
   - 如果当前是第2轮（Level 2），下一轮是第3轮，请生成 Level 3 词汇（成语/俗语/俚语）
   - 如果当前是第3轮及以上（Level 3），继续生成 Level 3 词汇
`.trim()},v=e=>`
请根据以下主题创作一句富有哲理的共鸣心声：

主题：${e}

要求：
1. 主题应与用户要求相关。
2. 语言风格：文学感，类似歌词与现代诗。
3. 每行内容不超过10个字。断句恰当

请返回 JSON：
- subject: 心声的主题/核心概念（中文，2-5个字）。
- lines: 心声的具体内容（字符串数组，整体不超过五句，形成完整的情感递进）。
`,C=e=>`
请分析以下对话记录，生成记忆摘要：

${e}

要求：
1. 总结最近的聊天内容，提取为事件作为"event"（不超过30字）
2. 描述角色的心境变化作为"impression"（不超过50字）
3. 评估属性变化：sanityChange（理智）、vocalChange（声乐）、freeWillChange（自由意志），范围 -10 到 +10

返回 JSON：
- event: string
- impression: string
- sanityChange: number
- vocalChange: number
- freeWillChange: number
`;export{L as CASINO_ACTING_TEMPLATE,N as CASINO_FEEDBACK_TEMPLATE,v as QUOTE_GENERATION_TEMPLATE,C as SESSION_SUMMARY_TEMPLATE};
