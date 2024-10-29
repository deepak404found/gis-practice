'use client';
import { selectMapView, setView } from "@gis-practice/states/reducres/mapReducer"
import { useDispatch, useSelector } from "react-redux"

export default function ActionPage() {
    const view = useSelector(selectMapView)
    const dispatch = useDispatch()
    return (
        <div
        style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }}
    >
        <button
                onClick={() => {
                    console.log(view.getCenter())
                    // dispatch(setView(
                    //         view.animate({
                    //             center: [82, 21],
                    //             zoom: 8,
                    //             duration: 2000,
                    //         })
                    //     ))
                }}
            >
                Zoom to CG
            </button>
            <button
                onClick={() => {
                    console.log(view)
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
    )
}