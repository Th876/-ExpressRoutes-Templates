const React = require('react');

function Index(props) {
    const {riverdalecasts} = props;

    return (
        <div>
            <h1 style={{color: "#6a040f"}}>🎥 Riverdale</h1>
            <ul>
                {riverdalecasts.map((riverdalecast, i) => {
                    return(

                    <li key={i} style={{marginBottom: '10px'}}>
                        <b>Actor: </b>
                            {riverdalecast.name} plays
                        {' '}
                        {riverdalecast.character}. <br></br> 
                        <b>Occupation: </b>{riverdalecast.occupation}.<br></br> 
                        <b>Did this character survive? </b>{riverdalecast.survives? `Yes, this character is alive!` : `No, this character dies!`}
                        <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

module.exports = Index;
