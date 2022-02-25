var express = require('express');
var router = express.Router();

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//web3.eth.getAccounts().then(console.log);

//引入合约ABI
var myContract = new web3.eth.Contract([
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "BookList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "bookid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "bookname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bookauthor",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "borrowed",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "borrowedby",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "borrowedtime",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "UserList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "uid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "uname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "upassword",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "addBookName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "addBookAuthor",
				"type": "string"
			}
		],
		"name": "addBook",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "addUserName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "addUserpassword",
				"type": "string"
			}
		],
		"name": "addUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "time",
				"type": "string"
			}
		],
		"name": "borrowBook",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "delBookName",
				"type": "string"
			}
		],
		"name": "delBook",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "delUserName",
				"type": "string"
			}
		],
		"name": "delUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBookAll",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "bookid",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "bookname",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bookauthor",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "borrowed",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "borrowedby",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "borrowedtime",
						"type": "string"
					}
				],
				"internalType": "struct Library.Books[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "uid",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "uname",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "upassword",
						"type": "string"
					}
				],
				"internalType": "struct Library.Users[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "idtoBook",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "bookid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "bookname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bookauthor",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "borrowed",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "borrowedby",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "borrowedtime",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "idtoUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "uid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "uname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "upassword",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "bname",
				"type": "string"
			}
		],
		"name": "returnBook",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
], '0xE38C21aB0e545Cfb613fEab877225393078E1BB7');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended:false }));


var users = [];
myContract.methods.getUser().call().then(function(userslist){
	users = userslist;
});


/* GET home page. */
router.get('/', function(req, res, next) {
	global.current_user = "";
	res.render('index', {code: 1});
});


router.post('/', function(req, res, next) {
	// console.log(req.body);
	if(req.body){
		var name = req.body.name;
		var pass = req.body.password;
		for(i = 0; i < users.length; i++){
			if(users[i].uname == name && users[i].upassword == pass){
				if(name == 'admin'){
					res.redirect('/admin');
				}
				global.current_user = name;
				res.redirect('/users');
			}
		}
		res.redirect("/");
	}
	res.redirect("/");
});
  

// var init_counter = 0;
// var current_counter = 0;
// myContract.methods.getCounter().call().then(function(counter){
//   console.log("init counter: ", counter);
//   init_counter = counter;
// });

// myContract.methods.kipCounter(5).send({from: '0x3dC9C5cD4c0ABdE31a6b7D217E6f5ddC7D27979e'}).then(function(){
//   myContract.methods.getCounter().call().then(function(counter){
//     console.log("current counter: ", counter);
//     current_counter = counter;
//   });
// });



module.exports = router;
