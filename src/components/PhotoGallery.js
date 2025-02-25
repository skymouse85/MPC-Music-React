import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import GalleryItems from "../config/GalleryItems";

const customRenderPhoto = ({ photo, imageProps }) => (
    <figure style={{ margin: 0 }}>
        <img {...imageProps} alt={photo.alt} />
        <figcaption style={{ fontSize: "0.75em", textAlign: "center", marginTop: "0.25rem", color: "black" }}>
            Photo by {photo.photographer}
        </figcaption>
    </figure >
);

function PhotoGallery() {
    return (
        <RowsPhotoAlbum photos={GalleryItems} renderPhoto={customRenderPhoto} />
    );
}

export default PhotoGallery;
