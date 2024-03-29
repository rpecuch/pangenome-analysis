// select needed elements and store them in variables
const speciesInput = document.querySelector('#speciesInput');
const helperText = document.querySelector('#helperText')
const assemblyBtn = document.querySelector('#assemblyBtn');
const orderBtn = document.querySelector('#orderBtn');
const assemblyLink = document.querySelector('#assemblyLink');
const orderLink = document.querySelector('#orderLink');
const genomeHelp = document.querySelector('#genomeHelp');
const orderHelp = document.querySelector('#orderHelp');
const searchForm = document.querySelector('#searchForm');

// search validation fxn
const checkSearch = () => {
    // prevent empty search
    if (!speciesInput.value) {
        helperText.textContent = 'Search cannot be empty!';
        return;
    }
    // make sure proper format searched for
    if (speciesInput.value.split(' ').length !== 2) {
        helperText.textContent = 'Please enter the genus and species, separated by a space.';
        return;
    }
    helperText.textContent = '';
    return speciesInput;
}

// search fxns
const findAssembly = (e) => {
    e.preventDefault();
    // validation
    checkSearch();
    if (checkSearch() !== undefined) {
        // retrieve genus and species from input box
        const genus = speciesInput.value.split(' ')[0].toLowerCase();
        const species = speciesInput.value.split(' ')[1].toLowerCase();
        // create link
        assemblyLink.textContent = 'Download Assemblies';
        assemblyLink.setAttribute('href', `https://www.ncbi.nlm.nih.gov/assembly/?term=${genus}+${species}`);
        // make user directions stand out
        genomeHelp.classList.remove('text-muted');
        orderHelp.classList.add('text-muted');
    }
}

const findOrder = (e) => {
    e.preventDefault();
    // validation
    checkSearch();
    if (checkSearch() !== undefined) {
        // retrieve genus and species from input box
        const genus = speciesInput.value.split(' ')[0].toLowerCase();
        const species = speciesInput.value.split(' ')[1].toLowerCase();
        // create link
        orderLink.textContent = 'Download Original Order';
        orderLink.setAttribute('href', `https://www.ncbi.nlm.nih.gov/genome/browse#!/prokaryotes/${genus}%20${species}`);
        // make user directions stand out
        orderHelp.classList.remove('text-muted');
        genomeHelp.classList.add('text-muted');
        // create new search btn
        const newBtn = document.createElement('button');
        newBtn.classList.add('btn', 'btn-danger');
        newBtn.textContent = 'New Search';
        newBtn.addEventListener('click', function() {
            window.location.reload;
        })
        searchForm.append(newBtn);
    }
}

// add event listeners to respective btns
assemblyBtn.addEventListener('click', findAssembly);
orderBtn.addEventListener('click', findOrder);
