function toggleNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
        document.body.classList.remove("sidebar-open");
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
        document.body.classList.add("sidebar-open");
    }
}

function closeNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");

    sidebar.style.width = "0";
    main.style.marginLeft = "0";
    document.body.classList.remove("sidebar-open");
}

