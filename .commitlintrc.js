module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能 (new feature)
        'fix', // 修复 bug (fix bug)
        'docs', // 文档变更 (changes about document)
        'refactor', // 代码重构 (refactor)
        'deps', // 依赖升级变更 (changes about dependencies)
        'perf', // 性能优化 (changes about performance)
        'test', // 测试 case (test case)
        'chore', // 构建工具变更 (changes about ci/cd)
        'revert' // 撤销某次 commit (revert commit)
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
