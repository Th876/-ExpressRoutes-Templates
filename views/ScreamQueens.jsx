const React = require('react');

function Index(props) {
    const {screamqueenscasts} = props;

    return (
        <div>
            <h1 style={{color: "#6a040f"}}>🎥 Scream Queens</h1>
            <ul>
                {screamqueenscasts.map((screamqueenscast, i) => {
                    return(

                    <li key={i} style={{marginBottom: '10px'}}>
                        <b>Actor: </b>
                            {screamqueenscast.name} plays
                        {' '}
                        {screamqueenscast.character}. <br></br> 
                        <b>Occupation: </b>{screamqueenscast.occupation}.<br></br> 
                        <b>Did this character survive? </b>{screamqueenscast.survives? `Yes, this character is alive!` : `No, this character dies!`}
                        <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

module.exports = Index;
