#! /usr/bin/env node

'use strict'

const path = require('path')
const importDashboard = require('import-kibana-dashboard')

function run (opts) {
  opts.config = path.join(__dirname, 'dashboard.json')

  importDashboard(opts)
}

module.exports = run

if (require.main === module) {
  const args = process.argv.slice(2)
  args.push('-c')
  args.push(path.join(__dirname, 'dashboard.json'))
  importDashboard(importDashboard._parseArgs(args))
}