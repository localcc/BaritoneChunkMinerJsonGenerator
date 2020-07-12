const options = process.argv.slice(2)

const bots = []

const x = options[0], y = options[1], z = options[2], end_y = options[3]
if(isNaN(x) || isNaN(y) || isNaN(z) || isNaN(end_y)) return console.log('Coordinates must be a number.')

const chunk_size = 16
const subchunk_size = 4

const visualize = JSON.parse(options[4].toLowerCase())
const instant_start = JSON.parse(options[5].toLowerCase())

if(typeof visualize !== 'boolean') return console.log('Option \"Visualize\" must be a boolean value.')
if(typeof instant_start !== 'boolean') return console.log('Option \"Instant Start\" must be a boolean value.')

let final_str = `{x: ${x}, y: ${y}, z: ${z}, chunk_size: ${chunk_size}, subchunk_size: ${subchunk_size}, end_y: ${end_y}, visualize: ${visualize}, instant_start: ${instant_start}, `

const bot_names = options.slice(6, options.length)
if(!bot_names.length) return console.log('You must specify bots.')

for (const name of bot_names) {
    bots.push(name)
}

for (let i = 0; i < bots.length; i++) {
    final_str += `${bots[i]}: ${i}, `
}

final_str = final_str.substr(0, final_str.length - 2) + '}'

console.log(`• Chat message:\n\n${final_str}\n`)