
npm install express --save
npm install glob --save
npm install --save axios vue-axios

Node.jsのデバッグ
https://qiita.com/keitarou/items/298377ae34ec1b3df448

node-glob
https://github.com/isaacs/node-glob

```
		{
			"name": "Node",
			"type": "node",
			"request": "launch",
			"program": "${workspaceFolder}\\server\\webAPI.js",
			"stopOnEntry": false,
			"args": [],
			// "cwd": ".",
			"runtimeExecutable": null,
			"runtimeArgs": [
				"--nolazy"
			],
			"env": {},
			"sourceMaps": false,
			"outFiles": []
		}
```