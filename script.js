const adultReferences = [
  {
    domain: "ve",
    icon: "circle-dot",
    title: "VE · DDVE / LVIDd",
    description: "Dimensão diastólica do VE em eixo paraesternal longo. Use com sexo, BSA e qualidade técnica.",
    tag: "Adulto",
    note: "Medida linear é rápida, mas pode falhar em remodelamento assimétrico. Em corpo extremo, indexe e correlacione com volumes.",
    values: [
      ["Homem", "37–56 mm"],
      ["Mulher", "35–51 mm"],
      ["Atenção", "Indexar se BSA extrema"]
    ]
  },
  {
    domain: "ve",
    icon: "activity",
    title: "VE · FEVE",
    description: "Preferir Simpson biplanar quando possível. Evite concluir por impressão visual isolada em caso limítrofe.",
    tag: "Função sistólica",
    note: "A FEVE deve ser interpretada com método usado, qualidade da janela, ritmo, volumes e contexto clínico.",
    values: [
      ["Normal", "≈52–72% H / 54–74% M"],
      ["Método", "Simpson biplanar"],
      ["Evitar", "Visual isolado limítrofe"]
    ]
  },
  {
    domain: "ve",
    icon: "layers",
    title: "VE · Massa e geometria",
    description: "Combine massa indexada e espessura relativa para classificar geometria ventricular.",
    tag: "Remodelamento",
    note: "Geometria normal, remodelamento concêntrico, hipertrofia excêntrica e hipertrofia concêntrica dependem de IMVE e ERP/RWT.",
    values: [
      ["IMVE H", "≤115 g/m²"],
      ["IMVE M", "≤95 g/m²"],
      ["ERP/RWT", "≤0,42"]
    ]
  },
  {
    domain: "atrio",
    icon: "scan-heart",
    title: "AE · LAVI",
    description: "Volume indexado do átrio esquerdo é mais robusto que diâmetro anteroposterior isolado.",
    tag: "Enchimento crônico",
    note: "LAVI elevado sugere repercussão crônica de pressões de enchimento, mas deve ser interpretado com valvopatias, FA e idade.",
    values: [
      ["Normal", "≤34 mL/m²"],
      ["Leve", "35–41 mL/m²"],
      ["Importante", ">48 mL/m²"]
    ]
  },
  {
    domain: "vd",
    icon: "move-horizontal",
    title: "VD · Função sistólica",
    description: "TAPSE, S’ tricúspide e FAC avaliam dimensões diferentes da função do VD.",
    tag: "VD",
    note: "Não use TAPSE isolado como sinônimo de função global do VD. Integre tamanho, FAC, S’, strain quando disponível e pós-carga.",
    values: [
      ["TAPSE", "≥17 mm"],
      ["S’ VD", "≥9,5 cm/s"],
      ["FAC", "≥35%"]
    ]
  },
  {
    domain: "vd",
    icon: "gauge",
    title: "VD · PSAP",
    description: "PSAP estimada depende de jato de IT adequado e estimativa coerente da pressão atrial direita.",
    tag: "Hemodinâmica",
    note: "TRV elevada aumenta suspeita, mas probabilidade de hipertensão pulmonar exige outros sinais ecocardiográficos e contexto clínico.",
    values: [
      ["Fórmula", "4V² + PAD"],
      ["TRV", ">2,8 m/s exige atenção"],
      ["Sempre", "Validar jato de IT"]
    ]
  },
  {
    domain: "valvas",
    icon: "git-branch",
    title: "Valva aórtica · EAo",
    description: "Classificação exige integração entre velocidade, gradiente médio, área valvar e fluxo.",
    tag: "Valvopatias",
    note: "Discordância entre área e gradiente exige avaliar fluxo, FEVE, medida da VSVE, pressão arterial e possibilidade de baixo fluxo.",
    values: [
      ["Vmax grave", "≥4,0 m/s"],
      ["Gradiente médio", "≥40 mmHg"],
      ["AVA grave", "≤1,0 cm²"]
    ]
  },
  {
    domain: "valvas",
    icon: "droplets",
    title: "Valva mitral · IM",
    description: "A insuficiência mitral deve ser multiparamétrica: jato, VC, EROA, volume regurgitante e impacto cavitário.",
    tag: "Valvopatias",
    note: "Jato colorido isolado é uma das maiores armadilhas. Integre mecanismo, carga, AE, VE e PSAP.",
    values: [
      ["Leitura", "Multiparamétrica"],
      ["Impacto", "AE / VE / PSAP"],
      ["Evitar", "Jato isolado"]
    ]
  },
  {
    domain: "hemo",
    icon: "waves",
    title: "Função diastólica",
    description: "Integre E/e’, e’ septal/lateral, LAVI, TRV e contexto clínico.",
    tag: "Diástole",
    note: "Disfunção diastólica não é apenas E/e’. Ritmo, idade, valvopatias, hipertrofia e pressão de enchimento importam.",
    values: [
      ["E/e’", "Contextual"],
      ["LAVI", ">34 sugere cronicidade"],
      ["TRV", ">2,8 m/s pesa"]
    ]
  },
  {
    domain: "aorta",
    icon: "ruler",
    title: "Aorta · raiz e ascendente",
    description: "Medidas devem respeitar método, janela, borda utilizada, sexo, idade, BSA e doença de base.",
    tag: "Aorta",
    note: "Comparar medidas seriadas exige mesma técnica e local anatômico. Em suspeita sindrômica ou valva bicúspide, o limiar muda.",
    values: [
      ["Raiz", "Indexar se necessário"],
      ["Ascendente", "Medida padronizada"],
      ["Seguimento", "Comparar técnica"]
    ]
  }
];

