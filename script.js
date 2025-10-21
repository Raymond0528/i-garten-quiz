// 5가지 유형을 나타내는 상수
const TYPES = ['fighter', 'scanner', 'director', 'planner', 'explorer'];

// 10개 문항과 각 선택지의 점수 구조
// [주의] 이미지 파일명은 폴더에 저장한 파일명과 정확히 일치해야 합니다!
const quizData = [
    {
        question: "처음 접하는 어려운 개념을 이해하는 가장 좋은 방법은?",
        options: [
            { text: "여러 번 반복해서 읽고 암기한다.", scores: [3, 0, 0, 0, 0] }, // FIGHTER
            { text: "친구에게 설명하며 이해됐는지 확인한다.", scores: [0, 0, 2, 0, 0] }, // DIRECTOR
            { text: "관련 영상이나 자료를 찾아본다.", scores: [0, 2, 0, 0, 0] }, // SCANNER
            { text: "내 주변 일상적인 예시에 대입해 본다.", scores: [0, 0, 0, 0, 3] }, // EXPLORER
            { text: "전체 목차와 흐름을 파악하며 논리적으로 접근한다.", scores: [0, 0, 0, 2, 0] } // PLANNER
        ]
    },
    {
        question: "벼락치기 공부를 할 때, 나의 핵심 목표는?",
        options: [
            { text: "인터넷에서 족보나 핵심 요약본을 찾는다.", scores: [0, 3, 0, 0, 0] }, // SCANNER
            { text: "남은 시간을 분 단위로 쪼개 공부 계획을 짠다.", scores: [0, 0, 0, 2, 0] }, // PLANNER
            { text: "밤을 새서라도 진도를 끝내는 집중력을 발휘한다.", scores: [3, 0, 0, 0, 0] }, // FIGHTER
            { text: "가장 흥미롭고 관심 있는 주제부터 깊이 있게 파고든다.", scores: [0, 0, 0, 0, 2] }, // EXPLORER
            { text: "스터디 그룹에서 중요한 부분과 모르는 부분을 함께 찾아본다.", scores: [0, 0, 3, 0, 0] } // DIRECTOR
        ]
    },
    {
        question: "수업 시간에 필기하는 나만의 스타일은?",
        options: [
            { text: "교수님 말씀 중 '중요하다'는 부분을 강조한다.", scores: [2, 0, 0, 0, 0] }, // FIGHTER
            { text: "친구의 필기를 참고하거나 빌려서 정리한다.", scores: [0, 0, 2, 0, 0] }, // DIRECTOR
            { text: "내 생각과 의견을 적어 심화 학습을 한다.", scores: [0, 0, 0, 0, 3] }, // EXPLORER
            { text: "태블릿 필기 또는 노트북 워딩을 선호한다.", scores: [0, 3, 0, 0, 0] }, // SCANNER
            { text: "색깔, 번호, 구역을 정해서 체계적으로 정리한다.", scores: [0, 0, 0, 3, 0] } // PLANNER
        ]
    },
    {
        question: "과제 마감 직전, 가장 먼저 나를 괴롭히는 생각은?",
        options: [
            { text: "'지금이라도 빨리 시작해야 하는데…' 초조해진다.", scores: [3, 0, 0, 0, 0] }, // FIGHTER
            { text: "'평범하지 않은 창의적인 아이디어를 내야 하는데…' 고민한다.", scores: [0, 0, 0, 0, 3] }, // EXPLORER
            { text: "'이 주제에 대한 정보가 더 있을까?' 계속 검색한다.", scores: [0, 2, 0, 0, 0] }, // SCANNER
            { text: "'계획했던 진도가 늦춰지면 안 되는데…' 불안해진다.", scores: [0, 0, 0, 3, 0] }, // PLANNER
            { text: "'같이 수업듣는 친구와 같이 하면 좋은데' 고민한다.", scores: [0, 0, 2, 0, 0] } // DIRECTOR
        ]
    },
    {
        question: "팀 프로젝트 발표를 준비할 때, 가장 중요하다고 생각하는 부분은?",
        options: [
            { text: "정해진 시간과 분량을 정확히 맞추는 것.", scores: [0, 0, 0, 3, 0] }, // PLANNER
            { text: "팀원 간의 역할 분담과 협의가 잘 이루어지는 것.", scores: [0, 0, 2, 0, 0] }, // DIRECTOR
            { text: "다른 팀과 다른, 차별화된 발표 주제 또는 방식.", scores: [0, 0, 0, 0, 3] }, // EXPLORER
            { text: "청중의 시선을 사로잡는 PPT 디자인과 정보.", scores: [0, 2, 0, 0, 0] }, // SCANNER
            { text: "발표하는 순간의 자연스럽고 유창한 피칭.", scores: [3, 0, 0, 0, 0] } // FIGHTER
        ]
    },
    {
        question: "긴 글의 학습 자료를 받았을 때, 나의 시선은?",
        options: [
            { text: "페이지 번호와 소제목 순서대로 차근차근 읽는다.", scores: [0, 0, 0, 2, 0] }, // PLANNER
            { text: "중요해 보이는 단어에 동그라미를 치며 속독한다.", scores: [2, 0, 0, 0, 0] }, // FIGHTER
            { text: "자료를 훑어보며 중요하거나 어려운 내용을 찾아본다.", scores: [0, 3, 0, 0, 0] }, // SCANNER
            { text: "함께 읽고 논의할 스터디 메이트를 구한다.", scores: [0, 2, 0, 0, 0] }, // DIRECTOR
            { text: "글을 읽으며 나의 생각과 의견, 비판할 부분이 생각난다.", scores: [0, 0, 0, 0, 3] } // EXPLORER
        ]
    },
    {
        question: "가장 효과적이라고 느끼는 복습 방법은?",
        options: [
            { text: "시험 직전에 빠르게 한 번이라도 더 보는 것.", scores: [3, 0, 0, 0, 0] }, // FIGHTER
            { text: "같은 수업을 듣는 친구와 중요한 개념을 질문하고 답하는 것.", scores: [0, 0, 3, 0, 0] }, // DIRECTOR
            { text: "정리해 놓은 필기자료와 PPT, 강의 영상을 다시 보며 복습하는 것.", scores: [0, 2, 0, 0, 0] }, // SCANNER
            { text: "2주 전 복습 계획표에 따라 정해진 분량을 공부하는 것.", scores: [0, 0, 0, 3, 0] }, // PLANNER
            { text: "배운 내용을 기반으로 백지에 적으며, 어려운 내용은 예시를 생각해내며 학습하는 것.", scores: [0, 0, 0, 0, 2] } // EXPLORER
        ]
    },
    {
        question: "스터디 모임을 주도하게 되었을 때, 나는?",
        options: [
            { text: "회의 자료, 일정표를 미리 만들어 배포한다.", scores: [0, 0, 0, 3, 0] }, // PLANNER
            { text: "필요한 자료를 찾아 공유한다.", scores: [0, 2, 0, 0, 0] }, // SCANNER
            { text: "공부 분위기와 집중을 이끌어내는 데 노력한다.", scores: [2, 0, 0, 0, 0] }, // FIGHTER
            { text: "각자 필기할 것과 속기록을 수업별로 분배한다.", scores: [0, 0, 3, 0, 0] }, // DIRECTOR
            { text: "스터디 내용을 기반으로 심도 있는 주제에 대해 토론한다.", scores: [0, 0, 0, 0, 3] } // EXPLORER
        ]
    },
    {
        question: "나의 책상이나 공부 공간 상태는?",
        options: [
            { text: "모든 물건이 제자리에 정리되어 있다.", scores: [0, 0, 0, 2, 0] }, // PLANNER
            { text: "커피잔, 에너지 드링크 병이 많다.", scores: [3, 0, 0, 0, 0] }, // FIGHTER
            { text: "태블릿, 노트북 등 디지털 기기들이 많다.", scores: [0, 2, 0, 0, 0] }, // SCANNER
            { text: "내가 만든 메모, 포스트잇 등이 이곳저곳 붙어있다.", scores: [0, 0, 0, 0, 2] }, // EXPLORER
            { text: "옆에 같이 공부하는 스터디 메이트가 있다.", scores: [0, 0, 3, 0, 0] } // DIRECTOR
        ]
    },
    {
        question: "시험 결과가 예상보다 안 좋았을 때, 나의 주된 반응은?",
        options: [
            { text: "다음번 나의 공부 계획표를 더 촘촘히 세부적으로 강화한다.", scores: [0, 0, 0, 3, 0] }, // PLANNER
            { text: "다음 시험에 벼락치기로 복수하겠다고 다짐한다.", scores: [2, 0, 0, 0, 0] }, // FIGHTER
            { text: "인터넷에서 해당 과목 시험 후기를 찾아본다.", scores: [0, 3, 0, 0, 0] }, // SCANNER
            { text: "내가 이 문제에서 생각한 새로운 관점에 대해 교수님과 이야기한다.", scores: [0, 0, 0, 0, 3] }, // EXPLORER
            { text: "결과보다 같이 공부한 친구와 맛있는 음식과 술을 먹는다.", scores: [0, 0, 2, 0, 0] } // DIRECTOR
        ]
    }
];


