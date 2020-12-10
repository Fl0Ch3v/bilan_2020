function initialize() {
		// création de la carte et paramétrage général : centre et niveau de zoom
        var map = L.map('mapid').setView([50.172669, 1.802510], 10);
 
		// création d'une couche "osmLayer"
        var osmLayer = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        });
		    
		// la couche "osmG2FLayer" est ajoutée à la carte		
        map.addLayer(osmLayer);
					

			// création d'une couche geoJson qui appelle le fichier "pts_naturel.geojson"													
		var a_nature = $.getJSON("data/pts_naturel.geojson",function(dataA_naturel)
										// icone Clap	
										{var iconeNature = L.icon({
													iconUrl: 'style/V2/nature.png',
													iconSize: [32, 32]
																	});
		// fonction pointToLayer qui ajoute la couche "projets" à la carte, selon la symbologie "iconeProjet", et paramètre la popup
		L.geoJson(dataA_naturel,{
			pointToLayer: function(feature,latlng){
				var marker = L.marker(latlng,{icon: iconeNature});
				marker.bindPopup('<b>Animation patrimoine ' + feature.properties.theme + '</b><br>'
							   + "<b>Commune : </b>" + feature.properties.nom+ '<br>' 
							   + "<b>Nombre de répétition : </b>" + feature.properties.nb_real
							   );
				return marker;
				}
						})//.addTo(map);
										});	

	var m = L.marker( [marker])
	markerClusters.addLayer(m);

	map.addLayer(markerClusters);



};