const pediatricReferences = [
  {
    domain: "pediatria",
    icon: "line-chart",
    title: "Pediatria · Z-score",
    description: "Em criança, dimensão isolada é armadilha. Use BSA, idade, método e nomograma validado.",
    tag: "Pediatria",
    note: "A versão Pro deve calcular Z-score real por estrutura e nomograma. A versão Free classifica Z-score já informado.",
    values: [
      ["Normal", "Z -2 a +2"],
      ["Aumentado", "Z > +2"],
      ["Importante", "Z > +3"]
    ]
  },
  {
    domain: "pediatria",
    icon: "heart-pulse",
    title: "VD pediátrico",
    description: "A dominância do VD muda conforme fase fetal, transição neonatal e idade pediátrica.",
    tag: "VD",
    note: "No fetal e RN inicial, VD proporcionalmente dominante pode ser fisiológico. Fora do contexto, investigue sobrecarga.",
    values: [
      ["Fetal", "VD ≈ VE pode ser fisiológico"],
      ["Pediátrico", "VD menor que VE"],
      ["Alerta", "VD > VE fora do contexto"]
    ]
  },
  {
    domain: "pediatria",
    icon: "activity",
    title: "VD · Função pediátrica",
    description: "TAPSE e S’ variam com idade e tamanho corporal. Z-score é preferível a cortes fixos.",
    tag: "Função",
    note: "TAPSE baixo em criança precisa ser comparado com idade/BSA. Evite transportar corte adulto para pediatria.",
    values: [
      ["TAPSE", "Usar Z-score"],
      ["S’ tricúspide", "Usar idade/BSA"],
      ["FAC", "Contextualizar"]
    ]
  },
  {
    domain: "pediatria",
    icon: "route",
    title: "Cardiopatia congênita",
    description: "Mais importante que número isolado é reconhecer conexões, shunts, obstruções e fisiologia.",
    tag: "Congênitas",
    note: "A leitura deve ser segmentar: situs, conexões venosas, átrios, ventrículos, grandes artérias, septos e fluxos.",
    values: [
      ["Segmentar", "Situs e conexões"],
      ["Shunts", "Direção e repercussão"],
      ["Fluxos", "Obstrução/regurgitação"]
    ]
  },
  {
    domain: "pediatria",
    icon: "stethoscope",
    title: "Neonatal dirigido",
    description: "No RN, hemodinâmica muda rapidamente. Avalie canal arterial, pressão pulmonar, função e perfusão sistêmica.",
    tag: "TnEcho",
    note: "No RN, o tempo importa: canal, resistência pulmonar, função biventricular e perfusão sistêmica mudam em horas ou dias.",
    values: [
      ["Canal", "Direção e padrão"],
      ["PFO/CIA", "Repercussão"],
      ["VD", "Pós-carga pulmonar"]
    ]
  },
  {
    domain: "pediatria",
    icon: "scan-line",
    title: "Fetal",
    description: "No fetal, o raciocínio é anatômico-sequencial: quatro câmaras, vias de saída, arcos, ritmo e função.",
    tag: "Fetal",
    note: "O eco fetal exige sequência. A versão Pro pode funcionar como checklist de aquisição e suspeitas anatômicas.",
    values: [
      ["4 câmaras", "Simetria e septos"],
      ["Vias saída", "Cruzamento"],
      ["Ritmo", "Frequência e condução"]
    ]
  }
];

