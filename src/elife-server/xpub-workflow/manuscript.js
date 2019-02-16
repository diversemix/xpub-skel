const StateMachine = require('javascript-state-machine');

const ManuscriptStateMachine = (classObject) => StateMachine.factory( classObject, {
  init: 'A',
  transitions: [
    { name: 'doUpload',      from: 'A', to: 'B' },
    { name: 'doCoverLetter', from: 'B', to: 'C' },
    { name: 'doSubmit',      from: 'C', to: 'D' }
  ],
  methods: {
    onBeforeDoUpload:        function() { console.log('onBeforeDoUpload'); },
    onBeforeDoCoverLetter:   function() { console.log('onBeforeDoCoverLetter'); },
    onBeforeDoSubmit:        function() { console.log('onBeforeDoSubmit'); },

    onLeaveHasUpload:        function() { console.log('onLeaveHasUpload'); },
    onLeaveHasCoverLetter:   function() { console.log('onLeaveHasCoverLetter'); },
    onLeaveSubmit:           function() { console.log('onLeaveSubmit'); },

    onEnterHasUpload:        function() { console.log('onEnterHasUpload'); },
    onEnterHasCoverLetter:   function() { console.log('onEnterHasCoverLetter'); },
    onEnterSubmit:           function() { console.log('onEnterSubmit'); },

    onAfterDoUpload:         function() { console.log('onAfterDoUpload'); },
    onAfterDoCoverLetter:    function() { console.log('onAfterDoCoverLetter'); },
    onAfterDoSubmit:         function() { console.log('onAfterDoSubmit'); }
  }
})

module.exports = ManuscriptStateMachine;

