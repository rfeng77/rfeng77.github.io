---
layout: page
title: CV
permalink: /cv/
nav: true
nav_order: 5
cv_pdf: example_pdf.pdf
toc:
  sidebar: left

cv:
  - title: General Information
    type: map
    contents:
      - name: Full Name
        value: Ruohan (Fleur) Feng
      - name: Email
        value: rfeng68@gatech.edu
      - name: Location
        value: Atlanta, GA, USA
      - name: Research Areas
        value: Cognitive flexibility, Emotion regulation, EEG/fMRI, Mind-wandering, Mind-body interventions, ML for neuroimaging
  # ……（其余各 section 原样粘贴，注意缩进）

# 如果你想用 _data/cv.yml（方案B），就把上面的 cv: 整段删掉
---

{%- comment -%}
优先用 page.cv；如果没有，就回退到 _data/cv.yml
{%- endcomment -%}
{%- assign cvdata = page.cv | default: site.data.cv -%}

{%- for section in cvdata -%}
### {{ section.title }}

{%- case section.type -%}
  {%- when "map"         -%}{% render "cv/map.liquid",         section: section %}
  {%- when "list"        -%}{% render "cv/list.liquid",        section: section %}
  {%- when "nested_list" -%}{% render "cv/nested_list.liquid", section: section %}
  {%- when "list_groups" -%}{% render "cv/list_groups.liquid", section: section %}
  {%- when "time_table"  -%}{% render "cv/time_table.liquid",  section: section %}
  {%- else -%}<p><em>Unsupported section type: {{ section.type }}</em></p>
{%- endcase -%}

{%- endfor -%}
