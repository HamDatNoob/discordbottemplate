const { findBestMatch } = require("string-similarity");
const EXAMPLE = require('../../json/EXAMPLE.json');

module.exports = {
    name: 'templateAutocomplete',
    async execute(interaction){
        const input = interaction.options._hoistedOptions[0].value.toLowerCase();

        if(input == '') return;

        const match = findBestMatch(input, EXAMPLE.name);

        for(let i in arrays){
            if(arrays[i].includes(match.bestMatch.target)){
                return interaction.respond([{ name: EXAMPLE[i].name, value: i }]);
            }
        }
    }
}