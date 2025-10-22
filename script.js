// 5가지 전문 역량 (레이더 차트 축)
const EXPERT_LABELS = ['실행 및 지구력', '정보 처리 능력', '사회적 상호작용', '구조화 및 계획력', '창의적 사고 및 통찰'];

// 5가지 재미 유형 (결과 이미지 매핑)
const TYPES = ['fighter', 'scanner', 'director', 'planner', 'explorer'];

// 10개 문항과 각 선택지의 점수 구조 (새로운 5가지 역량 순서에 맞게 조정: 0:실행, 1:정보, 2:사회, 3:구조, 4:창의)
const quizData = [
    {
        question: "처음 접하는 어려운 개념을 이해하는 가장 좋은 방법은?",
        options: [
            { text: "여러 번 반복해서 읽고 암기한다.", scores: [3, 0, 0, 0, 0] },     // 실행
            { text: "친구에게 설명하며 이해됐는지 확인한다.", scores: [0, 0, 2, 0, 0] }, // 사회
            { text: "관련 영상이나 자료를 찾아본다.", scores: [0, 2, 0, 0, 0] },     // 정보
            { text: "내 주변 일상적인 예시에 대입해 본다.", scores: [0, 0, 0, 0, 3] }, // 창의
            { text: "전체 목차와 흐름을 파악하며 논리적으로 접근한다.", scores: [0, 0, 0, 2, 0] } // 구조
        ]
    },
    {
        question: "벼락치기 공부를 할 때, 나의 핵심 목표는?",
        options: [
            { text: "인터넷에서 족보나 핵심 요약본을 찾는다.", scores: [0, 3, 0, 0, 0] },     // 정보
            { text: "남은 시간을 분 단위로 쪼개 공부 계획을 짠다.", scores: [0, 0, 0, 2, 0] },     // 구조
            { text: "밤을 새서라도 진도를 끝내는 집중력을 발휘한다.", scores: [3, 0, 0, 0, 0] },     // 실행
            { text: "가장 흥미롭고 관심 있는 주제부터 깊이 있게 파고든다.", scores: [0, 0, 0, 0, 2] },     // 창의
            { text: "스터디 그룹에서 중요한 부분과 모르는 부분을 함께 찾아본다.", scores: [0, 0, 3, 0, 0] }     // 사회
        ]
    },
    {
        question: "수업 시간에 필기하는 나만의 스타일은?",
        options: [
            { text: "교수님 말씀 중 '중요하다'는 부분을 강조한다.", scores: [2, 0, 0, 0, 0] },     // 실행
            { text: "친구의 필기를 참고하거나 빌려서 정리한다.", scores: [0, 0, 2, 0, 0] },     // 사회
            { text: "내 생각과 의견을 적어 심화 학습을 한다.", scores: [0, 0, 0, 0, 3] },     // 창의
            { text: "태블릿 필기 또는 노트북 워딩을 선호한다.", scores: [0, 3, 0, 0, 0] },     // 정보
            { text: "색깔, 번호, 구역을 정해서 체계적으로 정리한다.", scores: [0, 0, 0, 3, 0] }     // 구조
        ]
    },
    {
        question: "과제 마감 직전, 가장 먼저 나를 괴롭히는 생각은?",
        options: [
            { text: "'지금이라도 빨리 시작해야 하는데…' 초조해진다.", scores: [3, 0, 0, 0, 0] },     // 실행
            { text: "'평범하지 않은 창의적인 아이디어를 내야 하는데…' 고민한다.", scores: [0, 0, 0, 0, 3] },     // 창의
            { text: "'이 주제에 대한 정보가 더 있을까?' 계속 검색한다.", scores: [0, 2, 0, 0, 0] },     // 정보
            { text: "'계획했던 진도가 늦춰지면 안 되는데…' 불안해진다.", scores: [0, 0, 0, 3, 0] },     // 구조
            { text: "'같이 수업듣는 친구와 같이 하면 좋은데' 고민한다.", scores: [0, 0, 2, 0, 0] }     // 사회
        ]
    },
    {
        question: "팀 프로젝트 발표를 준비할 때, 가장 중요하다고 생각하는 부분은?",
        options: [
            { text: "정해진 시간과 분량을 정확히 맞추는 것.", scores: [0, 0, 0, 3, 0] },     // 구조
            { text: "팀원 간의 역할 분담과 협의가 잘 이루어지는 것.", scores: [0, 0, 2, 0, 0] },     // 사회
            { text: "다른 팀과 다른, 차별화된 발표 주제 또는 방식.", scores: [0, 0, 0, 0, 3] },     // 창의
            { text: "청중의 시선을 사로잡는 PPT 디자인과 정보.", scores: [0, 2, 0, 0, 0] },     // 정보
            { text: "발표하는 순간의 자연스럽고 유창한 피칭.", scores: [3, 0, 0, 0, 0] }     // 실행
        ]
    },
    {
        question: "긴 글의 학습 자료를 받았을 때, 나의 시선은?",
        options: [
            { text: "페이지 번호와 소제목 순서대로 차근차근 읽는다.", scores: [0, 0, 0, 2, 0] },     // 구조
            { text: "중요해 보이는 단어에 동그라미를 치며 속독한다.", scores: [2, 0, 0, 0, 0] },     // 실행
            { text: "자료를 훑어보며 중요하거나 어려운 내용을 찾아본다.", scores: [0, 3, 0, 0, 0] },     // 정보
            { text: "함께 읽고 논의할 스터디 메이트를 구한다.", scores: [0, 2, 0, 0, 0] },     // 사회
            { text: "글을 읽으며 나의 생각과 의견, 비판할 부분이 생각난다.", scores: [0, 0, 0, 0, 3] }     // 창의
        ]
    },
    {
        question: "가장 효과적이라고 느끼는 복습 방법은?",
        options: [
            { text: "시험 직전에 빠르게 한 번이라도 더 보는 것.", scores: [3, 0, 0, 0, 0] },     // 실행
            { text: "같은 수업을 듣는 친구와 중요한 개념을 질문하고 답하는 것.", scores: [0, 0, 3, 0, 0] },     // 사회
            { text: "정리해 놓은 필기자료와 PPT, 강의 영상을 다시 보며 복습하는 것.", scores: [0, 2, 0, 0, 0] },     // 정보
            { text: "2주 전 복습 계획표에 따라 정해진 분량을 공부하는 것.", scores: [0, 0, 0, 3, 0] },     // 구조
            { text: "배운 내용을 기반으로 백지에 적으며, 어려운 내용은 예시를 생각해내며 학습하는 것.", scores: [0, 0, 0, 0, 2] }     // 창의
        ]
    },
    {
        question: "스터디 모임을 주도하게 되었을 때, 나는?",
        options: [
            { text: "회의 자료, 일정표를 미리 만들어 배포한다.", scores: [0, 0, 0, 3, 0] },     // 구조
            { text: "필요한 자료를 찾아 공유한다.", scores: [0, 2, 0, 0, 0] },     // 정보
            { text: "공부 분위기와 집중을 이끌어내는 데 노력한다.", scores: [2, 0, 0, 0, 0] },     // 실행
            { text: "각자 필기할 것과 속기록을 수업별로 분배한다.", scores: [0, 0, 3, 0, 0] },     // 사회
            { text: "스터디 내용을 기반으로 심도 있는 주제에 대해 토론한다.", scores: [0, 0, 0, 0, 3] }     // 창의
        ]
    },
    {
        question: "나의 책상이나 공부 공간 상태는?",
        options: [
            { text: "모든 물건이 제자리에 정리되어 있다.", scores: [0, 0, 0, 2, 0] },     // 구조
            { text: "커피잔, 에너지 드링크 병이 많다.", scores: [3, 0, 0, 0, 0] },     // 실행
            { text: "태블릿, 노트북 등 디지털 기기들이 많다.", scores: [0, 2, 0, 0, 0] },     // 정보
            { text: "내가 만든 메모, 포스트잇 등이 이곳저곳 붙어있다.", scores: [0, 0, 0, 0, 2] },     // 창의
            { text: "옆에 같이 공부하는 스터디 메이트가 있다.", scores: [0, 0, 3, 0, 0] }     // 사회
        ]
    },
    {
        question: "시험 결과가 예상보다 안 좋았을 때, 나의 주된 반응은?",
        options: [
            { text: "다음번 나의 공부 계획표를 더 촘촘히 세부적으로 강화한다.", scores: [0, 0, 0, 3, 0] },     // 구조
            { text: "다음 시험에 벼락치기로 복수하겠다고 다짐한다.", scores: [2, 0, 0, 0, 0] },     // 실행
            { text: "인터넷에서 해당 과목 시험 후기를 찾아본다.", scores: [0, 3, 0, 0, 0] },     // 정보
            { text: "내가 이 문제에서 생각한 새로운 관점에 대해 교수님과 이야기한다.", scores: [0, 0, 0, 0, 3] },     // 창의
            { text: "결과보다 같이 공부한 친구와 맛있는 음식과 술을 먹는다.", scores: [0, 0, 2, 0, 0] }     // 사회
        ]
    }
];


