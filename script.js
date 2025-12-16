function toggleMenu(){
    let menu = document.getElementById("menuList");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function scrollToDonate(){
    document.querySelector("#donate").scrollIntoView({ behavior: "smooth" });
}
