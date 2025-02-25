import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import GalleryItems from "../config/GalleryItems";


function PhotoGallery() {
    return <RowsPhotoAlbum photos={GalleryItems} />

}

export default PhotoGallery;