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
1. **Ou, Y.**, Zhang, P., Yu, J., Li, M., Su, S., Zhang, M., **Feng, R.**, Sun, F., & Wu, J. (2025). *The application of the BERTopic model in natural language processing: In-depth text topic modeling.* In *Proceedings of the 2025 5th International Conference on Consumer Electronics and Computer Engineering (ICCECE)* (pp. 793–796). IEEE. https://doi.org/10.1109/ICCECE65250.2025.10984639  

2. **Feng, R.**, Mishra, V., Hao, X., & Verhaeghen, P. (2024). *The association between mindfulness, psychological flexibility, and rumination in predicting mental health and well-being among university students using machine learning and structural equation modeling.* *Machine Learning with Applications, 100614.* https://doi.org/10.1016/j.mlwa.2024.100614  

3. Razza, R., Liu, Q., **Feng, R.**, Hao, X., Kirkman, K., & Merrin, G. J. (in press). *Cultivating adolescents’ self-compassion through mindfulness: The role of self-regulation at both the individual- and classroom-level.* *Contemporary School Psychology.*  

4. Wang, Q., Wu, Y., **Feng, R.**, Hao, X., Felver, J. C., Zhang, Y., & Razza, R. (2024). *Adaptation and validation of the Mindful Student Questionnaire in Chinese.* *Mindfulness, 15(2),* 359–371. https://doi.org/10.1007/s12671-023-02299-x  

5. Lee, P., Chen, S., Yu, Y., Chen, Y., **Feng, R.**, & Fan, X. (2019). *The effect of mindfulness and wisdom as intervention to deal with college students’ internet addiction.* *International Journal of Psychology & Behavior Analysis, 5.* https://doi.org/10.15344/2455-3867/2019/161

---
## Under Review / In Revision
6. **Feng, R.**, Hao, X., Coronado, B., & Verhaeghen, P. *When Control Slips Away: Temporal Dynamics of Learned Helplessness and Cognitive Flexibility under Reward Uncertainty.* (in revision for *Motivation and Emotion*).  

7. **Feng, R.**, Hua, Z., Chen, P., Lin, T., & Veldhuis, C. *A novel application of network analyses to examine how well LGBTQ research in LGBTQ journals reflects the diversity of the community.* (in revision for *Annals of Behavioral Medicine*).  

---

## Presentations & Posters
- **Feng, R.**, & Hao, X. (2025). *Mind-body interventions induced brain changes in the aging population: A systematic review of structural and functional neuroimaging findings.* 2025 International Society for Contemplative Research (ISCR), North Carolina, USA.  
- **Feng, R.**, Mishra, V., Hao, X., & Verhaeghen, P. (2024). *The association between mindfulness, psychological flexibility, and rumination in predicting mental health and well-being among university students using machine learning and structural equation modeling.* Association for Psychological Science (APS), Washington, DC, USA.  
- **Feng, R.**, Hua, Z., Chen, P., Lin, T., & Veldhuis, C. (2022). *A novel application of network analyses to examine how well LGBTQ research in LGBTQ journals reflects the diversity of the community.* Minneapolis, USA.  
- **Feng, R.** (2019). *The effect of anxiety sensitivity and its lower-order factors on generalized anxiety disorder tendency in Chinese college students.* Singapore Conference on Applied Psychology (SCAP), Singapore.  
- **Feng, R.** (2018). *The effect of delay discounts on college students with online shopping addiction: Learned helplessness as a mediator variable.* Asian Conference on Psychology & the Behavioral Sciences, Tokyo, Japan.

---

## Ongoing Projects
- **Mind-body Interventions in Older Adults** (2023–present). *A systematic review of structural and functional neuroimaging findings in elderly populations practicing mindfulness and movement-based interventions.*  
- **Generalizable Mind-Wandering Decoding** (2025–present). *EEG-based mind-wandering detection using shapelet transform, coherence features, and variational autoencoder for cross-subject generalization.*  
- **Mindfulness & Creative Insight** (2024–present). *Examining neural correlates of insight and cognitive flexibility during mindfulness and creative ideation tasks via EEG analyses.*  
- **Emotional Counter-Regulation** (2024–present). *Event-related potential (ERP) investigation of counter-regulatory emotional responses under priming contexts.*  
- **Ecological Momentary Assessment of MW, Affect, and State Mindfulness** (2023–present). *Daily-life mobile EMA study assessing dynamic fluctuations in mind-wandering, affect, and mindfulness states.*
---
## Work Experience
**Research Coordinator**, SELF (Social-Emotional Learning and Functioning) Regulation Lab, Syracuse University — *Syracuse, USA · 06/2022–06/2023*  
Supervisor: Dr. Rachel Razza  
- Organized and analyzed 200+ cross-examination data points to support the Inner Strength Project (ISP), investigating improvements in self-regulation and self-compassion among youth.  
- Developed EEG experimental protocols and data collection pipelines to investigate mindfulness-related neural dynamics.  

**Research Assistant**, Institute of Economics of Education, Peking University — *Beijing, China · 06/2022–06/2023*  
Supervisor: Dr. Hong Zhu  
- Supported a longitudinal evaluation of lifelong education programs using behavioral and EEG data.  
- Assisted with experimental paradigm design and preprocessing of neurophysiological signals.  

**Research Assistant**, Psychology and Interpersonal Process (P.I.P.) Lab, Ohio University — *Athens, USA · 05/2021–05/2022*  
Supervisors: Dr. Tao Lin & Dr. Timothy Anderson  
- Contributed to a systematic review examining inclusivity trends in LGBTQ research (1989–2021).  
- Conducted meta-analyses assessing the effectiveness of online counseling interventions.  

**Research Assistant**, Mind-Body Lab, Syracuse University — *Syracuse, USA · 08/2021–06/2022*  
PI: Dr. Joshua Felver  
- Translated, collected, and analyzed data from the Mindful Student Questionnaire (N = 2,910) to examine mindfulness factors (awareness, attention, acceptance) influencing school performance.  
- Co-authored a peer-reviewed publication in *Mindfulness*.  
- Conducted TSST tests to assist graduate students with physiological and response-time data collection (2–3 times per week).

---

## Teaching
- **PSY 2020 — Psychological Statistics (Lab Instructor)**, Georgia Tech — *2025 Spring*  
- **PSY 2020 — Psychological Statistics (TA)** — *2024 Fall*  
- **PSY 1101 — General Psychology (TA)** — *2024 Summer*  
- **PSY 2015 — Research Methods (TA)** — *2024 Spring*  
- **PSY 3012 — Intro to Cognitive Psychology (TA)** — *2023 Fall*
