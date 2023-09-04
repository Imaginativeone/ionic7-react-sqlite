import{W as s}from"./index-42ff8bfe.js";class i extends s{constructor(){super(...arguments),this.jeepSqliteElement=null,this.isWebStoreOpen=!1}async initWebStore(){await customElements.whenDefined("jeep-sqlite"),this.jeepSqliteElement=document.querySelector("jeep-sqlite"),this.ensureJeepSqliteIsAvailable(),this.jeepSqliteElement.addEventListener("jeepSqliteImportProgress",e=>{this.notifyListeners("sqliteImportProgressEvent",e.detail)}),this.jeepSqliteElement.addEventListener("jeepSqliteExportProgress",e=>{this.notifyListeners("sqliteExportProgressEvent",e.detail)}),this.jeepSqliteElement.addEventListener("jeepSqliteHTTPRequestEnded",e=>{this.notifyListeners("sqliteHTTPRequestEndedEvent",e.detail)}),this.jeepSqliteElement.addEventListener("jeepSqlitePickDatabaseEnded",e=>{this.notifyListeners("sqlitePickDatabaseEndedEvent",e.detail)}),this.jeepSqliteElement.addEventListener("jeepSqliteSaveDatabaseToDisk",e=>{this.notifyListeners("sqliteSaveDatabaseToDiskEvent",e.detail)}),this.isWebStoreOpen||(this.isWebStoreOpen=await this.jeepSqliteElement.isStoreOpen())}async saveToStore(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.saveToStore(e);return}catch(t){throw new Error("".concat(t))}}async getFromLocalDiskToStore(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.getFromLocalDiskToStore(e);return}catch(t){throw new Error("".concat(t))}}async saveToLocalDisk(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.saveToLocalDisk(e);return}catch(t){throw new Error("".concat(t))}}async echo(e){return this.ensureJeepSqliteIsAvailable(),await this.jeepSqliteElement.echo(e)}async createConnection(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.createConnection(e);return}catch(t){throw new Error("".concat(t))}}async open(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.open(e);return}catch(t){throw new Error("".concat(t))}}async closeConnection(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.closeConnection(e);return}catch(t){throw new Error("".concat(t))}}async getVersion(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.getVersion(e)}catch(t){throw new Error("".concat(t))}}async checkConnectionsConsistency(e){this.ensureJeepSqliteIsAvailable();try{return await this.jeepSqliteElement.checkConnectionsConsistency(e)}catch(t){throw new Error("".concat(t))}}async close(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.close(e);return}catch(t){throw new Error("".concat(t))}}async getTableList(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.getTableList(e)}catch(t){throw new Error("".concat(t))}}async execute(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.execute(e)}catch(t){throw new Error("".concat(t))}}async executeSet(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.executeSet(e)}catch(t){throw new Error("".concat(t))}}async run(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.run(e)}catch(t){throw new Error("".concat(t))}}async query(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.query(e)}catch(t){throw new Error("".concat(t))}}async isDBExists(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.isDBExists(e)}catch(t){throw new Error("".concat(t))}}async isDBOpen(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.isDBOpen(e)}catch(t){throw new Error("".concat(t))}}async isDatabase(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.isDatabase(e)}catch(t){throw new Error("".concat(t))}}async isTableExists(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.isTableExists(e)}catch(t){throw new Error("".concat(t))}}async deleteDatabase(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.deleteDatabase(e);return}catch(t){throw new Error("".concat(t))}}async isJsonValid(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.isJsonValid(e)}catch(t){throw new Error("".concat(t))}}async importFromJson(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.importFromJson(e)}catch(t){throw new Error("".concat(t))}}async exportToJson(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.exportToJson(e)}catch(t){throw new Error("".concat(t))}}async createSyncTable(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.createSyncTable(e)}catch(t){throw new Error("".concat(t))}}async setSyncDate(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.setSyncDate(e);return}catch(t){throw new Error("".concat(t))}}async getSyncDate(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.getSyncDate(e)}catch(t){throw new Error("".concat(t))}}async deleteExportedRows(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.deleteExportedRows(e);return}catch(t){throw new Error("".concat(t))}}async addUpgradeStatement(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.addUpgradeStatement(e);return}catch(t){throw new Error("".concat(t))}}async copyFromAssets(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.copyFromAssets(e);return}catch(t){throw new Error("".concat(t))}}async getFromHTTPRequest(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{await this.jeepSqliteElement.getFromHTTPRequest(e);return}catch(t){throw new Error("".concat(t))}}async getDatabaseList(){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.getDatabaseList()}catch(e){throw new Error("".concat(e))}}ensureJeepSqliteIsAvailable(){if(this.jeepSqliteElement===null)throw new Error("The jeep-sqlite element is not present in the DOM! Please check the @capacitor-community/sqlite documentation for instructions regarding the web platform.")}ensureWebstoreIsOpen(){if(!this.isWebStoreOpen)throw new Error('WebStore is not open yet. You have to call "initWebStore()" first.')}async getUrl(){throw this.unimplemented("Not implemented on web.")}async getMigratableDbList(e){throw console.log("getMigratableDbList",e),this.unimplemented("Not implemented on web.")}async addSQLiteSuffix(e){throw console.log("addSQLiteSuffix",e),this.unimplemented("Not implemented on web.")}async deleteOldDatabases(e){throw console.log("deleteOldDatabases",e),this.unimplemented("Not implemented on web.")}async moveDatabasesAndAddSuffix(e){throw console.log("moveDatabasesAndAddSuffix",e),this.unimplemented("Not implemented on web.")}async isSecretStored(){throw this.unimplemented("Not implemented on web.")}async setEncryptionSecret(e){throw console.log("setEncryptionSecret",e),this.unimplemented("Not implemented on web.")}async changeEncryptionSecret(e){throw console.log("changeEncryptionSecret",e),this.unimplemented("Not implemented on web.")}async clearEncryptionSecret(){throw console.log("clearEncryptionSecret"),this.unimplemented("Not implemented on web.")}async checkEncryptionSecret(e){throw console.log("checkEncryptionPassPhrase",e),this.unimplemented("Not implemented on web.")}async getNCDatabasePath(e){throw console.log("getNCDatabasePath",e),this.unimplemented("Not implemented on web.")}async createNCConnection(e){throw console.log("createNCConnection",e),this.unimplemented("Not implemented on web.")}async closeNCConnection(e){throw console.log("closeNCConnection",e),this.unimplemented("Not implemented on web.")}async isNCDatabase(e){throw console.log("isNCDatabase",e),this.unimplemented("Not implemented on web.")}async isDatabaseEncrypted(e){throw console.log("isDatabaseEncrypted",e),this.unimplemented("Not implemented on web.")}async isInConfigEncryption(){throw this.unimplemented("Not implemented on web.")}async isInConfigBiometricAuth(){throw this.unimplemented("Not implemented on web.")}}export{i as CapacitorSQLiteWeb};