// 퀴즈를 HTML에 표시하는 함수 (이전과 동일)
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
            label.innerHTML = `
                <input type="checkbox" name="q${index}" value="${optionIndex}">
                ${option.text}
            `;
            questionDiv.appendChild(label);
        });

        quizForm.appendChild(questionDiv);
    });
}

// 결과 계산 함수 (Chart.js 데이터 준비 로직 포함)
function calculateResult() {
    let scores = [0, 0, 0, 0, 0];
    const totalQuestions = quizData.length;
    let answeredQuestionsCount = 0;

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

    if (answeredQuestionsCount === 0) {
         alert("최소 한 항목을 선택해 주세요.");
         return;
    }
    
    // 1. 최고 점수 유형 판별 (재미 이미지 용)
    let maxScore = -1;
    let maxIndex = -1;
    
    scores.forEach((score, index) => {
        if (score > maxScore) {
            maxScore = score;
            maxIndex = index;
        }
    });

    const finalType = TYPES[maxIndex];

    // 2. Chart.js 로직 호출 (전문 분석 용)
    displayResult(finalType, scores);
}

// 결과 화면 업데이트 및 Chart.js 생성 함수
function displayResult(type, scores) {
    const quizContainer = document.querySelector('.quiz-container');
    const resultContainer = document.querySelector('.result-container');
    const resultImage = document.getElementById('final-result-image');
    const downloadButton = document.getElementById('download-button');
    const analysisText = document.getElementById('analysis-text');

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const resultInfo = getResultInfo(type);
    
    // 1. 이미지 파일 및 다운로드 버튼 연결
    const finalImageURL = '/i-garten-quiz/' + resultInfo.imageFile; 
    resultImage.src = finalImageURL;
    downloadButton.href = finalImageURL;

    // 2. 전문 분석 텍스트 출력
    analysisText.innerHTML = getAnalysisText(scores); 

    // 3. Chart.js를 사용하여 레이더 차트 그리기
    createRadarChart(scores);
}

