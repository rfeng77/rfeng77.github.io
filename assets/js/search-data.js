// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-passed-the-preliminary-examination-now-i-am-doctoral-candidate",
          title: 'Passed the Preliminary Examination! Now I am Doctoral Candidate!',
          description: "",
          section: "News",},{id: "projects-adaptation-and-validation-of-the-mindful-student-questionnaire-msq-in-chinese-adolescents",
          title: 'Adaptation and Validation of the Mindful Student Questionnaire (MSQ) in Chinese Adolescents',
          description: "A psychometric validation of a mindfulness measure among 2,910 Chinese adolescents",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-learned-helplessness-amp-cognitive-flexibility-under-reward-dynamics-under-review",
          title: 'Learned Helplessness &amp;amp; Cognitive Flexibility under Reward Dynamics (Under Review)',
          description: "Trial-level dynamics of controllability and reward shaping voluntary task switching",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-counter-emotion-regulation-paradigm-erp-evidence-of-priming-based-emotional-control-ongoing-project",
          title: 'Counter-Emotion Regulation Paradigm: ERP Evidence of Priming-Based Emotional Control (Ongoing Project)',
          description: "An EEG paradigm investigating how priming with opposite-valence emotions modulates neural and subjective emotional regulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-mindfulness-psychological-flexibility-and-rumination-in-predicting-well-being",
          title: 'Mindfulness, Psychological Flexibility, and Rumination in Predicting Well-being',
          description: "Integrating machine learning and structural modeling to uncover how mindfulness enhances well-being through flexibility and reduced rumination.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-mind-body-interventions-and-neural-mechanisms-of-healthy-aging-under-review",
          title: 'Mind–Body Interventions and Neural Mechanisms of Healthy Aging (Under Review)',
          description: "A systematic review and meta-analysis of neuroimaging evidence on meditation, Tai Chi, and yoga in older adults, revealing brain–behavior coupling that supports cognitive and emotional resilience.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
