// select needed elements and store them in variables
const speciesInput = document.querySelector('#speciesInput');
const assemblyBtn = document.querySelector('#assemblyBtn');
const orderbtn = document.querySelector('#orderBtn');
const assemblyContainer = document.querySelector('#assemblyContainer');
const orderContainer = document.querySelector('#orderContainer');
const genomeHelp = document.querySelector('#genomeHelp');
const orderHelp = document.querySelector('#orderHelp');

// search fxns
const findAssembly = (e) => {
    e.preventDefault();
    // retrieve genus and species from input box
    const genus = speciesInput.value.split(' ')[0].toLowerCase();
    const species = speciesInput.value.split(' ')[1].toLowerCase();
    // create link
    const linkEl = document.createElement('a');
    linkEl.textContent = 'Download Assemblies';
    linkEl.setAttribute('href', `https://www.ncbi.nlm.nih.gov/assembly/?term=${genus}+${species}`);
    linkEl.setAttribute('target', '_blank');
    assemblyContainer.append(linkEl);
    // make user directions stand out
    genomeHelp.classList.remove('text-muted');
}

// add event listeners to respective btns
assemblyBtn.addEventListener('click', findAssembly);
