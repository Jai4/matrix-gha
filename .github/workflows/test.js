// javascript
const core = require('@actions/core');
const myInput = core.getInput('deployment-ring', { required: true });
console.log(myInput);
