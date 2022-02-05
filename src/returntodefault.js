function returntodefault(){
    const msg = confirm("Your about going back to the default website. Are you sure");
    if (msg == true){
        document.location.href = "https://www.norosoft.dev"
    }
}