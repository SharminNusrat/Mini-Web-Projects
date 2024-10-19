const testimonials = [
    {
        name: "Charise G",
        photoURL: "profile.jpeg",
        text: "This is simply unbelievable! I would be lost without apple. The very best. Not able to tell you how happy I am with apple"
    },
    {
        name: "Rosetta Q",
        photoURL: "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfDF8MHx8fDA%3D",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels."
    },
    {
        name: "Constantine V",
        photoURL: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfDF8MHx8fDA%3D",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought it first The very best."
    }
]

const imageEL = document.querySelector("img")
const textEl = document.querySelector(".text")
const nameEl = document.querySelector("h3")
let idx = 0

const updateTestimonial = () => {
    const {name, photoURL, text} = testimonials[idx];
    nameEl.innerText = name;
    imageEL.src = photoURL;
    textEl.innerText = text;
    idx++;
    if(idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 3000);
}

updateTestimonial()