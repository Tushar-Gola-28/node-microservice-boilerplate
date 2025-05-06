const { baseRedisClient } = require("../cache/redis")
const { VersionModal } = require("../schemas/version")

const getVersionsByCode = async (feature, version) => {
    let findVersion = await baseRedisClient.get("versions")
    let parseData = findVersion ? JSON.parse(findVersion) : []
    let versiondata
    if (!parseData) {        
        versiondata = await VersionModal.findOne({ code: version, featureName: feature })
    } else {
        versiondata = parseData.find((it) => it.code == version && it.featureName == feature)
    }
    if (!versiondata) {
        throw new Error(`Feature ${feature} version ${version} was not found.`)
    }
    return versiondata
}
module.exports = { getVersionsByCode }