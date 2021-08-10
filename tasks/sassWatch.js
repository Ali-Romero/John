// const watch = require('gulp-watch')
// const sass = require('./sass')

// module.exports = function (done) {
//   watch(['source/sass/**/*.sass'], {readDelay:100}, sass)

//   done()
// }
const { watch } = require('gulp')
const sass = require('./sass')

module.exports = function(done) {
  watch(['source/sass/**/*.sass'], sass)

  done()
}
