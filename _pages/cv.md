---
layout: page
title: "CV"
permalink: /cv/
nav: true
toc: false
cv_pdf: "/assets/Ruohan_Feng_CV.pdf"
---

<!-- ===== 左侧粘性目录 + 右侧正文 的两列布局 ===== -->
<style>
  .cv-grid{display:grid;grid-template-columns:280px 1fr;gap:2rem}
  .cv-aside{position:sticky;top:80px;align-self:start;max-height:calc(100vh - 100px);overflow:auto;padding-right:.5rem}
  .cv-aside .toc{font-size:1.05rem;line-height:1.45}
  .cv-aside .toc a{display:block;padding:.25rem 0}
  .cv-aside .toc .toc-h2{font-weight:700;margin-top:.35rem}
  .cv-aside .toc .toc-h3{margin-left:1rem;font-weight:500;opacity:.9}
  @media (max-width: 992px){ .cv-grid{grid-template-columns:1fr} .cv-aside{position:static;max-height:none;padding:0 0 1rem 0;border-bottom:1px solid var(--global-divider-color,rgba(127,127,127,.25))} }
</style>

<div class="cv-grid">
  <!-- 左侧：目录 -->
  <aside class="cv-aside">
    <h2 style="margin:0 0 .75rem 0; color: var(--global-theme-color,#a64ac9);">Ruohan (Fleur) Feng</h2>
    {% include toc.html html=content sanitize=true h_min=2 h_max=3 ordered=false class="toc" %}
  </aside>

  <!-- 右侧：正文 -->
  <main>

  <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap;">
    <h1 style="margin:0;">Ruohan (Fleur) Feng</h1>
    <a href="/assets/Ruohan_Feng_CV.pdf" class="btn btn--primary" style="white-space:nowrap;">Download PDF</a>
  </div>

  Atlanta, GA, USA · <a href="mailto:rfeng68@gatech.edu">rfeng68@gatech.edu</a>  
  **Research Areas:** Cognitive flexibility · Emotion regulation · EEG/fMRI · Mind-wandering · Mind–body interventions · ML for neuroimaging

  ---

  ## Education

  **Ph.D. in Cognition & Brain Science**, Georgia Institute of Technology — *2023–present*  
  Advisor: Paul Verhaeghen, Ph.D.

  **Minor in Computer Science (in progress)**, Georgia Institute of Technology — *2025–2027 (planned)*  
  Coursework: Statistics I/II, Computational Data Analysis, Data & Visual Analytics, Machine Learning, Research Methods, Neuroimaging, Cognitive Neuroscience, Regression

  **M.S. in Clinical Mental Health Counseling**, Syracuse University — *2019–2022*  
  Coursework: Research Methods, Theories of Counseling, Group Work, Foundations of MHC, Crisis Counseling, Psychological Diagnosis, Treatment & Psychopharmacology, Internship

  **B.S. (Honors) in Applied Psychology**, Hong Kong Baptist University (Zhuhai/HK) — *2014–2018*  
  Dissertation: *The Effect of Anxiety Sensitivity… on GAD Tendency in Chinese College Students*

  ---

  ## Skills

  - **Programming & Tools:** Python, R, MATLAB, SQL, Git/GitHub, LaTeX, PsychoPy, SPSS, RevMan, Qualtrics, Tableau, Excel  
  - **Neuroimaging:** EEG, fMRI, sMRI  
  - **Toolkits:** FSL, FreeSurfer, ANTs, AFNI, MRIQC, fMRIPrep, Nipype, GLMsingle, GingerALE, SDM, MNE  
  - **Methods:** SEM, Multilevel models, TVEM, Bayesian inference, ML for neuroimaging, Signal processing, Data viz  
  - **Languages:** Chinese (native), English (fluent), Japanese (basic)

  ---

  ## Peer-reviewed Publications

  - **Ou, Y.**, Zhang, P., Yu, J., Li, M., Su, S., Zhang, M., **Feng, R.**, Sun, F., & Wu, J. (2025). The application of the BERTopic model in natural language processing: In-depth text topic modeling. *ICCECE 2025*, 793–796. IEEE. https://doi.org/10.1109/ICCECE65250.2025.10984639  
  - **Feng, R.**, Mishra, V., Hao, X., & Verhaeghen, P. (2024). … *Machine Learning with Applications*, 100614. https://doi.org/10.1016/j.mlwa.2024.100614  
  - Razza, R., Liu, Q., **Feng, R.**, … (in press). *Contemporary School Psychology*.  
  - Wang, Q., Wu, Y., **Feng, R.**, … (2024). *Mindfulness*, 15(2), 359–371. https://doi.org/10.1007/s12671-023-02299-x  
  - Lee, P., Chen, S., Yu, Y., Chen, Y., **Feng, R.**, & Fan, X. (2019). *IJPBA*, 5. https://doi.org/10.15344/2455-3867/2019/161

  ---

  ## Under Review / In Revision

  - **Feng, R.**, Hao, X., Coronado, B., & Verhaeghen, P. *When Control Slips Away…* (in revision at *Motivation and Emotion*).  
  - **Feng, R.**, Hua, Z., Chen, P., Lin, T., & Veldhuis, C. *A novel application of network analyses…* (in revision at *Annals of Behavioral Medicine*).

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

  ---

  ## Academic Service

  - **Coordinator**, Brown Bag Series — School of Psychology, Georgia Tech — *2024 Fall – 2025 Spring*

  </main>
</div>
