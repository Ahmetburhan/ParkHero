import React from "react";
const PlaceListItem = ({ video, onVideoSelect }) => {
    const imageUrl = place._embedded["pw:location"].photos["0"].sizes.original.URL;

    return (
        <li onClick={() => onPlaceSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{place_embedded["pw:location"].name}</div>
                </div>
            </div>
        </li>
    );
};





export default places;