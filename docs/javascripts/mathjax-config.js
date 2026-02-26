window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true,
    tags: 'ams'
  },
  chtml: {
    scale: 1.05
  },
  loader: {load: ['[tex]/ams', '[tex]/autoload-all']},
  startup: {
    ready: () => {
      MathJax.startup.defaultReady();
      MathJax.startup.getComponents();
    }
  }
};
