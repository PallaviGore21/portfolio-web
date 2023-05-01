gsap.from(".card1", {
    opacity: 0,
    rotation: 360,
    duration: 2,
    stagger: {
        each: 0.4,
        grid: "auto",
        from: "center"
    }
});