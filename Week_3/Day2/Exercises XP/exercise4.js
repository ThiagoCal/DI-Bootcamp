let form = document.getElementsByTagName("form")[0]

form.addEventListener("submit", calculateVolume)


function calculateVolume(e){
    e.preventDefault();
    const radius = e.target.radius.value;
    let volume = 4/3*(Math.PI)*radius**3
    volume = Math.floor(volume)
    e.target.volume.value = volume
}