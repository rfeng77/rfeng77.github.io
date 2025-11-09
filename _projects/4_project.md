---
layout: page
title: "Mindfulness, Psychological Flexibility, and Rumination in Predicting Well-being"
description: "Integrating machine learning and structural modeling to uncover how mindfulness enhances well-being through flexibility and reduced rumination."
img: assets/img/mlwa-pathmodel.png
importance: 4
category: work
giscus_comments: true
---

### Overview
This project integrates **machine learning** and **structural equation modeling (SEM)** to investigate how mindfulness promotes psychological well-being through *psychological flexibility* and *reduced rumination*.  
Using data from 500 university students, we compared two frameworks — the **Five Facet Mindfulness Questionnaire (FFMQ)** and **S-ART (Self-Awareness, Self-Regulation, and Self-Transcendence)** — to identify the most predictive model of mental health and well-being.

---

<div class="row justify-content-center">
  <div class="col-md-6 mt-3">
    {% include figure.liquid path="assets/img/mlwa-pathmodel.png" title="Proposed Dual Mediation Model" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3">
    {% include figure.liquid path="assets/img/nn.jpg" title="Neural Network Framework and Predictor Setup" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Conceptual model (left) depicting mindfulness → flexibility → rumination → well-being pathways, and neural network framework (right) integrating deep learning with feature importance analysis.
</div>

---

<div class="row justify-content-center">
  <div class="col-md-10 mt-3">
    {% include figure.liquid path="assets/img/sem-result.png" title="Structural Equation Model Results" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
SEM confirmed significant serial mediation through flexibility and rumination, with strong model fit (CFI = 0.98, RMSEA = 0.02). Self-transcendence showed the largest indirect effect on well-being.
</div>

---

<div class="row justify-content-center">
  <div class="col-md-10 mt-3">
    {% include figure.liquid path="assets/img/randomforest-result.png" title="Random Forest Feature Importance" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Random forest regression identified *self-transcendence* and *rumination* as the strongest predictors of psychological well-being and depression outcomes.
</div>

---

<div class="row justify-content-center">
  <div class="col-md-10 mt-3">
    {% include figure.liquid path="assets/img/nn-result.png" title="Deep Neural Network RMSE Results" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Neural network models confirmed that the S-ART framework achieved the lowest prediction error for well-being (RMSE = 8.01), outperforming FFMQ and feature-only baselines.
</div>

---

### Key Findings
1. **S-ART framework superiority:** Self-awareness, self-regulation, and self-transcendence together outperformed FFMQ in predicting well-being.  
2. **Mediating mechanisms:** Psychological flexibility and rumination sequentially mediated mindfulness effects on mental health.  
3. **Core feature insights:** Random forest and DNNs highlighted *self-transcendence* and *rumination* as top predictors.  
4. **Clinical implication:** Findings underscore the importance of cultivating self-transcendence and cognitive flexibility for adaptive emotion regulation and resilience.

---

### Publication
Feng, R., Mishra, V., Hao, X., & Verhaeghen, P. (2025).  
*The association between mindfulness, psychological flexibility, and rumination in predicting mental health and well-being among university students using machine learning and structural equation modeling.*  
*Machine Learning with Applications, 19*, 100614.  
[https://doi.org/10.1016/j.mlwa.2024.100614](https://doi.org/10.1016/j.mlwa.2024.100614)
