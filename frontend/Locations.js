'use strict';

class Locations {
    constructor() {
        this.locationsArray = [];
        this.url = 'http://localhost:8080/locations';
        
        this.getLocations = this.getLocations.bind(this);
        this.addLocations = this.addLocations.bind(this);
        this.showLocations = this.showLocations.bind(this);
        this.search = this.search.bind(this);
        this.deselectFilter = this.deselectFilter.bind(this);
        this.filterLocations = this.filterLocations.bind(this);
        this.init = this.init.bind(this);
        
        this.init();
    }

    init() {
        //const self = this;
        this.radioButtons = document.getElementsByName('sizeFilter');
        for(const radioButton of this.radioButtons) {
            radioButton.addEventListener('click', this.filterLocations);
        }
        this.deselectButton = document.getElementById('deselectFilter');
        this.deselectButton.addEventListener('click', this.deselectFilter);
        this.searchForm = document.getElementById('searchForm');
        this.searchForm.addEventListener('submit', this.search);
        this.getLocations();
    }
    
    getLocations() {
        fetch(this.url)
        .then(function (locations) {
            return locations.json();
        })
        .then(this.addLocations)
        .then(this.showLocations)
        .catch(function(error){
            console.log(error);
        });

    }
    
    addLocations (locations) {
        for(const location of locations) {
            const newLocation = $.extend(new Location(), location);
            this.locationsArray.push(newLocation);
        }
        return this.locationsArray;
    }

    showLocations(locationsArray) {
        let locationsHTML = ``;
        
        if(locationsArray.length !== 0) {
            for (const location of locationsArray) {
                locationsHTML += 
                `<div class="location">
                    <div class="location_header">
                        <span class="strong">${location.city}</span>: ${location.description} 
                    </div>
                    <div class="location_body">`; 
                        for (const hebebuehne of location.hebebuehnen) {
                            locationsHTML += 
                            `<div class="hebebuehne">
                                <div class="hebebuehne_type"><span class="strong">Typ:</span> ${hebebuehne.type}</div>
                                <div class="hebebuehne_name"><span class="strong">Name:</span> ${hebebuehne.name}</div>
                                <div class="hebebuehne_info"><a href="#">Weitere Infos...</a></div>
                            </div>`;
                        }
                locationsHTML +=
                    `</div>
                </div>`;
            }
        } else {
            locationsHTML = `<div class="error_message">Es tut uns leid, aber leider haben wir am gesuchten Ort keinen Standort.</div>`;
        }

        document.getElementById('locations').innerHTML = locationsHTML;
    }

    search(evt) {
        evt.preventDefault();
        const searchField = document.getElementById('searchField');
        const searchString = searchField.value; 
        let filteredLocationsArray = [];

        for (const location of this.locationsArray) {
            if(location.city === searchString) {
                filteredLocationsArray.push(location);
            }
        }
        this.showLocations(filteredLocationsArray);        
    }

    deselectFilter() {
        for(const radioButton of this.radioButtons) {
            radioButton.checked = false;
        }
        this.showLocations(this.locationsArray);
    }

    filterLocations(evt) {
        const filter = evt.target.value.toLowerCase();
        let filteredLocationsArray = [];

        for (const location of this.locationsArray) {
            for(const hebebuehne of location.hebebuehnen) {
                if(hebebuehne.type === filter) {
                    filteredLocationsArray.push(location);
                    break;
                }    
            }
        }
        this.showLocations(filteredLocationsArray);  
    }
}

new Locations();