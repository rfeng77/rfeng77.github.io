---
layout: page
title: "Mindfulness, Psychological Flexibility, and Rumination in Predicting Well-being"
card_title: "Application of Machine Learning on Mental Health Survey Study"
description: "Integrating machine learning and structural modeling to uncover how mindfulness enhances well-being through flexibility and reduced rumination."
img: assets/img/wellbeing-model.png
importance: 4
category: work
related_publications: false
bibliography: false
---

### Overview
This project integrates **machine learning** and **structural equation modeling (SEM)** to investigate how mindfulness enhances psychological well-being through *psychological flexibility* and *reduced rumination*.  
Using data from **500 university students**, we evaluated two theoretical frameworks — the **Five Facet Mindfulness Questionnaire (FFMQ)** and **S-ART (Self-Awareness, Self-Regulation, and Self-Transcendence)** — to identify the most predictive pathways to mental health and well-being.

The machine-learning pipeline combined **random forest regression** for feature importance estimation and **deep neural network (DNN)** models for continuous outcome prediction (e.g., well-being, depression, anxiety, and flexibility).  
Feature selection was guided by variable importance scores, and model performance was evaluated using **cross-validated root mean square error (RMSE)** to assess generalization.  
In parallel, **SEM** was used to validate causal relationships among mindfulness, flexibility, rumination, and well-being, allowing direct comparison between predictive and theory-driven modeling.

Together, this integrated framework bridges *explanatory modeling* (SEM) and *predictive analytics* (ML), showing that mindfulness supports well-being primarily through increased psychological flexibility and decreased rumination.

---

<div class="row justify-content-center">
  <div class="col-md-6 mt-3">
    <a href="/assets/img/mlwa-pathmodel.png" data-lightbox="mlwa" data-title="Proposed Dual Mediation Model">
      <img src="/assets/img/mlwa-pathmodel.png" alt="Proposed Dual Mediation Model" class="img-fluid rounded z-depth-1 shadow-sm">
    </a>
  </div>

  <div class="col-md-6 mt-3">
    <a href="/assets/img/nn.jpg" data-lightbox="mlwa" data-title="Neural Network Framework and Predictor Setup">
      <img src="/assets/img/nn.jpg" alt="Neural Network Framework" class="img-fluid rounded z-depth-1 shadow-sm">
    </a>
  </div>
</div>

<div class="caption">
Conceptual model (left) depicting mindfulness → flexibility → rumination → well-being pathways, and neural network framework (right) integrating deep learning with feature importance analysis.
</div>

---

<div class="row justify-content-center">
  <div class="col-md-10 mt-3">
    <a href="/assets/img/sem-result.png" data-lightbox="mlwa" data-title="Structural Equation Model Results">
      <img src="/assets/img/sem-result.png" alt="Structural Equation Model Results" class="img-fluid rounded z-depth-1 shadow-sm">
    </a>
  </div>
</div>

<div class="caption">
SEM confirmed significant serial mediation through flexibility and rumination, with strong model fit (CFI = 0.98, RMSEA = 0.02). Self-transcendence showed the largest indirect effect on well-being.
</div>

---

<div class="row justify-content-center">
  <div class="col-md-10 mt-3">
    <a href="/assets/img/randomforest-result.png" data-lightbox="mlwa" data-title="Random Forest Feature Importance">
      <img src="/assets/img/randomforest-result.png" alt="Random Forest Feature Importance" class="img-fluid rounded z-depth-1 shadow-sm">
    </a>
  </div>
</div>

<div class="caption">
Random forest regression identified *self-transcendence* and *rumination* as the strongest predictors of psychological well-being and depression outcomes.
</div>


---

<div class="row justify-content-center">
  <div class="col-md-10 mt-3">
    <a href="/assets/img/nn-result.png" data-lightbox="mlwa" data-title="Deep Neural Network RMSE Results">
      <img src="/assets/img/nn-result.png" alt="Deep Neural Network RMSE Results" class="img-fluid rounded z-depth-1 shadow-sm">
    </a>
  </div>
</div>

<div class="caption">
Neural network models confirmed that the S-ART framework achieved the lowest prediction error for well-being (RMSE = 8.01), outperforming FFMQ and feature-only baselines.
</div>

---

### Key Findings
1. Converging evidence from ML and SEM: Both frameworks identified *psychological flexibility* and *rumination* as sequential mediators linking mindfulness to well-being.  
2. Predictive modeling performance: Deep neural networks (DNNs) trained on S-ART features achieved the lowest RMSE in predicting well-being and depression scores, outperforming FFMQ-based and feature-only baselines.  
3. Feature-level insights: Random forest regression consistently ranked *self-transcendence*, *self-regulation*, and *rumination* as the strongest predictors of mental health outcomes.  
4. Integrated interpretation: Machine learning emphasized predictive utility, while SEM confirmed theoretical pathways—together demonstrating that mindfulness facilitates well-being through enhanced flexibility and reduced maladaptive thought patterns.
---

### Publication
Feng, R., Mishra, V., Hao, X., & Verhaeghen, P. (2025).  
*The association between mindfulness, psychological flexibility, and rumination in predicting mental health and well-being among university students using machine learning and structural equation modeling.*  
*Machine Learning with Applications, 19*, 100614.  
[https://doi.org/10.1016/j.mlwa.2024.100614](https://doi.org/10.1016/j.mlwa.2024.100614)
