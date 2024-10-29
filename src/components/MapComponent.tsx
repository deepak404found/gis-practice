'use client';

import { selectMapView, setView } from '@gis-practice/states/reducres/mapReducer';
import { Map } from 'ol';
import GeoJSON from 'ol/format/GeoJSON';
import ImageLayer from 'ol/layer/Image';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import 'ol/ol.css';
import { ImageWMS, OSM } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MapComponent() {
    const infoRef = useRef<HTMLDivElement>(null);
    const source = new VectorSource({
        url: '/assets/data/geojson/india-osm.geojson',
        // url: "https://openlayers.org/data/vector/ecoregions.json",
        format: new GeoJSON(),
    });


    const imgLayer = new ImageLayer(
        {
            source: new ImageWMS({
                url: 'https://ahocevar.com/geoserver/wms',
                params: { 'LAYERS': 'topp:states' },
                serverType: 'geoserver',
            })
        }
    )

    const vectorLayer = new VectorLayer({
        source: source,
        style: {
            // 'fill-color': 'rgba(255, 255, 255, 0.6)',
            'stroke-width': 1,
            'stroke-color': '#319FD3',
            'circle-radius': 5,
            'circle-fill-color': 'rgba(255, 255, 255, 0.6)',
            'circle-stroke-width': 1,
            'circle-stroke-color': '#319FD3',
        },
    });

    const view = useSelector(selectMapView)
    const dispatch = useDispatch()

    useEffect(() => {
        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM(),
        })

        const map = new Map({
            target: "map",
            layers: [
                osmLayer,
                vectorLayer,
                imgLayer,
            ],
            view,
        });

        return () => map.setTarget(undefined);   
    }, [view]);

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            <div ref={infoRef} style={{ height: '500px', width: '100%' }} id="map" className="map-container" />
            <button
                onClick={() => {
                    console.log(view.getCenter())
                    // view.animate({
                    //     center: [82, 21],
                    //     zoom: 8,
                    //     duration: 2000,
                    // })
                }}
            >
                Zoom to CG
            </button>
            <button
                onClick={() => {
                    dispatch(setView(
                        view.animate({
                            center: [-100, 40],
                            zoom: 4,
                            duration: 2000,
                        })
                    ))
                }}
            >
                see the image layer
            </button>

        </div>
    );
}

export default MapComponent;