const workflowContent = {
  paciente: {
    title: "Paciente",
    text: "Registre sexo, idade, peso, altura, PA, FC, ritmo e qualidade da janela antes da leitura."
  },
  plax: {
    title: "PLAX",
    text: "Medir DDVE, DSVE, SIVd, PPd, raiz da aorta, átrio esquerdo e observar valvas mitral/aórtica."
  },
  psax: {
    title: "PSAX",
    text: "Avaliar simetria segmentar, espessura, função global, valva aórtica, mitral e VD conforme nível."
  },
  a4c: {
    title: "A4C",
    text: "Avaliar câmaras, FEVE por Simpson, VD, TAPSE, S’ tricúspide, valvas AV e volumes atriais."
  },
  a2c: {
    title: "A2C",
    text: "Completar Simpson biplanar, volumes do VE e AE, motilidade segmentar e coerência com A4C."
  },
  doppler: {
    title: "Doppler",
    text: "Registrar mitral, aórtico, tricúspide, pulmonar, VTI de VSVE, E/e’, TRV e estimativas hemodinâmicas."
  },
  valvas: {
    title: "Valvas",
    text: "Integrar morfologia, Doppler, gradientes, áreas, regurgitações, impacto cavitário e pressão pulmonar."
  },
  conclusao: {
    title: "Conclusão Pro",
    text: "A versão Pro organiza achados, alerta inconsistências e sugere frase técnica para o laudo."
  }
};

const state = {
  mode: "adulto",
  domain: "all",
  query: ""
};

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "");
}

