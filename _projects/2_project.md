---
layout: page
title: "Learned Helplessness & Cognitive Flexibility under Reward Dynamics"
card_title: "Behavioral Experiment Project"
description: "Trial-level dynamics of controllability and reward shaping voluntary task switching"
img: assets/img/LH.jpeg
importance: 2
category: work
related_publications: false   
bibliography: false  
---


### Summary
This project investigates how controllability (modulated by the Learned Helplessness experiment paradigm) affects cognitive flexibility under dynamic reward conditions.  
Participants were assigned to controllable, uncontrollable, or control conditions during a noise-based learned helplessness task, then completed a voluntary task-switching paradigm without (video 1) and with reward manipulation (video 2).   


---

<div class="row justify-content-center text-center">
  <div class="col-md-4 mt-3">
    <a href="/assets/img/procedure.jpg" data-lightbox="lh-figs" data-title="Experimental Procedure">
      <img src="/assets/img/procedure.jpg" alt="Experimental Procedure" class="img-fluid rounded z-depth-1 shadow-sm">
    </a>
    <p class="mt-2 text-muted small">Experimental Procedure</p>
  </div>

  <div class="col-md-4 mt-3">
    <video class="img-fluid rounded z-depth-1 shadow-sm" controls poster="/assets/img/baseline-thumb.jpg">
      <source src="/assets/img/baseline.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p class="mt-2 text-muted small">Baseline Phase (Video)</p>
  </div>

  <div class="col-md-4 mt-3">
    <video class="img-fluid rounded z-depth-1 shadow-sm" controls poster="/assets/img/reward-thumb.jpg">
      <source src="/assets/img/reward.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p class="mt-2 text-muted small">Reward Phase (Video)</p>
  </div>
</div>

<div class="caption">
  Left: Experimental timeline and conditions.  
  Middle & Right: Real-time switching behavior during baseline and reward phases.
</div>

---

<div class="row justify-content-center text-center">
  <div class="col-md-8 mt-4">
    <a href="/assets/img/histogram.png" data-lightbox="lh-figs" data-title="Switch rate distributions across groups">
      <img src="/assets/img/histogram.png" alt="Histogram of switch rates" class="img-fluid rounded z-depth-1 shadow-sm">
    </a>
    <p class="mt-2 text-muted small">Distribution of Switch Rates across Groups and Reward Phases</p>
  </div>
</div>

---

<div class="row justify-content-center text-center">
  <div class="col-md-6 mt-3">
    <a href="/assets/img/spectral.png" data-lightbox="lh-figs" data-title="Spectral Clustering of Reward-Sensitivity Profiles">
      <img src="/assets/img/spectral.png" alt="Spectral clustering results" class="img-fluid rounded z-depth-1 shadow-sm">
    </a>
    <p class="mt-2 text-muted small">Spectral Clustering of Reward-Sensitivity Profiles</p>
  </div>

  <div class="col-md-6 mt-3">
    <a href="/assets/img/HMM.png" data-lightbox="lh-figs" data-title="HMM States and Transition Probabilities">
      <img src="/assets/img/HMM.png" alt="HMM transitions" class="img-fluid rounded z-depth-1 shadow-sm">
    </a>
    <p class="mt-2 text-muted small">Hidden Markov Model's States & Transitions</p>
  </div>
</div>

<div class="caption">
  Left: Clustered trajectories of reward sensitivity.  
  Right: Hidden Markov Model showing latent state transitions and response costs.
</div>

---
### Key Findings

1. Behavioral patterns (Procedure & Videos):  
   Under controllable noise, participants adapted switching rates flexibly to reward fluctuations, showing clear transitions between baseline and reward phases.  
   In contrast, the uncontrollable group maintained flat, reward-insensitive switching patterns, indicating temporal rigidity and diminished adaptive control.

2. Distributional changes (Histogram):  
   Switch-rate distributions became narrower and more unimodal in the uncontrollable condition, suggesting reduced variability and a loss of exploratory behavior.  
   Controllable participants retained a wider distribution, consistent with adaptive flexibility.

3. Latent-state and reward-sensitivity modeling (Spectral & HMM):  
   HMM analyses revealed that uncontrollable participants were more likely to remain in a rigid, high-cost state with low transition probability to adaptive modes.  
   Spectral clustering confirmed a shift from reward-sensitive to reward-insensitive response profiles, highlighting gradual drift toward inflexibility.

4. Overall interpretation:  
   Across behavioral, distributional, and computational levels, uncontrollability disrupted reward-based modulation of task switching and promoted persistence in rigid states.  
   Controllability preserved dynamic flexibility and maintained reward responsivity over time.
---
