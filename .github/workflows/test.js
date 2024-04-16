// javascript
const core = require('@actions/core');
var args = process.argv;

console.log(args[2])
console.log(args[3])

var matrix  = {"include":[{"region":"us-east-1","sessionname": "GithubActionsDeploySlsToProdUsFromCdPipeline"}, {"region":"ap-southeast-2","sessionname": "GithubActionsDeploySlsToProdAuFromCdPipeline"}]}
if (args[3]=='us') {
  matrix  = {"include":[{"region":"us-east-1","sessionname": "GithubActionsDeploySlsToProdUsFromCdPipeline"}]}
} else if (args[3]=='au') {
  matrix  = {"include":[{"region":"ap-southeast-2","sessionname": "GithubActionsDeploySlsToProdAuFromCdPipeline"}]}
} 

console.log(JSON.stringify(matrix))

core.setOutput('matrix', JSON.stringify(matrix))