function formatNumber(value, digits = 1) {
  if (!Number.isFinite(value)) return "--";
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function getInputNumber(id) {
  const el = document.getElementById(id);
  if (!el) return NaN;
  const value = parseFloat(el.value);
  return Number.isFinite(value) ? value : NaN;
}

function calculateBSA(weightKg, heightCm) {
  if (!Number.isFinite(weightKg) || !Number.isFinite(heightCm) || weightKg <= 0 || heightCm <= 0) return NaN;
  return Math.sqrt((heightCm * weightKg) / 3600);
}

function calculatePSAP(trv, rap) {
  if (!Number.isFinite(trv) || !Number.isFinite(rap) || trv <= 0 || rap < 0) return NaN;
  return 4 * trv * trv + rap;
}

function calculateLVmass(lviddMm, ivsdMm, pwdMm) {
  if ([lviddMm, ivsdMm, pwdMm].some(v => !Number.isFinite(v) || v <= 0)) return NaN;

  const lvidd = lviddMm / 10;
  const ivsd = ivsdMm / 10;
  const pwd = pwdMm / 10;

  return 0.8 * (1.04 * (Math.pow(lvidd + ivsd + pwd, 3) - Math.pow(lvidd, 3))) + 0.6;
}

function classifyRVFunction(tapse, fac) {
  const tapseLow = Number.isFinite(tapse) && tapse < 17;
  const facLow = Number.isFinite(fac) && fac < 35;

  if (tapseLow && facLow) return "Reduzida por TAPSE e FAC";
  if (tapseLow) return "TAPSE reduzido";
  if (facLow) return "FAC reduzida";
  if (Number.isFinite(tapse) && Number.isFinite(fac)) return "Preservada por triagem";
  return "--";
}

function classifyEF(lvef, sex) {
  if (!Number.isFinite(lvef)) return "--";

  const lower = sex === "male" ? 52 : 54;

  if (lvef >= lower) return "FEVE preservada";
  if (lvef >= 41) return "FEVE levemente reduzida";
  if (lvef >= 30) return "FEVE moderadamente reduzida";
  return "FEVE gravemente reduzida";
}

function classifyGeometry(lvmi, rwt, sex) {
  if (!Number.isFinite(lvmi) || !Number.isFinite(rwt)) return "--";

  const lvmiLimit = sex === "male" ? 115 : 95;
  const massHigh = lvmi > lvmiLimit;
  const rwtHigh = rwt > 0.42;

  if (!massHigh && !rwtHigh) return "Geometria normal";
  if (!massHigh && rwtHigh) return "Remodelamento concêntrico";
  if (massHigh && !rwtHigh) return "Hipertrofia excêntrica";
  return "Hipertrofia concêntrica";
}

function classifyLAVI(lavi) {
  if (!Number.isFinite(lavi)) return "--";
  if (lavi <= 34) return "AE normal";
  if (lavi <= 41) return "AE aumentado leve";
  if (lavi <= 48) return "AE aumentado moderado";
  return "AE aumentado importante";
}

function classifyZ(z) {
  if (!Number.isFinite(z)) return "--";
  if (z < -3) return "Muito abaixo do esperado";
  if (z < -2) return "Abaixo do esperado";
  if (z <= 2) return "Faixa usual";
  if (z <= 3) return "Aumento leve/moderado";
  return "Aumento importante";
}

function getActiveReferences() {
  if (state.mode === "adulto") {
    return adultReferences;
  }

  if (state.mode === "pediatrico" || state.mode === "neonatal" || state.mode === "fetal") {
    return pediatricReferences;
  }

  return [...adultReferences, ...pediatricReferences];
}

function getFilteredReferences() {
  const query = normalizeText(state.query);
  const source = getActiveReferences();

  return source.filter(item => {
    const domainMatches = state.domain === "all" || item.domain === state.domain;

    const haystack = normalizeText([
      item.domain,
      item.title,
      item.description,
      item.tag,
      item.note,
      ...item.values.flat()
    ].join(" "));

    const queryMatches = !query || haystack.includes(query);

    return domainMatches && queryMatches;
  });
}

function renderReferenceCards() {
  const root = document.getElementById("adultCards");
  const empty = document.getElementById("emptySearchState");

  if (!root) return;

  const items = getFilteredReferences();

  root.innerHTML = items.map((item, index) => renderCard(item, index)).join("");

  if (empty) {
    empty.hidden = items.length !== 0;
  }

  root.querySelectorAll(".ref-card").forEach(card => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.index);
      const item = items[index];
      if (item) openDetailDrawer(item);
    });
  });

  if (window.lucide) lucide.createIcons();
}

function renderCard(item, index) {
  return `
    <article class="ref-card" data-domain="${escapeHTML(item.domain)}" data-index="${index}" tabindex="0" role="button" aria-label="Abrir detalhes de ${escapeHTML(item.title)}">
      <span class="card-shine" aria-hidden="true"></span>

      <div class="ref-top">
        <div>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.description)}</p>
        </div>

        <div class="ref-icon" aria-hidden="true">
          <i data-lucide="${escapeHTML(item.icon)}"></i>
        </div>
      </div>

      <div class="ref-values">
        ${item.values.map(([label, value]) => `
          <div class="ref-value">
            <span>${escapeHTML(label)}</span>
            <strong>${escapeHTML(value)}</strong>
          </div>
        `).join("")}
      </div>

      <span class="ref-tag">${escapeHTML(item.tag)}</span>
    </article>
  `;
}

