import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SimpleStorageModule = buildModule("SimpleStorageModule", (m) => {
    // 1. Deploy the SimpleStorage contract
    const simpleStorage = m.contract("SimpleStorage");

    // 2. Retrieve current value
    m.call(simpleStorage, "retrieve");

    // 3. Set the initial value (optional, but good practice)
    //    This is equivalent to your `simpleStorage.store(7)` call
    m.call(simpleStorage, "store", [7]); // Set initial favorite number to 7

    return { simpleStorage };
});

export default SimpleStorageModule;
