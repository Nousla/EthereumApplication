const contractAddress = "0x25edfbCbB35a0cF491B74b1d975a7BaEC01071F8"
const abi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
]

$(document).ready(() => {
    let web3 = new Web3();
    web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));

    let banker = web3.eth.contract(abi).at(contractAddress);

    $("#account-address").val("0xAa3D48d83d8F18E48542CF4A8B0316108B9b991F");

    $("#get-balance").click(() => {
        let account = $("#account-address").val();
        banker.getBalance.call({from: account}, (error, result) => {
            if (error) {
                console.error(error)
            }
            else {
                $("#balance").text(result.toNumber());
            }
        });
    });

    $("#deposit").click(() => {
        let account = $("#account-address").val();
        let amount = $("#deposit-amount").val();
        banker.deposit([amount], {from: account}, (error, result) => {
            if (error) {
                console.error(error)
            }
        });
    });

    $("#withdraw").click(() => {
        let account = $("#account-address").val();
        let amount = $("#withdraw-amount").val();
        banker.withdraw([amount], {from: account}, (error, result) => {
            if (error) {
                console.error(error)
            }
        });
    });
});