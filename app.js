const container = document.querySelector(".container")
const panels = document.querySelectorAll(".panel")

container.addEventListener("click", (e) =>

{
    // 1. Önceki aktif kartı küçültmek için tüm kartları döngüye al
    panels.forEach((panel) => {
        // 2. Eğer panel, tıklanan kart ile aynı değilse ve active class'ı varsa active class'ını kaldır
        if (panel !== e.target && panel.classList.contains("active")) {
            panel.classList.remove("active")
        }
    })

    // 3. Tıklanan kartın boyutunu büyütün
    e.target.classList.toggle("active")
})






