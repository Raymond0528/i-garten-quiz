// 5가지 전문 역량 (레이더 차트 축)
const EXPERT_LABELS = ['실행 및 지구력', '정보 처리 능력', '사회적 상호작용', '구조화 및 계획력', '창의적 사고 및 통찰'];
// [수정 반영] Chart.js 표시용 라벨: 줄바꿈 반영
const CHART_LABELS = ['실행 및 지구력', '정보 처리\n능력', '사회적 상호작용', '구조화 및\n계획력', '창의적 사고\n및 통찰']; 

// 5가지 재미 유형 (결과 이미지 매핑)
const TYPES = ['fighter', 'scanner', 'director', 'planner', 'explorer'];

// 10개 문항과 각 선택지의 점수 구조
const quizData = [
    {
        question: "처음 접하는 어려운 개념을 이해하는 가장 좋은 방법은?",
        options: [
            { text: "여러 번 반복해서 읽고 암기한다.", scores: [3, 0, 0, 0, 0] },
            { text: "친구에게 설명하며 이해됐는지 확인한다.", scores: [0, 0, 2, 0, 0] },
            { text: "관련 영상이나 자료를 찾아본다.", scores: [0, 2, 0, 0, 0] },
            { text: "내 주변 일상적인 예시에 대입해 본다.", scores: [0, 0, 0, 0, 3] },
            { text: "전체 목차와 흐름을 파악하며 논리적으로 접근한다.", scores: [0, 0, 0, 2, 0] }
        ]
    },
    {
        question: "벼락치기 공부를 할 때, 나의 핵심 목표는?",
        options: [
            { text: "인터넷에서 족보나 핵심 요약본을 찾는다.", scores: [0, 3, 0, 0, 0] },
            { text: "남은 시간을 분 단위로 쪼개 공부 계획을 짠다.", scores: [0, 0, 0, 2, 0] },
            { text: "밤을 새서라도 진도를 끝내는 집중력을 발휘한다.", scores: [3, 0, 0, 0, 0] },
            { text: "가장 흥미롭고 관심 있는 주제부터 깊이 있게 파고든다.", scores: [0, 0, 0, 0, 2] },
            { text: "스터디 그룹에서 중요한 부분과 모르는 부분을 함께 찾아본다.", scores: [0, 0, 3, 0, 0] }
        ]
    },
    {
        question: "수업 시간에 필기하는 나만의 스타일은?",
        options: [
            { text: "교수님 말씀 중 '중요하다'는 부분을 강조한다.", scores: [2, 0, 0, 0, 0] },
            { text: "친구의 필기를 참고하거나 빌려서 정리한다.", scores: [0, 0, 2, 0, 0] },
            { text: "내 생각과 의견을 적어 심화 학습을 한다.", scores: [0, 0, 0, 0, 3] },
            { text: "태블릿 필기 또는 노트북 워딩을 선호한다.", scores: [0, 3, 0, 0, 0] },
            { text: "색깔, 번호, 구역을 정해서 체계적으로 정리한다.", scores: [0, 0, 0, 3, 0] }
        ]
    },
    {
        question: "과제 마감 직전, 가장 먼저 나를 괴롭히는 생각은?",
        options: [
            { text: "'지금이라도 빨리 시작해야 하는데…' 초조해진다.", scores: [3, 0, 0, 0, 0] },
            { text: "'평범하지 않은 창의적인 아이디어를 내야 하는데…' 고민한다.", scores: [0, 0, 0, 0, 3] },
            { text: "'이 주제에 대한 정보가 더 있을까?' 계속 검색한다.", scores: [0, 2, 0, 0, 0] },
            { text: "'계획했던 진도가 늦춰지면 안 되는데…' 불안해진다.", scores: [0, 0, 0, 3, 0] },
            { text: "'같이 수업듣는 친구와 같이 하면 좋은데' 고민한다.", scores: [0, 0, 2, 0, 0] }
        ]
    },
    {
        question: "팀 프로젝트 발표를 준비할 때, 가장 중요하다고 생각하는 부분은?",
        options: [
            { text: "정해진 시간과 분량을 정확히 맞추는 것.", scores: [0, 0, 0, 3, 0] },
            { text: "팀원 간의 역할 분담과 협의가 잘 이루어지는 것.", scores: [0, 0, 2, 0, 0] },
            { text: "다른 팀과 다른, 차별화된 발표 주제 또는 방식.", scores: [0, 0, 0, 0, 3] },
            { text: "청중의 시선을 사로잡는 PPT 디자인과 정보.", scores: [0, 2, 0, 0, 0] },
            { text: "발표하는 순간의 자연스럽고 유창한 피칭.", scores: [3, 0, 0, 0, 0] }
        ]
    },
    {
        question: "긴 글의 학습 자료를 받았을 때, 나의 시선은?",
        options: [
            { text: "페이지 번호와 소제목 순서대로 차근차근 읽는다.", scores: [0, 0, 0, 2, 0] },
            { text: "중요해 보이는 단어에 동그라미를 치며 속독한다.", scores: [2, 0, 0, 0, 0] },
            { text: "자료를 훑어보며 중요하거나 어려운 내용을 찾아본다.", scores: [0, 3, 0, 0, 0] },
            { text: "함께 읽고 논의할 스터디 메이트를 구한다.", scores: [0, 2, 0, 0, 0] },
            { text: "글을 읽으며 나의 생각과 의견, 비판할 부분이 생각난다.", scores: [0, 0, 0, 0, 3] }
        ]
    },
    {
        question: "가장 효과적이라고 느끼는 복습 방법은?",
        options: [
            { text: "시험 직전에 빠르게 한 번이라도 더 보는 것.", scores: [3, 0, 0, 0, 0] },
            { text: "같은 수업을 듣는 친구와 중요한 개념을 질문하고 답하는 것.", scores: [0, 0, 3, 0, 0] },
            { text: "정리해 놓은 필기자료와 PPT, 강의 영상을 다시 보며 복습하는 것.", scores: [0, 2, 0, 0, 0] },
            { text: "2주 전 복습 계획표에 따라 정해진 분량을 공부하는 것.", scores: [0, 0, 0, 3, 0] },
            { text: "배운 내용을 기반으로 백지에 적으며, 어려운 내용은 예시를 생각해내며 학습하는 것.", scores: [0, 0, 0, 0, 2] }
        ]
    },
    {
        question: "스터디 모임을 주도하게 되었을 때, 나는?",
        options: [
            { text: "회의 자료, 일정표를 미리 만들어 배포한다.", scores: [0, 0, 0, 3, 0] },
            { text: "필요한 자료를 찾아 공유한다.", scores: [0, 2, 0, 0, 0] },
            { text: "공부 분위기와 집중을 이끌어내는 데 노력한다.", scores: [2, 0, 0, 0, 0] },
            { text: "각자 필기할 것과 속기록을 수업별로 분배한다.", scores: [0, 0, 3, 0, 0] },
            { text: "스터디 내용을 기반으로 심도 있는 주제에 대해 토론한다.", scores: [0, 0, 0, 0, 3] }
        ]
    },
    {
        question: "나의 책상이나 공부 공간 상태는?",
        options: [
            { text: "모든 물건이 제자리에 정리되어 있다.", scores: [0, 0, 0, 2, 0] },
            { text: "커피잔, 에너지 드링크 병이 많다.", scores: [3, 0, 0, 0, 0] },
            { text: "태블릿, 노트북 등 디지털 기기들이 많다.", scores: [0, 2, 0, 0, 0] },
            { text: "내가 만든 메모, 포스트잇 등이 이곳저곳 붙어있다.", scores: [0, 0, 0, 0, 2] },
            { text: "옆에 같이 공부하는 스터디 메이트가 있다.", scores: [0, 0, 3, 0, 0] }
        ]
    },
    {
        question: "시험 결과가 예상보다 안 좋았을 때, 나의 주된 반응은?",
        options: [
            { text: "다음번 나의 공부 계획표를 더 촘촘히 세부적으로 강화한다.", scores: [0, 0, 0, 3, 0] },
            { text: "다음 시험에 벼락치기로 복수하겠다고 다짐한다.", scores: [2, 0, 0, 0, 0] },
            { text: "인터넷에서 해당 과목 시험 후기를 찾아본다.", scores: [0, 3, 0, 0, 0] },
            { text: "내가 이 문제에서 생각한 새로운 관점에 대해 교수님과 이야기한다.", scores: [0, 0, 0, 0, 3] },
            { text: "결과보다 같이 공부한 친구와 맛있는 음식과 술을 먹는다.", scores: [0, 0, 2, 0, 0] }
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
         alert("최소 한 항목을 선택해 주세요!");
         return;
    }
    
    // 최고점 및 최저점 판별
    let maxScore = -1;
    let maxIndex = -1;
    let minScore = 999;
    
    scores.forEach((score, index) => {
        if (score > maxScore) {
            maxScore = score;
            maxIndex = index;
        }
        if (score < minScore) {
            minScore = score;
        }
    });

    const finalType = TYPES[maxIndex]; 

    displayResult(finalType, scores, maxIndex, minScore);
}

// 결과 화면 업데이트 및 Chart.js 생성 함수
function displayResult(type, scores, maxIndex, minScore) {
    const quizContainer = document.querySelector('.quiz-container');
    const resultContainer = document.querySelector('.result-container');
    const resultImage = document.getElementById('final-result-image');
    const downloadButton = document.getElementById('download-button');
    const analysisContent = document.getElementById('analysis-content');

    // [수정 반영] 스크롤을 맨 위로 초기화합니다.
    window.scrollTo(0, 0); 

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const resultInfo = getResultInfo(type);
    
    // 1. 이미지 파일 및 다운로드 버튼 연결
    const finalImageURL = '/i-garten-quiz/' + resultInfo.imageFile; 
    resultImage.src = finalImageURL;
    downloadButton.href = finalImageURL;

    // 2. 전문 분석 텍스트 출력
    analysisContent.innerHTML = getAnalysisText(scores, maxIndex, minScore); 

    // 3. Chart.js를 사용하여 레이더 차트 그리기
    createRadarChart(scores);
}

// Chart.js 생성 함수 (최종 수정 반영: 단순한 거미줄, 차트 자체 크기 유지)
function createRadarChart(scores) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    const maxPossibleScore = 25; 

    const data = {
        labels: CHART_LABELS, // 전문 역량 라벨 (줄바꿈 반영)
        datasets: [{
            label: '나의 학습 역량 점수',
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
                suggestedMax: maxPossibleScore, 
                
                beginAtZero: true, 
                ticks: {
                    stepSize: 12.5, // 눈금 간격을 12.5로 조정하여 선을 최소화 (3개 선)
                    display: false
                },
                grid: {
                    color: '#ddd'
                },
                pointLabels: {
                    font: { size: 12 },
                    color: '#000'
                }
            }
        },
        plugins: {
            legend: { display: false }
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
    const resultMaps = {
        'fighter': { title: "밤샘 파이터", imageFile: "result_fighter.png" },
        'scanner': { title: "스마트 스캔러", imageFile: "result_scanner.png" },
        'director': { title: "팀플 디렉터", imageFile: "result_director.png" },
        'planner': { title: "철벽 플래너", imageFile: "result_planner.png" },
        'explorer': { title: "아이디어 폭발러", imageFile: "result_explorer.png" }
    };
    return resultMaps[type] || { title: "결과 오류", imageFile: "" };
}

// 전문 분석 텍스트 생성 (최종 뉘앙스 및 스타일 반영)
function getAnalysisText(scores, maxIndex, minScore) {
    const maxArea = EXPERT_LABELS[maxIndex];
    
    // 최저점 역량 찾기
    const weaknessIndices = scores
        .map((score, index) => ({ score, index }))
        .filter(item => item.score === minScore)
        .map(item => item.index);
        
    const weaknessAreas = weaknessIndices.map(index => EXPERT_LABELS[index]);
    
    // 강점과 약점에 대한 구체적인 설명과 조언을 담은 객체
    const detailedInfo = {
        '실행 및 지구력': { strength: "학습 목표를 향해 집중하여 돌파하는 실행력과 꾸준한 반복 학습 능력", weakness: "체계적인 루틴 설정과 장기적인 지구력 보완", tip: "벼락치기를 피하고, '매일 30분'과 같은 유연한 학습 루틴을 설정하여 꾸준히 학습하는 습관이 중요합니다." },
        '정보 처리 능력': { strength: "방대한 디지털 정보를 빠르게 검색하고 핵심을 추출하는 정보 필터링 능력", weakness: "정보 과부하 방지와 깊이 있는 자료 정리 어려움", tip: "정보 과부하를 막기 위해, 핵심 자료 3가지만 정하고 손으로 직접 요약해보는 필터링 학습이 필요합니다." },
        '사회적 상호작용': { strength: "타인과의 협력에서 시너지를 창출하며, 피드백을 통해 학습 효율을 높이는 능력", weakness: "독립적인 학습 시간 부족과 혼자 문제 해결하는 능력 보완", tip: "혼자 학습하는 시간을 확보하되, 팀원과의 협력에서 '가장 어려운 부분'을 자진하여 담당해보는 책임감 있는 역할이 독립적인 성장을 돕습니다." },
        '구조화 및 계획력': { strength: "시간을 관리하고 학습 자료를 체계적으로 분류하는 능력", weakness: "계획에 대한 강박으로 인한 유연성 부족과 상황 대처 능력 보완", tip: "완벽주의를 잠시 내려놓고, 계획에 '비상 시간(Buffer Time)'을 두어 유연성을 확보하는 전략이 필요합니다." },
        '창의적 사고 및 통찰': { strength: "새로운 관점을 제시하고, 기존 지식에서 비판적인 통찰을 이끌어내는 창의적인 사고 능력", weakness: "아이디어를 현실화하는 구체적인 실행 단계와 기본적인 지식의 틀 확립", tip: "좋은 아이디어를 현실화하기 위해, 학습 내용을 '키워드 - 구조화 - 완성'의 단계별 실행 전략으로 나누어 정리해보세요." }
    };
    
    const maxInfo = detailedInfo[maxArea];
    
    // 분석 텍스트 조합
    let analysisText = `
        <p>참가자님의 학습 역량 분석 결과, '${maxArea}' 영역에서 '탁월'하지만, '${weaknessAreas.join(' 및 ')}' 영역에서 '보완'이 필요합니다.</p>
        
        <p><b>['${maxArea}' (강점) 분석]</b></p>
        <p>'${maxArea}' 영역은 '${maxInfo.strength}'의 특징을 가집니다. 이 강점을 살려 학습 목표를 달성하시길 추천드립니다.</p>
    `;
    
    // 부족한 부분별 상세 조언 추가
    weaknessAreas.forEach(area => {
        const itemInfo = detailedInfo[area];
        analysisText += `
            <p><b>['${area}' (보완) 분석]</b></p>
            <p>'${area}' 영역은 '${itemInfo.weakness}'이 필요합니다. 이 영역을 강화하기 위해 '${itemInfo.tip}'</p>
        `;
    });
    
    analysisText += `<p style="margin-top: 20px; font-weight: bold; color: #1A237E;">아이뜰 팀은 모든 아이들이 자신의 부족한 부분을 채우고 강점을 살릴 수 있도록 개별 맞춤형 교육의 중요성을 강조합니다.</p>`;

    return analysisText;
}

// 퀴즈 시작 및 버튼 이벤트 연결
renderQuiz();
document.getElementById('submit-quiz').addEventListener('click', calculateResult);