// const cerButtons = document.querySelectorAll('.cerButton');
// const cerSection = document.getElementById('certificate');

// cerButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     cerSection.scrollIntoView();
//   });
// });

// const proButtons = document.querySelectorAll('.proButton');
// const proSection = document.getElementById('projects');

// proButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     proSection.scrollIntoView();
//   });
// });

function setupScrollOnClick(buttonClass, sectionId) {
    const buttons = document.querySelectorAll(buttonClass);
    const section = document.getElementById(sectionId);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            section.scrollIntoView();
        });
    });
}

setupScrollOnClick('.cerButton', 'certificate');
setupScrollOnClick('.proButton', 'projects');