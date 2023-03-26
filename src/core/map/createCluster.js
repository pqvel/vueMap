// const origCreateCluster = Clusterer.prototype.createCluster
// Clusterer.prototype.createCluster = function overrideCreateCluster(center, geoObjects) {
//   // Fetch clustered objects data...
//   const objData = geoObjects.map(geoObj => ({ id: geoObj.options.get('id') }))
//   // Generate `clusterIcons` object with custom icon src...
//   const iconSrc = getClusterIconSrcByObjData(objData)
//   const clusterIconsEntry = { ...defaultClusterIconsEntry, href: iconSrc }
//   this.options.set('clusterIcons', [clusterIconsEntry])
//   // Get cluster placemark content...
//   return origCreateCluster.call(this, center, geoObjects)
// }