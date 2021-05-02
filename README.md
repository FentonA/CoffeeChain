# Project Writeup

## Problem 

Consumers are increasingly concerned about the origin of the products they consume, especially when it comes to food and drink.
However in todays globalised world many products follow an increasingly complex and international supply chain making it hard to
track their origin. 
This is especially true for coffee. Consumers cannot be sure where the coffee was sourced from and how it was processed.
The problem here is that many different actors are involved in the supply chain who do not share their data such as farmers and distributors.

## Solution
We can use the blockchain to provide a reliable way for consumers to track the supply chain of their product and for actors along that supply chain to reliably share information.

### Architecture
The core of our architecture is a `SupplyChain` smart contract that keeps track of the state of a given item / product and allows the current actor in any given stage
to update the state of the product. When an actor (e.g. a Farmer) completes a certain stage in the supply chain (e.g. Harvesting) he/she updates the data for this product with the additional data generated in the given step and advances it to the next stage.
To make sure that at any given stage of the supply chain only the actor responsible for the product at this stage can update it, we use an Access Control mechanism with one smart contract managing each role (e.g. `FarmerRole`). This way we can be sure that when we retrieve information for a product in a given stage (e.g. the farm where it was harvested) we can be sure that this information came from the authorized party, making it fraud-proof.

### Conclusion
Smart Contracts are the ideal tool for managing supply chain information securely and achieving fraud-proof consensus / transparency between stakeholders that otherwise
would not trust each other. However the main challenge in doing this is having a secure system of Access Control to manage permissions for the different actors / stakeholders.

## General Implementation Data

### Contract Address
Rinkeby-Contract-Address: [0x3D5DaDB0973cDFC249eA6a0534CbBf76dBC40EB5](https://rinkeby.etherscan.io/address/0x3D5DaDB0973cDFC249eA6a0534CbBf76dBC40EB5)

### Steps / Setup
I had to do a few changes to the general setup to make the starter code for the frontend application work:
1. Add `web3.min.js` file to the src/js directory
2. Import `truffle-contract` directly using `require` instead of using the provided `truffle-contract.js` which did not work.
3. To be able to use `require` I had to bundle my code using [broswerfy](http://browserify.org/) and source the bundled `src/js/bundle.js` instead of `app.js` directly.

With the above changes I was able to run the app wiht `npm run dev` and call all of the contract functions from the browser using the provided buttons and metamask.

### Versions
- Truffle: v4.1.14 (core: 4.1.14)
- Solidity: v0.4.24 (solc-js)
- Node: v15.10.0
- NPM: 7.5.3
- Web3: 0.20.6

## IPFS
I did not use IPFS.

## UML
Below are the UML graphs that I created using drawio. You can find png / xml representations of these graphs in `project-6/uml`

### Activity
![Activity-Diagram](project-6/uml/Activity.png)
### Sequence
![Sequence-Diagram](project-6/uml/Sequence.png)
### State
![State-Diagram](project-6/uml/State.png)
### Class
![Class-Diagram](project-6/uml/Class.png)








