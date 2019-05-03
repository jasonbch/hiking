import React from "react"

const Hike = props => (
    <div className="hike__info">
        { props.error && <p className="hike__error">{ props.error }</p> }
        { props.name && <p className="hike__key"> Name: 
            <span className="hike__value"> { props.name }</span></p> }

        {/*
        { props.type && <p className="hike__key"> Type: <span>{ props.type }</span></p> }
        */}

        { props.summary && <p className="hike__key"> Summary: 
            <span className="hike__value"> { props.summary }</span></p> }
        { props.difficulty && <p className="hike__key"> Difficulty: 
            <span className="hike__value"> { props.difficulty }</span></p> }
        { props.stars && <p className="hike__key"> Stars: 
            <span className="hike__value"> { props.stars }</span></p> }

        {/*
        { props.starVotes && <p> StarVotes: { props.starVotes }</p> }
        */}

        { props.location && <p className="hike__key"> Location: 
            <span className="hike__value"> { props.location }</span></p> }

        {/*
        { props.url && <p> Website: { props.url }</p> }
        { props.imgSqSmall && <p>imgSqSmall: { props.imgSqSmall }</p> }
        { props.imgSmall && <p>imgSmall: { props.imgSmall }</p> }
        { props.imgSmallMed && <p>imgSmallMed: { props.imgSmallMed }</p> }
        { props.imgMedium && <p>imgMedium: { props.imgMedium }</p> }

        */}
        { props.length && <p className="hike__key"> Length:
            <span className="hike__value"> { props.length } miles</span></p> }
        {/*

        { props.ascent && <p> Ascent: { props.ascent }</p> }
        { props.descent && <p> Descent: { props.descent }</p> }
        { props.high && <p> High: { props.high }</p> }
        { props.low && <p> Low: { props.low }</p> }
        { props.longitude && <p> Longitude: { props.longitude }</p> }
        { props.latitude && <p> Latitude: { props.latitude }</p> }
        */}

        { props.conditionStatus && <p className="hike__key"> Condition Status: 
            <span className="hike__value"> { props.conditionStatus }</span></p> }
        { props.conditionDetails && <p className="hike__key"> Condition Details: 
            <span className="hike__value"> { props.conditionDetails }</span></p> }

        {/*
        { props.conditionDate && <p> Condition Date: { props.conditionDate }</p> }
        */}
    </div>
)

export default Hike