---
layout: page
title: "CV"
permalink: /cv/
nav: true

toc:
  sidebar: left  
cv_pdf: "/assets/Ruohan_Feng_CV.pdf"
---

<div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
  <div style="font-size:2rem;font-weight:700;line-height:1.2;">Ruohan (Fleur) Feng</div>
  <a href="/assets/Ruohan_Feng_CV.pdf" class="btn btn--primary" style="white-space:nowrap;">Download PDF</a>
</div>

Atlanta, GA, USA · <a href="mailto:rfeng68@gatech.edu">rfeng68@gatech.edu</a>  
**Research Areas:** Cognitive flexibility · Emotion regulation · EEG/fMRI · Mind-wandering · Mind–body interventions · ML for neuroimaging

---

<style>
/* ======= 左侧目录模式 ======= */

/* 页面结构调整 */
.page[data-toc-sidebar="left"] {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 2rem;
}

/* 隐藏默认大标题 */
.page[data-toc-sidebar="left"] .page-title,
.page[data-toc-sidebar="left"] .post-title {
  display: none !important;
}

/* 目录栏样式 */
.page[data-toc-sidebar="left"] nav#toc,
.page[data-toc-sidebar="left"] .toc {
  position: sticky;
  top: 80px;
  align-self: start;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding-right: .75rem;
  border-right: 1px solid var(--global-divider-color, rgba(127,127,127,0.2));
}

/* 目录字体与间距 */
.page[data-toc-sidebar="left"] #toc .toc-title,
.page[data-toc-sidebar="left"] .toc .toc-title {
  display: none !important;
}
.page[data-toc-sidebar="left"] #toc a,
.page[data-toc-sidebar="left"] .toc a {
  display: block;
  padding: .25rem 0;
  font-size: 0.95rem;
  color: var(--global-text-color);
  text-decoration: none;
  transition: color 0.2s ease;
}
.page[data-toc-sidebar="left"] #toc a:hover,
.page[data-toc-sidebar="left"] .toc a:hover {
  color: var(--global-theme-color);
}

/* 小屏幕下改为顶部 TOC */
@media (max-width: 991.98px) {
  .page[data-toc-sidebar="left"] {
    display: block;
  }
  .page[data-toc-sidebar="left"] nav#toc,
  .page[data-toc-sidebar="left"] .toc {
    border-right: none;
    border-bottom: 1px solid var(--global-divider-color, rgba(127,127,127,0.25));
    padding-bottom: .5rem;
    margin-bottom: 1rem;
  }
}
</style>

<script>
/* 自动检测 front-matter 中 toc.sidebar: left 并应用样式 */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  const tocSidebar = {{ page.toc.sidebar | default: 'none' | jsonify }};
  if (page && tocSidebar === 'left') {
    page.setAttribute("data-toc-sidebar", "left");
  }
});
</script>

---

## Education
**Ph.D. in Cognition & Brain Science**, Georgia Institute of Technology — *2023–present*  
Advisor: Paul Verhaeghen, Ph.D.

**Minor in Computer Science (in progress)**, Georgia Institute of Technology — *2025–2027 (planned)*  
Coursework: Statistics I/II, Computational Data Analysis, Data & Visual Analytics, Machine Learning, Research Methods, Neuroimaging, Cognitive Neuroscience, Regression

**M.S. in Clinical Mental Health Counseling**, Syracuse University — *2019–2022*  
Coursework: Research Methods, Theories of Counseling, Group Work, Crisis Counseling, Psychological Diagnosis, Psychopharmacology, Internship

**B.S. (Honors) in Applied Psychology**, Hong Kong Baptist University (Zhuhai/HK) — *2014–2018*  
Dissertation: *The Effect of Anxiety Sensitivity on GAD Tendency in Chinese College Students*

---

