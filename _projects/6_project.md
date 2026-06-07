---
layout: page
title: ICU_AI Clinical Decision Support System
description: Designing an uncertainty-aware AI workspace for ICU deterioration monitoring
img:
importance: 4
category: research
published: false
---

## ICU_AI: Uncertainty-Aware Clinical AI for ICU Deterioration Monitoring

ICU clinicians often need to make time-sensitive decisions based on fragmented patient information scattered across electronic health records, clinical notes, imaging systems, laboratory results, medication records, and handoff communication. Although predictive AI systems can estimate patient deterioration risk, many existing tools mainly present alerts or risk scores without clearly explaining uncertainty, evidence sources, or how the information fits into real clinical workflow.

This project explores how an AI-supported clinical workspace can help clinicians monitor short-term deterioration risk while reducing information burden and improving transparency.

---

## Research Questions

This project is guided by three main research questions:

1. **How do ICU and critical care clinicians currently gather, interpret, and prioritize patient information during deterioration monitoring?**

2. **What kinds of AI support do clinicians actually want in high-pressure ICU workflows: prediction, summarization, uncertainty explanation, evidence tracing, or follow-up suggestions?**

3. **How can we design an uncertainty-aware clinical AI interface that supports clinician judgment without replacing clinical decision-making?**

---

## What Makes This Project Novel

Most clinical AI systems focus on model performance or risk prediction accuracy. In contrast, this project focuses on the **interaction between clinicians and AI-generated risk information**.

The novelty of this project is not simply building another deterioration prediction model. Instead, the system is designed around three human-centered AI principles:

### 1. From Risk Scores to Clinical Understanding

Rather than only showing a deterioration risk score, the system explains what information contributes to the risk estimate, what may be missing, and what recent patient changes may require attention.

### 2. Uncertainty as a Design Feature

The system makes model uncertainty visible and actionable. It highlights whether uncertainty may come from missing information, unstable trends, conflicting indicators, or limited clinical context.

### 3. AI as a Clinical Assistant, Not an Autonomous Decision-Maker

The goal is to support clinicians by summarizing fragmented information, identifying trends, suggesting follow-up checks, and explaining evidence. The clinician remains the final decision-maker.

---

## Current Study Progress

So far, we have conducted formative user research through one semi-structured interview and a clinician-facing questionnaire.

### Semi-Structured Interview

We conducted one semi-structured interview with an ICU/critical care clinician to better understand current clinical workflows, information needs, and expectations for AI-assisted monitoring.

The interview suggested that a major challenge in ICU work is not the lack of data, but the fragmentation of clinically relevant information across different EHR sections, notes, imaging systems, and handoff sources. The participant emphasized that AI would be most useful as an **information synthesis and decision-support tool**, rather than as an autonomous decision-maker.

In particular, the participant suggested that AI-generated summaries of recent patient history, clinical notes, clinical trends, and potential causes of deterioration could reduce the burden of manual chart review. The participant also valued explainable uncertainty, source traceability, and short-term risk prediction, while cautioning that inaccurate alerts may worsen alert fatigue.

For interface design, the participant preferred a high-density, flowsheet-like view with key numerical trends and concise summaries over large visual charts alone.

### Questionnaire Results

We also collected **67 questionnaire responses** from clinicians and healthcare workers. Most respondents had substantial clinical experience and worked in tertiary hospitals, ICU-related settings, anesthesia/recovery, or nursing roles.

The survey results supported the interview findings. Clinicians need faster ways to identify key patient information, monitor subtle deterioration, and prioritize patients who are not yet critical but may require closer attention.

Respondents most often emphasized the following information as essential for initial assessment:

- Vital signs
- Symptoms
- Laboratory results
- Clinical trends
- Medication history
- Prior medical history

They wanted an AI system to summarize patient status, highlight abnormal or worsening trends, suggest information that needs follow-up, and provide early warnings with clear reasons and supporting evidence.

Overall, the findings indicate that the ICU_AI system should be designed as an **explainable, low-burden clinical assistant** that integrates fragmented information, supports short-term risk monitoring, and fits smoothly into existing clinical workflows.

