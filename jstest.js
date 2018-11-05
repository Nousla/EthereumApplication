Banker.deployed().then((instance) => app=instance);

app.getBalance.call().then((balance) => { 
    console.log(balance.toNumber());
});
// Output: 0

app.deposit(100).then((result) => console.log(result));
// TX Data: 0xb6b55f250000000000000000000000000000000000000000000000000000000000000064
/* Output:
{ tx: '0xb97fe516cce6bec7361f943a2304a7d0f757394eed7a82d7973407c6c65f9d40',
  receipt: 
   { transactionHash: '0xb97fe516cce6bec7361f943a2304a7d0f757394eed7a82d7973407c6c65f9d40',
     transactionIndex: 0,
     blockHash: '0xf709da2973818bc00c2e27f8ce434dc88abe19cbb0a1ee13c53fbab8fa7c4d2a',
     blockNumber: 15,
     gasUsed: 42399,
     cumulativeGasUsed: 42399,
     contractAddress: null,
     logs: [],
     status: '0x1',
     logsBloom: '0x0...0' },
  logs: [] }
*/

app.withdraw(50).then((result) => console.log(result))
// TX Data: 0x2e1a7d4d0000000000000000000000000000000000000000000000000000000000000032
/* Output:
{ tx: '0x59fc0c92a63645080e434d05ab841075f8125686015a5f5f2ae620f4c2f0daea',
  receipt: 
   { transactionHash: '0x59fc0c92a63645080e434d05ab841075f8125686015a5f5f2ae620f4c2f0daea',
     transactionIndex: 0,
     blockHash: '0x403e91913a9f9c57263c555ea4a3ba4df189da85bcd37403ee6afc7f62e8ed56',
     blockNumber: 16,
     gasUsed: 27361,
     cumulativeGasUsed: 27361,
     contractAddress: null,
     logs: [],
     status: '0x1',
     logsBloom: '0x0...0' },
  logs: [] }
*/

app.getBalance.call().then((balance) => { 
    console.log(balance.toNumber());
});
// Output: 50

app.getBalance.call({from:"0xd05A18ec89548CeE1820c88c42BACdc671DD0E03"}).then((balance) => { 
    console.log(balance.toNumber());
});
// Output: 0