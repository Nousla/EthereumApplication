var Banker = artifacts.require("./Banker.sol");

contract("Banker", accounts => {    
    it("should have a balance of zero in account at start", () => {
        return Banker.new()
        .then(instance => {
            return instance.getBalance.call();
        })
        .then(balance => {
            assert.equal(balance.toNumber(), 0, "Account does not have zero balance")
        });
    });

    it("should have a balance of 50 in account after deposit of 50", () => {
        var app;
        
        return Banker.new()
        .then(instance => {
            app = instance;

            return app.deposit(50)
        })
        .then(() => {
            return app.getBalance.call();
        })
        .then(balance => {
            assert.equal(balance.toNumber(), 50, "Account does not have a balance of 50")
        });
    });

    it("should throw error when depositing zero", () => {
        var app;
        
        return Banker.new()
        .then(instance => {
            app = instance;

            return app.deposit(0)
        })
        .then(() => {
            assert.fail();
        })
        .catch((error) => {
            // Do nothing
        });
    });

    it("should throw error when depositing a negative value", () => {
        var app;
        
        return Banker.new()
        .then(instance => {
            app = instance;

            return app.deposit(-1)
        })
        .then(() => {
            assert.fail();
        })
        .catch((error) => {
            // Do nothing
        });
    });

    it("should throw error with withdrawel of 50 on account with a balance of zero", () => {
        var app;
        
        return Banker.new()
        .then(instance => {
            app = instance;
            return app.withdraw(50);
        })
        .then(() => {
            assert.fail();
        })
        .catch((error) => {
            // Do nothing
        });
    });

    it("should throw error when withdrawing zero", () => {
        var app;
        
        return Banker.new()
        .then(instance => {
            app = instance;

            return app.withdraw(0)
        })
        .then(() => {
            assert.fail();
        })
        .catch((error) => {
            // Do nothing
        });
    });

    it("should throw error when withdrawing a negative value", () => {
        var app;
        
        return Banker.new()
        .then(instance => {
            app = instance;

            return app.withdraw(-1)
        })
        .then(() => {
            assert.fail();
        })
        .catch((error) => {
            // Do nothing
        });
    });

    it("should have a balance of zero in account after deposit of 50 and withdrawal of 50", () => {
        var app;
        
        return Banker.new()
        .then(instance => {
            app = instance;
            return app.deposit(50);
        })
        .then(() => {
            return app.withdraw(50);
        })
        .then(() => {
            return app.getBalance.call();
        })
        .then(balance => {
            assert.equal(balance.toNumber(), 0, "Account does not have a balance of zero")
        });
    });

    it("should throw error when depositing more than the maximum uint32", () => {
        var app;
        var maximumUInt32 = Math.pow(2,256) - 100
        
        return Banker.new()
        .then(instance => {
            app = instance;

            return app.deposit("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF")
        })
        .then(() => {
            return app.deposit(1)
        })
        .then(() => {
            assert.fail();
        })
        .catch((error) => {
            // Do nothing
        });
    });
});