---

## Design Direction

Based on the interview and questionnaire findings, we designed the current prototype around four key interface goals:

<div class="row mt-4">
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">Integrated Patient Overview</h5>
                <p class="card-text">
                    Bring together vital signs, lab results, medication history, clinical summaries, and recent trajectory changes in one workspace.
                </p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">Short-Term Risk Monitoring</h5>
                <p class="card-text">
                    Display deterioration risk over clinically meaningful time windows, such as 1-hour, 6-hour, 12-hour, and 24-hour prediction horizons.
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
                    Show why the AI may be uncertain, including missing data, unstable trends, conflicting indicators, or possible artifacts.
                </p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">Low-Burden Clinical Workflow</h5>
                <p class="card-text">
                    Use concise summaries, traceable evidence, and prioritized follow-up suggestions to support clinicians without adding another noisy alert system.
                </p>
            </div>
        </div>
    </div>
</div>

---

## Prototype Showcase

A live version of the current ICU_AI dashboard prototype is available here:

<a href="https://clinical-system-client.vercel.app/" target="_blank">View the ICU_AI Web Prototype</a>

The current web prototype presents ICU patients in a clinician-facing dashboard. The left panel shows the patient list and risk prioritization. The central workspace summarizes the selected patient’s current status, risk trajectory, vital signs, lab results, clinical history, and uncertainty explanation. The right panel provides AI-assisted summaries and follow-up suggestions.

<div class="row mt-4">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/icu-ai-dashboard-main.png" title="ICU_AI dashboard main view" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Main dashboard view. Replace this placeholder with a screenshot of the current ICU_AI web prototype.
</div>

---

## Interface Components

### Patient Prioritization

The patient list is designed to help clinicians quickly identify which patients may need attention. Instead of only sorting patients by current severity, the interface also considers predicted deterioration risk and uncertainty.

<div class="row justify-content-sm-center mt-4">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/icu-ai-patient-list.png" title="Patient prioritization panel" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/icu-ai-risk-overview.png" title="Risk and uncertainty overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Patient prioritization and risk overview. Replace these placeholders with screenshots of the patient queue and risk/uncertainty display.
</div>

### Risk, Trends, and Uncertainty

The system presents short-term deterioration risk together with uncertainty. This design responds directly to clinician feedback that AI output should not be shown as a black-box number. Instead, the interface should explain what changed, what evidence supports the prediction, and what information may still be missing.

<div class="row mt-4">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/icu-ai-risk-trajectory.png" title="Risk trajectory panel" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/icu-ai-uncertainty-card.png" title="Uncertainty explanation card" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Risk trajectory and uncertainty explanation. Replace these placeholders with prototype screenshots.
</div>

### AI-Assisted Clinical Summary

The AI assistant is designed to summarize recent patient information, highlight abnormal or worsening trends, identify missing information, and suggest follow-up checks. The purpose is not to make the decision for clinicians, but to reduce the time spent searching across fragmented records.

<div class="row mt-4">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/icu-ai-assistant-summary.png" title="AI-assisted clinical summary" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    AI-assisted summary and follow-up suggestions. Replace this placeholder with a screenshot of the assistant panel.
</div>

---

## Current Takeaways

Our early findings suggest that clinicians are not simply asking for more prediction. They want AI systems that can help them understand the patient situation faster, connect scattered information, explain uncertainty, and provide traceable evidence.

The current prototype therefore treats AI as a collaborative clinical assistant. It supports monitoring, summarization, and prioritization while keeping the clinician in control.

---

## Next Steps

The next phase of the project will focus on:

- Refining the web prototype based on clinician feedback
- Completing additional clinician interviews
- Analyzing questionnaire results in more detail
- Connecting the interface with simulated ICU patient trajectories
- Evaluating usability, perceived usefulness, trust, and workload

The long-term goal is to design a clinical AI system that is not only predictive, but also understandable, workflow-aware, and useful in real ICU decision-making.
