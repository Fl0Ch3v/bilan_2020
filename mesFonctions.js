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

		// création d'une couche "osmG2FLayer"
        var osmG2FLayer = L.tileLayer.wms('https://osm.geo2france.fr/mapproxy/service/', {layers: 'bright',
            attribution: '© Géo2France et <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        });
		    

		

		
		// création d'une couche geoJson qui appelle le fichier "pnr_perim.geojson"			
//		var pnr = $.getJSON("data/pnr_perim.geojson",function(dataPnr)
//					{L.geoJson( dataPnr, 
//						{style: function(feature)
//							{	
							// paramétrage de la symbologie de la couche "pnr"
	//						return { color: "#00997a", weight: 3, fillColor: '#00997a', fillOpacity: 0 };
//							},
	//	onEachFeature: function( feature, layer )
	//			{
				// paramétrage de la popup de la couche "pnr"	
	//			layer.bindPopup( "<b><u>Parc Naturel Régional</u></b><br><b><u>Baie de Somme - Picaride maritime</u></b><br>" + feature.properties.nb_com + " communes adhérentes<br>" + feature.properties.area_ha + " hectares" )
	//			}
//		}).addTo(map);
//		});
	

		// création d'une couche geoJson qui appelle le fichier "pah_perim.geojson"			
		//var pah = $.getJSON("data/pah_perim.geojson",function(dataPah)
		//			{L.geoJson( dataPah, 
		//				{style: function(feature)
		//					{	
							// paramétrage de la symbologie de la couche "pah"
		//					return { color: "#319098", weight: 0, fillColor: '#319098', fillOpacity: .3 };
		//					},
		//onEachFeature: function( feature, layer )
		//		{
				// paramétrage de la popup de la couche "pah"	
		//		layer.bindPopup( "<b>Pays d'Art et d'Histoire</b><br><b>Ponthieu - Baie de Somme</b>")
		//		}
	//	}).addTo(map);
	//	});

		// création d'une couche geoJson qui appelle le fichier "com_pnr2.geojson"			
		var com = $.getJSON("data/com_pnr2.geojson",function(dataCom)
					{L.geoJson( dataCom, 
						{style: function(feature)
							{	
							// paramétrage de la symbologie de la couche "c_anim"
							return { color: "#000000", weight: 1, fillColor: '#00997a', fillOpacity: 0 };
							},
		onEachFeature: function( feature, layer )
				{
				// paramétrage de la popup de la couche "c_anim"	
				layer.bindPopup( feature.properties.nom )
				}
		}).addTo(map);
		});
	
		
						
		// création d'une couche geoJson qui appelle le fichier "com_anim.geojson"			
		var c_anim = $.getJSON("data/com_anim.geojson",function(dataC_anim)
					{L.geoJson( dataC_anim, 
						{style: function(feature)
							{	
							// paramétrage de la symbologie de la couche "c_anim"
							return { color: "#8B008B", weight: 1, fillColor: '#8B008B', fillOpacity: 0.3 };
							},
		onEachFeature: function( feature, layer )
				{
				// paramétrage de la popup de la couche "c_anim"	
				layer.bindPopup( '<b>' + feature.properties.nom + '</b><br>'+
				'<b>' +	feature.properties.nb_anim + " animation(s) réalisée(s)</b>")
				}
		}).addTo(map);
		});

									

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

		// création d'une couche geoJson qui appelle le fichier "pts_historique.geojson"													
		var a_historic = $.getJSON("data/pts_historique.geojson",function(dataA_historic)
										// icone Clap	
										{var iconeHisto = L.icon({
													iconUrl: 'style/V2/historique.png',
													iconSize: [32, 32]
																	});
		// fonction pointToLayer qui ajoute la couche "projets" à la carte, selon la symbologie "iconeProjet", et paramètre la popup
		L.geoJson(dataA_historic,{
			pointToLayer: function(feature,latlng){
				var marker = L.marker(latlng,{icon: iconeHisto});
				marker.bindPopup('<b>Animation patrimoine ' + feature.properties.theme + '</b><br>'
							   + "<b>Commune : </b>" + feature.properties.nom+ '<br>' 
							   + "<b>Nombre de répétition : </b>" + feature.properties.nb_real
							   );
				return marker;
				}
						})//.addTo(map);
										});											

		// création d'une couche geoJson qui appelle le fichier "pts_jeu.geojson"													
		var a_jeu = $.getJSON("data/pts_jeu.geojson",function(dataA_jeu)
										// icone Clap	
										{var iconeJeu = L.icon({
													iconUrl: 'style/V2/jeu.png',
													iconSize: [32, 32]
																	});
		// fonction pointToLayer qui ajoute la couche "projets" à la carte, selon la symbologie "iconeProjet", et paramètre la popup
		L.geoJson(dataA_jeu,{
			pointToLayer: function(feature,latlng){
				var marker = L.marker(latlng,{icon: iconeJeu});
				marker.bindPopup('<b>Animation patrimoine ' + feature.properties.theme + '</b><br>'
							   + "<b>Commune : </b>" + feature.properties.nom+ '<br>' 
							   + "<b>Nombre de répétition : </b>" + feature.properties.nb_real
							   );
				return marker;
				}
						}).addTo(map);
										});	

		// création d'une couche geoJson qui appelle le fichier "pts_naturel_historique.geojson"													
		var a_nat_histo = $.getJSON("data/pts_naturel_historique.geojson",function(dataA_nat_histo)
										// icone Clap	
										{var iconeNatHisto = L.icon({
													iconUrl: 'style/V2/histo_nature.png',
													iconSize: [32, 32]
																	});
		// fonction pointToLayer qui ajoute la couche "projets" à la carte, selon la symbologie "iconeProjet", et paramètre la popup
		L.geoJson(dataA_nat_histo,{
			pointToLayer: function(feature,latlng){
				var marker = L.marker(latlng,{icon: iconeNatHisto});
				marker.bindPopup('<b>Animation patrimoine ' + feature.properties.theme + '</b><br>'
							   + "<b>Commune : </b>" + feature.properties.nom+ '<br>' 
							   + "<b>Nombre de répétition : </b>" + feature.properties.nb_real
							   );
				return marker;
				}
						}).addTo(map);
										});	

		// création d'une couche geoJson qui appelle le fichier "pts_culturel.geojson"													
		var a_culturel = $.getJSON("data/pts_culturel.geojson",function(dataA_culturel)
										// icone Clap	
										{var iconeCulture = L.icon({
													iconUrl: 'style/V2/culture.png',
													iconSize: [32, 32]
																	});
		// fonction pointToLayer qui ajoute la couche "projets" à la carte, selon la symbologie "iconeProjet", et paramètre la popup
		L.geoJson(dataA_culturel,{
			pointToLayer: function(feature,latlng){
				var marker = L.marker(latlng,{icon: iconeCulture});
				marker.bindPopup('<b>Animation patrimoine ' + feature.properties.theme + '</b><br>'
							   + "<b>Commune : </b>" + feature.properties.nom+ '<br>' 
							   + "<b>Nombre de répétition : </b>" + feature.properties.nb_real
							   );
				return marker;
				}
						});
										});	

		$.getJSON("data/pts.geojson",function(data_point){
			var styleIcon = L.icon({
			iconUrl: 'icon.png',
			iconSize: [15,20]
		});
			var data_point = L.geoJson(data_point,{
				pointToLayer: function(feature,latlng){
					var marker = L.marker(latlng,{icon: styleIcon});
					marker.bindPopup('Site name : ');
				return marker;
			}
		});
	});
		var clusters = L.markerClusterGroup();
		clusters.addLayer(data_point);
		map.addLayer(clusters);					
		//var a_markers = L.layerGroup([a_culturel, a_nat_histo, a_jeu, a_historic, a_nature ]);
		


		// création d'un contrôle des couches pour modifier les couches de fond de plan	
		var baseLayers = {
			"OpenStreetMap": osmLayer,
			"OSM_Géo2France" : osmG2FLayer
		};

		L.control.layers(baseLayers).addTo(map);

};