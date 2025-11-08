---
layout: page
title: "CV"
permalink: /cv/
nav: true

# Enable TOC and place it in a left sidebar
toc: true
toc_sticky: true
toc_label: ""        # hide default TOC heading
cv_pdf: "/assets/Ruohan_Feng_CV.pdf"

# Custom switch to activate left-sidebar styling below
# (keep exactly this shape; the script reads it)
toc:
  sidebar: left
---

<div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
  <div style="font-size:2rem;font-weight:700;line-height:1.2;">Ruohan (Fleur) Feng</div>
  <a href="/assets/Ruohan_Feng_CV.pdf" class="btn btn--primary" style="white-space:nowrap;">Download PDF</a>
</div>

Atlanta, GA, USA · <a href="mailto:rfeng68@gatech.edu">rfeng68@gatech.edu</a>  
**Research Areas:** Cognitive flexibility · Emotion regulation · EEG/fMRI · Mind-wandering · Mind–body interventions · ML for neuroimaging

---

<style>
/* ===== Left Sidebar TOC layout (works when [data-toc-sidebar="left"]) ===== */

/* Grid layout with a narrow left column for the TOC */
.page[data-toc-sidebar="left"] {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 2rem;
}

/* Hide the giant auto page title */
.page[data-toc-sidebar="left"] .page-title,
.page[data-toc-sidebar="left"] .post-title {
  display: none !important;
}

/* TOC panel visuals */
.page[data-toc-sidebar="left"] nav#toc,
.page[data-toc-sidebar="left"] .toc {
  position: sticky;
  top: 80px;
  align-self: start;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding-right: .75rem;
  border-right: 1px solid var(--global-divider-color, rgba(127,127,127,.2));
}

/* Remove TOC title row; tighten item spacing */
.page[data-toc-sidebar="left"] #toc .toc-title,
.page[data-toc-sidebar="left"] .toc .toc-title { display: none !important; }

.page[data-toc-sidebar="left"] #toc a,
.page[data-toc-sidebar="left"] .toc a {
  display: block;
  padding: .25rem 0;
  font-size: .95rem;
  color: var(--global-text-color);
  text-decoration: none;
  transition: color .2s ease;
}
.page[data-toc-sidebar="left"] #toc a:hover,
.page[data-toc-sidebar="left"] .toc a:hover { color: var(--global-theme-color); }

/* Mobile: stack TOC on top */
@media (max-width: 991.98px){
  .page[data-toc-sidebar="left"]{ display:block; }
  .page[data-toc-sidebar="left"] nav#toc,
  .page[data-toc-sidebar="left"] .toc{
    border-right:none;
    border-bottom:1px solid var(--global-divider-color, rgba(127,127,127,.25));
    padding-bottom:.5rem; margin-bottom:1rem;
  }
}
</style>

<script>
/* Activate the left-sidebar mode when front matter sets `toc.sidebar: left` */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  const cfg = {{ page.toc | jsonify }};
  if (page && cfg && cfg.sidebar === "left") {
    page.setAttribute("data-toc-sidebar", "left");
  }
});
</script>

---

## Education
**Ph.D. in Cognition & Brain Science**, Minor in Computer Science**, Georgia Institute of Technology — *2023–present*  
Advisor: Paul Verhaeghen, Ph.D.
Coursework: Statistics I/II, Computational Data Analysis, Data & Visual Analytics, Machine Learning, Research Methods, Neuroimaging, Cognitive Neuroscience, Regression

**M.S. in Clinical Mental Health Counseling**, Syracuse University — *2019–2022*  
Coursework: Research Methods, Theories of Counseling, Group Work, Crisis Counseling, Psychological Diagnosis, Psychopharmacology, Internship

**B.S. (Honors) in Applied Psychology**, Hong Kong Baptist University (Zhuhai/HK) — *2014–2018*  
Dissertation: *The Effect of Anxiety Sensitivity on GAD Tendency in Chinese College Students*

---

## Skills
- **Programming & Tools:** R, Python, MATLAB, SQL, GitHub, Java, LaTeX, PsychoPy, SPSS, RevMan, Qualtrics, Tableu, Microsoft Excel
- **Neuroimaging:** EEG, fMRI, sMRI  
- **Neuroimaging Analysis Toolkits:** FSL, FreeSurfer, ANTs, AFNI, MRIQC, fMRIPrep, Nipype, GLMsingle, GingerALE, SDM, MNE  
- **Quantitative & Modeling Expertise:** Statistical modeling; Machine learning; Computational modeling (e.g., Bayesian inference, latent growth models); Advanced statistical methods (e.g., SEM, multilevel modeling, time-varying effect modeling); Psychometric analysis; Experimental design; Data visualization; Signal processing
- **Research & Communication:** Scientific writing; Research communication; Public speaking; Data interpretation and presentation
- **Languages:** Chinese (native), English (fluent), Japanese (basic)

---