// 퀴즈를 HTML에 표시하는 함수
function renderQuiz() {
    const quizForm = document.getElementById('quiz-form');
    if (!quizForm) return; 
    
    quizForm.innerHTML = '';

    quizData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-block');
        questionDiv.innerHTML = `<h3>${index + 1}. ${item.question}</h3>`;

        item.options.forEach((option, optionIndex) => {
            const label = document.createElement('label');
            // type을 checkbox로 설정하여 복수 선택 가능
            label.innerHTML = `
                <input type="checkbox" name="q${index}" value="${optionIndex}">
                ${option.text}
            `;
            questionDiv.appendChild(label);
        });

        quizForm.appendChild(questionDiv);
    });
}

// 결과 계산 함수
function calculateResult() {
    let scores = [0, 0, 0, 0, 0];
    const totalQuestions = quizData.length;
    let answeredQuestionsCount = 0;

    // 1. 점수 합산 (체크박스 대응)
    quizData.forEach((question, qIndex) => {
        const selectedOptions = document.querySelectorAll(`input[name="q${qIndex}"]:checked`);
        
        if (selectedOptions.length > 0) {
            answeredQuestionsCount++;
            
            selectedOptions.forEach(selected => {
                const selectedIndex = parseInt(selected.value);
                const optionScores = question.options[selectedIndex].scores;
                
                for (let i = 0; i < optionScores.length; i++) {
                    scores[i] += optionScores[i];
                }
            });
        }
    });

    // 최소 한 문항은 응답해야 함
    if (answeredQuestionsCount === 0) {
         alert("최소 한 항목을 선택해 주세요.");
         return;
    }
    
    // 2. 최고 점수 유형 판별
    let maxScore = -1;
    let maxIndex = -1;
    
    scores.forEach((score, index) => {
        // 점수가 높은 유형을 최종 결과로 선택
        if (score > maxScore) {
            maxScore = score;
            maxIndex = index;
        }
    });

    if (maxIndex === -1) {
        // 모든 점수가 0인 경우 (발생 가능성은 낮음)
        alert("선택된 항목이 없습니다. 최소 한 항목을 선택해 주세요.");
        return;
    }

    const finalType = TYPES[maxIndex];

    displayResult(finalType);
}

