module.exports = {
  name: 'fake',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fake',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
