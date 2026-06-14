/* ==============================================
   AgroParaná — Script Principal
   ============================================== */

"use strict";

// ── Estado da sessão ──────────────────────────
const state = {
    sementes:  null,
    adubo:     null,
    irrigacao: null,
    custos:    null,
};

// ── Utilidades ───────────────────────────────

function num(id) {
    return parseFloat(document.getElementById(id)?.value) || 0;
}

function el(id) {
    return document.getElementById(id);
}

function showToast(msg) {
    const t = el("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove("show"), 2800);
}

function formatNum(n, decimals = 0) {
    return n.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
}

// ── Navegação ────────────────────────────────

function openTab(index, btn) {
    document.querySelectorAll(".tab-panel").forEach((p, i) => {
        p.classList.toggle("active", i === index);
    });
    document.querySelectorAll(".tab-btn").forEach((b, i) => {
        b.classList.toggle("active", i === index);
        b.setAttribute("aria-selected", i === index ? "true" : "false");
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── Resultado helper ─────────────────────────

function showResult(containerId, { label, value, sub, theme = "" }) {
    const box = el(containerId);
    box.className = "result-box" + (theme ? " " + theme : "");
    box.innerHTML = `
        <div class="result-label">${label}</div>
        <div class="result-value">${value}</div>
        ${sub ? `<div class="result-sub">${sub}</div>` : ""}
    `;
    box.hidden = false;
}

// ── Calculadoras ─────────────────────────────

function calcularSemeadura() {
    const area     = num("area");
    const sementes = num("sementes");
    if (!area || !sementes) { showToast("Preencha todos os campos."); return; }

    const total = area * sementes;
    state.sementes = total;

    showResult("resultadoSemeadura", {
        label: "Total de sementes necessárias",
        value: formatNum(total) + " sementes",
        sub: `${formatNum(area, 1)} ha × ${formatNum(sementes)} sem/ha`,
    });

    atualizarDashboard();
    showToast("Cálculo concluído ✓");
}

function calcularAdubacao() {
    const area = num("adubacaoArea");
    const dose = num("dose");
    if (!area || !dose) { showToast("Preencha todos os campos."); return; }

    const total = area * dose;
    state.adubo = total;

    showResult("resultadoAdubacao", {
        label: "Fertilizante total necessário",
        value: formatNum(total, 1) + " kg",
        sub: `${formatNum(area, 1)} ha × ${formatNum(dose, 1)} kg/ha`,
    });

    atualizarDashboard();
    showToast("Cálculo concluído ✓");
}

function calcularIrrigacao() {
    const area   = num("irrigacaoArea");
    const lamina = num("lamina");
    if (!area || !lamina) { showToast("Preencha todos os campos."); return; }

    // Volume em m³: área (ha) × lâmina (mm) × 10  →  1 ha = 10.000 m², 1 mm = 0,001 m
    const totalM3 = area * lamina * 10;
    state.irrigacao = totalM3;

    showResult("resultadoIrrigacao", {
        label: "Volume de água necessário",
        value: formatNum(totalM3) + " m³",
        sub: `${formatNum(area, 1)} ha × ${formatNum(lamina, 1)} mm de lâmina`,
        theme: "blue-result",
    });

    atualizarDashboard();
    showToast("Cálculo concluído ✓");
}

function calcularCustos() {
    const custo = num("custoHa");
    const area  = num("areaCusto");
    if (!custo || !area) { showToast("Preencha todos os campos."); return; }

    const total = custo * area;
    state.custos = total;

    showResult("resultadoCustos", {
        label: "Custo total da operação",
        value: "R$ " + formatNum(total, 2),
        sub: `R$ ${formatNum(custo, 2)}/ha × ${formatNum(area, 1)} ha`,
        theme: "gold-result",
    });

    atualizarDashboard();
    showToast("Cálculo concluído ✓");
}

// ── Dashboard ────────────────────────────────

function atualizarDashboard() {
    const hasData = Object.values(state).some(v => v !== null);
    el("dash-empty").hidden = hasData;
    el("dash-cards").hidden = !hasData;
    el("dash-note").hidden  = !hasData;

    if (!hasData) return;

    const vals = [
        state.sementes  ?? 0,
        state.adubo     ?? 0,
        state.irrigacao ?? 0,
        state.custos    ?? 0,
    ];
    const max = Math.max(...vals, 1);

    function setCard(valueId, fillId, value, formatted) {
        if (value !== null) {
            el(valueId).textContent = formatted;
            setTimeout(() => {
                el(fillId).style.width = ((value / max) * 100) + "%";
            }, 80);
        }
    }

    setCard("dv-sementes",  "df-sementes",  state.sementes,  state.sementes  !== null ? formatNum(state.sementes)       + " sem" : "—");
    setCard("dv-adubo",     "df-adubo",     state.adubo,     state.adubo     !== null ? formatNum(state.adubo, 1)       + " kg"  : "—");
    setCard("dv-irrigacao", "df-irrigacao", state.irrigacao, state.irrigacao !== null ? formatNum(state.irrigacao)      + " m³"  : "—");
    setCard("dv-custos",    "df-custos",    state.custos,    state.custos    !== null ? "R$ " + formatNum(state.custos, 2) : "—");
}

// ── Contadores animados ──────────────────────

function animateCounters() {
    document.querySelectorAll(".counter").forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const dur = 1600;
        const step = 16;
        const steps = dur / step;
        let current = 0;
        const inc = target / steps;

        const timer = setInterval(() => {
            current = Math.min(current + inc, target);
            el.textContent = formatNum(Math.round(current));
            if (current >= target) clearInterval(timer);
        }, step);
    });
}

// ── Acessibilidade ────────────────────────────

let fontSize = 16;

function changeFont(delta) {
    fontSize = Math.min(Math.max(fontSize + delta, 12), 22);
    document.documentElement.style.setProperty("--root-fs", fontSize + "px");
    showToast(`Fonte: ${fontSize}px`);
}

function toggleContrast() {
    document.body.classList.toggle("high-contrast");
    const on = document.body.classList.contains("high-contrast");
    showToast(on ? "Alto contraste ativado" : "Contraste padrão");
}

// ── Init ──────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
    // Disparar contadores quando a home fica visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateCounters();
                observer.disconnect();
            }
        });
    }, { threshold: 0.2 });

    const homePanel = el("panel-0");
    if (homePanel) observer.observe(homePanel);

    // Enter key nos inputs dispara o botão da seção
    document.querySelectorAll(".tool-body input").forEach(input => {
        input.addEventListener("keydown", e => {
            if (e.key === "Enter") {
                const btn = input.closest(".tool-body")?.querySelector(".btn-calc");
                btn?.click();
            }
        });
    });
});