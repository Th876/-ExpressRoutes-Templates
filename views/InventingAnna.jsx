const React = require('react');

function Index(props) {
    const {annacasts} = props;

    return (
        <div>
            <h1 style={{color: "#ff99c8"}}>🎥 Inventing Anna</h1>
            <ul>
                {annacasts.map((annacast, i) => {
                    return(

                    <li key={i} style={{marginBottom: '10px'}}>
                        <b>Actor: </b>
                            {annacast.name} plays
                        {' '}
                        {annacast.character}. <br></br> 
                        <b>Occupation: </b>{annacast.occupation}.<br></br> 
                        <b>Did this character survive? </b>{annacast.survives? `Yes, this character is alive!` : `No, this character dies!`}
                        <br />
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

module.exports = Index;