function openDetailDrawer(item) {
  const drawer = document.getElementById("detailDrawer");
  if (!drawer) return;

  document.getElementById("drawerDomain").textContent = item.tag || "Referência";
  document.getElementById("drawerTitle").textContent = item.title;
  document.getElementById("drawerDescription").textContent = item.description;

  document.getElementById("drawerValues").innerHTML = item.values.map(([label, value]) => `
    <div class="ref-value">
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value)}</strong>
    </div>
  `).join("");

  document.getElementById("drawerNote").textContent = item.note || "Interprete sempre com contexto clínico, qualidade técnica e método utilizado.";

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDetailDrawer() {
  const drawer = document.getElementById("detailDrawer");
  if (!drawer) return;

  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function updateCalculators() {
  const sex = document.getElementById("sexInput")?.value || "female";
  const weight = getInputNumber("weightInput");
  const height = getInputNumber("heightInput");
  const trv = getInputNumber("trvInput");
  const rap = getInputNumber("rapInput");
  const tapse = getInputNumber("tapseInput");
  const fac = getInputNumber("facInput");
  const lvidd = getInputNumber("lviddInput");
  const ivsd = getInputNumber("ivsdInput");
  const pwd = getInputNumber("pwdInput");
  const lvef = getInputNumber("lvefInput");
  const lav = getInputNumber("lavInput");
  const z = getInputNumber("zInput");

  const bsa = calculateBSA(weight, height);
  const psap = calculatePSAP(trv, rap);
  const lvMass = calculateLVmass(lvidd, ivsd, pwd);
  const lvmi = Number.isFinite(lvMass) && Number.isFinite(bsa) ? lvMass / bsa : NaN;
  const rwt = Number.isFinite(pwd) && Number.isFinite(lvidd) && lvidd > 0 ? (2 * pwd) / lvidd : NaN;
  const lavi = Number.isFinite(lav) && Number.isFinite(bsa) ? lav / bsa : NaN;

  setText("bsaResult", Number.isFinite(bsa) ? `${formatNumber(bsa, 2)} m²` : "--");
  setText("psapResult", Number.isFinite(psap) ? `${formatNumber(psap, 0)} mmHg` : "--");
  setText("rvFunctionResult", classifyRVFunction(tapse, fac));
  setText("lvmiResult", Number.isFinite(lvmi) ? `${formatNumber(lvmi, 0)} g/m²` : "--");
  setText("geometryResult", classifyGeometry(lvmi, rwt, sex));
  setText("laviResult", Number.isFinite(lavi) ? `${formatNumber(lavi, 1)} mL/m² · ${classifyLAVI(lavi)}` : "--");
  setText("zResult", classifyZ(z));

  paintResultState("psapResult", Number.isFinite(psap) ? psap <= 35 ? "good" : psap <= 50 ? "warn" : "bad" : "");
  paintResultState("rvFunctionResult", classifyRVFunction(tapse, fac).includes("Preservada") ? "good" : classifyRVFunction(tapse, fac) === "--" ? "" : "warn");
  paintResultState("geometryResult", classifyGeometry(lvmi, rwt, sex) === "Geometria normal" ? "good" : classifyGeometry(lvmi, rwt, sex) === "--" ? "" : "warn");
  paintResultState("laviResult", classifyLAVI(lavi) === "AE normal" ? "good" : classifyLAVI(lavi) === "--" ? "" : "warn");
  paintResultState("zResult", classifyZ(z) === "Faixa usual" ? "good" : classifyZ(z) === "--" ? "" : "warn");

  return {
    sex,
    bsa,
    psap,
    tapse,
    fac,
    rvFunction: classifyRVFunction(tapse, fac),
    lvmi,
    rwt,
    geometry: classifyGeometry(lvmi, rwt, sex),
    lvef,
    efClass: classifyEF(lvef, sex),
    lavi,
    laviClass: classifyLAVI(lavi),
    z,
    zClass: classifyZ(z)
  };
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function paintResultState(resultId, stateName) {
  const el = document.getElementById(resultId);
  if (!el) return;

  const box = el.closest(".result-stack div");
  if (!box) return;

  box.classList.remove("result-good", "result-warn", "result-bad");

  if (stateName === "good") box.classList.add("result-good");
  if (stateName === "warn") box.classList.add("result-warn");
  if (stateName === "bad") box.classList.add("result-bad");
}

function generateClinicalSummary() {
  const r = updateCalculators();

  const lines = [];

  if (Number.isFinite(r.bsa)) {
    lines.push(`BSA estimada em ${formatNumber(r.bsa, 2)} m² para indexação de massa e volumes.`);
  }

  if (Number.isFinite(r.lvef)) {
    lines.push(`FEVE de ${formatNumber(r.lvef, 0)}%, classificada nesta triagem como ${r.efClass}.`);
  }

  if (Number.isFinite(r.lvmi) && Number.isFinite(r.rwt)) {
    lines.push(`IMVE estimado em ${formatNumber(r.lvmi, 0)} g/m² e ERP/RWT de ${formatNumber(r.rwt, 2)}, sugerindo ${r.geometry}.`);
  }

  if (Number.isFinite(r.lavi)) {
    lines.push(`LAVI de ${formatNumber(r.lavi, 1)} mL/m², com interpretação inicial: ${r.laviClass}.`);
  }

  if (Number.isFinite(r.psap)) {
    lines.push(`PSAP estimada em ${formatNumber(r.psap, 0)} mmHg pela fórmula 4V² + PAD. Validar jato de IT e estimativa de PAD antes da conclusão.`);
  }

  if (r.rvFunction !== "--") {
    lines.push(`Função sistólica do VD na triagem: ${r.rvFunction}. Integrar TAPSE, FAC, S’, tamanho do VD e pós-carga.`);
  }

  if (Number.isFinite(r.z)) {
    lines.push(`Z-score informado de ${formatNumber(r.z, 1)}: ${r.zClass}. Em pediatria, exige nomograma validado e medida padronizada.`);
  }

  if (lines.length === 0) {
    lines.push("Preencha os campos principais para gerar uma síntese interpretativa estruturada.");
  }

  const output = document.getElementById("clinicalOutput");
  if (output) {
    output.innerHTML = lines.map(line => `<p>${escapeHTML(line)}</p>`).join("");
  }

  showToast("Síntese interpretativa gerada.");
}

function initDomainFilters() {
  document.querySelectorAll(".reference-toolbar .chip").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".reference-toolbar .chip").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      state.domain = button.dataset.domain || "all";
      renderReferenceCards();
    });
  });
}

