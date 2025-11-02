// Render functions
const colors = {
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-500', light: 'bg-purple-50' },
  green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-500', light: 'bg-green-50' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-500', light: 'bg-blue-50' },
  red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-500', light: 'bg-red-50' }
};

function renderSection(section, color) {
  const c = colors[color];
  
  if (section.type === 'sinav-konulari') {
    return `
      <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-400 shadow-lg mb-6">
        <h3 class="text-3xl font-bold mb-4 text-orange-900"><i class="fas fa-graduation-cap mr-3"></i>${section.title}</h3>
        <div class="grid md:grid-cols-3 gap-4">
          ${section.items.map(item => `
            <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-500 hover:scale-105 transition">
              <div class="flex items-center mb-3">
                <i class="fas ${item.icon} text-3xl text-orange-600 mr-3"></i>
                <span class="text-xl font-bold text-orange-700">${item.soru}</span>
              </div>
              <p class="text-gray-800 leading-relaxed">${item.konu}</p>
            </div>
          `).join('')}
        </div>
      </div>`;
  }
  
  if (section.type === 'kesif') {
    return `
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-400 shadow-lg">
        <h3 class="text-3xl font-bold mb-4 text-indigo-900"><i class="fas fa-flask mr-3"></i>${section.title}</h3>
        <div class="space-y-4">
          ${section.timeline.map((item, idx) => `
            <div class="relative pl-12 pb-6 ${idx < section.timeline.length - 1 ? 'border-l-4 border-indigo-300' : ''}">
              <div class="absolute left-0 top-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                ${idx + 1}
              </div>
              <div class="bg-white p-5 rounded-lg shadow-md ml-4">
                <div class="flex items-center gap-3 mb-2">
                  <span class="bg-indigo-600 text-white px-3 py-1 rounded-full font-bold text-sm">${item.yil}</span>
                  <h4 class="text-xl font-bold text-indigo-900">${item.kisi}</h4>
                </div>
                <p class="text-lg font-semibold text-gray-800 mb-2">${item.olay}</p>
                <p class="text-gray-700 leading-relaxed">${item.detay}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="mt-6 bg-indigo-100 p-5 rounded-lg border-l-4 border-indigo-600">
          <p class="text-gray-800 leading-relaxed"><strong class="text-indigo-900">📌 Önemi:</strong> ${section.onem}</p>
        </div>
      </div>`;
  }
  
  if (section.type === 'info') {
    return `
      <div class="${c.light} p-6 rounded-xl border-l-4 ${c.border}">
        <h3 class="text-2xl font-bold mb-3 ${c.text}"><i class="fas fa-info-circle mr-2"></i>${section.title}</h3>
        <p class="text-gray-700 leading-relaxed">${section.content}</p>
      </div>`;
  }
  
  if (section.type === 'nukleotit') {
    return `
      <div class="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-2 border-purple-300 shadow-md">
        <h3 class="text-2xl font-bold mb-3 ${c.text}"><i class="fas fa-atom mr-2"></i>${section.title}</h3>
        <p class="text-gray-700 leading-relaxed mb-4">${section.content}</p>
        <div class="bg-white p-5 rounded-lg shadow-sm mb-4">
          <h4 class="font-bold text-lg ${c.text} mb-3"><i class="fas fa-puzzle-piece mr-2"></i>Nükleotit Bileşenleri:</h4>
          <ul class="space-y-2 text-gray-700">
            ${section.components.map(c => `<li class="flex items-start"><i class="fas fa-check-circle text-purple-500 mr-2 mt-1"></i><span>${c}</span></li>`).join('')}
          </ul>
        </div>
        <div class="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-600">
          <p class="text-gray-700 text-sm"><strong>📌 Önemli:</strong> ${section.detail}</p>
        </div>
      </div>`;
  }
  
  if (section.type === 'rna-structure') {
    return `
      <div class="bg-white p-6 rounded-xl border-2 border-green-300 shadow-md">
        <h3 class="text-2xl font-bold mb-4 text-gray-800"><i class="fas fa-dna mr-2"></i>${section.title}</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-5 rounded-lg border-2 border-green-200">
            <h4 class="font-bold text-lg text-green-700 mb-3"><i class="fas fa-flask mr-2"></i>Bileşenler:</h4>
            <ul class="space-y-2 text-gray-700">
              ${section.components.map(c => `<li class="flex items-start"><i class="fas fa-angle-right text-green-500 mr-2 mt-1"></i><span>${c}</span></li>`).join('')}
            </ul>
          </div>
          <div class="bg-blue-50 p-5 rounded-lg border-2 border-blue-200">
            <h4 class="font-bold text-lg text-blue-700 mb-3"><i class="fas fa-star mr-2"></i>Özellikler:</h4>
            <ul class="space-y-2 text-gray-700">
              ${section.features.map(f => `<li class="flex items-start"><i class="fas fa-check text-blue-500 mr-2 mt-1"></i><span>${f}</span></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>`;
  }
  
  if (section.type === 'genler') {
    return `
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-300 shadow-md">
        <h3 class="text-2xl font-bold mb-4 text-indigo-800"><i class="fas fa-dna mr-2"></i>${section.title}</h3>
        <p class="text-gray-700 leading-relaxed mb-4">${section.content}</p>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          ${section.types.map(t => `
            <div class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-indigo-500">
              <h4 class="font-bold text-lg text-indigo-700 mb-2">${t.name}</h4>
              <p class="text-gray-700 mb-2">${t.desc}</p>
              <p class="text-sm text-gray-600">${t.detail}</p>
            </div>
          `).join('')}
        </div>
        <div class="bg-indigo-100 p-4 rounded-lg">
          <p class="text-gray-700"><strong>📝 Özet:</strong> ${section.extra}</p>
        </div>
      </div>`;
  }
  
  if (section.type === 'orijin-detay') {
    return `
      <div class="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-300">
        <h3 class="text-2xl font-bold mb-4 text-red-800"><i class="fas fa-bullseye mr-2"></i>${section.title}</h3>
        <ul class="space-y-3">
          ${section.content.map(c => `
            <li class="bg-white p-4 rounded-lg shadow-sm flex items-start">
              <i class="fas fa-star text-yellow-500 mr-3 mt-1"></i>
              <span class="text-gray-700">${c}</span>
            </li>
          `).join('')}
        </ul>
      </div>`;
  }
  
  if (section.type === 'rep-olay') {
    return `
      <div class="bg-white p-6 rounded-xl border-2 border-blue-300 shadow-md">
        <h3 class="text-2xl font-bold mb-4 text-blue-800"><i class="fas fa-list-ol mr-2"></i>${section.title}</h3>
        <div class="space-y-2">
          ${section.steps.map((s, i) => `
            <div class="flex items-start bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">${i+1}</span>
              <span class="text-gray-700">${s}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
  }
  
  if (section.type === 'melez-dna') {
    return `
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-2 border-yellow-400 shadow-md">
        <h3 class="text-2xl font-bold mb-4 text-yellow-900"><i class="fas fa-flask mr-2"></i>${section.title}</h3>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <p class="text-gray-700 leading-relaxed">${section.content}</p>
          </div>
          <div class="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-600">
            <p class="text-gray-700 leading-relaxed">${section.detail}</p>
          </div>
          <div class="bg-amber-100 p-4 rounded-lg text-center">
            <p class="text-lg font-bold text-amber-900">${section.result}</p>
          </div>
        </div>
      </div>`;
  }
  
  if (section.type === 'structure') {
    return `
      <div class="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-md">
        <h3 class="text-2xl font-bold mb-4 text-gray-800"><i class="fas fa-microscope mr-2"></i>${section.title}</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="${c.light} p-5 rounded-lg">
            <h4 class="font-bold text-lg ${c.text} mb-3"><i class="fas fa-puzzle-piece mr-2"></i>Bileşenler:</h4>
            <ul class="space-y-2 text-gray-700">
              ${section.components.map(c => `<li class="flex items-start"><i class="fas fa-check text-green-500 mr-2 mt-1"></i><span>${c}</span></li>`).join('')}
            </ul>
          </div>
          <div class="${c.light} p-5 rounded-lg">
            <h4 class="font-bold text-lg ${c.text} mb-3"><i class="fas fa-star mr-2"></i>Özellikler:</h4>
            <ul class="space-y-2 text-gray-700">
              ${section.features.map(f => `<li class="flex items-start"><i class="fas fa-arrow-right ${c.text} mr-2 mt-1"></i><span>${f}</span></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>`;
  }
  
  if (section.type === 'formula') {
    return `
      <div class="bg-gray-50 p-6 rounded-xl border-2 border-dashed ${c.border}">
        <h3 class="text-2xl font-bold mb-4 text-gray-800"><i class="fas fa-calculator mr-2"></i>${section.title}</h3>
        <div class="bg-white p-5 rounded-lg shadow-md mb-4 text-center">
          <p class="text-3xl font-bold ${c.text}">${section.main}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          ${section.formulas.map(f => `
            <div class="${c.light} p-4 rounded-lg text-center border-2 ${c.border}">
              <p class="font-bold ${c.text} mb-2">${f.name}</p>
              <p class="text-2xl font-bold text-gray-800">${f.formula}</p>
            </div>
          `).join('')}
        </div>
      </div>`;
  }
  
  if (section.type === 'tips') {
    return `
      <div class="space-y-3">
        ${section.items.map((tip, i) => {
          const tipColors = ['yellow', 'green', 'blue', 'pink'];
          const tc = tipColors[i % 4];
          return `
            <div class="bg-gradient-to-r from-${tc}-50 to-${tc}-100 p-5 rounded-xl border-l-4 border-${tc}-500">
              <h4 class="font-bold text-lg mb-2 flex items-center text-${tc}-900">
                <i class="fas fa-lightbulb mr-2 text-${tc}-600"></i>Best Bilgi
              </h4>
              <p class="text-gray-700">${tip}</p>
            </div>`;
        }).join('')}
      </div>`;
  }
  
  if (section.type === 'location') {
    return `
      <div class="bg-gradient-to-r ${c.light} to-pink-50 p-6 rounded-xl shadow-md">
        <h3 class="text-2xl font-bold mb-4 ${c.text}"><i class="fas fa-map-marker-alt mr-2"></i>${section.title}</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-5 rounded-lg shadow">
            <h4 class="font-bold text-lg mb-3 ${c.text}"><i class="fas fa-cell mr-2"></i>Ökaryot:</h4>
            <ul class="space-y-2 text-gray-700">
              ${section.okaryot.map(l => `<li class="flex items-center"><i class="fas fa-dot-circle ${c.text} mr-3"></i>${l}</li>`).join('')}
            </ul>
          </div>
          <div class="bg-white p-5 rounded-lg shadow">
            <h4 class="font-bold text-lg mb-3 ${c.text}"><i class="fas fa-bacterium mr-2"></i>Prokaryot:</h4>
            <ul class="space-y-2 text-gray-700">
              ${section.prokaryot.map(l => `<li class="flex items-center"><i class="fas fa-dot-circle ${c.text} mr-3"></i>${l}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>`;
  }
  
  if (section.type === 'types') {
    return `
      <div class="space-y-4">
        <h3 class="text-3xl font-bold mb-4 text-gray-800"><i class="fas fa-layer-group mr-3 ${c.text}"></i>${section.title}</h3>
        ${section.items.map((item, i) => {
          const ic = colors[item.color];
          return `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 ${ic.border}">
              <button class="acc-btn w-full p-6 text-left flex items-center justify-between hover:${ic.light} transition" onclick="toggle(${i})">
                <div class="flex items-center">
                  <div class="${ic.bg} p-3 rounded-full mr-4">
                    <i class="fas ${item.icon} ${ic.text} text-xl"></i>
                  </div>
                  <div>
                    <h4 class="text-2xl font-bold text-gray-800">${item.name}</h4>
                    <p class="text-sm text-gray-600 mt-1">${item.desc}</p>
                  </div>
                </div>
                <i class="fas fa-chevron-down text-gray-400 transition-transform text-xl" id="icon-${i}"></i>
              </button>
              <div class="acc ${ic.light}" id="acc-${i}">
                <div class="p-6 space-y-3">
                  <ul class="space-y-2 text-gray-700">
                    ${item.points.map(p => `<li class="flex items-start"><i class="fas fa-star text-yellow-500 mr-2 mt-1"></i><span>${p}</span></li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>`;
        }).join('')}
      </div>`;
  }
  
  if (section.type === 'process') {
    return `
      <div class="bg-white p-6 rounded-xl border-2 border-gray-200">
        <h3 class="text-2xl font-bold mb-4 ${c.text}"><i class="fas fa-cogs mr-2"></i>${section.title}</h3>
        <div class="space-y-4">
          ${section.steps.map((s, i) => `
            <div class="${c.light} p-4 rounded-lg border-l-4 ${c.border}">
              <h4 class="font-bold text-lg ${c.text} mb-2">${i+1}. ${s.name}</h4>
              <p class="text-gray-700">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>`;
  }
  
  if (section.type === 'enzymes') {
    return `
      <div class="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-md">
        <h3 class="text-2xl font-bold mb-4 ${c.text}"><i class="fas fa-flask mr-2"></i>${section.title}</h3>
        ${section.intro ? `<p class="text-gray-700 mb-4 bg-${color}-50 p-3 rounded-lg">${section.intro}</p>` : ''}
        <div class="grid md:grid-cols-3 gap-4">
          ${section.items.map(e => `
            <div class="${c.light} p-5 rounded-lg shadow-md border-2 ${c.border}">
              <div class="flex items-center mb-3">
                <i class="fas ${e.icon} text-2xl ${c.text} mr-3"></i>
                <h4 class="font-bold text-lg text-gray-800">${e.name}</h4>
              </div>
              <p class="text-gray-700 mb-2 text-sm leading-relaxed">${e.desc}</p>
              ${e.energy ? `<div class="bg-white p-2 rounded mt-2"><p class="text-xs ${c.text} font-bold">⚡ ${e.energy}</p></div>` : ''}
              ${e.detail ? `<p class="text-xs text-gray-600 mt-2 italic">${e.detail}</p>` : ''}
              ${e.extra ? `<p class="text-xs text-gray-600 mt-2 bg-white p-2 rounded">${e.extra}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>`;
  }
  
  if (section.type === 'yarı') {
    return `
      <div class="bg-gradient-to-r ${c.light} to-yellow-50 p-6 rounded-xl border-2 ${c.border} shadow-md">
        <h3 class="text-2xl font-bold mb-4 ${c.text}"><i class="fas fa-dna mr-2"></i>${section.title}</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">${section.content}</p>
        <div class="bg-white p-4 rounded-lg mb-4 shadow-sm">
          <p class="text-gray-700 leading-relaxed">${section.detail}</p>
        </div>
        ${section.steps ? `
          <div class="space-y-2">
            ${section.steps.map((s, i) => `
              <div class="bg-gradient-to-r from-${color}-100 to-${color}-50 p-4 rounded-lg border-l-4 ${c.border}">
                <p class="text-gray-800 font-semibold">${s}</p>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>`;
  }
  
  return '';
}

function renderTopic(topic) {
  const c = colors[topic.color];
  return `
    <section id="${topic.id}" class="mb-16">
      <div class="card rounded-2xl shadow-xl p-6 md:p-8">
        <div class="flex items-center mb-6">
          <div class="${c.bg} p-4 rounded-full mr-4">
            <i class="fas ${topic.icon} text-3xl ${c.text}"></i>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800">${topic.title}</h2>
        </div>
        <div class="space-y-6">
          ${topic.sections.map(s => renderSection(s, topic.color)).join('')}
        </div>
      </div>
    </section>`;
}

function renderQuiz() {
  return `
    <section id="quiz" class="mb-16">
      <div class="card rounded-2xl shadow-xl p-6 md:p-8">
        <div class="flex items-center mb-6">
          <div class="bg-yellow-100 p-4 rounded-full mr-4">
            <i class="fas fa-graduation-cap text-3xl text-yellow-600"></i>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Bilgi Testi</h2>
        </div>
        <div class="mb-6">
          <div class="flex justify-between text-sm text-gray-600 mb-2">
            <span>İlerleme</span>
            <span><span id="current">0</span>/${quizData.length}</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3">
            <div id="progress" class="grad h-3 rounded-full transition-all" style="width:0%"></div>
          </div>
        </div>
        <div id="quiz-container" class="space-y-4"></div>
        <div id="result" class="hidden mt-6 p-6 rounded-xl text-center"></div>
        <button id="restart" class="hidden mt-4 w-full grad text-white py-3 rounded-lg font-bold hover:opacity-90" onclick="startQuiz()">Tekrar Başla</button>
      </div>
    </section>`;
}

// Quiz logic
let currentQ = 0;
let score = 0;
let answered = false;

function startQuiz() {
  currentQ = 0;
  score = 0;
  answered = false;
  document.getElementById('result').classList.add('hidden');
  document.getElementById('restart').classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  if (currentQ >= quizData.length) {
    showResult();
    return;
  }
  
  const q = quizData[currentQ];
  answered = false;
  document.getElementById('current').textContent = currentQ;
  document.getElementById('progress').style.width = `${(currentQ/quizData.length)*100}%`;
  
  document.getElementById('quiz-container').innerHTML = `
    <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
      <h3 class="text-xl font-bold text-gray-800 mb-4">Soru ${currentQ + 1}</h3>
      <p class="text-lg text-gray-700 mb-6">${q.q}</p>
      <div class="space-y-3">
        ${q.opts.map((opt, i) => `
          <button onclick="checkAnswer(${i})" class="quiz-btn w-full text-left p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition">
            <span class="font-semibold text-gray-700">${String.fromCharCode(65+i)})</span> ${opt}
          </button>
        `).join('')}
      </div>
      <div id="feedback" class="mt-4"></div>
    </div>`;
}

function checkAnswer(selected) {
  if (answered) return;
  answered = true;
  
  const q = quizData[currentQ];
  const btns = document.querySelectorAll('.quiz-btn');
  
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans) {
      btn.classList.add('!border-green-500', '!bg-green-100');
    } else if (i === selected && selected !== q.ans) {
      btn.classList.add('!border-red-500', '!bg-red-100');
    }
  });
  
  if (selected === q.ans) {
    score++;
    document.getElementById('feedback').innerHTML = `
      <div class="bg-green-100 border-l-4 border-green-500 p-4 rounded">
        <p class="font-bold text-green-800">✓ Doğru!</p>
        <p class="text-sm text-green-700 mt-1">${q.exp}</p>
      </div>`;
  } else {
    document.getElementById('feedback').innerHTML = `
      <div class="bg-red-100 border-l-4 border-red-500 p-4 rounded">
        <p class="font-bold text-red-800">✗ Yanlış!</p>
        <p class="text-sm text-red-700 mt-1">${q.exp}</p>
      </div>`;
  }
  
  setTimeout(() => {
    currentQ++;
    showQuestion();
  }, 2500);
}

function showResult() {
  document.getElementById('current').textContent = quizData.length;
  document.getElementById('progress').style.width = '100%';
  
  const percent = (score / quizData.length) * 100;
  let grade, color, msg;
  
  if (percent >= 80) {
    grade = 'Mükemmel!';
    color = 'green';
    msg = 'Konuyu çok iyi öğrenmişsin! 🎉';
  } else if (percent >= 60) {
    grade = 'İyi!';
    color = 'blue';
    msg = 'Güzel gidiyorsun! 👍';
  } else {
    grade = 'Tekrar Çalış';
    color = 'orange';
    msg = 'Biraz daha çalışman gerekiyor. 📚';
  }
  
  document.getElementById('quiz-container').innerHTML = '';
  const resultDiv = document.getElementById('result');
  resultDiv.className = `bg-${color}-50 border-4 border-${color}-500 p-8 rounded-xl text-center`;
  resultDiv.innerHTML = `
    <i class="fas fa-trophy text-6xl text-${color}-600 mb-4"></i>
    <h3 class="text-3xl font-bold text-gray-800 mb-2">${grade}</h3>
    <p class="text-5xl font-bold text-${color}-600 mb-3">${score}/${quizData.length}</p>
    <p class="text-xl text-gray-700 mb-2">%${percent.toFixed(0)} Başarı</p>
    <p class="text-gray-600">${msg}</p>
  `;
  resultDiv.classList.remove('hidden');
  document.getElementById('restart').classList.remove('hidden');
}

// Accordion toggle
function toggle(i) {
  const acc = document.getElementById(`acc-${i}`);
  const icon = document.getElementById(`icon-${i}`);
  acc.classList.toggle('show');
  icon.style.transform = acc.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0)';
}

// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

// Sistem temasını algıla
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Temayı uygula
function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeIcon.style.color = '#fbbf24';
  } else {
    body.classList.remove('dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    themeIcon.style.color = '#6b7280';
  }
}

// Tema başlat
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const theme = savedTheme || getSystemTheme();
  applyTheme(theme);
  localStorage.setItem('theme', theme);
}

// Tema değiştir
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// Sistem teması değiştiğinde algıla
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  const content = document.getElementById('content');
  content.innerHTML = Object.values(topics).map(t => renderTopic(t)).join('') + renderQuiz();
  startQuiz();
});
