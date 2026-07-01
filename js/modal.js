const modalData = {
  pt: {
    p1: {
      icon: "🤖",
      title: "IA para Educadores",
      desc: "[ Descrição expandida a preencher — contexto do projeto, motivação, metodologia, resultados esperados ou obtidos. ]",
      tags: ["Inteligência Artificial", "Educação", "Docência", "Em andamento"],
      links: [
        // { label: "Ver publicação", url: "#" },
        // { label: "Slides", url: "#" }
      ]
    },
    p2: {
      icon: "🤟🔬",
      title: "Pesquisa em IHC e LIBRAS",
      desc: "[ Descrição expandida a preencher — linhas de pesquisa em IHC, ferramentas desenvolvidas para LIBRAS/SignWriting, publicações relacionadas, impacto para comunidade surda. ]",
      tags: ["IHC", "LIBRAS", "SignWriting", "Acessibilidade", "Usabilidade"],
      links: [
        // { label: "Ver tese", url: "https://acervodigital.ufpr.br/handle/1884/59384" }
      ]
    },
    p3: {
      icon: "🌐",
      title: "Desenvolvimento Web & Mobile",
      desc: "[ Descrição expandida a preencher — disciplinas ministradas, projetos desenvolvidos com alunos, tecnologias ensinadas, resultados. ]",
      tags: ["HTML", "CSS", "JavaScript", "React Native", "Acessibilidade"],
      links: []
    },
    p4: {
      icon: "🎓",
      title: "Coordenação de Cursos",
      desc: "[ Descrição expandida a preencher — cursos criados e coordenados, período, número de alunos formados, iniciativas de destaque. ]",
      tags: ["Gestão Acadêmica", "ADS", "Engenharia de Software", "EAD"],
      links: []
    },
    p5: {
      icon: "📋",
      title: "Orientações Acadêmicas",
      desc: "[ Descrição expandida a preencher — número de orientandos por modalidade (mestrado, especialização, residência técnica, graduação), áreas temáticas, instituições, período. ]",
      tags: ["Mestrado", "Especialização", "Residência Técnica", "TCC", "Graduação"],
      links: []
    }
  },
  en: {
    p1: {
      icon: "🤖",
      title: "AI for Educators",
      desc: "[ Expanded description to fill in — project context, motivation, methodology, expected or achieved results. ]",
      tags: ["Artificial Intelligence", "Education", "Teaching", "In progress"],
      links: []
    },
    p2: {
      icon: "🤟🔬",
      title: "HCI & LIBRAS Research",
      desc: "[ Expanded description to fill in — HCI research lines, tools developed for LIBRAS/SignWriting, related publications, impact on the deaf community. ]",
      tags: ["HCI", "LIBRAS", "SignWriting", "Accessibility", "Usability"],
      links: []
    },
    p3: {
      icon: "🌐",
      title: "Web & Mobile Development",
      desc: "[ Expanded description to fill in — courses taught, student projects, technologies covered, outcomes. ]",
      tags: ["HTML", "CSS", "JavaScript", "React Native", "Accessibility"],
      links: []
    },
    p4: {
      icon: "🎓",
      title: "Program Coordination",
      desc: "[ Expanded description to fill in — programs created and coordinated, period, graduates, notable initiatives. ]",
      tags: ["Academic Management", "ADS", "Software Engineering", "Distance Learning"],
      links: []
    },
    p5: {
      icon: "📋",
      title: "Academic Advising",
      desc: "[ Expanded description to fill in — number of advisees per modality (master's, specialization, technical residency, undergraduate), thematic areas, institutions, period. ]",
      tags: ["Master's", "Specialization", "Technical Residency", "Undergrad", "Advising"],
      links: []
    }
  }
};

(function () {
  const modal = document.getElementById("portfolio-modal");
  const overlay = modal.querySelector(".modal__overlay");
  const closeBtn = modal.querySelector(".modal__close");

  function openModal(key) {
    const lang = getCurrentLang();
    const data = (modalData[lang] || modalData.pt)[key];
    if (!data) return;

    document.getElementById("modal-icon").textContent = data.icon;
    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-desc").textContent = data.desc;

    const tagsEl = document.getElementById("modal-tags");
    tagsEl.innerHTML = data.tags.map(t => `<span class="modal__tag">${t}</span>`).join("");

    const linksEl = document.getElementById("modal-links");
    linksEl.innerHTML = data.links.map(l =>
      `<a class="modal__link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`
    ).join("");

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-modal]").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.modal));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card.dataset.modal); }
    });
  });

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
})();