// Chart.js 생성 함수
function createRadarChart(scores) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    // Max Score 설정 (최대 10문항 * 3점 = 30점)
    const maxPossibleScore = 30;

    const data = {
        labels: EXPERT_LABELS, // 전문 역량 라벨
        datasets: [{
            label: '나의 학습 역량 점수 (Max: 30점)',
            data: scores, // 계산된 5가지 역량별 점수
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            r: {
                angleLines: { display: true },
                suggestedMin: 0,
                suggestedMax: maxPossibleScore, // 최대 점수를 30점으로 설정
                pointLabels: {
                    font: { size: 12 }
                },
                ticks: {
                    stepSize: 10,
                    display: false // 눈금 수치 숨기기
                }
            }
        },
        plugins: {
            legend: { display: false } // 범례 숨기기
        }
    };
    
    // 차트 인스턴스 생성 및 파괴 (이전 차트가 있으면 삭제)
    if (window.myRadarChart instanceof Chart) {
        window.myRadarChart.destroy();
    }
    
    window.myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
    });
}

// 유형별 상세 콘텐츠 관리 함수 (재미 이미지 용)
function getResultInfo(type) {
    // [중요] 피그마에서 추출한 파일명을 여기에 정확히 입력하세요.
    const resultMaps = {
        'fighter': { title: "밤샘 파이터", imageFile: "result_fighter.png" },
        'scanner': { title: "스마트 스캔러", imageFile: "result_scanner.png" },
        'director': { title: "팀플 디렉터", imageFile: "result_director.png" },
        'planner': { title: "철벽 플래너", imageFile: "result_planner.png" },
        'explorer': { title: "아이디어 폭발러", imageFile: "result_explorer.png" }
    };
    return resultMaps[type] || { title: "결과 오류", imageFile: "" };
}

