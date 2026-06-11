/* ============================================================
   해류 탐험대 — 콘텐츠 데이터
   출처: 1000평_실내테마파크_게임구성안.md / 11.md
   ============================================================ */

const DATA = {

  /* ---------------- 문제의식 ---------------- */
  problems: [
    {
      icon: "🏝️",
      title: "섬처럼 흩어진 체험물",
      desc: `35개 체험물이 STEM × Sports라는 교육 카테고리로만 묶여 있습니다. 하나하나는 재미있지만, 공간을 가로지를 동기가 없습니다.`,
      ref: "Aarseth (2001)"
    },
    {
      icon: "🤐",
      title: "말하지 않는 환경",
      desc: `체험물마다 교육 주제는 있지만, 환경(벽·바닥·조명·소리) 자체는 아무 이야기도 하지 않습니다.`,
      ref: "Jenkins (2004)"
    },
    {
      icon: "🚦",
      title: "강제 없는 동선의 함정",
      desc: `동선이 완전히 자유롭다 보니 인기 체험물엔 줄이 몰리고, 비인기 체험물은 텅 비게 됩니다.`,
      ref: "동선 설계 참고"
    }
  ],

  problemCallout: {
    label: "핵심 메시지",
    text: `"공간이 곧 인터페이스다" — 화면 앞에 레버를 놓는 것은 시작일 뿐입니다. 진짜 핵심은 아이가 이 공간에 들어서는 순간부터 나갈 때까지, 공간 자체가 "다음에 뭘 해야 하는지"를 말해주는 구조를 만드는 것입니다.`
  },

  /* ---------------- 이론적 기반 6편 ---------------- */
  theories: [
    {
      icon: "🗺️",
      name: "Aarseth",
      year: "2001",
      principle: "게임은 서사가 아니라 공간의 협상이다",
      limitation: "체험물이 섬처럼 분리되어 있어 공간을 '협상'할 동기가 없음",
      direction: "공간 이동 자체가 게임 행위가 되도록 동선을 설계"
    },
    {
      icon: "🏛️",
      name: "Jenkins",
      year: "2004",
      principle: "디자이너는 이야기꾼이 아니라 narrative architect — 환경이 이야기를 발생시킨다",
      limitation: "각 체험물에 교육 주제는 있지만 환경 자체가 이야기를 말하지 않음",
      direction: "벽, 바닥, 소리, 빛이 스토리 단서가 되는 환경 스토리텔링"
    },
    {
      icon: "🧩",
      name: "Nitsche",
      year: "2008",
      principle: "게임 공간은 5개 층위 — rule · mediated · fictional · play · social",
      limitation: "대부분 play space만 존재하고, fictional·social space가 약함",
      direction: "각 게임에 규칙·화면·세계관·행동·사회성을 의도적으로 설계"
    },
    {
      icon: "🌀",
      name: "Calleja",
      year: "2011",
      principle: "몰입 = 6개 involvement 차원의 결합",
      limitation: "키네스틱(뛰기)에 치우치고, spatial·narrative involvement가 낮음",
      direction: "개별 게임은 2~3개 involvement에 집중, 전체적으로 6개를 균형"
    },
    {
      icon: "📡",
      name: "Benford",
      year: "2006",
      principle: "현실 공간의 불완전성은 경험 재료가 된다",
      limitation: "깔끔한 실내 공간이라 긴장감·예측불허 요소가 부족",
      direction: "물리적 환경의 비대칭·불확실성을 의도적으로 활용"
    },
    {
      icon: "🔍",
      name: "Bakkerud",
      year: "2023",
      principle: "게임 공간성 = representational + mechanical + material + player level",
      limitation: "체험물마다 material(레버, 버튼)은 있지만 4개 층위의 설계가 불균형",
      direction: "게임마다 4개 층위를 체크리스트로 점검"
    }
  ],

  /* ---------------- 전체 구조 ---------------- */
  structure: {
    big: ["20", "10", "30"],
    labels: ["스토리 연결 게임 (5챕터)", "개별 게임 아일랜드", "전체 게임 수"],
    note: `Calleja의 involvement 이론에 따르면, 너무 많은 체험물은 각각의 관여 깊이를 얕게 만듭니다. 30개로 줄이되, "체류 시간 × 몰입 강도"의 총합을 높이는 것이 핵심입니다.`
  },

  /* ---------------- 메인 스토리 ---------------- */
  storyIntro: `5개 챕터(출항 → 심해 → 빙하 → 정글강 → 귀환·정화)를 해류를 따라 이동하며, 각 챕터마다 4개의 게임이 기다립니다.`,

  storyWhy: {
    title: "왜 '해류'인가?",
    points: [
      {
        title: "공간적 이동의 서사적 근거",
        desc: `해류를 따라 이동하면 자연스럽게 장소가 바뀜 (항구 → 심해 → 빙하 → 열대 → 귀환)`
      },
      {
        title: "교육적 확장성",
        desc: `해양생물, 기후변화, 플라스틱 오염, 재활용, 에너지 등 STEM 주제를 자연스럽게 포괄`
      },
      {
        title: "공간의 협상 (Aarseth)",
        desc: `해류의 방향이 곧 동선이 되므로, "다음에 어디로 갈지"가 세계관 안에서 설명됨`
      },
      {
        title: "감각적 환경 변화 (Calleja)",
        desc: `챕터마다 온도감(에어컨), 조명, 소리, 바닥 재질을 바꿔 kinesthetic·affective involvement를 자극`
      }
    ]
  },

  storySynopsis: `플레이어는 "해류 탐험대" 대원이 됩니다. 세계 바다에서 이상한 일이 벌어지고 있습니다 — 해류가 멈추기 시작했습니다. 탐험대는 해류를 따라 원인을 찾아 떠나고, 각 구간에서 미션을 해결하면 해류의 힘이 조금씩 되살아납니다. 마지막에 해류를 완전히 복원하면 여정이 완성됩니다.`,

  /* ---------------- 5개 챕터 ---------------- */
  chapters: [
    {
      id: 1,
      theme: "harbor",
      icon: "⚓",
      title: "출항",
      subtitle: "항구에서 바다로",
      mood: "항구 부두, 밧줄, 닻, 갈매기 소리, 나무 바닥 느낌의 판넬",
      env: `벽면에 이전 탐험대가 남긴 낙서, 항해 일지 파편이 붙어있습니다. 아이들이 읽으면 "다음 구간에 뭐가 있는지" 힌트를 얻습니다 — 이야기를 대사가 아니라 환경이 전달합니다.`,
      games: [
        {
          id: "S1",
          name: "탐험대 등록소",
          format: "대형 터치스크린 + 팔찌 발급",
          ref: "Bakkerud — material level (팔찌가 물리적 인터페이스)",
          desc: `입장 시 이름 입력, 아바타 선택, NFC 팔찌 수령. 팔찌를 각 게임 센서에 터치하면 진행도가 기록됩니다.`
        },
        {
          id: "S2",
          name: "항해 장비 조립",
          format: "실물 크기 조립 테이블 + 화면",
          ref: "Nitsche — rule-based space (조립 순서 = 규칙)",
          desc: `큰 나무 부품들을 실제로 조립하면 화면에 배가 완성됩니다. 잘못 끼우면 화면 속 배가 기울어지는 피드백을 줍니다.`
        },
        {
          id: "S3",
          name: "해류 지도 퍼즐",
          format: "바닥 프로젝션 + 발 인터랙션",
          ref: "Calleja — spatial involvement (위치·방향 내면화)",
          desc: `바닥에 투사된 세계 해류 지도 위를 걸으며 해류 경로를 발로 따라가면 경로가 활성화됩니다.`
        },
        {
          id: "S4",
          name: "출항 레버",
          format: "대형 물리 레버 4개 + 전면 스크린",
          ref: "Benford — 물리적 행위와 디지털 반응의 비대칭",
          desc: `4명이 동시에 레버를 당겨야 닻이 올라갑니다. 화면에 닻이 올라가는 애니메이션 + 뱃고동 소리. 협동이 핵심입니다.`
        }
      ]
    },
    {
      id: 2,
      theme: "deep",
      icon: "🌑",
      title: "심해",
      subtitle: "빛이 없는 세계",
      mood: "어두운 조명, 형광 벽화, UV 조명, 깊은 바다 앰비언스 사운드",
      env: `바닥에 깊이 표시(100m, 500m, 1000m...), 벽에는 수압으로 찌그러진 캔 모형이 있습니다. 별도의 설명 없이 "깊다"는 것을 몸과 눈으로 느끼게 합니다.`,
      games: [
        {
          id: "S5",
          name: "심해 생물 발견",
          format: "어둠 속 손전등 탐색 + 벽면 센서",
          ref: "Aarseth — 공간 = 탐색과 발견의 시스템",
          desc: `UV 손전등을 들고 어두운 방을 돌며 숨겨진 심해 생물 그림을 비추면 생물 정보가 나타납니다.`
        },
        {
          id: "S6",
          name: "수압 실험실",
          format: "물리 펌프 + 투명 수조 디스플레이",
          ref: "Nitsche — mediated space (수압계 = 매개)",
          desc: `실제 펌프를 눌러 수압을 올리면 화면 속 잠수정이 더 깊이 들어갑니다. 너무 세게 누르면 경고가 뜹니다.`
        },
        {
          id: "S7",
          name: "앵글러피시 추격전",
          format: "전신 체감형 — 어둠 속 달리기",
          ref: "Calleja — kinesthetic + affective involvement",
          desc: `어두운 복도에서 바닥 센서 위를 달리면 화면의 앵글러피시에게 쫓기는 1인칭 체험. 멈추면 잡힙니다.`
        },
        {
          id: "S8",
          name: "해저 화산 에너지",
          format: "대형 회전 핸들 2개 + 벽면 스크린",
          ref: "Bakkerud — mechanical level (회전 = 에너지 변환 규칙)",
          desc: `핸들을 돌려 지열 에너지를 모으면 해저 화산이 빛을 내뿜습니다. 해류를 1단계 복원하는 서사적 보상입니다.`
        }
      ]
    },
    {
      id: 3,
      theme: "ice",
      icon: "🧊",
      title: "빙하",
      subtitle: "얼음이 녹는 바다",
      mood: "흰색·파란 조명, 차가운 에어컨, 빙하 사운드, 미끄러운 느낌의 바닥",
      env: `입구에서 출구로 갈수록 "얼음"이 줄어들고 물이 늘어나는 바닥 디자인입니다. 아이들이 직접 묻지 않아도 "녹고 있구나"를 느끼게 합니다.`,
      games: [
        {
          id: "S9",
          name: "빙하 균형 챌린지",
          format: "기울어지는 물리 플랫폼",
          ref: "Benford — 물리적 불확실성 = 경험 재료",
          desc: `4명이 큰 플랫폼 위에 서서 균형을 유지합니다. 기울어지면 화면의 빙하가 갈라집니다. 정확한 제어가 아니라 "흔들림 속 협동"이 재미입니다.`
        },
        {
          id: "S10",
          name: "녹는 빙하 구조",
          format: "슬라이딩 + 공 굴리기 물리 게임",
          ref: "Calleja — ludic involvement (규칙 자체의 재미)",
          desc: `미끄러운 경사면에서 공(=해양생물)을 굴려 안전지대에 넣습니다. 빙하가 녹아 경사가 점점 바뀝니다.`
        },
        {
          id: "S11",
          name: "기후 데이터 스테이션",
          format: "터치 테이블 + 물리 다이얼",
          ref: "Nitsche — rule-based + fictional space 결합",
          desc: `다이얼로 연도를 돌리면 해수면 변화가 테이블 위에 투사됩니다. "2050년에는 우리 동네 해변이 어떻게 변할까?" 같은 질문을 던집니다.`
        },
        {
          id: "S12",
          name: "빙하코어 해독",
          format: "실물 원통 모형 + AR 카메라",
          ref: "Bakkerud — representational level (빙하코어의 시각화)",
          desc: `투명 원통을 카메라에 비추면 각 층의 기후 기록이 AR로 표시됩니다. 오래된 공기 방울 = 과거 대기.`
        }
      ]
    },
    {
      id: 4,
      theme: "jungle",
      icon: "🌴",
      title: "정글강",
      subtitle: "열대 해류가 만나는 숲",
      mood: "초록 조명, 정글 사운드, 따뜻한 공기, 식물 모형, 물소리",
      env: null,
      games: [
        {
          id: "S13",
          name: "맹그로브 미로",
          format: "실물 크기 미로 + 센서",
          ref: "Aarseth — 공간의 협상 = 미로 탐색",
          desc: `실제 미로를 통과하며 벽에 숨겨진 QR을 팔찌로 터치합니다. 해양 생태계 단서를 수집합니다.`
        },
        {
          id: "S14",
          name: "산호 복원 게임",
          format: "대형 벽면 스크린 + 물리 블록",
          ref: "Jenkins — 환경이 서사를 발생시킴",
          desc: `실제 블록(산호 모양)을 선반에 올려놓으면 화면 속 산호초가 복원됩니다. 순서에 따라 다른 생태계가 완성됩니다.`
        },
        {
          id: "S15",
          name: "물의 순환 워터테이블",
          format: "물리적 수로 + 밸브 + 펌프",
          ref: "Nitsche — play space (직접 물을 다루는 행동 공간)",
          desc: `실제 물이 흐르는 수로에서 밸브를 열고 닫아 물의 경로를 만듭니다. 기존 "물놀이" 구간을 업그레이드한 버전입니다.`
        },
        {
          id: "S16",
          name: "열대 폭풍 시뮬레이터",
          format: "바람 발생기 + 전면 영상 + 사운드",
          ref: "Calleja — affective involvement (감정·감각)",
          desc: `방 안에 실제 바람이 불고, 천장 스피커에서 천둥, 전면 영상에서 파도가 칩니다. 바람 세기에 따라 미션 난이도가 변합니다.`
        }
      ]
    },
    {
      id: 5,
      theme: "dawn",
      icon: "🌅",
      title: "귀환·정화",
      subtitle: "바다를 되살리다",
      mood: "점점 밝아지는 조명, 해변 사운드, 넓은 오픈 공간",
      env: null,
      games: [
        {
          id: "S17",
          name: "분리수거 스테이션",
          format: "대형 스크린 + 물리 레버 4개",
          ref: "시그니처 게임 — 전체 컨셉의 출발점",
          desc: `플라스틱·유리·캔·종이 레버. 화면에 쓰레기가 떠내려오면 올바른 레버를 당겨 해당 쓰레기통 뚜껑을 열어 수거합니다. 속도가 점점 빨라지는 아케이드형. 스토리상 "바다에서 건져 올린 쓰레기를 처리하는 미션"입니다.`
        },
        {
          id: "S18",
          name: "해류 복원 오케스트라",
          format: "8인용 동시 드럼패드/버튼",
          ref: "Calleja — shared involvement (함께하는 경험)",
          desc: `8명이 각각 다른 악기 패드를 치면 해류의 리듬이 만들어집니다. 모두 맞추면 화면에 해류가 완전히 흐릅니다. 협동 + 리듬.`
        },
        {
          id: "S19",
          name: "약속의 벽",
          format: "터치 스크린 벽 + 팔찌 터치",
          ref: "Jenkins — 환경이 서사를 기록",
          desc: `팔찌를 터치하고 "나는 ___를 하겠습니다" 환경 약속을 입력하면 벽에 물고기 모양으로 추가됩니다. 방문객이 쌓일수록 "물고기 떼"가 벽을 가득 채웁니다.`
        },
        {
          id: "S20",
          name: "해류 탐험대 졸업식",
          format: "전면 몰입 영상 + 개인 결과",
          ref: "Bakkerud — player level (플레이어의 해석)",
          desc: `팔찌에 기록된 데이터로 개인별 탐험 리포트 영상을 생성합니다. "네가 구한 산호 3개, 분리수거 성공 87%" 등. 사진 촬영 포인트입니다.`
        }
      ]
    }
  ],

  /* ---------------- 개별 게임 아일랜드 10개 ---------------- */
  islands: [
    {
      id: "I1",
      icon: "🔵",
      name: "중력 공 레이스",
      format: "물리 레일 + 경사 조절 레버",
      involvement: "Ludic",
      desc: `공을 굴릴 경사와 경로를 레버로 조절합니다. 가장 빨리 도착하면 승리. 2인 대전.`
    },
    {
      id: "I2",
      icon: "🌬️",
      name: "바람개비 발전소",
      format: "대형 바람개비 + 에너지 게이지",
      involvement: "Kinesthetic",
      desc: `뛰면서 바람을 일으켜 바람개비를 돌립니다. 발전량이 게이지에 표시됩니다.`
    },
    {
      id: "I3",
      icon: "🎭",
      name: "그림자 극장",
      format: "대형 스크린 + 몸 실루엣 인식",
      involvement: "Affective",
      desc: `몸 모양이 화면에 실루엣으로 나타나고, 그 그림자가 동물이 됩니다. 팔을 펴면 새, 웅크리면 고양이.`
    },
    {
      id: "I4",
      icon: "🎨",
      name: "색깔 혼합 실험실",
      format: "물리 조명 믹서 (빨강·파랑·초록)",
      involvement: "Spatial",
      desc: `3개의 빛 레버를 조합해 벽면 색을 만듭니다. "보라색을 만들어봐!" 같은 미션 카드.`
    },
    {
      id: "I5",
      icon: "🎧",
      name: "소리 미로",
      format: "헤드폰 + 방향 사운드",
      involvement: "Spatial + Kinesthetic",
      desc: `헤드폰에서 들리는 소리 방향만으로 작은 미로를 통과합니다. 시각 의존을 줄이고 청각 공간감을 훈련합니다.`
    },
    {
      id: "I6",
      icon: "🧱",
      name: "건축 블록 타워",
      format: "대형 폼 블록 + 높이 센서",
      involvement: "Shared + Ludic",
      desc: `팀이 제한 시간 내 블록 탑을 쌓습니다. 높이 센서가 기록을 측정하고, 리더보드에 반영됩니다.`
    },
    {
      id: "I7",
      icon: "🖌️",
      name: "디지털 물감 벽",
      format: "벽면 터치 캔버스",
      involvement: "Affective",
      desc: `벽 전체가 터치 캔버스입니다. 손으로 그리면 디지털 물감이 퍼지고, 일정 시간 후 초기화됩니다.`
    },
    {
      id: "I8",
      icon: "🤖",
      name: "로봇 팔 조종",
      format: "조이스틱 + 실물 로봇 팔",
      involvement: "Ludic + Kinesthetic",
      desc: `조이스틱으로 실제 로봇 팔을 조종해 공을 집어 바구니에 넣습니다. 시간 제한이 있습니다.`
    },
    {
      id: "I9",
      icon: "📸",
      name: "착시 사진관",
      format: "원근법 착시 방 + 포토존",
      involvement: "Spatial",
      desc: `에임스 방처럼 사람 크기가 달라 보이는 공간입니다. 사진 촬영 포인트로도 기능합니다.`
    },
    {
      id: "I10",
      icon: "🪜",
      name: "리듬 계단",
      format: "계단에 압력 센서 + 음계",
      involvement: "Kinesthetic + Affective",
      desc: `계단을 밟으면 음이 나옵니다. 올바른 순서로 밟으면 노래가 완성됩니다.`
    }
  ],

  /* ---------------- 체크리스트 ---------------- */
  nitsche: [
    { layer: "Rule-based", question: "이 게임의 규칙이 공간 안에서 작동하는가?", bad: "화면 터치하면 정답", good: "레버를 당기면 화면 속 뚜껑이 열림" },
    { layer: "Mediated", question: "화면/소리/빛이 공간 행동과 어떻게 연결되는가?", bad: "화면만 보고 플레이", good: "물리 행위 → 공간 전체의 변화 (빛, 소리)" },
    { layer: "Fictional", question: "이 공간은 어떤 세계인가?", bad: "체험관 3번", good: "심해 1000m 지점" },
    { layer: "Play", question: "플레이어는 실제로 뭘 하는가?", bad: "서서 화면만 봄", good: "달리고, 당기고, 밟고, 돌림" },
    { layer: "Social", question: "혼자? 협동? 경쟁?", bad: "개인 터치 스크린", good: "4명이 동시에 레버를 당겨야 작동" }
  ],

  calleja: [
    { name: "Kinesthetic", kr: "몸 움직임", examples: "S7, S10, I2, I10", ratio: "8~10개", pct: 30 },
    { name: "Spatial", kr: "공간 인지", examples: "S3, S5, S13, I5, I9", ratio: "6~8개", pct: 23 },
    { name: "Narrative", kr: "이야기 추적", examples: "S1~S20 전체 + 환경 스토리텔링", ratio: "20개", pct: 67 },
    { name: "Shared", kr: "사회적 협동", examples: "S4, S9, S18, I6", ratio: "6~8개", pct: 23 },
    { name: "Affective", kr: "감정·감각", examples: "S16, I3, I7", ratio: "5~6개", pct: 18 },
    { name: "Ludic", kr: "규칙·도전", examples: "S17, S6, I1, I8", ratio: "8~10개", pct: 30 }
  ],

  /* ---------------- 동선 설계 ---------------- */
  flowIntro: `기존 시설은 두 개의 구역으로 나뉘어 있지만, 내부에서 체험물 순서가 강제되지 않는 자유 동선입니다. 결과적으로 인기 체험물에 줄이 몰리고, 비인기 체험물은 비게 됩니다. Aarseth는 게임 공간이 "이동의 자유"와 "구조적 제한" 사이의 긴장에서 작동한다고 봤습니다 — 완전한 자유도, 완전한 강제도 아닌 "반강제 나선형" 구조를 제안합니다.`,

  flowSteps: [
    { type: "node", label: "입장", icon: "🚪" },
    { type: "chapter", label: "챕터1\n출항", icon: "⚓", theme: "harbor" },
    { type: "island", label: "아일랜드\n×2", icon: "🎮" },
    { type: "chapter", label: "챕터2\n심해", icon: "🌑", theme: "deep" },
    { type: "island", label: "아일랜드\n×2", icon: "🎮" },
    { type: "chapter", label: "챕터3\n빙하", icon: "🧊", theme: "ice" },
    { type: "island", label: "아일랜드\n×2", icon: "🎮" },
    { type: "chapter", label: "챕터4\n정글강", icon: "🌴", theme: "jungle" },
    { type: "island", label: "아일랜드\n×2", icon: "🎮" },
    { type: "chapter", label: "챕터5\n귀환·정화", icon: "🌅", theme: "dawn" },
    { type: "node", label: "출구", icon: "🏁" }
  ],

  flowPrinciples: [
    {
      icon: "➡️",
      title: "챕터 간 이동은 단방향",
      desc: `해류를 "거슬러 올라갈 수 없다"는 세계관이 단방향 동선의 자연스러운 이유가 됩니다.`
    },
    {
      icon: "🔀",
      title: "챕터 내에서는 자유 이동",
      desc: `한 챕터의 4개 게임을 어떤 순서로든 플레이할 수 있습니다.`
    },
    {
      icon: "✅",
      title: "개별 아일랜드는 선택적",
      desc: `하고 싶은 것만 하고 다음으로 넘어갈 수 있는 자유 선택 공간입니다.`
    },
    {
      icon: "📶",
      title: "팔찌로 진행도 추적",
      desc: `"챕터 내 최소 3개 게임 완료" 시 다음 챕터로 이동 가능 (Bakkerud의 mechanical level).`
    }
  ],

  /* ---------------- 차별화 비교 ---------------- */
  comparison: [
    { item: "스토리", before: "없음 (STEM 교육 카테고리만 존재)", after: `"해류 탐험대" 5챕터 관통 서사` },
    { item: "동선", before: "완전 자유 → 혼잡 편중", after: "반강제 나선형 → 분산 + 몰입" },
    { item: "진행 추적", before: "없음", after: "NFC 팔찌 + 개인 탐험 리포트" },
    { item: "환경 디자인", before: "밝고 깨끗한 키즈카페 스타일", after: "챕터별 온도·조명·사운드·바닥 변화" },
    { item: "체험물 연결", before: "독립적 (넘어가도 상관없음)", after: "전 게임 클리어 시 해류 복원 + 졸업식 보상" },
    { item: "협동 요소", before: "축구·농구 등 스포츠 위주", after: "레버 동시 당기기, 균형 플랫폼, 리듬 합주 등 게임 내 협동" },
    { item: "물리-디지털 연결", before: "체험물마다 독립적", after: "물리 행위(레버, 핸들, 펌프)가 대형 화면과 실시간 연동" },
    { item: "감각 다양성", before: "시각·촉각 중심", after: "시각·촉각·청각·바람·온도감·공간감" }
  ],

  /* ---------------- 실행 우선순위 ---------------- */
  priorityIntro: `논문 전체를 관통하는 가장 중요한 메시지는 이것입니다 — "공간이 곧 인터페이스다" (Aarseth). 화면 앞에 레버를 놓는 것은 시작일 뿐이고, 진짜 핵심은 "아이가 이 공간에 들어서는 순간부터 나갈 때까지, 공간 자체가 뭘 해야 하는지 말해주는 구조"를 만드는 것입니다.`,

  priorities: [
    {
      title: "환경 스토리텔링 먼저",
      ref: "Jenkins",
      desc: `게임 하드웨어보다 벽, 바닥, 조명, 사운드가 먼저입니다. 챕터별 분위기가 확실하면 게임이 단순해도 몰입됩니다.`
    },
    {
      title: "NFC 팔찌 시스템",
      ref: "Bakkerud — material level",
      desc: `진행 추적이 있어야 스토리가 "내 이야기"가 됩니다.`
    },
    {
      title: "협동 게임 비율 유지",
      ref: "Calleja — shared involvement",
      desc: `30개 중 최소 6~8개는 2인 이상 필수 협동 게임으로 구성합니다.`
    },
    {
      title: "물리 인터페이스 다양화",
      ref: "Benford — 불확실성 = 경험 재료",
      desc: `레버, 핸들, 펌프, 플랫폼, 밟기, 달리기 등 각 게임마다 다른 신체 행위를 배치합니다.`
    },
    {
      title: "개별 아일랜드의 '쉼' 기능",
      ref: "Calleja — narrative fatigue 방지",
      desc: `스토리 피로감 해소 + 재방문 유도 (스토리는 1회지만 개별 게임은 반복 가능).`
    }
  ],

  /* ---------------- 참고문헌 14편 ---------------- */
  refIntro: `그룹 1(9편)은 "공간을 어떻게 디자인하면 좋은 이야기 경험이 되는가"를, 그룹 2(5편)는 "그 경험이 왜 좋은지, 어떻게 측정할지"를 다룹니다. 두 그룹을 합치면 디자인 → 경험 → 측정으로 이어지는 완성된 이야기 구조가 됩니다.`,

  refGroups: [
    {
      title: "그룹 1 — 공간이 이야기를 만드는 방식",
      count: "9편",
      papers: [
        {
          title: "Aarseth, Allegories of Space",
          year: "2001",
          line: "게임 속 공간은 진짜를 흉내 내는 게 아니라, '플레이가 되도록' 일부러 현실 규칙을 깨놓은 것이다.",
          example: `마리오 파이프 너머의 다른 세계, GTA의 압축된 도시처럼 — 게임 공간은 "리얼리즘"이 아니라 "플레이 가능성"을 위해 설계됩니다.`
        },
        {
          title: "Jenkins, Game Design as Narrative Architecture",
          year: "2004",
          line: "게임 디자이너는 '이야기꾼'이 아니라 '이야기가 일어날 공간을 짓는 건축가'다.",
          example: `환기적 공간 · 연행된 이야기 · 임베디드 내러티브 · 창발적 내러티브 — 4가지 환경 스토리텔링 방식을 제시했습니다.`
        },
        {
          title: "Nitsche, Video Game Spaces",
          year: "2008",
          line: "게임 속 '공간'은 한 가지가 아니라 5개의 다른 층이 겹쳐있는 것이다.",
          example: `규칙기반 · 미디어화된 · 허구적 · 플레이 · 사회적 공간 — 5층 분석틀로 모든 게임 공간을 분해할 수 있습니다.`
        },
        {
          title: "Calleja, In-Game: From Immersion to Incorporation",
          year: "2011",
          line: "'몰입했다'는 한 단어로 뭉뚱그리지 말고, 6가지 종류로 나눠서 보자.",
          example: `운동감각·공간·공유·서사·정서·놀이적 참여의 6차원(PIM) + '인코퍼레이션' 개념을 제시했습니다.`
        },
        {
          title: "Bakkerud, The Ontology of Game Spatiality",
          year: "2023",
          line: "'게임 공간'이 화면에 보이는 것인지, 실제 작동 구조인지, 기기인지, 경험인지부터 나눠서 말하자.",
          example: `표상적 · 기계적 · 물질적 · 플레이어 수준의 4층 프레임워크 — 오픈월드의 '투명 벽'처럼 보이는 것과 작동하는 것이 다를 수 있습니다.`
        },
        {
          title: "Benford et al., Can You See Me Now?",
          year: "2006",
          line: "GPS가 가끔 틀려도, 그 '오류'를 디자이너가 잘 다루면 오히려 게임을 더 재밌게 만들 수 있다.",
          example: `불확실성을 제거·숨기기·관리·드러내기·활용하기의 5가지 디자인 전략으로 다룰 수 있습니다.`
        },
        {
          title: "Flintham et al., Uncle Roy All Around You",
          year: "2003",
          line: "한 명은 진짜 거리를 걷고, 한 명은 가상 지도를 보며 서로 돕거나 방해하는 '게임+연극' 혼합 경험.",
          example: `실제-가상을 넘나드는 혼합현실 경험 디자인의 초기 사례로, 신뢰·협력·혼란의 사회적 상호작용 패턴을 보여줍니다.`
        },
        {
          title: "Shin, Kim, Yoon & Woo, Fragments (CHI 2021)",
          year: "2021",
          line: "같은 AR 게임도 '방 크기 + 가구 배치'에 따라 현존감과 이야기 몰입이 정반대로 움직인다.",
          example: `큰방+가구중앙 배치는 현존감은 가장 높였지만(p=.013), 내러티브 몰입은 오히려 가장 낮췄습니다(p=.002). N=72 between-subject 실험.`
        },
        {
          title: "Shin & Woo, How Space is Told (CHI 2023)",
          year: "2023",
          line: "AR 스토리 작가들이 '이동 경로'와 '이야기'를 연결하는 방식엔 두 가지 패턴이 있다.",
          example: `좁은 경로에 스토리를 단단히 묶는 패턴과, 넓은 경로에 느슨하게 매핑하는 패턴 — 22명의 제작 과정을 분석해 발견했습니다.`
        }
      ]
    },
    {
      title: "그룹 2 — 재미의 이유와 측정",
      count: "5편",
      papers: [
        {
          title: "Ryan, Rigby & Przybylski, SDT in Games",
          year: "2006",
          line: "게임이 '자율성·유능감·관계성' 세 가지 마음의 욕구를 채워줄수록 더 재밌고, 기분도 좋아진다.",
          example: `자율성·유능감이 높을수록 즐거움·선호도가 높아지고, 관계성은 '또 하고 싶다'는 의향을 독립적으로 예측합니다.`
        },
        {
          title: "Sweetser & Wyeth, GameFlow",
          year: "2005",
          line: "'이 게임 재밌나?'를 8개 항목 체크리스트로 평가할 수 있게 만든 모델.",
          example: `집중·도전·실력·컨트롤·명확한목표·피드백·몰입·사회적상호작용 — 2,300회 이상 인용된 게임 UX 평가의 표준 모델입니다.`
        },
        {
          title: "Wirth et al., Spatial Presence Process Model",
          year: "2007",
          line: "'내가 진짜 그 가상공간 안에 있다'는 느낌이 어떤 2단계 과정을 거쳐 만들어지는지 설명한 모델.",
          example: `① 공간상황모델(SSM) 형성 → ② SSM이 '나의 기준틀'이 되는 2단계 과정으로 현존감을 설명합니다.`
        },
        {
          title: "Yee, Motivations for Play in Online Games",
          year: "2006",
          line: "사람들이 게임을 하는 이유는 크게 '성취·사회·몰입' 3가지로 나뉘는데, 동시에 여러 이유를 가질 수도 있다.",
          example: `약 3,000명 설문 분석 결과 10개 세부 동기가 3개 요인으로 묶이며, 요인 간 상관관계는 매우 약했습니다(r<.10).`
        },
        {
          title: "Nacke & Lindley, Affective Ludology",
          year: "2008",
          line: "'재밌다'고 말하기 전에, 뇌파나 심박수 같은 몸이 먼저 반응한다는 걸 측정으로 보여준 연구.",
          example: `EEG·ECG·EMG·GSR·시선추적으로 '플로우' 레벨에서 가장 높은 긍정적 정서·각성 반응을 측정했습니다.`
        }
      ]
    }
  ],

  refLink: `※ 14편 전체의 상세 RQ·방법론·한계·예시는 별도 문헌 정리본(11.md)에서 확인할 수 있습니다.`
};
