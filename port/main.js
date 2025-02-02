const btn = document.getElementById("btn")
const items = ["-5 kiberone", "Call mom", "Ban in roblox", "Delete your steam", "Swatt your to darkwed", "Mr Proper dont wash your room",
    "Arcane on pudj never unban"
]

btn.addEventListener("click", () => {
    let randomInt = Math.floor(Math.random() * items.length)
    btn.innerText = items[randomInt]
    btn.classList.add("animation")
    btn.classList.remove("animation")
    setTimeout(() => {
        btn.classList.remove("animation")
    }, 3000);
})