// 결과 화면 업데이트 함수
function displayResult(type) {
    const quizContainer = document.querySelector('.quiz-container');
    const resultContainer = document.querySelector('.result-container');
    const resultImage = document.getElementById('final-result-image');
    const downloadButton = document.getElementById('download-button');
    
    // 퀴즈 화면 숨기고 결과 화면 보여주기
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    // 최종 결과에 따라 이미지 파일명 연결
    const resultInfo = getResultInfo(type);
    
    // 1. 이미지 파일명 연결 (가장 중요!)
    resultImage.src = resultInfo.imageFile;
    
    // 2. 다운로드 버튼에 이미지 파일 연결
    downloadButton.href = resultInfo.imageFile;
}

// 유형별 상세 콘텐츠 관리 함수 (이미지 파일명 포함)
function getResultInfo(type) {
    // [중요] 피그마에서 추출한 파일명을 여기에 정확히 입력하세요.
    const resultMaps = {
        'fighter': {
            title: "밤샘 파이터",
            imageFile: "result_fighter.png", // 파일명 확인 필요!
        },
        'scanner': {
            title: "스마트 스캔러",
            imageFile: "result_scanner.png", 
        },
        'director': {
            title: "팀플 디렉터",
            imageFile: "result_director.png", 
        },
        'planner': {
            title: "철벽 플래너",
            imageFile: "result_planner.png", 
        },
        'explorer': {
            title: "아이디어 폭발러",
            imageFile: "result_explorer.png", 
        }
    };
    return resultMaps[type] || { title: "결과 오류", imageFile: "" };
}

// 퀴즈 시작 및 버튼 이벤트 연결
renderQuiz();
document.getElementById('submit-quiz').addEventListener('click', calculateResult);