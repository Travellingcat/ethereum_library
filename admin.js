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
const { use } = require('.');
router.use(bodyParser.urlencoded({ extended:false }));

var books = [];
myContract.methods.getBookAll().call().then(function(bookslist){
  books = bookslist;
});

var users = [];
myContract.methods.getUser().call().then(function(userslist){
  users = userslist;
});

router.get('/', function(req, res, next) {
  myContract.methods.getBookAll().call().then(function(bookslist){
    books = bookslist;
  });
  console.log(books);
  res.render('admin', {books: books});
});

router.post('/', function(req, res, next) {
	var tmp = [];
  if(req.body.inputbookname){
    var j = 0;
		for(i = 0; i < books.length; i++){
      if(req.body.inputbookname == books[i].bookname){
        tmp[j] = books[i];
        j++;
      }
    }
    res.render('admin', {books: tmp});
	}
	if(req.body.inputbookauthor){
    var j = 0;
		for(i = 0; i < books.length; i++){
      if(req.body.inputbookauthor == books[i].bookauthor){
        tmp[j] = books[i];
        j++;
      }
    }
    res.render('admin', {books: tmp});
	}
  else{
    res.render('admin', {books: tmp});
  }
});

router.get('/addbook', function(req, res, next) {
  res.render('admin_addbook');
});

router.post('/addbook', function(req, res, next) {
  if(req.body){
    myContract.methods.addBook(req.body.inputbookname, req.body.inputbookauthor).send({from: '0x3138e867D0c2f3d90F617733e93aBB367C00D811', gas: 4700000});
    res.redirect('/admin/addbook');
  }
  else{
    console.log('addbook error');
  }
});

router.get('/delbook', function(req, res, next) {
  res.render('admin_delbook');
});

router.post('/delbook', function(req, res, next) {
  myContract.methods.getBookAll().call().then(function(bookslist){
    books = bookslist;
  });
  if(req.body){
    var inputid = req.body.inputbookid;
    var bname = "";
    for(i = 0; i < books.length; i++){
      if(books[i].bookid == inputid){
        bname = books[i].bookname;
      }
    }
    myContract.methods.delBook(bname).send({from: '0x3138e867D0c2f3d90F617733e93aBB367C00D811', gas: 4700000});
    res.redirect('/admin/delbook');
  }
  else{
    console.log('delbook error');
  }
});

router.get('/users', function(req, res, next) {
  myContract.methods.getUser().call().then(function(userslist){
    users = userslist;
  });
  console.log(users);
  res.render('admin_users', {users: users});
});

router.post('/users', function(req, res, next) {
	var tmp = [];
  if(req.body.inputusername){
    var j = 0;
		for(i = 0; i < users.length; i++){
      if(req.body.inputusername == users[i].uname){
        tmp[j] = users[i];
        j++;
      }
    }
    res.render('admin_users', {users: tmp});
	}
  else{
    res.render('admin-users', {users: tmp});
  }
});

router.get('/records', function(req, res, next) {
  res.render('admin_records');
});

router.post('/records', function(req, res, next) {
  var tmp = [];
  var j = 0;
  if(req.body){
    for(i = 0; i < books.length; i++){
      if(req.body.inputusername == books[i].borrowedby){
          tmp[j] = books[i];
          j++;
      }
    }
    res.render('admin_records', {books: tmp});
  }
  res.render('admin_records');
});

router.get('/delusers', function(req, res, next) {
  res.render('admin_delusers');
});

router.post('/delusers', function(req, res, next) {
  myContract.methods.getUser().call().then(function(userslist){
    users = userslist;
  });
  if(req.body){
    var inputid = req.body.inputuserid;
    var name = "";
    for(i = 0; i < users.length; i++){
      if(users[i].uid == inputid){
        name = users[i].uname;
      }
    }
    myContract.methods.delUser(name).send({from: '0x3138e867D0c2f3d90F617733e93aBB367C00D811', gas: 4700000});
    res.redirect('/admin/delusers');
  }
  else{
    console.log('deluser error');
  }
});


module.exports = router;
