let dropArea = document.getElementById('drop-area');
dropArea.addEventListener('dragenter', event => {
    event.preventDefault();
    event.stopPropagation();
    dropArea.classList.add('highlight')
})
dropArea.addEventListener('dragover', event => {
    event.preventDefault();
    event.stopPropagation();
    dropArea.classList.add('highlight')
})
dropArea.addEventListener('dragleave', event => {
    dropArea.classList.remove('highlight')
})
dropArea.addEventListener('drop', event => {
    let dt = event.dataTransfer
    let files = dt.files
    handleFiles(files)
})

function handleFiles(files) {
    ([...files]).forEach(uploadFile)
}
function uploadFile(file) {
    let url = 'YOUR URL HERE'
    let formData = new FormData()

    formData.append('file', file)

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(() => { /* Done. Inform the user */ })
    .catch(() => { /* Error. Inform the user */ })
}



// function dropHandler(ev) {
//     console.log('File(s) dropped');
  
//     // Prevent default behavior (Prevent file from being opened)
//     ev.preventDefault();
  
//     if (ev.dataTransfer.items) {
//       // Use DataTransferItemList interface to access the file(s)
//       for (var i = 0; i < ev.dataTransfer.items.length; i++) {
//         // If dropped items aren't files, reject them
//         if (ev.dataTransfer.items[i].kind === 'file') {
//           var file = ev.dataTransfer.items[i].getAsFile();
//           console.log('... file[' + i + '].name = ' + file.name);
//         }
//       }
//     } else {
//       // Use DataTransfer interface to access the file(s)
//       for (var i = 0; i < ev.dataTransfer.files.length; i++) {
//         console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
//       }
//     }
//   }

//   dropArea.addEventListener('drop', dropHandler)