function initGlobalSearch() {
  const input = document.getElementById("globalSearch");
  const clear = document.getElementById("clearSearchBtn");

  if (!input) return;

  input.addEventListener("input", () => {
    state.query = input.value.trim();
    renderReferenceCards();
  });

  if (clear) {
    clear.addEventListener("click", () => {
      input.value = "";
      state.query = "";
      renderReferenceCards();
      input.focus();
    });
  }

  document.querySelectorAll("[data-search-shortcut]").forEach(button => {
    button.addEventListener("click", () => {
      const value = button.dataset.searchShortcut || "";
      input.value = value;
      state.query = value;
      renderReferenceCards();
      scrollToSection("referencias");
    });
  });
}

function initModeSwitch() {
  document.querySelectorAll(".segment").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".segment").forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      state.mode = button.dataset.mode || "adulto";

      const label = {
        adulto: "Adulto",
        pediatrico: "Pediátrico",
        neonatal: "Neonatal",
        fetal: "Fetal"
      }[state.mode] || "Adulto";

      setText("modeLabel", label);
      setText("heroFocus", `${label} · guia ativo`);

      if (state.mode !== "adulto") {
        state.domain = "pediatria";
        setActiveChip("pediatria");
      } else {
        state.domain = "all";
        setActiveChip("all");
      }

      renderReferenceCards();
      scrollToSection("referencias");
    });
  });
}

