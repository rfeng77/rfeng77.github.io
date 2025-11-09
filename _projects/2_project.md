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

1. Behavioral dynamics (Procedure & Baseline/Reward videos):  
   Under controllable noise, participants exhibited rapid adaptation between low and high reward contexts—switching increased when reward probability rose and decreased when reward declined.  In contrast, the uncontrollable group showed flat switching trajectories, failing to track reward fluctuations even as task incentives changed.  
   The control group’s switching pattern closely mirrored the controllable group, suggesting that uncontrollability—not arousal—disrupted adaptive control.

2. Distributional trends (Histogram):  
   The histogram of switch rates revealed greater interindividual variability in the uncontrollable condition.  
   Reward-induced bimodal distributions (exploratory vs. rigid responders) were pronounced in controllable and control groups but compressed toward a single rigid mode in the uncontrollable group, consistent with reduced behavioral diversity and response inflexibility.

3. Latent-state dynamics (HMM):  
   The Hidden Markov Model identified two major switching states:  
   (a) a high-switch/low-RT cost “adaptive” state, and  
   (b) a low-switch/high-cost “rigid” state.  
   Controllable participants transitioned flexibly between states depending on reward context, while uncontrollable participants remained trapped in the rigid state with low transition probability to the adaptive mode.  
   This pattern mirrors computational signatures of learned helplessness—reduced transition entropy and impaired state updating.

4. Reward-sensitivity clustering (Spectral analysis):  
   Spectral clustering segmented participants into distinct longitudinal profiles:  
   - “Reward-sensitive explorers” maintained positive coupling between reward and switch rate.  
   - “Reward-insensitive conservatives” decoupled reward effects over time.  
   Uncontrollable participants progressively shifted from the explorer to conservative clusters across trials, marking a gradual loss of reward responsivity at the group level.

5. Integrated interpretation:  
   Across behavioral and latent measures, uncontrollability induced a drift from exploratory, reward-driven control toward rigidity and inertia, whereas controllability maintained flexible, reward-responsive adaptation.  
   The findings provide trial-level and computational evidence for learned helplessness as a dynamic process, not a static trait.

---
