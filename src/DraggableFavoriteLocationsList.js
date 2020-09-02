import DraggableFavoriteLocation from "./DraggableFavoriteLocation";
import React from "react";
import { SortableContainer } from "react-sortable-hoc";

const DraggableFavoriteLocationsList = SortableContainer(
	({ locations, removeLocation, handleCitySearch, edit }) => {
		return (
			<div>
				{locations.map((location, i) => (
					<DraggableFavoriteLocation
						index={i}
						key={location.id}
						location={location}
						removeLocation={removeLocation}
						handleCitySearch={handleCitySearch}
						edit={edit}
					/>
				))}
			</div>
		);
	}
);

export default DraggableFavoriteLocationsList;
