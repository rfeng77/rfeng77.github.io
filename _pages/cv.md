<p style="opacity:.6">DEBUG:
commit {{ site.github.build_revision | slice: 0,7 }},
cv sections = {{ site.data.cv | size }},
first = {{ site.data.cv[0].title }}</p>
---
layout: cv
permalink: /cv/
title: CV
nav: true
nav_order: 5
cv_pdf: example_pdf.pdf # you can also use external links here
description: This is a description of the page. You can modify it in '_pages/cv.md'. You can also change or remove the top pdf download button.
toc:
  sidebar: left
---
