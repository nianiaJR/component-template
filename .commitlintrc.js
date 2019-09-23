module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // new feature
        'fix', // fix bug
        'docs', // change docs
        'mod', // do some changes
        'refactor', // code refactor
        'deps', // change dependencies
        'perf', // performance improve
        'test', // test case
        'chore', // change about build tool 
        'revert' // revert commit
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
