module.exports = {
  compress: {
    drop_console: true,
    drop_debugger: true,
    pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
  },
  mangle: {
    toplevel: true
  },
  output: {
    comments: false
  }
}; 