// const readline = require('readline');
// const fs = require('fs');
// const stream = require('stream');

// // Name of the folder that contain the documents
// const document_directory_name = "current_pentest"

// // Current directory
// const current_directory = process.cwd()

// var current_note = ""
// var temp_arr = []

// // Directory to the document_directory. The code looks for the directory under the src folder. 
// // If node is run on windows, the path to this directory should change accordingly
// if (process.platform === "win32") {
//     var temp_array = current_directory.split('\\').slice(0, -1)     
//     temp_array.push(document_directory_name)
//     var document_directory = temp_array.join('\\')
// } else {
//     var temp_array = current_directory.split('/').slice(0, -1)
//     temp_array.push(document_directory_name)
//     var document_directory = temp_array.join('/')
// }

// for (var file of fs.readdirSync(document_directory)){
//     current_note += `<b>${file}</b>\n\n`
//     temp_arr = fs.readFileSync(`${document_directory}\\${file}`, 'utf8').split('\n').slice(0, -1)
//     for (var line of temp_arr) {
//         current_note += line + "</br>" + "\n"
//     }
//     temp_arr = []
// }  
// console.log(current_note)