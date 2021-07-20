window.addEventListener("load", () => {

    const width = window.innerWidth;
    const height = window.innerHeight;
    function randomX() {
        return Math.random() * width;
    }
    function randomY() {
        return Math.random() * height;
    }

    const rect1 = document.getElementsByClassName("circle1");
    const rect2 = document.getElementsByClassName("circle2");
    const rect3 = document.getElementsByClassName("circle3");
    const rect4 = document.getElementsByClassName("circle4");
    const rect5 = document.getElementsByClassName("circle5");
    const rect6 = document.getElementsByClassName("circle6");
    gsap.to(rect1, {
        rotation: 360,
        x: 400,
        x: () => Math.random() * 300,
        y: () => Math.random() * 600,
        repeatRefresh: true,
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
    });
    gsap.to(rect2, {
        rotation: 360,
        x: 400,
        x: () => Math.random() * 400,
        y: () => Math.random() * -650,
        repeatRefresh: true,
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
    });
    gsap.to(rect3, {
        rotation: 360,
        x: 500,
        x: () => randomX(),
        y: () => randomY(),
        repeatRefresh: true,
        duration: 6,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
    });
    gsap.to(rect4, {
        rotation: 360,
        x: 500,
        x: () => Math.random() * -800,
        y: () => Math.random() * -700,
        repeatRefresh: true,
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
    });
    gsap.to(rect5, {
        rotation: 360,
        x: 500,
        x: () => Math.random() * -1000,
        y: () => Math.random() * -700,
        repeatRefresh: true,
        duration: 5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
    });
    gsap.to(rect6, {
        rotation: 360,
        x: 500,
        x: () => Math.random() * 1000,
        y: () => Math.random() * -700,
        repeatRefresh: true,
        duration: 5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
    });
});