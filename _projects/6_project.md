---
layout: page
title: ICU_AI Clinical Decision Support System
description: Designing an uncertainty-aware AI workspace for ICU deterioration monitoring
img: assets/img/icu-ai-assistant-summary.png
importance: 1
category: work
published: true
---

## ICU_AI: Uncertainty-Aware Clinical AI for ICU Monitoring

ICU clinicians often need to make fast decisions from fragmented information across EHR notes, vital signs, lab results, imaging reports, medication records, and handoff communication. This project explores how an AI-supported clinical workspace can help clinicians synthesize patient information, monitor short-term deterioration risk, and understand model uncertainty without replacing clinical judgment.

---

## Research Focus

Instead of designing AI as a black-box risk score or another alert system, this project asks:

- How do ICU clinicians identify and prioritize patients who may be deteriorating?
- What information do clinicians need most when making short-term monitoring decisions?
- How can AI summarize fragmented clinical information while making risk, uncertainty, and supporting evidence more transparent?

---

## Early Findings

We conducted one semi-structured interview with **3 ICU/critical care clinicians** and collected **67 questionnaire responses** from clinicians and healthcare workers.

The early findings suggest that the main problem is not simply a lack of clinical data, but the difficulty of finding and connecting relevant information across different systems. Clinicians wanted AI to support **information synthesis**, not autonomous decision-making.

Across the interview and survey, clinicians emphasized the need for faster access to key patient information, clear summaries of recent history and notes, monitoring of subtle deterioration, short-term risk prediction with supporting reasons, traceable evidence sources, and uncertainty explanations when data are missing, unstable, or conflicting.

The clinician interview also suggested that a high-density, flowsheet-like interface with concise summaries and key numerical trends may be more useful than large visual charts alone. This finding shaped our design direction toward a dense, clinically useful workspace rather than a purely visual dashboard.

---

## Design Direction

Based on these findings, we designed ICU_AI as a **low-burden clinical assistant** with four main design goals:

<div class="row mt-4">
  <div class="col-sm-6 mt-3 mt-md-0">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Integrated Patient Overview</h5>
        <p class="card-text">
          Combine vital signs, lab results, medication history, clinical summaries, and recent trajectory changes in one workspace.
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Short-Term Risk Monitoring</h5>
        <p class="card-text">
          Show deterioration risk across clinically meaningful time windows, such as 1-hour, 6-hour, 12-hour, and 24-hour horizons.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Explainable Uncertainty</h5>
        <p class="card-text">
          Make uncertainty visible by showing missing information, unstable trends, conflicting indicators, or possible artifacts.
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Evidence-Based AI Support</h5>
        <p class="card-text">
          Provide concise AI summaries, follow-up suggestions, and traceable supporting evidence while keeping clinicians in control.
        </p>
      </div>
    </div>
  </div>
</div>

---

## Web Prototype

The current prototype presents ICU patients in a clinician-facing dashboard. The left panel supports patient prioritization, the central workspace shows patient status, risk trajectory, vitals, labs, and uncertainty explanations, and the right panel provides AI-assisted summaries and follow-up suggestions.

<p>
  <a class="btn btn-outline-primary" href="https://clinical-system-client.vercel.app/" target="_blank">
    View Live Web Prototype
  </a>
</p>

<div class="row mt-4">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/icu-ai-assistant-summary.png" title="ICU_AI dashboard main view" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Main dashboard view of the ICU_AI web prototype.
</div>

---

## Current Takeaway

Our early results suggest that useful clinical AI should not only predict deterioration. It should help clinicians quickly understand the patient story, connect scattered information, explain uncertainty, and provide evidence-backed support within existing ICU workflows.

This project is still ongoing, and we are continuing to conduct clinician interviews to refine the system requirements and interface design. After the front-end functions are finalized, the next step is to connect the prototype with simulated ICU patient trajectories built from eICU data. This backend pipeline will support data analysis, short-term risk monitoring, and a clinician-in-the-loop interaction loop, which we will use to evaluate the usability and workflow fit of the full system.