## Peer-reviewed Publications
1. **Ou, Y.**, Zhang, P., Yu, J., Li, M., Su, S., Zhang, M., **Feng, R.**, Sun, F., & Wu, J. (2025). *The application of the BERTopic model in natural language processing: In-depth text topic modeling.* In *Proceedings of the 2025 5th International Conference on Consumer Electronics and Computer Engineering (ICCECE)* (pp. 793–796). IEEE. https://doi.org/10.1109/ICCECE65250.2025.10984639  
2. **Feng, R.**, Mishra, V., Hao, X., & Verhaeghen, P. (2024). *The association between mindfulness, psychological flexibility, and rumination...* *Machine Learning with Applications*, 100614. https://doi.org/10.1016/j.mlwa.2024.100614  
3. Razza, R., Liu, Q., **Feng, R.**, Hao, X., Kirkman, K., & Merrin, G. J. (in press). *Cultivating adolescents’ self-compassion through mindfulness...* *Contemporary School Psychology.*  
4. Wang, Q., Wu, Y., **Feng, R.**, Hao, X., Felver, J. C., Zhang, Y., & Razza, R. (2024). *Adaptation and validation of the Mindful Student Questionnaire in Chinese.* *Mindfulness, 15(2)*, 359–371. https://doi.org/10.1007/s12671-023-02299-x  
5. Lee, P., Chen, S., Yu, Y., Chen, Y., **Feng, R.**, & Fan, X. (2019). *The Effect of Mindfulness and Wisdom as Intervention to Deal with College Students’ Internet Addiction.* *International Journal of Psychology & Behavior Analysis, 5.* https://doi.org/10.15344/2455-3867/2019/161

---

## Under Review / In Revision
6. **Feng, R.**, Hao, X., Coronado, B., & Verhaeghen, P. *When Control Slips Away: Temporal Dynamics of Learned Helplessness and Cognitive Flexibility under Reward Uncertainty.* (in revision for *Motivation and Emotion*).  
7. **Feng, R.**, Hua, Z., Chen, P., Lin, T., & Veldhuis, C. *A novel application of network analyses to examine how well LGBTQ research in LGBTQ journals reflects the diversity of the community.* (in revision for *Annals of Behavioral Medicine*).  

---

## Presentations & Posters
- **Feng, R.**, & Hao, X. (2025). *Mind-body interventions induced brain changes in the aging population: A systematic review of structural and functional neuroimaging findings.* ISCR, North Carolina, USA.  
- **Feng, R.**, Mishra, V., Hao, X., & Verhaeghen, P. (2024). *Mindfulness, psychological flexibility, and rumination — ML & SEM.* APS, Washington, DC, USA.  
- **Feng, R.**, Hua, Z., Chen, P., Lin, T., & Veldhuis, C. (2022). *Network analyses of LGBTQ research and community diversity.* Minneapolis, USA.  
- **Feng, R.** (2019). *Anxiety sensitivity and GAD tendency.* SCAP, Singapore.  
- **Feng, R.** (2018). *Delay discounting & online-shopping addiction — learned helplessness.* ACB, Tokyo, Japan.

---

## Ongoing Projects
- **Mind-body Interventions in Older Adults** (2023–present). *Systematic review of structural/functional neuroimaging findings.*  
- **Generalizable Mind-Wandering Decoding** (2025–present). *EEG shapelet + coherence + VAE for cross-subject decoding.*  
- **Mindfulness & Creative Insight** (2024–present). *EEG of insight and neural flexibility.*  
- **Emotional Counter-Regulation** (2024–present). *ERP under priming emotional regulation context.*  
- **EMA of MW, Affect, and State Mindfulness** (2023–present). *Daily-life mobile EMA data collection and longitudinal analysis.*

---

## Work Experience
**Research Coordinator**, SELF Regulation Lab, Syracuse University — *Syracuse, USA · 06/2022–06/2023*  
Supervisor: Dr. Rachel Razza  
- Organized and analyzed 200+ ISP data points.  
- Built EEG protocols and data-collection pipelines for mindfulness studies.  

**Research Assistant**, Institute of Economics of Education, Peking University — *Beijing, China · 06/2022–06/2023*  
Supervisor: Dr. Hong Zhu  
- Longitudinal program evaluation with behavioral & EEG data; paradigm design and preprocessing.  

**Research Assistant**, P.I.P. Lab, Ohio University — *Athens, USA · 05/2021–05/2022*  
Supervisors: Dr. Tao Lin & Dr. Timothy Anderson  
- Systematic review of inclusivity trends in LGBTQ research (1989–2021); meta-analyses of online counseling.  

**Research Assistant**, Mind-Body Lab, Syracuse University — *Syracuse, USA · 08/2021–06/2022*  
PI: Dr. Joshua Felver  
- Translated/processed MSQ dataset (*N* = 2,910); co-authored paper in *Mindfulness*; 
- Conducted TSST tests to aid graduate students in conducting experiments, including blood pressure measurements and response time data collection (2–3 times per week).

---

## Teaching
- **PSY 2020 — Psychological Statistics (Lab Instructor)**, Georgia Tech — *2025 Spring*  
- **PSY 2020 — Psychological Statistics (TA)** — *2024 Fall*  
- **PSY 1101 — General Psychology (TA)** — *2024 Summer*  
- **PSY 2015 — Research Methods (TA)** — *2024 Spring*  
- **PSY 3012 — Intro to Cognitive Psychology (TA)** — *2023 Fall*
