const fs = require("fs")

module.exports = (dataDir,history,historyFile)=>{
    if(!fs.existsSync(dataDir)){
        fs.mkdirSync(dataDir)
    }
    history = require("./sortHistory")(history)
    fs.writeFileSync(historyFile,"")
    history.forEach(historyInfo => {
        fs.appendFileSync(historyFile,historyInfo.url+"\t"+historyInfo.title+"\t"+historyInfo.dateUnix+"\n")
    });
}
