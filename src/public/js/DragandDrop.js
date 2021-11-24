const dropArea = document.querySelector(".drop-area");
const dragText = document.getElementById("Arrastra")
const button = dropArea.querySelector('button');
const input = dropArea.querySelector('#input-file');
let files;

button.addEventListener('click', e => {
  input.click();
})
input.addEventListener('change', e =>{
  files = this.files;
  dropArea.classList.add("active");
  showfiles(files);
  dropArea.classList.remove("active");
});

dropArea.addEventListener("dragover", e =>{
  e.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Suelta para subir la imagen";
});
dropArea.addEventListener("dragleave", e =>{
  e.preventDefault();
  dropArea.classList.remove("active");
  dragText.textContent = "Arrastra y suelta tu imagen";
});
dropArea.addEventListener("drop", (e) =>{
  e.preventDefault();
  files = e.dataTransfer.files;
  console.log(files.type)
  showfiles(files);
  dropArea.classList.remove("active");
  dragText.textContent = "Arrastra y suelta tu imagen";
});
function showfiles(files){
  if(files.length === 1){
    processFile(files);
  }
  else{
    alert("solo puedes ingresar un archivo");
  }
}
function processFile(file){
  console.log(file);
  const docType = file[0].type;
  const validExtensions = ['image/jpeg','image/jpg', 'image/png'];
  if(validExtensions.includes(docType)){
    const fileReader = new FileReader();
    const id = `file-${Math.random().toString(32).substring(7)}`;

    fileReader.addEventListener('load', e =>{
      const fileUrl = fileReader.result;
      const image = `
        <div id = "${id}" class="file-container">
          <img src = "${fileUrl}" alt = "${file[0].name}" width = "50">
          <div>
            <span>${file[0].name}</span>
          </div>
        </div>
      `;
      const html = document.querySelector('#preview').innerHTML;  
      document.querySelector('#preview').innerHTML = image + html;
    });
    fileReader.readAsDataURL(file[0]);
    uploadFile(file,id); 
  }
  else{
    alert('No es un archivo valido');
  }
}
function uploadFile(file,id){
  
}


 