## Skills
- **Programming & Tools:** Python, R, MATLAB, SQL, Git/GitHub, LaTeX, PsychoPy, SPSS, RevMan, Qualtrics, Tableau, Excel  
- **Neuroimaging:** EEG, fMRI, sMRI  
- **Toolkits:** FSL, FreeSurfer, ANTs, AFNI, MRIQC, fMRIPrep, Nipype, GLMsingle, GingerALE, SDM, MNE  
- **Methods:** SEM, Multilevel models, TVEM, Bayesian inference, ML for neuroimaging, Signal processing, Data viz  
- **Languages:** Chinese (native), English (fluent), Japanese (basic)

---

## Peer-reviewed Publications
- **Ou, Y.**, Zhang, P., Yu, J., Li, M., Su, S., Zhang, M., **Feng, R.**, Sun, F., & Wu, J. (2025). *The application of the BERTopic model in natural language processing.* *ICCECE 2025*, 793–796. IEEE.  
- **Feng, R.**, Mishra, V., Hao, X., & Verhaeghen, P. (2024). *Machine Learning with Applications*, 100614.  
- Razza, R., Liu, Q., **Feng, R.**, … (in press). *Contemporary School Psychology*.  
- Wang, Q., Wu, Y., **Feng, R.**, … (2024). *Mindfulness*, 15(2), 359–371.  
- Lee, P., Chen, S., Yu, Y., Chen, Y., **Feng, R.**, & Fan, X. (2019). *IJPBA*, 5.

---

## Under Review / In Revision
- **Feng, R.**, Hao, X., Coronado, B., & Verhaeghen, P. *When Control Slips Away…*  
- **Feng, R.**, Hua, Z., Chen, P., Lin, T., & Veldhuis, C. *A novel application of network analyses…*

---

## Presentations & Posters
- *Mind-body interventions induced brain changes in the aging population*, ISCR, NC, USA — **2025**  
- *Mindfulness, psychological flexibility, and rumination — ML & SEM*, APS, Washington DC — **2025**  
- *Network analyses of LGBTQ research and community diversity*, Minneapolis, USA — **2022**  
- *Anxiety sensitivity and GAD tendency*, SCAP, Singapore — **2019**  
- *Delay discounting & online-shopping addiction — learned helplessness*, ACB, Tokyo — **2018**

---

## Ongoing Projects
- **Mind-body Interventions in Older Adults** — systematic review of structural/functional imaging (*2023–present*)  
- **Generalizable Mind-Wandering Decoding** — EEG shapelet + coherence + VAE (*2025–present*)  
- **Mindfulness & Creative Insight** — EEG of insight and neural flexibility (*2024–present*)  
- **Emotional Counter-Regulation** — ERP under priming contexts (*2024–present*)  
- **EMA of MW, Affect, and State Mindfulness** — daily-life mobile EMA (*2023–present*)

---

## Work Experience
**Research Coordinator**, SELF Regulation Lab, Syracuse University — *2022–2023*  
Supervisor: Dr. Rachel Razza; organized & analyzed 200+ datapoints (Inner Strength Project); EEG protocols/pipelines

**Research Assistant**, Institute of Economics of Education, Peking University — *2022–2023*  
Longitudinal evaluation with behavioral & EEG data

**Research Assistant**, P.I.P. Lab, Ohio University — *2021–2022*  
Meta-analysis on LGBTQ inclusiveness & online counseling

**Research Assistant**, Mind-Body Lab, Syracuse University — *2021–2022*  
MSQ dataset (N=2,910); co-authored in *Mindfulness*; TSST & physiology

---

## Teaching
- **PSY 2020 — Psychological Statistics (Lab Instructor)**, Georgia Tech — *2025 Spring*  
- **PSY 2020 — Psychological Statistics (TA)** — *2024 Fall*  
- **PSY 1101 — General Psychology (TA)** — *2024 Summer*  
- **PSY 2015 — Research Methods (TA)** — *2024 Spring*  
- **PSY 3012 — Intro to Cognitive Psychology (TA)** — *2023 Fall*
