import Quill from 'quill/dist/quill.min.js';

// Import Quill.min.js as global variable.
// Importing as "import Quill from 'quill'" take a module from externals webpack definitions
window['Quill'] = Quill;

export default Quill;
