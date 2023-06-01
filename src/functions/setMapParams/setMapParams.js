import MAPSIZEPARAMS from "consts/mapSizeParams";

export default function setMapParams(mapSizeX, mapSizeY) {
  let mapParams = undefined;
  if (mapSizeX <= 30 && mapSizeY <= 15) {
    mapParams = MAPSIZEPARAMS.find((mapsize) => mapsize.mapSizeY === 15);
  } else if (mapSizeX >= 46 && mapSizeY >= 24) {
    mapParams = MAPSIZEPARAMS.find((mapsize) => mapsize.mapSizeY === 25);
  } else {
    const mapParamsX = MAPSIZEPARAMS.find(
      (mapsize) =>
        mapsize.mapSizeX === mapSizeX ||
        mapsize.mapSizeX === mapSizeX + 1 ||
        mapsize.mapSizeX === mapSizeX + 2 ||
        mapsize.mapSizeX === mapSizeX + 3
    );
    const mapParamsY = MAPSIZEPARAMS.find(
      (mapsize) =>
        mapsize.mapSizeY === mapSizeY || mapsize.mapSizeY === mapSizeY + 1
    );
    if (mapParamsX?.id === undefined) {
      mapParams = mapParamsY;
    } else if (mapParamsY?.id === undefined) {
      mapParams = mapParamsX;
    } else {
      mapParams = mapParamsX.id > mapParamsY.id ? mapParamsX : mapParamsY;
    }
  }
  return mapParams;
}
