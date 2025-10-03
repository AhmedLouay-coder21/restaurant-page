export default function contactUsPage() {
    const contactUsImage = document.createElement("div");
    const contactUs = document.createElement("div");
    const contactUsTitle = document.createElement("h1");
    const contactUsBackground = document.createElement("img");
    const formTitle = document.createElement("h2");
    const contactUsForm = document.createElement("form");

    contactUs.id = "contactUs";
    contactUsImage.id = "contactUs"; 
    contactUsForm.id = "contactUsForm";
    contactUsTitle.id = "contactUsTitle";

    // Title for the form
    formTitle.textContent = "Your Details";

    // Contact Us Text over the Background Image
    contactUsTitle.textContent = "Contact Us";

    contactUsBackground.src = "https://img.freepik.com/free-photo/frame-meat-vegetables_23-2148599848.jpg?t=st=1759186741~exp=1759190341~hmac=a2bcdbfb38b0a21777bdef0723fd0b20adb0fda3fd4236c6e0fac6bc15a01a01&w=1480";
    contactUsBackground.id = "contactUsBackground";

    // Append title + background
    content.appendChild(contactUs);
    contactUsImage.appendChild(contactUsTitle);
    contactUsImage.appendChild(contactUsBackground);
    contactUs.appendChild(contactUsImage);

    // Append form to content
    contactUs.appendChild(contactUsForm);
    contactUsForm.appendChild(formTitle);

    const upperFormPart = document.createElement("div");
    const middleFormPart = document.createElement("div");
    const downFormPart = document.createElement("div");

    upperFormPart.id = "upperFormPart";
    middleFormPart.id = "middleFormPart";
    downFormPart.id = "downFormPart";

    contactUsForm.appendChild(upperFormPart);
    contactUsForm.appendChild(middleFormPart);
    contactUsForm.appendChild(downFormPart);
    // Utility to create label + input
    function createInput(labelText, id, name, placeholder, wrapperId) {
        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = labelText;

        const wrapper = document.createElement("div");
        wrapper.id = wrapperId;

        const input = document.createElement("input");
        input.type = "text";
        input.id = id;
        input.name = name;
        input.placeholder = placeholder;

        //put a wrapper for every label and input so that the text and its value can be manipulated individually.
        wrapper.appendChild(label);
        wrapper.appendChild(input);

        if(id == "name" || id == "emailAddress")
        {
        upperFormPart.appendChild(wrapper);
        }
        else if(id == "subject")
        {
        middleFormPart.appendChild(wrapper);
        }
        else
        {
        downFormPart.appendChild(wrapper);
        }
    }

    // Add form fields
    createInput("Name", "name", "name", "John", "formName");
    createInput("Email Address", "emailAddress", "emailAddress", "Example@gmail.com", "formEmail");
    createInput("Subject", "subject", "subject", "subject", "formSubject");
    createInput("Comments", "comments", "comments", "Question", "formComment");

    // Submit button
    const formSubmitBtn = document.createElement("input");
    formSubmitBtn.id = "formSubmitBtn";
    formSubmitBtn.type = "submit";
    formSubmitBtn.value = "Submit";

    contactUsForm.appendChild(formSubmitBtn);
    
    //adding same transition in home page to contact us page
    setTimeout(() => {
    contactUsTitle.classList.add('loaded');
    contactUsBackground.classList.add('loaded');
    formTitle.classList.add('loaded');
    upperFormPart.classList.add('loaded');
    middleFormPart.classList.add('loaded');
    downFormPart.classList.add('loaded');
}, 900);
}