function setActiveChip(domain) {
  document.querySelectorAll(".reference-toolbar .chip").forEach(button => {
    button.classList.toggle("active", button.dataset.domain === domain);
  });
}

function initCalculatorListeners() {
  const ids = [
    "sexInput",
    "ageInput",
    "weightInput",
    "heightInput",
    "trvInput",
    "rapInput",
    "tapseInput",
    "facInput",
    "lviddInput",
    "ivsdInput",
    "pwdInput",
    "lvefInput",
    "lavInput",
    "zInput"
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", updateCalculators);
    el.addEventListener("change", updateCalculators);
  });
}

function initWorkflow() {
  document.querySelectorAll(".workflow-step").forEach(button => {
    button.addEventListener("click", () => {
      const step = button.dataset.step || "paciente";

      document.querySelectorAll(".workflow-step").forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      const content = workflowContent[step] || workflowContent.paciente;

      setText("workflowTitle", content.title);
      setText("workflowText", content.text);

      if (step === "conclusao") {
        openLeadModal("workflow");
      }
    });
  });

  document.querySelectorAll(".workflow-tab").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".workflow-tab").forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      const type = button.dataset.workflow;

      if (type === "laudo") {
        setText("workflowTitle", "Modo laudo");
        setText("workflowText", "Organize a conclusão por câmaras, valvas, função sistólica, diástole, hemodinâmica e achados relevantes.");
      } else {
        setText("workflowTitle", "Modo máquina");
        setText("workflowText", "Siga a ordem de aquisição das principais janelas e medidas antes de concluir o exame.");
      }
    });
  });
}

function initNavSpy() {
  const sections = ["referencias", "calculadoras", "fluxo", "pro"];

  function update() {
    const y = window.scrollY + 140;
    let current = sections[0];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && y >= el.offsetTop) current = id;
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initTheme() {
  const btn = document.getElementById("themeBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = document.body.classList.contains("dark") ? "sun" : "moon";
    btn.innerHTML = `<i data-lucide="${icon}"></i> Tema`;

    if (window.lucide) lucide.createIcons();
  });
}

function openLeadModal(source = "geral") {
  const modal = document.getElementById("leadModal");
  if (!modal) return;

  modal.dataset.source = source;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeLeadModal() {
  const modal = document.getElementById("leadModal");
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function submitLead(event) {
  event.preventDefault();

  const name = document.getElementById("leadName")?.value.trim();
  const profile = document.getElementById("leadProfile")?.value;
  const email = document.getElementById("leadEmail")?.value.trim();

  if (!name || !profile || !email) {
    showToast("Preencha os dados obrigatórios.");
    return;
  }

  closeLeadModal();
  showToast(`Interesse registrado, ${name}. Em produção, este lead iria para o CRM.`);
  event.target.reset();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 3600);
}

function initModalEvents() {
  const modal = document.getElementById("leadModal");

  if (modal) {
    modal.addEventListener("click", event => {
      if (event.target.id === "leadModal") closeLeadModal();
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeLeadModal();
      closeDetailDrawer();
    }
  });
}

function initKeyboardCards() {
  document.addEventListener("keydown", event => {
    const card = event.target.closest?.(".ref-card");
    if (!card) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });
}

function init() {
  renderReferenceCards();
  initDomainFilters();
  initGlobalSearch();
  initModeSwitch();
  initCalculatorListeners();
  initWorkflow();
  initNavSpy();
  initTheme();
  initModalEvents();
  initKeyboardCards();
  updateCalculators();

  if (window.lucide) lucide.createIcons();
}

window.addEventListener("load", init);
