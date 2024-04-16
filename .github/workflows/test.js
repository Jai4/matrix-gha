// javascript
const core = require('@actions/core');
var args = process.argv.slice(2);

console.log(args[0]);
console.log(args[1]);

var matrix  = []
if (args[1]=="us") {
  matrix = [
    {
    "region":"us-east-1",
    "sessionname": "GithubActionsDeploySlsToProdUsFromCdPipeline",
    }
  ]
} else if (args[1]=="au") {
  matrix = [
    {
    "region":"ap-southeast-2",
    "sessionname": "GithubActionsDeploySlsToProdAuFromCdPipeline",
    }
  ]
} else {
 matrix = [
    {
    "region":"us-east-1",
    "sessionname": "GithubActionsDeploySlsToProdUsFromCdPipeline",
    },
    {
    "region":"ap-southeast-2",
    "sessionname": "GithubActionsDeploySlsToProdAuFromCdPipeline",
    }
  ]
}

console.log(JSON.stringify(matrix))

core.setOutput('matrix', JSON.stringify(matrix))

 
