const fs = require('fs')
const path = require('path')

let template = `
<template lang='pug'>
\n
</template>
\n
<script lang='js'>
\n
</script>
\n
<style lang='sass'>
  @import sass/vars
\n
</style>
`

let directory = path.join(__dirname, '../src/components')


fs.writeFile(`${directory}/${process.argv[2]}.vue`,
  template, 'utf-8', (err) => {
    if(err) throw err
    console.log('File successfully created!')
    process.exit(0)
})