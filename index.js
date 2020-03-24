const bots = [
    "localChicken",
    "localChicken2",
    "localChicken3",
    "localChicken4",
    "localChicken5",
    "localChicken6",
    "localChicken7",
    "localChicken8",
    "localChicken9",
    "localChicken10",
    "localChicken11",
    "localChicken12",
]

const x = 47;
const y = 67;
const z = 79;
const end_y = 5;

const chunk_size = 16;
const subchunk_size = 4;

const visualize = true;
const instant_start = true;


let final_str = `{x: ${x}, y: ${y}, z: ${z}, chunk_size: ${chunk_size}, subchunk_size: ${subchunk_size}, end_y: ${end_y}, visualize: ${visualize}, instant_start: ${instant_start}, `;

for(let i = 0; i < bots.length; i++) {
    final_str += `${bots[i]}: ${i},`;
}
final_str = final_str.substr(0, final_str.length - 1) + "}"; // removing last comma and adding closing bracket

console.log(`Chat message: ${final_str}\n\n\n\n`);