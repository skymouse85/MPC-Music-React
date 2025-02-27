import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import GalleryItems from "../config/GalleryItems";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import React from "react";

function PhotoGallery() {
    const [index, setIndex] = React.useState(-1);
    const captionsRef = React.useRef(null);

    return (
        <>
            <RowsPhotoAlbum
                photos={GalleryItems}
                onClick={({ index: current }) => setIndex(current)}
            />
            {index >= 0 && (
                <Lightbox
                    plugins={[Captions]}
                    index={index}
                    slides={GalleryItems}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    captions={{
                        ref: captionsRef,
                        descriptionTextAlign: 'center',
                        descriptionMaxLines: 2
                    }}
                    showToggle={true}
                    portal={{ root: document.body }} // Ensures Lightbox renders at the root level
                />
            )}
        </>
    );
}

export default PhotoGallery;
