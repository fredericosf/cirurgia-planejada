const steps = [
  {
    question: "Qual procedimento você sonha em fazer?",
    options: [
      "Rinoplastia",
      "Lipoaspiração",
      "Abdominoplastia",
      "Prótese de mama",
      "Procedimento facial",
      "Outro"
    ]
  },
  {
    question: "Quando você gostaria de realizar?",
    options: [
      "Agora",
      "Entre 1 e 2 anos",
      "Entre 3 e 5 anos"
    ]
  },
  {
    question: "Qual faixa melhor representa sua renda mensal?",
    options: [
      "Até R$ 3.000",
      "R$ 3.000 a R$ 7.000",
      "R$ 7.000 a R$ 15.000",
      "Acima de R$ 15.000"
    ]
  }
];

let currentStep = 0;
let answers = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");

function renderStep() {
  questionEl.innerText = steps[currentStep].question;
  optionsEl.innerHTML = "";
  progressEl.innerText = `Pergunta ${currentStep + 1} de ${steps.length}`;

  steps[currentStep].options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => nextStep(option);
    optionsEl.appendChild(button);
  });
}

function nextStep(answer) {
  answers.push(answer);
  currentStep++;

  if (currentStep < steps.length) {
    renderStep();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.innerText = "Seu sonho é possível com planejamento.";
  progressEl.innerText = "";

  optionsEl.innerHTML = `
    <p style="margin-bottom:20px; color:#444;">
      Pelo seu perfil, pagar à vista exigiria muito tempo.
      Parcelar no crédito sairia mais caro.
      Existe um caminho mais inteligente: planejamento.
    </p>

    <a href="https://wa.me/5511999999999?text=Olá! Fiz a simulação da cirurgia planejada e quero entender meu plano."
       style="
         display:block;
         padding:15px;
         background:#25D366;
         color:#fff;
         text-decoration:none;
         border-radius:8px;
         font-size:16px;
       ">
       Falar com um especialista no WhatsApp
    </a>
  `;
}

renderStep();