// 전문 분석 텍스트 생성 (가장 낮은 점수 기반으로 분석 및 조언 제공)
function getAnalysisText(scores) {
    const analysisMap = {
        0: "실행 및 지구력",
        1: "정보 처리 능력",
        2: "사회적 상호작용",
        3: "구조화 및 계획력",
        4: "창의적 사고 및 통찰"
    };

    // 가장 낮은 점수를 찾음
    let minScore = Math.min(...scores);
    
    // 가장 낮은 점수를 받은 역량들 (부족한 부분)
    const weaknesses = scores
        .map((score, index) => ({ score, index }))
        .filter(item => item.score === minScore)
        .map(item => analysisMap[item.index]);

    let analysis = `
        <p>참가자님의 학습 역량 분석 결과, **${weaknesses.join(' 및 ')}** 영역에서 보완이 필요합니다. 
        이는 해당 분야의 학습 전략에 대해 고민이 필요하거나, 평소 강점으로 활용하지 않던 영역일 수 있습니다.</p>
        <p>아이뜰 팀은 모든 아이들이 자신의 부족한 부분을 채우고 강점을 살릴 수 있도록 **개별 맞춤형 교육**의 중요성을 강조합니다. 
        ${getSpecificAdvice(weaknesses)}</p>
    `;

    return analysis;
}

// 부족한 역량별 구체적인 조언
function getSpecificAdvice(weaknesses) {
    let advice = "";
    if (weaknesses.includes("실행 및 지구력")) {
        advice += "🔸 **실행 및 지구력 보완:** 벼락치기를 피하고, '매일 30분'과 같은 유연한 학습 루틴을 설정하여 꾸준히 학습하는 습관이 중요합니다. ";
    }
    if (weaknesses.includes("정보 처리 능력")) {
        advice += "🔸 **정보 처리 능력 보완:** 정보 과부하를 막기 위해, 핵심 자료 3가지만 정하고 손으로 직접 요약해보는 필터링 학습이 필요합니다. ";
    }
    if (weaknesses.includes("사회적 상호작용")) {
        advice += "🔸 **사회적 상호작용 보완:** 혼자 하는 학습 시간을 확보하되, 팀원과의 협력에서 '가장 어려운 부분'을 자진하여 담당해보는 책임감 있는 역할이 독립적인 성장을 돕습니다. ";
    }
    if (weaknesses.includes("구조화 및 계획력")) {
        advice += "🔸 **구조화 및 계획력 보완:** 완벽주의를 잠시 내려놓고, 계획에 '비상 시간(Buffer Time)'을 두어 유연성을 확보하는 전략이 필요합니다. ";
    }
    if (weaknesses.includes("창의적 사고 및 통찰")) {
        advice += "🔸 **창의적 사고 및 통찰 보완:** 좋은 아이디어를 현실화하기 위해, 학습 내용을 '키워드 - 구조화 - 완성'의 단계별 실행 전략으로 나누어 정리해보세요. ";
    }
    return advice.length > 0 ? `<div style="margin-top: 10px;">${advice}</div>` : "";
}


// 퀴즈 시작 및 버튼 이벤트 연결
renderQuiz();
document.getElementById('submit-quiz').addEventListener('click', calculateResult);